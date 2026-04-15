'use strict';

function initTabs() {
  const tabBtns   = document.querySelectorAll('[role="tab"]');
  const tabPanels = document.querySelectorAll('[role="tabpanel"]');

  function activateTab(btn) {
    const targetId = btn.getAttribute('aria-controls');

    tabBtns.forEach((b) => {
      b.classList.remove('active');
      b.setAttribute('aria-selected', 'false');
      b.setAttribute('tabindex', '-1');
    });
    tabPanels.forEach((p) => {
      p.hidden = true;
      p.classList.remove('active');
    });

    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
    btn.setAttribute('tabindex', '0');

    const panel = document.getElementById(targetId);
    if (panel) {
      panel.hidden = false;
      panel.classList.add('active');
    }
  }

  tabBtns.forEach((btn, i) => {
    btn.addEventListener('click', () => activateTab(btn));

    btn.addEventListener('keydown', (e) => {
      let next = i;
      if (e.key === 'ArrowRight')      next = (i + 1) % tabBtns.length;
      else if (e.key === 'ArrowLeft') next = (i - 1 + tabBtns.length) % tabBtns.length;
      else if (e.key === 'Home')       next = 0;
      else if (e.key === 'End')        next = tabBtns.length - 1;
      else return;
      e.preventDefault();
      activateTab(tabBtns[next]);
      tabBtns[next].focus();
    });
  });
}

document.addEventListener('DOMContentLoaded', initTabs);
