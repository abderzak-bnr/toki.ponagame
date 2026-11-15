/**
 * Toki Pona Gamified Learning Engine - Neo-Brutalist Cyber-Pop
 * Tailored for Arabic Speakers (RTL Layout with LTR Toki Pona)
 */

(function () {
  'use strict';

  // --- AUDIO SYNTHESIS & SFX ENGINE (Web Audio API - 100% Offline) ---
  let audioCtx = null;
  function getAudioContext() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  const SFX = {
    play(type) {
      if (!app.state.settings.soundEffects) return;
      try {
        const ctx = getAudioContext();
        if (!ctx) return;
        const now = ctx.currentTime;

        if (type === 'correct') {
          // Upbeat two-tone chime (E5 -> A5)
          const osc1 = ctx.createOscillator();
          const osc2 = ctx.createOscillator();
          const gain = ctx.createGain();

          osc1.type = 'triangle';
          osc2.type = 'triangle';
          osc1.frequency.setValueAtTime(659.25, now); // E5
          osc1.frequency.exponentialRampToValueAtTime(880, now + 0.15); // A5

          gain.gain.setValueAtTime(0.25, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

          osc1.connect(gain);
          osc2.connect(gain);
          gain.connect(ctx.destination);

          osc1.start(now);
          osc1.stop(now + 0.35);
        } else if (type === 'wrong') {
          // Low double buzz
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();

          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(160, now);
          osc.frequency.setValueAtTime(130, now + 0.12);

          gain.gain.setValueAtTime(0.2, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

          osc.connect(gain);
          gain.connect(ctx.destination);

          osc.start(now);
          osc.stop(now + 0.35);
        } else if (type === 'click') {
          // Subtle click
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();

          osc.type = 'sine';
          osc.frequency.setValueAtTime(450, now);
          osc.frequency.exponentialRampToValueAtTime(200, now + 0.05);

          gain.gain.setValueAtTime(0.15, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

          osc.connect(gain);
          gain.connect(ctx.destination);

          osc.start(now);
          osc.stop(now + 0.05);
        } else if (type === 'match') {
          // Sparkle match chime
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();

          osc.type = 'sine';
          osc.frequency.setValueAtTime(523.25, now); // C5
          osc.frequency.exponentialRampToValueAtTime(1046.5, now + 0.2); // C6

          gain.gain.setValueAtTime(0.2, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

          osc.connect(gain);
          gain.connect(ctx.destination);

          osc.start(now);
          osc.stop(now + 0.25);
        } else if (type === 'victory') {
          // Fanfare chord
          [523.25, 659.25, 783.99, 1046.5].forEach((freq, idx) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, now + idx * 0.08);

            gain.gain.setValueAtTime(0.2, now + idx * 0.08);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start(now + idx * 0.08);
            osc.stop(now + 0.8);
          });
        } else if (type === 'heart-loss') {
          // Descending warning chime
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(400, now);
          osc.frequency.linearRampToValueAtTime(200, now + 0.25);

          gain.gain.setValueAtTime(0.25, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

          osc.connect(gain);
          gain.connect(ctx.destination);

          osc.start(now);
          osc.stop(now + 0.25);
        }
      } catch (e) {
        console.warn('Web Audio error:', e);
      }
    }
  };

  // --- SPOKEN PRONUNCIATION (Authentic Linku Audio + Web Speech API Fallback) ---
  function playWordAudio(word, rate = 1.0) {
    if (!word) return;
    const cleanWord = word.trim().toLowerCase();

    // 1. Try Authentic Human Audio from Linku / kalaasi2023 or jlakuse
    const audioUrl = `https://raw.githubusercontent.com/lipu-linku/ijo/main/kalama/kalaasi2023/${encodeURIComponent(cleanWord)}.mp3`;
    const audio = new Audio(audioUrl);
    audio.playbackRate = rate;

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Fallback to jan Lakuse audio or Web Speech API
        const altUrl = `https://raw.githubusercontent.com/lipu-linku/ijo/main/kalama/jlakuse/${encodeURIComponent(cleanWord)}.mp3`;
        const altAudio = new Audio(altUrl);
        altAudio.playbackRate = rate;
        const altPromise = altAudio.play();

        if (altPromise !== undefined) {
          altPromise.catch(() => {
            playSpeechSynthesis(cleanWord, rate);
          });
        }
      });
    }
  }

  function playSpeechSynthesis(text, rate = 1.0) {
    if (!('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();
      // Phonetic adjustment for Toki Pona vowels and 'j' -> 'y' sound
      let phonetic = text.replace(/j/g, 'y');

      const utterance = new SpeechSynthesisUtterance(phonetic);
      utterance.lang = 'es-ES'; // Spanish 5 pure vowels match Toki Pona (a, e, i, o, u)
      utterance.rate = rate * 0.9;
      utterance.pitch = 1.0;

      const voices = window.speechSynthesis.getVoices();
      if (voices && voices.length) {
        const esVoice = voices.find(v => v.lang.startsWith('es')) || voices.find(v => v.lang.startsWith('it')) || voices[0];
        if (esVoice) utterance.voice = esVoice;
      }
      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.warn('Speech synthesis failed:', e);
    }
  }

  // --- SITELEN PONA SVG GLYPH RENDERER ---
  function getSitelenSvg(word) {
    if (!word) return '';
    const clean = word.trim().toLowerCase();
    const glyphData = window.SITELEN_GLYPHS && window.SITELEN_GLYPHS[clean];

    if (glyphData && glyphData.d) {
      return `<svg viewBox="${glyphData.viewBox}" class="sp-svg" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="${glyphData.d}" /></svg>`;
    }
    // Fallback if glyph not found
    return `<svg viewBox="0 0 100 100" class="sp-svg"><circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" stroke-width="8"/></svg>`;
  }

  // --- SUPABASE CONFIGURATION & CLIENT INITIALIZATION ---
  const SUPABASE_URL = 'https://lthggnfapmovwahqusbj.supabase.co';
  const SUPABASE_ANON_KEY = 'sb_publishable_xN4UA1ng2MQ_bIi9M0zAgw_9CdDJ4rV';

  let supabaseClient = null;
  function getSupabase() {
    if (!supabaseClient && window.supabase && typeof window.supabase.createClient === 'function') {
      try {
        supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
      } catch (err) {
        console.warn('Supabase initialization deferred or failed:', err);
      }
    }
    return supabaseClient;
  }

  // --- APP STATE & LOCALSTORAGE SAVE SYSTEM ---
  const STORAGE_KEY = 'tokipona_duolingo_save_v1';

  const defaultState = {
    xp: 0,
    streak: 1,
    hearts: 3,
    lastActiveDate: new Date().toISOString().split('T')[0],
    completedLessons: {}, // format: "unitId-lessonId": true
    unlockedUnits: [1],
    settings: {
      soundEffects: true,
      autoAudio: true,
      speechRate: 1.0
    }
  };

  const app = {
    data: window.TOKI_DATA,
    state: {},
    currentLessonSession: null,
    currentUser: null,
    isSyncing: false,
    lastSyncTime: null,

    async init() {
      // Synchronize unitId and lessonId in words dictionary from units curriculum
      if (this.data && this.data.units) {
        this.data.units.forEach(u => {
          u.lessons.forEach(l => {
            (l.words || []).forEach(wKey => {
              if (this.data.words && this.data.words[wKey]) {
                this.data.words[wKey].unitId = u.id;
                this.data.words[wKey].lessonId = l.id;
              }
            });
          });
        });
      }

      this.loadState();
      this.checkDailyStreak();
      this.bindEvents();
      this.renderHUD();
      this.renderSkillTree();
      this.initGlossary();
      this.initGrammarGuide();
      await this.initSupabaseAuth();
    },

    loadState() {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          this.state = Object.assign({}, defaultState, JSON.parse(saved));
        } else {
          this.state = JSON.parse(JSON.stringify(defaultState));
        }
      } catch (e) {
        console.error('Failed to load state from localStorage:', e);
        this.state = JSON.parse(JSON.stringify(defaultState));
      }
    },

    saveState() {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
      } catch (e) {
        console.error('Failed to save state to localStorage:', e);
      }
      if (this.currentUser) {
        this.syncProgressToCloud();
      }
    },

    resetProgress() {
      localStorage.removeItem(STORAGE_KEY);
      this.state = JSON.parse(JSON.stringify(defaultState));
      this.saveState();
      this.renderHUD();
      this.renderSkillTree();
      this.closeModal('settings-modal');
      alert('تم إعادة تعيين كل التقدم بنجاح! يمكنك الآن البدء من جديد.');
    },

    checkDailyStreak() {
      const today = new Date().toISOString().split('T')[0];
      const last = this.state.lastActiveDate;
      if (last) {
        const lastDate = new Date(last);
        const currDate = new Date(today);
        const diffDays = Math.round((currDate - lastDate) / (1000 * 60 * 60 * 24));

        if (diffDays === 1) {
          // Continued streak!
        } else if (diffDays > 1) {
          // Streak broken
          this.state.streak = 1;
        }
      }
      this.state.lastActiveDate = today;
      this.saveState();
    },

    isLessonCompleted(unitId, lessonId) {
      return !!this.state.completedLessons[`${unitId}-${lessonId}`];
    },

    isCheckpointCompleted(unitId) {
      return !!this.state.completedLessons[`${unitId}-checkpoint`];
    },

    isUnitLessonsCompleted(unitId) {
      const unit = this.data.units.find(u => u.id === unitId);
      if (!unit) return false;
      return unit.lessons.every(l => this.isLessonCompleted(unit.id, l.id));
    },

    isCheckpointUnlocked(unitId) {
      return this.isUnitLessonsCompleted(unitId);
    },

    isLessonUnlocked(unitId, lessonId) {
      // First lesson of Unit 1 is always unlocked
      if (unitId === 1 && lessonId === 1) return true;

      // In same unit, unlocked if previous lesson is completed
      if (lessonId > 1) {
        return this.isLessonCompleted(unitId, lessonId - 1);
      }

      // First lesson of unit N is unlocked if checkpoint of unit N-1 is completed (or all lessons of N-1 completed)
      if (unitId > 1 && lessonId === 1) {
        const prevUnit = this.data.units.find(u => u.id === unitId - 1);
        if (!prevUnit) return false;
        return this.isCheckpointCompleted(prevUnit.id) || prevUnit.lessons.every(l => this.isLessonCompleted(prevUnit.id, l.id));
      }

      return false;
    },

    // --- HUD RENDERING ---
    renderHUD() {
      document.getElementById('hud-xp-count').textContent = this.state.xp;
      document.getElementById('hud-streak-count').textContent = this.state.streak;
      document.getElementById('hud-hearts-count').textContent = this.state.hearts;
    },

    // --- SKILL TREE RENDERING ---
    renderSkillTree() {
      const container = document.getElementById('skill-tree-content');
      container.innerHTML = '';

      this.data.units.forEach((unit) => {
        const unitSection = document.createElement('section');
        unitSection.className = 'unit-section';
        unitSection.style.setProperty('--unit-color', unit.color || 'var(--accent-lime)');

        // Unit Banner
        const banner = document.createElement('div');
        banner.className = 'unit-banner';
        banner.innerHTML = `
          <div class="unit-banner-top">
            <div style="display: flex; align-items: center; gap: 8px;">
              <span class="unit-number-tag">${unit.title}</span>
              <button class="unit-grammar-btn" data-unit="${unit.id}" title="شرح قواعد ${unit.title}">
                <span>📖</span> شرح القواعد
              </button>
            </div>
            <span class="unit-icon">${unit.icon || '📘'}</span>
          </div>
          <h2 class="unit-title">${unit.subtitle}</h2>
          <p class="unit-desc">${unit.description}</p>
        `;

        const grammarBtn = banner.querySelector('.unit-grammar-btn');
        if (grammarBtn) {
          grammarBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            SFX.play('click');
            this.openGrammarGuide(unit.id);
          });
        }

        unitSection.appendChild(banner);

        // Lesson Path
        const path = document.createElement('div');
        path.className = 'lesson-path';

        unit.lessons.forEach((lesson, index) => {
          const isCompleted = this.isLessonCompleted(unit.id, lesson.id);
          const isUnlocked = this.isLessonUnlocked(unit.id, lesson.id);
          const isActive = isUnlocked && !isCompleted;

          const nodeWrapper = document.createElement('div');
          const posClass = `pos-${index % 4}`;
          let statusClass = 'locked';
          if (isCompleted) statusClass = 'completed';
          else if (isActive) statusClass = 'active';

          nodeWrapper.className = `lesson-node-wrapper ${posClass} ${statusClass}`;

          // Choose glyph for node: use first word of lesson
          const firstWord = lesson.words[0] || 'pona';
          const glyphSvg = getSitelenSvg(firstWord);

          nodeWrapper.innerHTML = `
            <button class="lesson-node-btn" data-unit="${unit.id}" data-lesson="${lesson.id}" ${!isUnlocked ? 'disabled' : ''}>
              <div class="node-icon-svg">${glyphSvg}</div>
              ${isCompleted ? '<span class="node-star-badge">★</span>' : ''}
              ${!isUnlocked ? '<span class="node-star-badge" style="background:#27272A">🔒</span>' : ''}
            </button>
            <span class="node-title-label">${lesson.title}</span>
          `;

          const btn = nodeWrapper.querySelector('.lesson-node-btn');
          if (isUnlocked) {
            btn.addEventListener('click', () => {
              SFX.play('click');
              this.startLesson(unit.id, lesson.id);
            });
          }

          path.appendChild(nodeWrapper);
        });

        // Unit Checkpoint / Boss Test Node
        const isCpUnlocked = this.isCheckpointUnlocked(unit.id);
        const isCpDone = this.isCheckpointCompleted(unit.id);
        const isCpActive = isCpUnlocked && !isCpDone;

        const cpWrapper = document.createElement('div');
        let cpStatus = 'locked';
        if (isCpDone) cpStatus = 'completed';
        else if (isCpActive) cpStatus = 'active';

        cpWrapper.className = `lesson-node-wrapper checkpoint-node-wrapper pos-checkpoint ${cpStatus}`;
        cpWrapper.innerHTML = `
          <button class="lesson-node-btn checkpoint-node-btn" data-unit="${unit.id}" ${!isCpUnlocked ? 'disabled' : ''} title="اختبار نهاية ${unit.title}">
            <div class="node-icon-svg checkpoint-trophy-svg">🏆</div>
            ${isCpDone ? '<span class="node-star-badge gold-star">★</span>' : ''}
            ${!isCpUnlocked ? '<span class="node-star-badge" style="background:#27272A">🔒</span>' : ''}
          </button>
          <span class="node-title-label checkpoint-title-label">🏆 اختبار الوحدة</span>
        `;

        const cpBtn = cpWrapper.querySelector('.checkpoint-node-btn');
        if (isCpUnlocked) {
          cpBtn.addEventListener('click', () => {
            SFX.play('click');
            this.startCheckpoint(unit.id);
          });
        }
        path.appendChild(cpWrapper);

        unitSection.appendChild(path);
        container.appendChild(unitSection);
      });
    },

    // --- LESSON SESSION GENERATOR & STATE MACHINE ---
    startLesson(unitId, lessonId) {
      const unit = this.data.units.find(u => u.id === unitId);
      if (!unit) return;
      const lesson = unit.lessons.find(l => l.id === lessonId);
      if (!lesson) return;

      // Start session with fresh 3 hearts
      const session = {
        unit,
        lesson,
        hearts: 3,
        currentIndex: 0,
        questions: this.generateLessonQuestions(unit, lesson),
        mistakesCount: 0,
        isAnswerChecked: false
      };

      this.currentLessonSession = session;
      this.openLessonArena();
      this.renderCurrentQuestion();
    },

    startCheckpoint(unitId) {
      const unit = this.data.units.find(u => u.id === unitId);
      if (!unit) return;

      const session = {
        unit,
        lesson: {
          id: 'checkpoint',
          title: `🏆 اختبار نهاية ${unit.title}`,
          xpReward: 50,
          isCheckpoint: true
        },
        hearts: 3,
        currentIndex: 0,
        questions: this.generateCheckpointQuestions(unit),
        mistakesCount: 0,
        isAnswerChecked: false
      };

      this.currentLessonSession = session;
      this.openLessonArena();
      this.renderCurrentQuestion();
    },

    generateCheckpointQuestions(unit) {
      const questions = [];
      const unitWords = unit.lessons.flatMap(l => l.words || []);
      const unitSentences = unit.lessons.flatMap(l => l.sentences || []);

      // 1. Multiple Choice Questions (4 questions)
      const mcWordKeys = [...unitWords];
      shuffleArray(mcWordKeys);
      mcWordKeys.slice(0, 4).forEach(wordKey => {
        const wordObj = this.data.words[wordKey];
        if (!wordObj) return;

        const allKeys = Object.keys(this.data.words).filter(k => k !== wordKey);
        shuffleArray(allKeys);
        const distractors = allKeys.slice(0, 3).map(k => this.data.words[k].ar);

        const options = [
          { text: wordObj.ar, isCorrect: true, word: wordObj },
          { text: distractors[0], isCorrect: false },
          { text: distractors[1], isCorrect: false },
          { text: distractors[2], isCorrect: false }
        ];
        shuffleArray(options);

        questions.push({
          type: 'mc_word_to_ar',
          promptWord: wordObj,
          options,
          correctWord: wordObj
        });
      });

      // 2. Listening Challenges (3 questions)
      const listenWordKeys = [...unitWords];
      shuffleArray(listenWordKeys);
      listenWordKeys.slice(0, 3).forEach(wordKey => {
        const wordObj = this.data.words[wordKey];
        if (!wordObj) return;

        const allKeys = Object.keys(this.data.words).filter(k => k !== wordKey);
        shuffleArray(allKeys);
        const distractors = allKeys.slice(0, 3).map(k => this.data.words[k]);

        const options = [
          { text: wordObj.word, sub: wordObj.ar, isCorrect: true, word: wordObj },
          { text: distractors[0].word, sub: distractors[0].ar, isCorrect: false, word: distractors[0] },
          { text: distractors[1].word, sub: distractors[1].ar, isCorrect: false, word: distractors[1] },
          { text: distractors[2].word, sub: distractors[2].ar, isCorrect: false, word: distractors[2] }
        ];
        shuffleArray(options);

        questions.push({
          type: 'listening',
          targetWord: wordObj,
          options
        });
      });

      // 3. Word Bank Sentence Builders (3 questions)
      const sents = [...unitSentences];
      shuffleArray(sents);
      const builderSents = sents.slice(0, 3);
      builderSents.forEach(sent => {
        const tpTokens = sent.tp.split(' ').map(s => s.replace(/[!?.,]/g, '').trim()).filter(Boolean);
        const allKeys = Object.keys(this.data.words).filter(k => !tpTokens.includes(k));
        shuffleArray(allKeys);
        const distractorTokens = allKeys.slice(0, 3);
        const chipPool = [...tpTokens, ...distractorTokens];
        shuffleArray(chipPool);

        questions.push({
          type: 'sentence_builder',
          arabicPrompt: sent.ar,
          correctTokens: tpTokens,
          fullSentence: sent.tp,
          chipPool: chipPool.map((token, id) => ({ id: `${token}-${id}`, token }))
        });
      });

      // 4. Match Pairs (1 challenge of 4 pairs)
      if (unitWords.length >= 4) {
        const pairWords = [...unitWords];
        shuffleArray(pairWords);
        questions.push({
          type: 'match_pairs',
          pairs: pairWords.slice(0, 4).map(k => this.data.words[k])
        });
      }

      // 5. Active Typing Challenges (3 questions covering unit sentences)
      const typingPool = sents.length > 3 ? sents.slice(3) : sents;
      shuffleArray(typingPool);
      const typingSents = typingPool.slice(0, Math.min(4, Math.max(3, typingPool.length)));
      typingSents.forEach(sent => {
        questions.push({
          type: 'active_typing',
          arabicPrompt: sent.ar,
          fullSentence: sent.tp
        });
      });

      return questions;
    },

    generateLessonQuestions(unit, lesson) {
      const questions = [];
      const lessonWords = lesson.words;

      // 1. Intro Cards for all lesson words
      lessonWords.forEach(wordKey => {
        const wordObj = this.data.words[wordKey];
        if (wordObj) {
          questions.push({
            type: 'intro',
            word: wordObj
          });
        }
      });

      // 1.5 Interactive Grammar Intro Cards (Before Exercises)
      if (lesson.grammarIntroIds && lesson.grammarIntroIds.length > 0 && this.data.grammarGuide) {
        lesson.grammarIntroIds.forEach(ruleId => {
          const ruleObj = this.data.grammarGuide.find(r => r.id === ruleId);
          if (ruleObj) {
            questions.push({
              type: 'grammar_intro',
              rule: ruleObj
            });
          }
        });
      }

      // 2. Multiple Choice (Glyph + Word -> Arabic)
      lessonWords.forEach(wordKey => {
        const wordObj = this.data.words[wordKey];
        if (!wordObj) return;

        // Pick 3 random distractor words from all words
        const allKeys = Object.keys(this.data.words).filter(k => k !== wordKey);
        shuffleArray(allKeys);
        const distractors = allKeys.slice(0, 3).map(k => this.data.words[k].ar);

        const options = [
          { text: wordObj.ar, isCorrect: true, word: wordObj },
          { text: distractors[0], isCorrect: false },
          { text: distractors[1], isCorrect: false },
          { text: distractors[2], isCorrect: false }
        ];
        shuffleArray(options);

        questions.push({
          type: 'mc_word_to_ar',
          promptWord: wordObj,
          options,
          correctWord: wordObj
        });
      });

      // 3. Listening Challenge
      lessonWords.slice(0, 2).forEach(wordKey => {
        const wordObj = this.data.words[wordKey];
        if (!wordObj) return;

        const allKeys = Object.keys(this.data.words).filter(k => k !== wordKey);
        shuffleArray(allKeys);
        const distractors = allKeys.slice(0, 3).map(k => this.data.words[k]);

        const options = [
          { text: wordObj.word, sub: wordObj.ar, isCorrect: true, word: wordObj },
          { text: distractors[0].word, sub: distractors[0].ar, isCorrect: false, word: distractors[0] },
          { text: distractors[1].word, sub: distractors[1].ar, isCorrect: false, word: distractors[1] },
          { text: distractors[2].word, sub: distractors[2].ar, isCorrect: false, word: distractors[2] }
        ];
        shuffleArray(options);

        questions.push({
          type: 'listening',
          targetWord: wordObj,
          options
        });
      });

      // 4. Word Bank Sentence Builder
      const lessonSentences = lesson.sentences || [];
      const builderSentences = lessonSentences.slice(0, Math.max(1, lessonSentences.length - 2));

      if (builderSentences.length > 0) {
        builderSentences.forEach(sent => {
          const tpTokens = sent.tp.split(' ').map(s => s.replace(/[!?.,]/g, '').trim()).filter(Boolean);
          // Pick 3 distractor words
          const allKeys = Object.keys(this.data.words).filter(k => !tpTokens.includes(k));
          shuffleArray(allKeys);
          const distractorTokens = allKeys.slice(0, 3);

          const chipPool = [...tpTokens, ...distractorTokens];
          shuffleArray(chipPool);

          questions.push({
            type: 'sentence_builder',
            arabicPrompt: sent.ar,
            correctTokens: tpTokens,
            fullSentence: sent.tp,
            chipPool: chipPool.map((token, id) => ({ id: `${token}-${id}`, token }))
          });
        });
      }

      // 5. Match Pairs (Speed Matching 4 pairs)
      if (lessonWords.length >= 4) {
        const matchWords = lessonWords.slice(0, 4).map(k => this.data.words[k]);
        questions.push({
          type: 'match_pairs',
          pairs: matchWords
        });
      }

      // 6. Active Typing Challenge at the end of every lesson (final 1-2 questions)
      const typingSentences = lessonSentences.length >= 2
        ? lessonSentences.slice(-2)
        : (lessonSentences.length === 1 ? lessonSentences : []);

      if (typingSentences.length > 0) {
        typingSentences.forEach(sent => {
          questions.push({
            type: 'active_typing',
            arabicPrompt: sent.ar,
            fullSentence: sent.tp
          });
        });
      } else if (lessonWords.length > 0) {
        const firstWordObj = this.data.words[lessonWords[0]];
        if (firstWordObj) {
          questions.push({
            type: 'active_typing',
            arabicPrompt: firstWordObj.ar,
            fullSentence: firstWordObj.word
          });
        }
      }

      return questions;
    },

    openLessonArena() {
      const arena = document.getElementById('lesson-arena-modal');
      arena.style.display = 'flex';
      this.updateArenaHearts();
      this.updateArenaProgress();
    },

    closeLessonArena() {
      if (confirm('هل تريد بالتأكيد الخروج من الدرس؟ سيتم فقد تقدم هذا الدرس.')) {
        document.getElementById('lesson-arena-modal').style.display = 'none';
        this.currentLessonSession = null;
      }
    },

    updateArenaHearts() {
      const session = this.currentLessonSession;
      if (!session) return;
      document.getElementById('arena-hearts-count').textContent = '❤️'.repeat(session.hearts) || '💔';
    },

    updateArenaProgress() {
      const session = this.currentLessonSession;
      if (!session) return;
      const pct = Math.round((session.currentIndex / session.questions.length) * 100);
      document.getElementById('arena-progress-bar').style.width = `${pct}%`;
    },

    renderCurrentQuestion() {
      const session = this.currentLessonSession;
      if (!session) return;

      const q = session.questions[session.currentIndex];
      const body = document.getElementById('arena-question-mount');
      body.innerHTML = '';
      this.resetFooterBar();

      if (!q) {
        this.completeLessonSession();
        return;
      }

      session.isAnswerChecked = false;
      this.updateArenaProgress();

      if (q.type === 'intro') {
        this.renderIntroQuestion(q, body);
      } else if (q.type === 'grammar_intro') {
        this.renderGrammarIntroQuestion(q, body);
      } else if (q.type === 'mc_word_to_ar') {
        this.renderMultipleChoiceQuestion(q, body);
      } else if (q.type === 'sentence_builder') {
        this.renderSentenceBuilderQuestion(q, body);
      } else if (q.type === 'match_pairs') {
        this.renderMatchPairsQuestion(q, body);
      } else if (q.type === 'listening') {
        this.renderListeningQuestion(q, body);
      } else if (q.type === 'active_typing') {
        this.renderActiveTypingQuestion(q, body);
      }
    },

    // 1. New Word Intro Card
    renderIntroQuestion(q, mount) {
      const w = q.word;
      const glyphSvg = getSitelenSvg(w.word);

      const card = document.createElement('div');
      card.className = 'exercise-container';
      card.innerHTML = `
        <div class="intro-card">
          <span class="intro-badge">كلمة جديدة ✨</span>
          <div class="intro-glyph-box">${glyphSvg}</div>
          <div class="intro-word-latin toki-text">${w.word}</div>
          <div class="intro-phonetic">النطق: [ ${w.phonetic} ]</div>
          <div class="intro-arabic-meaning">${w.ar}</div>
          <button class="intro-audio-btn" id="intro-audio-trigger">
            <span>🔊</span> استمع للنطق
          </button>
          <div class="intro-hint">${w.hint}</div>
          ${w.example ? `
            <div class="intro-example-box">
              <span style="font-size:11px; color:var(--text-muted);">مثال تطبيقي:</span>
              <div class="intro-example-tp">${w.example.tp}</div>
              <div class="intro-example-ar">${w.example.ar}</div>
            </div>
          ` : ''}
        </div>
      `;

      mount.appendChild(card);

      const audioBtn = card.querySelector('#intro-audio-trigger');
      audioBtn.addEventListener('click', () => {
        playWordAudio(w.word);
      });

      // Auto play pronunciation on card appear
      if (this.state.settings.autoAudio) {
        setTimeout(() => playWordAudio(w.word), 300);
      }

      // Check button becomes "متابعة"
      this.enableCheckButton('متابعة', () => {
        SFX.play('click');
        sessionNextQuestion();
      });
    },

    // 1.5 Interactive Grammar Intro Card (Before Exercises)
    renderGrammarIntroQuestion(q, mount) {
      const rule = q.rule;
      if (!rule) {
        sessionNextQuestion();
        return;
      }

      const container = document.createElement('div');
      container.className = 'exercise-container';

      const examplesHtml = rule.examples.slice(0, 2).map(ex => {
        const tokens = ex.tp.split(' ');
        const glyphsHtml = tokens.slice(0, 3).map(t => {
          const clean = t.replace(/[!?.,]/g, '').trim().toLowerCase();
          return `<span class="example-glyph-icon">${getSitelenSvg(clean)}</span>`;
        }).join('');

        return `
          <div class="grammar-example-item">
            <div class="example-main-row">
              <div class="example-tp-group">
                ${glyphsHtml}
                <span class="example-tp toki-text">${ex.tp}</span>
              </div>
              <button class="example-audio-btn" data-audio="${ex.tp}" title="استمع للنطق">🔊</button>
            </div>
            <div class="example-ar">${ex.ar}</div>
            ${ex.hint ? `<div class="example-subhint">${ex.hint}</div>` : ''}
          </div>
        `;
      }).join('');

      container.innerHTML = `
        <div class="grammar-intro-card">
          <span class="grammar-badge">📐 قاعدة نحوية ذهبية</span>
          <h2 class="grammar-title">${rule.title}</h2>
          <div class="grammar-subtitle">${rule.subtitle}</div>

          <div class="grammar-explanation-box">
            ${rule.explanation.map(p => `<p class="grammar-p">${p}</p>`).join('')}
          </div>

          <div class="grammar-formula-card">
            <div class="formula-header">الصيغة التركيبية:</div>
            <div class="formula-code">${rule.formula}</div>
            <div class="formula-hint">${rule.formulaExplanation}</div>
          </div>

          <div class="grammar-examples-section">
            <div class="examples-header">أمثلة تطبيقية مع النطق:</div>
            <div class="grammar-examples-list">
              ${examplesHtml}
            </div>
          </div>

          ${rule.warning ? `
            <div class="grammar-warning-box">
              <span class="warning-icon">⚠️</span>
              <span>${rule.warning}</span>
            </div>
          ` : ''}

          <button class="grammar-continue-btn" id="grammar-card-got-it">
            فهمت، لنكمل ✨
          </button>
        </div>
      `;

      mount.appendChild(container);

      // Attach audio buttons
      container.querySelectorAll('.example-audio-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          SFX.play('click');
          playSpeechSynthesis(btn.dataset.audio, 0.95);
        });
      });

      // Advance handler
      const advance = () => {
        SFX.play('click');
        sessionNextQuestion();
      };

      const cardGotItBtn = container.querySelector('#grammar-card-got-it');
      if (cardGotItBtn) cardGotItBtn.addEventListener('click', advance);

      // Activate bottom footer button with "فهمت، لنكمل ✨"
      this.enableCheckButton('فهمت، لنكمل ✨', advance);
    },

    // 2. Multiple Choice Question
    renderMultipleChoiceQuestion(q, mount) {
      const w = q.promptWord;
      const glyphSvg = getSitelenSvg(w.word);

      const container = document.createElement('div');
      container.className = 'exercise-container';
      container.innerHTML = `
        <div class="exercise-prompt-title">اختر المعنى العربي الصحيح لهذه الكلمة:</div>
        <div class="mc-prompt-box">
          <div class="mc-prompt-main">
            <div class="mc-prompt-glyph">${glyphSvg}</div>
            <div class="mc-prompt-text toki-text">${w.word}</div>
          </div>
          <button class="hud-btn" id="mc-audio-btn" title="استمع">🔊</button>
        </div>
        <div class="mc-options-grid" id="mc-options-grid"></div>
      `;

      mount.appendChild(container);

      container.querySelector('#mc-audio-btn').addEventListener('click', () => {
        playWordAudio(w.word);
      });

      let selectedOption = null;
      const grid = container.querySelector('#mc-options-grid');

      q.options.forEach((opt, idx) => {
        const card = document.createElement('button');
        card.className = 'mc-option-card';
        card.innerHTML = `
          <span class="mc-option-index">${idx + 1}</span>
          <div class="mc-option-content">
            <span class="mc-option-main">${opt.text}</span>
          </div>
        `;

        card.addEventListener('click', () => {
          if (this.currentLessonSession.isAnswerChecked) return;
          SFX.play('click');

          grid.querySelectorAll('.mc-option-card').forEach(c => c.classList.remove('selected'));
          card.classList.add('selected');
          selectedOption = opt;

          this.enableCheckButton('تحقق', () => {
            this.handleAnswerCheck(selectedOption.isCorrect, w.ar, w.hint);
            if (selectedOption.isCorrect) {
              card.classList.add('correct');
            } else {
              card.classList.add('wrong');
            }
          });
        });

        grid.appendChild(card);
      });
    },

    // 3. Sentence Builder (Duolingo signature chip mechanic)
    renderSentenceBuilderQuestion(q, mount) {
      const container = document.createElement('div');
      container.className = 'exercise-container';
      container.innerHTML = `
        <div class="exercise-prompt-title">قم بتركيب هذه الجملة بلغة توكي بونا:</div>
        <div class="builder-target-box">
          <span class="builder-prompt-sentence">${q.arabicPrompt}</span>
          <button class="builder-audio-trigger" id="builder-audio-play" title="استمع للجملة">🔊</button>
        </div>
        <div class="builder-answer-zone" id="builder-answer-zone"></div>
        <div class="builder-bank-zone" id="builder-bank-zone"></div>
      `;

      mount.appendChild(container);

      container.querySelector('#builder-audio-play').addEventListener('click', () => {
        playSpeechSynthesis(q.fullSentence, 0.9);
      });

      const answerZone = container.querySelector('#builder-answer-zone');
      const bankZone = container.querySelector('#builder-bank-zone');

      const placedTokens = [];

      const renderChips = () => {
        answerZone.innerHTML = '';
        placedTokens.forEach((item, index) => {
          const chip = document.createElement('button');
          chip.className = 'word-chip in-answer';
          chip.innerHTML = `
            <span class="chip-glyph">${getSitelenSvg(item.token)}</span>
            <span>${item.token}</span>
          `;
          chip.addEventListener('click', () => {
            if (this.currentLessonSession.isAnswerChecked) return;
            SFX.play('click');
            // Remove from placed tokens and return to bank
            placedTokens.splice(index, 1);
            renderChips();
          });
          answerZone.appendChild(chip);
        });

        bankZone.innerHTML = '';
        q.chipPool.forEach(item => {
          const isPlaced = placedTokens.some(p => p.id === item.id);
          const chip = document.createElement('button');
          chip.className = `word-chip ${isPlaced ? 'disabled' : ''}`;
          chip.innerHTML = `
            <span class="chip-glyph">${getSitelenSvg(item.token)}</span>
            <span>${item.token}</span>
          `;
          if (!isPlaced) {
            chip.addEventListener('click', () => {
              if (this.currentLessonSession.isAnswerChecked) return;
              SFX.play('click');
              placedTokens.push(item);
              playWordAudio(item.token);
              renderChips();
            });
          }
          bankZone.appendChild(chip);
        });

        // Enable check button if at least one token is placed
        if (placedTokens.length > 0) {
          this.enableCheckButton('تحقق', () => {
            const userTokens = placedTokens.map(p => p.token);
            const userSentence = userTokens.join(' ');
            const correctSentence = q.correctTokens.join(' ');
            const isCorrect = userSentence.trim() === correctSentence.trim();

            let tipText = `الترتيب الصحيح هو: "${q.fullSentence}"`;
            if (!isCorrect) {
              const smartHint = analyzeGrammarMistake(userTokens, q.correctTokens, q.fullSentence, q.arabicPrompt);
              if (smartHint) {
                tipText = smartHint;
              }
            }
            this.handleAnswerCheck(isCorrect, q.fullSentence, tipText);
          });
        } else {
          this.disableCheckButton();
        }
      };

      renderChips();
    },

    // 4. Match Pairs (Speed matching)
    renderMatchPairsQuestion(q, mount) {
      const container = document.createElement('div');
      container.className = 'exercise-container';
      container.innerHTML = `
        <div class="exercise-prompt-title">قم بمطابقة الكلمات مع معانيها الصحيحة:</div>
        <div class="matching-grid">
          <div class="match-column" id="match-col-tp"></div>
          <div class="match-column" id="match-col-ar"></div>
        </div>
      `;

      mount.appendChild(container);

      const colTp = container.querySelector('#match-col-tp');
      const colAr = container.querySelector('#match-col-ar');

      const tpItems = [...q.pairs];
      const arItems = [...q.pairs];
      shuffleArray(tpItems);
      shuffleArray(arItems);

      let selectedTp = null;
      let selectedAr = null;
      let matchedCount = 0;

      const checkMatchPair = () => {
        if (!selectedTp || !selectedAr) return;

        const tpKey = selectedTp.dataset.word;
        const arKey = selectedAr.dataset.word;

        if (tpKey === arKey) {
          // Correct match!
          SFX.play('match');
          selectedTp.classList.remove('selected');
          selectedAr.classList.remove('selected');
          selectedTp.classList.add('matched', 'locked');
          selectedAr.classList.add('matched', 'locked');
          matchedCount++;

          selectedTp = null;
          selectedAr = null;

          if (matchedCount === q.pairs.length) {
            // All matched!
            this.handleAnswerCheck(true, 'تمت مطابقة جميع الكلمات بنجاح!');
          }
        } else {
          // Mismatch
          SFX.play('wrong');
          const el1 = selectedTp;
          const el2 = selectedAr;
          el1.classList.add('mismatch');
          el2.classList.add('mismatch');

          setTimeout(() => {
            el1.classList.remove('mismatch', 'selected');
            el2.classList.remove('mismatch', 'selected');
          }, 450);

          selectedTp = null;
          selectedAr = null;
        }
      };

      tpItems.forEach(w => {
        const card = document.createElement('button');
        card.className = 'match-item-card';
        card.dataset.word = w.word;
        card.innerHTML = `
          <div class="match-glyph-icon">${getSitelenSvg(w.word)}</div>
          <span class="match-text-tp">${w.word}</span>
        `;
        card.addEventListener('click', () => {
          if (card.classList.contains('locked')) return;
          SFX.play('click');
          playWordAudio(w.word);

          colTp.querySelectorAll('.match-item-card').forEach(c => c.classList.remove('selected'));
          card.classList.add('selected');
          selectedTp = card;
          checkMatchPair();
        });
        colTp.appendChild(card);
      });

      arItems.forEach(w => {
        const card = document.createElement('button');
        card.className = 'match-item-card';
        card.dataset.word = w.word;
        card.innerHTML = `
          <span class="match-text-ar">${w.ar}</span>
        `;
        card.addEventListener('click', () => {
          if (card.classList.contains('locked')) return;
          SFX.play('click');

          colAr.querySelectorAll('.match-item-card').forEach(c => c.classList.remove('selected'));
          card.classList.add('selected');
          selectedAr = card;
          checkMatchPair();
        });
        colAr.appendChild(card);
      });
    },

    // 5. Listening Challenge
    renderListeningQuestion(q, mount) {
      const target = q.targetWord;

      const container = document.createElement('div');
      container.className = 'exercise-container';
      container.innerHTML = `
        <div class="exercise-prompt-title">استمع واختر الكلمة التي سمعتها:</div>
        <div class="listening-center-box">
          <div class="listening-triggers-row">
            <button class="listening-big-audio-btn" id="listening-play-normal" title="استماع عادي">🔊</button>
            <button class="listening-slow-btn" id="listening-play-slow" title="استماع بطيء (سلحفاة)">🐢</button>
          </div>
          <span style="font-size:13px; color:var(--text-muted);">اضغط للاستماع بالنطق البشري الأصلي</span>
        </div>
        <div class="mc-options-grid" id="listening-options-grid"></div>
      `;

      mount.appendChild(container);

      const playNormal = () => playWordAudio(target.word, 1.0);
      const playSlow = () => playWordAudio(target.word, 0.6);

      container.querySelector('#listening-play-normal').addEventListener('click', playNormal);
      container.querySelector('#listening-play-slow').addEventListener('click', playSlow);

      // Autoplay on load
      if (this.state.settings.autoAudio) {
        setTimeout(playNormal, 300);
      }

      let selectedOption = null;
      const grid = container.querySelector('#listening-options-grid');

      q.options.forEach((opt, idx) => {
        const card = document.createElement('button');
        card.className = 'mc-option-card';
        card.innerHTML = `
          <span class="mc-option-index">${idx + 1}</span>
          <div class="mc-option-glyph-preview">${getSitelenSvg(opt.word.word)}</div>
          <div class="mc-option-content">
            <span class="mc-option-main toki-text">${opt.text}</span>
            <span class="mc-option-sub">${opt.sub}</span>
          </div>
        `;

        card.addEventListener('click', () => {
          if (this.currentLessonSession.isAnswerChecked) return;
          SFX.play('click');

          grid.querySelectorAll('.mc-option-card').forEach(c => c.classList.remove('selected'));
          card.classList.add('selected');
          selectedOption = opt;

          this.enableCheckButton('تحقق', () => {
            this.handleAnswerCheck(selectedOption.isCorrect, target.word, `${target.word} تعني: ${target.ar}`);
            if (selectedOption.isCorrect) {
              card.classList.add('correct');
            } else {
              card.classList.add('wrong');
            }
          });
        });

        grid.appendChild(card);
      });
    },

    // 6. Active Typing Challenge (Using Native Keyboard)
    renderActiveTypingQuestion(q, mount) {
      const container = document.createElement('div');
      container.className = 'exercise-container active-typing-container';
      container.innerHTML = `
        <div class="exercise-prompt-title">اكتب الترجمة بلغة توكي بونا:</div>
        <div class="builder-target-box">
          <span class="builder-prompt-sentence">${q.arabicPrompt}</span>
          <button class="builder-audio-trigger" id="typing-audio-play" title="استمع للنطق">🔊</button>
        </div>
        <div class="typing-input-wrapper">
          <input type="text"
                 class="typing-input"
                 id="active-typing-input"
                 dir="ltr"
                 autocapitalize="none"
                 autocomplete="off"
                 autocorrect="off"
                 spellcheck="false"
                 placeholder="اكتب هنا بالتوكي بونا..." />
        </div>
        <div class="typing-hint-note">
          💡 <strong>ملاحظة:</strong> تُكتب جميع كلمات توكي بونا بالأحرف الصغيرة فقط (لا توجد أحرف كبيرة في اللغة).
        </div>
      `;

      mount.appendChild(container);

      const audioBtn = container.querySelector('#typing-audio-play');
      if (audioBtn) {
        audioBtn.addEventListener('click', () => {
          playSpeechSynthesis(q.fullSentence, 0.9);
        });
      }

      const input = container.querySelector('#active-typing-input');
      setTimeout(() => input.focus(), 150);

      // Force lowercase automatically while typing
      input.addEventListener('input', (e) => {
        const val = e.target.value.toLowerCase();
        if (e.target.value !== val) {
          e.target.value = val;
        }
        if (val.trim().length > 0) {
          this.enableCheckButton('تحقق', () => this.checkActiveTypingAnswer(input.value, q));
        } else {
          this.disableCheckButton();
        }
      });

      // Allow Enter key to submit
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !this.currentLessonSession.isAnswerChecked) {
          e.preventDefault();
          if (input.value.trim().length > 0) {
            this.checkActiveTypingAnswer(input.value, q);
          }
        }
      });
    },

    checkActiveTypingAnswer(userText, q) {
      const isCorrect = areTokiPonaSentencesEqual(userText, q.fullSentence);
      let tip = `الكتابة الصحيحة هي: "${q.fullSentence}"`;
      if (!isCorrect) {
        const userTokens = normalizeTokiPonaInput(userText).split(' ');
        const correctTokens = normalizeTokiPonaInput(q.fullSentence).split(' ');
        const smartHint = analyzeGrammarMistake(userTokens, correctTokens, q.fullSentence, q.arabicPrompt);
        if (smartHint) {
          tip = smartHint;
        }
      }
      this.handleAnswerCheck(isCorrect, q.fullSentence, tip);
    },

    // --- ANSWER CHECKING & FOOTER BAR LOGIC ---
    handleAnswerCheck(isCorrect, correctAnswerText, tipText) {
      const session = this.currentLessonSession;
      if (!session || session.isAnswerChecked) return;

      session.isAnswerChecked = true;
      const footer = document.getElementById('arena-footer-bar');
      const feedbackIcon = document.getElementById('footer-feedback-icon');
      const feedbackTitle = document.getElementById('footer-feedback-title');
      const feedbackDesc = document.getElementById('footer-feedback-desc');
      const actionBtn = document.getElementById('arena-action-btn');

      if (isCorrect) {
        SFX.play('correct');
        footer.className = 'arena-footer correct';
        feedbackIcon.textContent = '✓';
        feedbackTitle.textContent = 'رائع! إجابة صحيحة';
        feedbackDesc.textContent = tipText || 'أحسنت صنعاً، استمر في التقدم!';

        actionBtn.disabled = false;
        actionBtn.textContent = 'استمر';
        actionBtn.className = 'arena-check-btn btn-continue-correct';
        actionBtn.onclick = () => {
          sessionNextQuestion();
        };
      } else {
        SFX.play('wrong');
        SFX.play('heart-loss');
        session.hearts = Math.max(0, session.hearts - 1);
        session.mistakesCount++;
        this.updateArenaHearts();

        // Shake exercise container
        const currentExercise = document.querySelector('.exercise-container');
        if (currentExercise) {
          currentExercise.style.animation = 'none';
          currentExercise.offsetHeight; // trigger reflow
          currentExercise.style.animation = 'shake 0.4s ease-in-out';
        }

        footer.className = 'arena-footer wrong';
        feedbackIcon.textContent = '✕';
        feedbackTitle.textContent = 'إجابة غير صحيحة';
        feedbackDesc.textContent = `الإجابة الصحيحة: ${correctAnswerText || ''} ${tipText ? `• ${tipText}` : ''}`;

        actionBtn.disabled = false;
        actionBtn.textContent = 'فهمت';
        actionBtn.className = 'arena-check-btn btn-continue-wrong';

        // Re-queue question to the end of the lesson so the learner masters it
        const currentQ = session.questions[session.currentIndex];
        session.questions.push(currentQ);

        actionBtn.onclick = () => {
          if (session.hearts <= 0) {
            this.handleGameOver();
          } else {
            sessionNextQuestion();
          }
        };
      }
    },

    handleGameOver() {
      alert('نفدت القلوب! لا تقلق، تم شحن القلوب لتتمكن من إعادة المحاولة وإتقان الدرس.');
      const session = this.currentLessonSession;
      if (session) {
        session.hearts = 3;
        session.currentIndex = 0;
        this.updateArenaHearts();
        this.renderCurrentQuestion();
      }
    },

    completeLessonSession() {
      const session = this.currentLessonSession;
      if (!session) return;

      SFX.play('victory');
      triggerConfetti();

      // Mark lesson or checkpoint as completed
      const isCp = !!session.lesson.isCheckpoint;
      const lessonKey = isCp ? `${session.unit.id}-checkpoint` : `${session.unit.id}-${session.lesson.id}`;
      this.state.completedLessons[lessonKey] = true;

      // Add XP reward (50 for checkpoint, 25-30 for regular lesson)
      const xpEarned = isCp ? 50 : (session.lesson.xpReward || 25);
      this.state.xp += xpEarned;

      // Update Streak & Persist State
      this.checkDailyStreak();
      this.saveState();
      this.renderHUD();
      this.renderSkillTree();

      // Show Victory Modal
      document.getElementById('lesson-arena-modal').style.display = 'none';

      const victoryModal = document.getElementById('victory-modal');
      const victoryHeader = victoryModal.querySelector('h2');
      if (victoryHeader) {
        victoryHeader.textContent = isCp ? `🏆 مبروك! اجتزت اختبار إتقان ${session.unit.title}` : 'رائع! أكملت الدرس بنجاح!';
      }
      document.getElementById('victory-xp-earned').textContent = `+${xpEarned} XP`;
      document.getElementById('victory-accuracy').textContent = session.mistakesCount === 0 ? '100%' : `${Math.max(60, 100 - session.mistakesCount * 10)}%`;
      document.getElementById('victory-streak').textContent = `${this.state.streak} أيام 🔥`;

      victoryModal.style.display = 'flex';
    },

    resetFooterBar() {
      const footer = document.getElementById('arena-footer-bar');
      footer.className = 'arena-footer';
      document.getElementById('footer-feedback-icon').textContent = '';
      document.getElementById('footer-feedback-title').textContent = '';
      document.getElementById('footer-feedback-desc').textContent = '';
      this.disableCheckButton();
    },

    enableCheckButton(label, callback) {
      const btn = document.getElementById('arena-action-btn');
      btn.disabled = false;
      btn.textContent = label;
      btn.className = 'arena-check-btn';
      btn.onclick = callback;
    },

    disableCheckButton() {
      const btn = document.getElementById('arena-action-btn');
      btn.disabled = true;
      btn.textContent = 'تحقق';
      btn.className = 'arena-check-btn';
      btn.onclick = null;
    },

    // --- MINI GLOSSARY DRAWER ---
    initGlossary() {
      const list = document.getElementById('glossary-words-list');
      const searchInput = document.getElementById('glossary-search-input');
      const filterPills = document.querySelectorAll('.filter-pill');

      let currentFilter = 'all';

      const renderWords = () => {
        list.innerHTML = '';
        const query = searchInput.value.trim().toLowerCase();

        const allWords = Object.values(this.data.words);
        const filtered = allWords.filter(w => {
          // Check search query
          const matchesQuery = !query ||
            w.word.toLowerCase().includes(query) ||
            w.ar.toLowerCase().includes(query) ||
            w.phonetic.toLowerCase().includes(query);

          if (!matchesQuery) return false;

          // Check category / filter
          if (currentFilter === 'all') return true;
          if (currentFilter === 'unlocked') {
            return this.isLessonCompleted(w.unitId, w.lessonId);
          }
          if (currentFilter.startsWith('unit-')) {
            const uId = parseInt(currentFilter.replace('unit-', ''), 10);
            return w.unitId === uId;
          }
          return true;
        });

        document.getElementById('glossary-count').textContent = `${filtered.length} كلمة`;

        filtered.forEach(w => {
          const item = document.createElement('div');
          item.className = 'glossary-word-item';
          item.innerHTML = `
            <div class="glossary-glyph-box">${getSitelenSvg(w.word)}</div>
            <div class="glossary-word-info">
              <div class="glossary-word-top">
                <span class="glossary-toki-latin">${w.word}</span>
                <span class="glossary-phonetic">[ ${w.phonetic} ]</span>
              </div>
              <div class="glossary-meaning-ar">${w.ar}</div>
            </div>
            <button class="glossary-audio-btn" title="استمع للنطق">🔊</button>
          `;

          item.querySelector('.glossary-audio-btn').addEventListener('click', () => {
            playWordAudio(w.word);
          });

          list.appendChild(item);
        });
      };

      searchInput.addEventListener('input', renderWords);

      filterPills.forEach(pill => {
        pill.addEventListener('click', () => {
          filterPills.forEach(p => p.classList.remove('active'));
          pill.classList.add('active');
          currentFilter = pill.dataset.filter;
          renderWords();
        });
      });

      renderWords();
    },

    // --- GRAMMAR GUIDEBOOK (📖 دليل القواعد) ---
    initGrammarGuide() {
      const tabsContainer = document.getElementById('guide-rule-tabs');
      const cardsContainer = document.getElementById('grammar-guide-cards-list');
      if (!tabsContainer || !cardsContainer || !this.data.grammarGuide) return;

      tabsContainer.innerHTML = '';
      cardsContainer.innerHTML = '';

      this.data.grammarGuide.forEach((rule, idx) => {
        // Tab pill
        const tab = document.createElement('button');
        tab.className = `guide-tab-pill ${idx === 0 ? 'active' : ''}`;
        tab.dataset.ruleId = rule.id;
        tab.textContent = rule.title.split(':')[0] || `قاعدة ${idx + 1}`;
        tab.addEventListener('click', () => {
          SFX.play('click');
          tabsContainer.querySelectorAll('.guide-tab-pill').forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
          const targetCard = document.getElementById(`guide-card-${rule.id}`);
          if (targetCard) {
            targetCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
            targetCard.classList.add('highlighted');
            setTimeout(() => targetCard.classList.remove('highlighted'), 1500);
          }
        });
        tabsContainer.appendChild(tab);

        // Rule Card
        const card = document.createElement('article');
        card.className = 'guide-rule-card';
        card.id = `guide-card-${rule.id}`;
        card.dataset.unitId = rule.unitId;

        const examplesHtml = rule.examples.map(ex => {
          const tokens = ex.tp.split(' ');
          const glyphsHtml = tokens.slice(0, 3).map(t => {
            const clean = t.replace(/[!?.,]/g, '').trim().toLowerCase();
            return `<span class="example-glyph-icon">${getSitelenSvg(clean)}</span>`;
          }).join('');

          return `
            <div class="guide-example-row">
              <div class="guide-example-left">
                <div class="guide-example-tp-box">
                  <div style="display:flex; align-items:center; gap:4px;">${glyphsHtml}</div>
                  <span class="guide-example-tp">${ex.tp}</span>
                </div>
                <div class="guide-example-ar">${ex.ar}</div>
                ${ex.hint ? `<div class="guide-example-hint">${ex.hint}</div>` : ''}
              </div>
              <button class="example-audio-btn" data-audio="${ex.tp}" title="استمع للنطق">🔊</button>
            </div>
          `;
        }).join('');

        card.innerHTML = `
          <div class="guide-card-header">
            <div class="guide-card-title-group">
              <h3>${rule.title}</h3>
              <p>${rule.subtitle}</p>
            </div>
            <span class="guide-unit-badge">الوحدة ${rule.unitId}</span>
          </div>

          <div class="guide-explanation">
            ${rule.explanation.map(p => `<p style="margin-bottom:6px;">${p}</p>`).join('')}
          </div>

          <div class="guide-formula-box">
            <div class="formula-header">الصيغة التركيبية:</div>
            <div class="guide-formula-text">${rule.formula}</div>
            <div class="guide-formula-desc">${rule.formulaExplanation}</div>
          </div>

          <div class="guide-examples-grid">
            <div class="examples-header" style="font-size:12px; font-weight:800; color:var(--text-muted);">أمثلة ونطق صوتي:</div>
            ${examplesHtml}
          </div>

          ${rule.warning ? `
            <div class="grammar-warning-box">
              <span class="warning-icon">⚠️</span>
              <span>${rule.warning}</span>
            </div>
          ` : ''}

          ${rule.quickTip ? `
            <div class="guide-quicktip-box">
              <span>💡 ${rule.quickTip}</span>
            </div>
          ` : ''}
        `;

        // Attach audio buttons
        card.querySelectorAll('.example-audio-btn').forEach(btn => {
          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            SFX.play('click');
            const phrase = btn.dataset.audio;
            playSpeechSynthesis(phrase, 0.95);
          });
        });

        cardsContainer.appendChild(card);
      });
    },

    openGrammarGuide(unitId) {
      this.openModal('grammar-guide-modal');
      if (!this.data.grammarGuide) return;

      const tabsContainer = document.getElementById('guide-rule-tabs');
      let targetRule = this.data.grammarGuide[0];
      if (unitId) {
        const matchingRule = this.data.grammarGuide.find(r => r.unitId === unitId);
        if (matchingRule) targetRule = matchingRule;
      }

      if (tabsContainer && targetRule) {
        tabsContainer.querySelectorAll('.guide-tab-pill').forEach(t => {
          t.classList.toggle('active', t.dataset.ruleId === targetRule.id);
        });
      }

      setTimeout(() => {
        const targetCard = document.getElementById(`guide-card-${targetRule.id}`);
        if (targetCard) {
          targetCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
          targetCard.classList.add('highlighted');
          setTimeout(() => targetCard.classList.remove('highlighted'), 1500);
        }
      }, 100);
    },

    openModal(id) {
      const el = document.getElementById(id);
      if (el) el.style.display = 'flex';
    },

    closeModal(id) {
      const el = document.getElementById(id);
      if (el) el.style.display = 'none';
    },

    // --- SUPABASE AUTHENTICATION & CLOUD SYNC METHODS ---
    async initSupabaseAuth() {
      const client = getSupabase();
      if (!client) {
        console.info('Supabase library not loaded yet or offline mode active.');
        this.updateAuthUI();
        return;
      }

      try {
        // Listen for auth state changes
        client.auth.onAuthStateChange(async (event, session) => {
          this.currentUser = session ? session.user : null;
          this.updateAuthUI();
          if (event === 'SIGNED_IN' && session) {
            await this.loadRemoteProgress();
          }
        });

        // Check active session on startup
        const { data: { session }, error } = await client.auth.getSession();
        if (session && !error) {
          this.currentUser = session.user;
          await this.loadRemoteProgress();
        }
      } catch (err) {
        console.warn('Supabase auth initialization error:', err);
      }
      this.updateAuthUI();
    },

    updateAuthUI() {
      const hudBtn = document.getElementById('hud-auth-btn');
      const hudIcon = document.getElementById('hud-auth-icon');
      const hudLabel = document.getElementById('hud-auth-label');
      const loggedOutView = document.getElementById('auth-logged-out-view');
      const loggedInView = document.getElementById('auth-logged-in-view');
      const profileEmail = document.getElementById('auth-profile-email');
      const syncXp = document.getElementById('auth-synced-xp');
      const syncStreak = document.getElementById('auth-synced-streak');
      const syncLessons = document.getElementById('auth-synced-lessons');
      const syncBadge = document.getElementById('auth-sync-status-badge');

      if (this.currentUser) {
        if (hudBtn) hudBtn.classList.add('logged-in');
        if (hudIcon) hudIcon.textContent = '👤';
        if (hudLabel) {
          const userPrefix = this.currentUser.email ? this.currentUser.email.split('@')[0] : 'حسابي';
          hudLabel.textContent = userPrefix;
        }
        if (loggedOutView) loggedOutView.style.display = 'none';
        if (loggedInView) loggedInView.style.display = 'block';
        if (profileEmail) profileEmail.textContent = this.currentUser.email || 'مستخدم مسجل';
        if (syncXp) syncXp.textContent = this.state.xp || 0;
        if (syncStreak) syncStreak.textContent = `${this.state.streak || 1} 🔥`;
        if (syncLessons) {
          const count = Object.keys(this.state.completedLessons || {}).length;
          syncLessons.textContent = count;
        }
        if (syncBadge) {
          syncBadge.innerHTML = `<span class="sync-dot"></span> متزامن مع السحابة`;
        }
      } else {
        if (hudBtn) hudBtn.classList.remove('logged-in');
        if (hudIcon) hudIcon.textContent = '☁️';
        if (hudLabel) hudLabel.textContent = 'حفظ التقدم';
        if (loggedOutView) loggedOutView.style.display = 'block';
        if (loggedInView) loggedInView.style.display = 'none';
      }
    },

    switchAuthTab(tab) {
      SFX.play('click');
      const loginTabBtn = document.getElementById('tab-btn-login');
      const signupTabBtn = document.getElementById('tab-btn-signup');
      const loginForm = document.getElementById('form-login');
      const signupForm = document.getElementById('form-signup');
      const loginMsg = document.getElementById('login-status-msg');
      const signupMsg = document.getElementById('signup-status-msg');

      if (loginMsg) loginMsg.style.display = 'none';
      if (signupMsg) signupMsg.style.display = 'none';

      if (tab === 'login') {
        if (loginTabBtn) loginTabBtn.classList.add('active');
        if (signupTabBtn) signupTabBtn.classList.remove('active');
        if (loginForm) loginForm.style.display = 'flex';
        if (signupForm) signupForm.style.display = 'none';
      } else {
        if (signupTabBtn) signupTabBtn.classList.add('active');
        if (loginTabBtn) loginTabBtn.classList.remove('active');
        if (loginForm) loginForm.style.display = 'none';
        if (signupForm) signupForm.style.display = 'flex';
      }
    },

    showAuthStatus(tab, message, isError = false) {
      const el = document.getElementById(`${tab}-status-msg`);
      if (!el) return;
      el.textContent = message;
      el.className = `auth-status-msg ${isError ? 'error' : 'success'}`;
      el.style.display = 'block';
    },

    async handleLogin() {
      SFX.play('click');
      const client = getSupabase();
      if (!client) {
        this.showAuthStatus('login', 'خدمة الاتصال بالسحابة غير متاحة حالياً. يرجى التحقق من اتصالك بالإنترنت.', true);
        return;
      }

      const emailEl = document.getElementById('login-email');
      const passEl = document.getElementById('login-password');
      const submitBtn = document.getElementById('login-submit-btn');
      const email = emailEl?.value.trim();
      const password = passEl?.value;

      if (!email || !password) {
        this.showAuthStatus('login', 'يرجى إدخال البريد الإلكتروني وكلمة المرور.', true);
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'جاري التحقق وتسجيل الدخول... ⏳';
      }

      try {
        const { data, error } = await client.auth.signInWithPassword({ email, password });
        if (error) {
          let arError = error.message;
          if (error.message.includes('Invalid login credentials')) {
            arError = 'بيانات الدخول غير صحيحة. يرجى التأكد من البريد الإلكتروني وكلمة المرور.';
          } else if (error.message.includes('Email not confirmed')) {
            arError = 'يرجى تأكيد بريدك الإلكتروني أولاً عبر الرابط المرسل إليك.';
          }
          this.showAuthStatus('login', arError, true);
          SFX.play('wrong');
        } else {
          SFX.play('correct');
          this.currentUser = data.user;
          this.showAuthStatus('login', 'تم تسجيل الدخول بنجاح! جاري مزامنة بياناتك...', false);
          await this.loadRemoteProgress();
          this.updateAuthUI();
          setTimeout(() => {
            this.closeModal('auth-modal');
            if (emailEl) emailEl.value = '';
            if (passEl) passEl.value = '';
          }, 1200);
        }
      } catch (err) {
        this.showAuthStatus('login', 'حدث خطأ غير متوقع أثناء تسجيل الدخول: ' + err.message, true);
        SFX.play('wrong');
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'تسجيل الدخول ومزامنة التقدم ⚡';
        }
      }
    },

    async handleSignUp() {
      SFX.play('click');
      const client = getSupabase();
      if (!client) {
        this.showAuthStatus('signup', 'خدمة الاتصال بالسحابة غير متاحة حالياً. يرجى التحقق من اتصالك بالإنترنت.', true);
        return;
      }

      const emailEl = document.getElementById('signup-email');
      const passEl = document.getElementById('signup-password');
      const confirmEl = document.getElementById('signup-confirm-password');
      const submitBtn = document.getElementById('signup-submit-btn');

      const email = emailEl?.value.trim();
      const password = passEl?.value;
      const confirmPass = confirmEl?.value;

      if (!email || !password) {
        this.showAuthStatus('signup', 'يرجى تعبئة كافة الحقول المطلوبة.', true);
        return;
      }

      if (password.length < 6) {
        this.showAuthStatus('signup', 'يجب أن تتكون كلمة المرور من 6 خانات على الأقل.', true);
        return;
      }

      if (password !== confirmPass) {
        this.showAuthStatus('signup', 'كلمتا المرور غير متطابقتين. يرجى التأكد وإعادة المحاولة.', true);
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'جاري إنشاء الحساب وحفظ التقدم... ⏳';
      }

      try {
        const { data, error } = await client.auth.signUp({ email, password });
        if (error) {
          let arError = error.message;
          if (error.message.includes('User already registered')) {
            arError = 'هذا البريد الإلكتروني مسجل بالفعل. يمكنك الانتقال لتبويب تسجيل الدخول.';
          } else if (error.message.includes('Password should be')) {
            arError = 'كلمة المرور ضعيفة. يرجى استخدام 6 خانات على الأقل.';
          }
          this.showAuthStatus('signup', arError, true);
          SFX.play('wrong');
        } else {
          SFX.play('victory');
          if (data.session && data.user) {
            // Directly logged in
            this.currentUser = data.user;
            this.showAuthStatus('signup', '🎉 تم إنشاء الحساب بنجاح! يتم الآن حفظ تقدمك الحالي على السحابة.', false);
            await this.syncProgressToCloud();
            this.updateAuthUI();
            setTimeout(() => {
              this.closeModal('auth-modal');
              if (emailEl) emailEl.value = '';
              if (passEl) passEl.value = '';
              if (confirmEl) confirmEl.value = '';
            }, 1500);
          } else {
            // Confirmation email sent
            this.showAuthStatus('signup', 'تم إنشاء الحساب! يرجى مراجعة بريدك الإلكتروني لتأكيد التسجيل ثم تسجيل الدخول.', false);
          }
        }
      } catch (err) {
        this.showAuthStatus('signup', 'حدث خطأ أثناء إنشاء الحساب: ' + err.message, true);
        SFX.play('wrong');
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'إنشاء الحساب وحفظ التقدم ✨';
        }
      }
    },

    async handleSignOut() {
      SFX.play('click');
      const client = getSupabase();
      if (client) {
        try {
          await client.auth.signOut();
        } catch (e) {
          console.warn('SignOut error:', e);
        }
      }
      this.currentUser = null;
      this.updateAuthUI();
      this.closeModal('auth-modal');
    },

    async loadRemoteProgress() {
      if (!this.currentUser) return;
      const client = getSupabase();
      if (!client) return;

      try {
        const { data, error } = await client
          .from('user_progress')
          .select('*')
          .eq('user_id', this.currentUser.id)
          .maybeSingle();

        if (error) {
          // If table doesn't exist yet, we silently proceed with local state
          console.info('Remote progress fetch info:', error.message);
          // Try to create the record if table exists, or catch gracefully
          await this.syncProgressToCloud();
          return;
        }

        if (data) {
          // Merge local and cloud progress intelligently
          const mergedXp = Math.max(Number(this.state.xp) || 0, Number(data.xp) || 0);
          const mergedStreak = Math.max(Number(this.state.streak) || 1, Number(data.streak) || 1);
          const remoteLessons = data.completed_lessons || {};
          const localLessons = this.state.completedLessons || {};
          const mergedLessons = Object.assign({}, localLessons, remoteLessons);

          this.state.xp = mergedXp;
          this.state.streak = mergedStreak;
          this.state.completedLessons = mergedLessons;

          // Re-calculate unlocked units
          const unlocked = [1];
          this.data.units.forEach(u => {
            if (u.id > 1) {
              const prevUnit = this.data.units.find(pu => pu.id === u.id - 1);
              if (prevUnit && prevUnit.lessons.every(l => this.isLessonCompleted(prevUnit.id, l.id))) {
                unlocked.push(u.id);
              }
            }
          });
          this.state.unlockedUnits = unlocked;

          // Save merged state locally
          try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
          } catch (e) {}

          this.renderHUD();
          this.renderSkillTree();
          this.updateAuthUI();

          // Sync back any newly merged lessons to the cloud
          await this.syncProgressToCloud();
        } else {
          // No cloud record yet: upload current local progress to initialize
          await this.syncProgressToCloud();
        }
      } catch (err) {
        console.warn('loadRemoteProgress encountered non-blocking issue:', err);
      }
    },

    async syncProgressToCloud() {
      if (!this.currentUser || this.isSyncing) return;
      const client = getSupabase();
      if (!client) return;

      this.isSyncing = true;
      const syncBadge = document.getElementById('auth-sync-status-badge');
      if (syncBadge) {
        syncBadge.innerHTML = `<span class="sync-dot" style="background:#00F0FF;box-shadow:0 0 6px #00F0FF;"></span> جاري المزامنة السحابية...`;
      }

      try {
        const payload = {
          user_id: this.currentUser.id,
          xp: this.state.xp || 0,
          hearts: this.state.hearts || 3,
          streak: this.state.streak || 1,
          completed_lessons: this.state.completedLessons || {},
          updated_at: new Date().toISOString()
        };

        const { error } = await client
          .from('user_progress')
          .upsert(payload, { onConflict: 'user_id' });

        if (error) {
          console.info('Supabase cloud sync notification:', error.message);
          if (syncBadge) {
            syncBadge.innerHTML = `<span class="sync-dot" style="background:#FFE600;box-shadow:none;"></span> الحفظ محلي (قاعدة البيانات السحابية قيد التهيئة)`;
          }
        } else {
          this.lastSyncTime = new Date();
          if (syncBadge) {
            syncBadge.innerHTML = `<span class="sync-dot"></span> متزامن مع السحابة (${new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' })})`;
          }
        }
      } catch (err) {
        console.warn('syncProgressToCloud warning:', err);
      } finally {
        this.isSyncing = false;
        this.updateAuthUI();
      }
    },

    async manualSync() {
      SFX.play('click');
      const syncBtn = document.getElementById('btn-manual-sync');
      if (syncBtn) {
        syncBtn.disabled = true;
        syncBtn.textContent = 'جاري المزامنة... ⏳';
      }

      await this.syncProgressToCloud();

      if (syncBtn) {
        syncBtn.textContent = 'تمت المزامنة بنجاح ✓';
        setTimeout(() => {
          syncBtn.disabled = false;
          syncBtn.textContent = 'مزامنة السحابة الآن 🔄';
        }, 1200);
      }
    },

    bindEvents() {
      // HUD Cloud Auth Button
      const authBtn = document.getElementById('hud-auth-btn');
      if (authBtn) {
        authBtn.addEventListener('click', () => {
          SFX.play('click');
          this.updateAuthUI();
          this.openModal('auth-modal');
        });
      }

      // HUD Grammar Guidebook Button
      const grammarBtn = document.getElementById('hud-grammar-btn');
      if (grammarBtn) {
        grammarBtn.addEventListener('click', () => {
          SFX.play('click');
          this.openGrammarGuide();
        });
      }

      // HUD Buttons
      document.getElementById('hud-glossary-btn').addEventListener('click', () => {
        SFX.play('click');
        this.openModal('glossary-drawer-modal');
      });

      document.getElementById('hud-settings-btn').addEventListener('click', () => {
        SFX.play('click');
        this.openModal('settings-modal');
      });

      // Settings switches
      const sfxSwitch = document.getElementById('setting-sfx-switch');
      if (sfxSwitch) {
        sfxSwitch.checked = this.state.settings.soundEffects;
        sfxSwitch.addEventListener('change', (e) => {
          this.state.settings.soundEffects = e.target.checked;
          this.saveState();
        });
      }

      const autoAudioSwitch = document.getElementById('setting-auto-audio-switch');
      if (autoAudioSwitch) {
        autoAudioSwitch.checked = this.state.settings.autoAudio;
        autoAudioSwitch.addEventListener('change', (e) => {
          this.state.settings.autoAudio = e.target.checked;
          this.saveState();
        });
      }

      // Reset progress button
      document.getElementById('btn-reset-progress').addEventListener('click', () => {
        if (confirm('تحذير: هل أنت متأكد من رغبتك في حذف كل تقدمك والبدء من جديد؟ لا يمكن التراجع عن هذا الإجراء.')) {
          this.resetProgress();
        }
      });

      // Arena Close Button
      document.getElementById('arena-close-btn').addEventListener('click', () => {
        this.closeLessonArena();
      });

      // Victory Modal Continue Button
      document.getElementById('victory-continue-btn').addEventListener('click', () => {
        SFX.play('click');
        this.closeModal('victory-modal');
      });
    }
  };

  function sessionNextQuestion() {
    const session = app.currentLessonSession;
    if (!session) return;
    session.currentIndex++;
    app.renderCurrentQuestion();
  }

  // Helper: Shuffle Array (Fisher-Yates)
  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // Lightweight 60fps Canvas Confetti
  function triggerConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#B8FF29', '#FF4FA3', '#00F0FF', '#FFE600', '#FFFFFF'];
    const particles = [];
    for (let i = 0; i < 90; i++) {
      particles.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        r: Math.random() * 6 + 4,
        dx: (Math.random() - 0.5) * 14,
        dy: (Math.random() - 0.7) * 16,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        tilt: (Math.random() - 0.5) * 10
      });
    }

    let animationFrame;
    let ticks = 0;

    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.dx;
        p.y += p.dy;
        p.dy += 0.35; // gravity
        p.rotation += p.tilt;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.r / 2, -p.r / 2, p.r, p.r * 1.5);
        ctx.restore();
      });

      ticks++;
      if (ticks < 120) {
        animationFrame = requestAnimationFrame(render);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }

    render();
  }

  // --- SMART GRAMMAR MISTAKE ANALYZER ---
  function analyzeGrammarMistake(userTokens, correctTokens, fullSentence, promptAr) {
    if (!userTokens || !correctTokens) return null;

    // 1. Check if user put 'li' after 'mi' or 'sina' (when single pronoun)
    if ((userTokens[0] === 'mi' || userTokens[0] === 'sina') && userTokens[1] === 'li') {
      if (correctTokens[0] === userTokens[0] && correctTokens[1] !== 'li') {
        return `💡 خطأ شائع في أداة الربط: لا نضع "li" مطلقاً بعد "mi" (أنا) أو "sina" (أنت) بمفردهما! احذف "li" واكتب الفعل أو الصفة مباشرة بعد الضمير.`;
      }
    }

    // 2. Check if user forgot 'li' after 3rd person pronoun 'ona' or noun subject
    const correctHasLi = correctTokens.includes('li');
    const userHasLi = userTokens.includes('li');
    if (correctHasLi && !userHasLi) {
      const liIndex = correctTokens.indexOf('li');
      const subject = correctTokens.slice(0, liIndex).join(' ');
      return `💡 نسيت أداة الربط "li"! في توكي بونا، يجب وضع "li" دائماً بعد الفاعل ("${subject}") لفصله عن الفعل أو الوصف.`;
    }

    // 3. Check if user put 'li' in wrong position
    if (correctHasLi && userHasLi) {
      const correctLiIndex = correctTokens.indexOf('li');
      const userLiIndex = userTokens.indexOf('li');
      if (correctLiIndex !== userLiIndex) {
        return `💡 موضع أداة "li" غير صحيح: توضع "li" مباشرة بعد نهاية الفاعل وقبل الفعل أو الصفة.`;
      }
    }

    // 4. Check if user forgot 'e' before direct object
    const correctHasE = correctTokens.includes('e');
    const userHasE = userTokens.includes('e');
    if (correctHasE && !userHasE) {
      const eIndex = correctTokens.indexOf('e');
      const objectPart = correctTokens.slice(eIndex + 1).join(' ');
      return `💡 نسيت أداة المفعول به "e"! تأتي "e" دائماً قبل الشيء الذي يقع عليه الفعل مباشرة ("${objectPart}").`;
    }

    // 5. Check if user mistakenly added 'e' when there is no direct object
    if (!correctHasE && userHasE) {
      return `💡 انتبه: أداة "e" تُستخدم فقط قبل المفعول به المباشر بعد الأفعال المتعدية. هذه الجملة لا تحتاج إلى "e".`;
    }

    // 6. Check if user inverted Noun and Adjective order
    for (let i = 0; i < correctTokens.length - 1; i++) {
      const w1 = correctTokens[i];
      const w2 = correctTokens[i + 1];
      if (w1 !== 'li' && w1 !== 'e' && w1 !== 'pi' && w1 !== 'la' &&
          w2 !== 'li' && w2 !== 'e' && w2 !== 'pi' && w2 !== 'la') {
        const userIndexW2 = userTokens.indexOf(w2);
        if (userIndexW2 !== -1 && userTokens[userIndexW2 + 1] === w1) {
          return `💡 ترتيب الاسم والصفة: في توكي بونا، الاسم يسبق الصفة دائماً (مثل العربية: "${w1} ${w2}" وليس "${w2} ${w1}").`;
        }
      }
    }

    // 7. Check 'la' context marker
    const correctHasLa = correctTokens.includes('la');
    const userHasLa = userTokens.includes('la');
    if (correctHasLa && !userHasLa) {
      return `💡 نسيت أداة السياق والشرط "la"! تأتي "la" بعد عبارة الزمان أو الشرط لتفصلها عن الجملة الرئيسية.`;
    }

    // 8. Check 'pi' grouping marker
    const correctHasPi = correctTokens.includes('pi');
    const userHasPi = userTokens.includes('pi');
    if (correctHasPi && !userHasPi) {
      return `💡 نسيت أداة التجميع "pi"! تُستخدم "pi" لإعادة تجميع الكلمات الوصفية معاً ككتلة واحدة للاسم السابق.`;
    }

    // 9. General word order guidance
    return `💡 ترتيب الجملة: في توكي بونا، التركيب السليم هو: [الفاعل] + (li) + [الفعل] + (e) + [المفعول به].`;
  }

  // --- TOKEN & SENTENCE EQUIVALENCE HELPERS FOR ACTIVE TYPING ---
  function normalizeTokiPonaInput(text) {
    if (!text) return '';
    return text
      .toLowerCase()
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"'«»]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function areTokiPonaSentencesEqual(user, correct) {
    const u = normalizeTokiPonaInput(user);
    const c = normalizeTokiPonaInput(correct);
    if (u === c) return true;
    // Accept ale and ali equivalence
    const uCanonical = u.replace(/\bali\b/g, 'ale');
    const cCanonical = c.replace(/\bali\b/g, 'ale');
    return uCanonical === cCanonical;
  }

  // Expose to window & run on DOMContentLoaded
  window.app = app;
  document.addEventListener('DOMContentLoaded', () => {
    app.init();
  });
})();
