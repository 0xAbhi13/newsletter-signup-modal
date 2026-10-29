/* Newsletter Signup Modal — Day 20 */
(function () {
  'use strict';

  // ---- Configuration ----
  const SHOW_DELAY_MS = 3000;
  const SUBMIT_SIMULATED_DELAY_MS = 900;
  const SUCCESS_CLOSE_DELAY_MS = 1800;
  const CLOSE_ANIMATION_MS = 260;

  const DISMISSED_KEY = 'newsletter:dismissed';
  const SUBSCRIBED_KEY = 'newsletter:subscribed';

  // ---- DOM references ----
  const overlay = document.getElementById('modalOverlay');
  const modal = document.getElementById('modal');
  const closeBtn = document.getElementById('closeBtn');
  const form = document.getElementById('newsletterForm');
  const emailInput = document.getElementById('emailInput');
  const submitBtn = document.getElementById('submitBtn');
  const emailError = document.getElementById('emailError');
  const successMsg = document.getElementById('successMsg');
  const page = document.getElementById('page');

  // ---- State ----
  let isOpen = false;
  let isSubmitting = false;
  let hasSubscribed = false;
  let previouslyFocused = null;
  let showTimer = null;

  // ---- Storage helpers (sessionStorage) ----
  function storageGet(key) {
    try {
      return sessionStorage.getItem(key);
    } catch (e) {
      return null;
    }
  }

  function storageSet(key, value) {
    try {
      sessionStorage.setItem(key, value);
    } catch (e) {
      /* Ignore storage errors (e.g. private mode). */
    }
  }

  function isDismissed() {
    return storageGet(DISMISSED_KEY) === 'true';
  }

  function isSubscribed() {
    return storageGet(SUBSCRIBED_KEY) === 'true' || hasSubscribed;
  }

  function shouldShow() {
    return !isDismissed() && !isSubscribed();
  }

  // ---- Validation ----
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  function validateEmail(value) {
    const trimmed = (value || '').trim();
    if (!trimmed) {
      return { valid: false, message: 'Please enter your email address.' };
    }
    if (!EMAIL_REGEX.test(trimmed)) {
      return { valid: false, message: 'Please enter a valid email address.' };
    }
    return { valid: true, message: '' };
  }

  function showError(message) {
    emailError.textContent = message;
    if (message) {
      emailInput.classList.add('form-input--error');
      emailInput.setAttribute('aria-invalid', 'true');
    } else {
      emailInput.classList.remove('form-input--error');
      emailInput.setAttribute('aria-invalid', 'false');
    }
  }

  function clearError() {
    showError('');
  }

  // ---- Modal open / close ----
  function openModal() {
    if (isOpen || !shouldShow()) {
      return;
    }

    previouslyFocused = document.activeElement;
    isOpen = true;

    overlay.hidden = false;
    // Force reflow so the enter transition plays.
    void overlay.offsetWidth;
    overlay.classList.add('is-open');

    document.body.style.overflow = 'hidden';
    if (page) {
      page.setAttribute('inert', '');
    }

    // Move keyboard focus into the modal.
    window.setTimeout(function () {
      emailInput.focus();
    }, 50);
  }

  function closeModal(wasDismissed) {
    if (!isOpen) {
      return;
    }
    isOpen = false;

    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
    if (page) {
      page.removeAttribute('inert');
    }

    window.setTimeout(function () {
      overlay.hidden = true;
    }, CLOSE_ANIMATION_MS);

    if (wasDismissed) {
      storageSet(DISMISSED_KEY, 'true');
    }

    // Return focus to the previously focused element.
    window.setTimeout(function () {
      if (
        previouslyFocused &&
        typeof previouslyFocused.focus === 'function' &&
        document.contains(previouslyFocused)
      ) {
        previouslyFocused.focus();
      }
      previouslyFocused = null;
    }, CLOSE_ANIMATION_MS);
  }

  function dismissModal() {
    closeModal(true);
  }

  // ---- Form submission (simulated; ready for API integration) ----
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (isSubmitting || hasSubscribed || isSubscribed()) {
      return;
    }

    clearError();

    const result = validateEmail(emailInput.value);
    if (!result.valid) {
      showError(result.message);
      emailInput.focus();
      return;
    }

    // Simulate network request. Replace this block with a fetch() call
    // to your backend endpoint when one becomes available.
    isSubmitting = true;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Subscribing...';

    window.setTimeout(function () {
      // ---- Simulated successful subscription ----
      hasSubscribed = true;
      storageSet(SUBSCRIBED_KEY, 'true');

      // Reveal the success message and lock the form.
      successMsg.hidden = false;
      const formRow = form.querySelector('.form-row');
      if (formRow) {
        formRow.hidden = true;
      }
      emailInput.disabled = true;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Subscribed';

      isSubmitting = false;

      // Close shortly after confirming success.
      window.setTimeout(function () {
        closeModal(false);
      }, SUCCESS_CLOSE_DELAY_MS);
    }, SUBMIT_SIMULATED_DELAY_MS);
  });

  // ---- Live validation feedback ----
  emailInput.addEventListener('blur', function () {
    if (emailInput.value.trim() === '') {
      clearError();
      return;
    }
    const result = validateEmail(emailInput.value);
    if (!result.valid) {
      showError(result.message);
    } else {
      clearError();
    }
  });

  emailInput.addEventListener('input', function () {
    if (emailError.textContent) {
      const result = validateEmail(emailInput.value);
      if (result.valid) {
        clearError();
      }
    }
  });

  // ---- Close handlers ----
  closeBtn.addEventListener('click', dismissModal);

  overlay.addEventListener('click', function (event) {
    // Only close when the overlay backdrop itself is clicked.
    if (event.target === overlay) {
      dismissModal();
    }
  });

  document.addEventListener('keydown', function (event) {
    if (!isOpen) {
      return;
    }
    if (event.key === 'Escape') {
      event.preventDefault();
      dismissModal();
    }
  });

  // ---- Focus trap inside the modal ----
  modal.addEventListener('keydown', function (event) {
    if (event.key !== 'Tab' || !isOpen) {
      return;
    }

    const focusable = Array.from(
      modal.querySelectorAll(
        'button:not([disabled]), input:not([disabled]), a[href], textarea, select, [tabindex]:not([tabindex="-1"])'
      )
    );

    if (focusable.length === 0) {
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  // ---- Auto-show after delay (session-aware) ----
  if (shouldShow()) {
    showTimer = window.setTimeout(openModal, SHOW_DELAY_MS);
  }
})();
