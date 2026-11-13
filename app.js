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

    init() {
      this.loadState();
      this.checkDailyStreak();
      this.bindEvents();
      this.renderHUD();
      this.renderSkillTree();
      this.initGlossary();
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

    isLessonUnlocked(unitId, lessonId) {
      // First lesson of Unit 1 is always unlocked
      if (unitId === 1 && lessonId === 1) return true;

      // In same unit, unlocked if previous lesson is completed
      if (lessonId > 1) {
        return this.isLessonCompleted(unitId, lessonId - 1);
      }

      // First lesson of unit N is unlocked if all lessons of unit N-1 are completed
      if (unitId > 1 && lessonId === 1) {
        const prevUnit = this.data.units.find(u => u.id === unitId - 1);
        if (!prevUnit) return false;
        return prevUnit.lessons.every(l => this.isLessonCompleted(prevUnit.id, l.id));
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
            <span class="unit-number-tag">${unit.title}</span>
            <span class="unit-icon">${unit.icon || '📘'}</span>
          </div>
          <h2 class="unit-title">${unit.subtitle}</h2>
          <p class="unit-desc">${unit.description}</p>
        `;
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
      if (lesson.sentences && lesson.sentences.length > 0) {
        lesson.sentences.forEach(sent => {
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
      } else if (q.type === 'mc_word_to_ar') {
        this.renderMultipleChoiceQuestion(q, body);
      } else if (q.type === 'sentence_builder') {
        this.renderSentenceBuilderQuestion(q, body);
      } else if (q.type === 'match_pairs') {
        this.renderMatchPairsQuestion(q, body);
      } else if (q.type === 'listening') {
        this.renderListeningQuestion(q, body);
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
            const userSentence = placedTokens.map(p => p.token).join(' ');
            const correctSentence = q.correctTokens.join(' ');
            const isCorrect = userSentence.trim() === correctSentence.trim();
            this.handleAnswerCheck(isCorrect, q.fullSentence, `الترتيب الصحيح هو: "${q.fullSentence}"`);
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

      // Mark lesson as completed
      const lessonKey = `${session.unit.id}-${session.lesson.id}`;
      this.state.completedLessons[lessonKey] = true;

      // Add XP reward
      const xpEarned = session.lesson.xpReward || 25;
      this.state.xp += xpEarned;

      // Update Streak
      this.checkDailyStreak();
      this.saveState();
      this.renderHUD();
      this.renderSkillTree();

      // Show Victory Modal
      document.getElementById('lesson-arena-modal').style.display = 'none';

      const victoryModal = document.getElementById('victory-modal');
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

    openModal(id) {
      const el = document.getElementById(id);
      if (el) el.style.display = 'flex';
    },

    closeModal(id) {
      const el = document.getElementById(id);
      if (el) el.style.display = 'none';
    },

    bindEvents() {
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

  // Expose to window & run on DOMContentLoaded
  window.app = app;
  document.addEventListener('DOMContentLoaded', () => {
    app.init();
  });
})();
