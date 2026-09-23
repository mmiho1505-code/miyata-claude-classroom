(() => {
  const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (!fine.matches || reduce.matches) return;

  const lag = document.createElement("div");
  const dot = document.createElement("div");
  lag.className = "site-pointer site-pointer--lag";
  dot.className = "site-pointer site-pointer--dot";
  lag.setAttribute("aria-hidden", "true");
  dot.setAttribute("aria-hidden", "true");
  document.body.append(lag, dot);

  let mouseX = 0;
  let mouseY = 0;
  let frontX = 0;
  let frontY = 0;
  let backX = 0;
  let backY = 0;
  let started = false;
  let moves = 0;
  let hover = false;
  let hoverTimer = 0;

  const isHot = (el) => {
    if (!el || el.nodeType !== 1) return false;
    return Boolean(el.closest("a, button, label, input, textarea, select, summary, .copy, [data-link]"));
  };

  document.addEventListener(
    "mousemove",
    (e) => {
      if (started) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        return;
      }
      moves += 1;
      if (moves < 10) return;
      mouseX = frontX = backX = e.clientX;
      mouseY = frontY = backY = e.clientY;
      lag.style.transform = `translate(${backX}px, ${backY}px)`;
      dot.style.transform = `translate(${frontX}px, ${frontY}px)`;
      lag.classList.add("is-on");
      dot.classList.add("is-on");
      started = true;
    },
    { passive: true }
  );

  document.addEventListener("mouseover", (e) => {
    if (!isHot(e.target)) return;
    window.clearTimeout(hoverTimer);
    if (hover) return;
    hover = true;
    lag.classList.add("is-hover");
    dot.classList.add("is-hover");
  });

  document.addEventListener("mouseout", (e) => {
    if (!isHot(e.target)) return;
    window.clearTimeout(hoverTimer);
    hoverTimer = window.setTimeout(() => {
      hover = false;
      lag.classList.remove("is-hover");
      dot.classList.remove("is-hover");
    }, 50);
  });

  const tick = () => {
    if (started) {
      frontX += (mouseX - frontX) / 3;
      frontY += (mouseY - frontY) / 3;
      backX += (mouseX - backX) / 6;
      backY += (mouseY - backY) / 6;
      lag.style.transform = `translate(${backX}px, ${backY}px)`;
      dot.style.transform = `translate(${frontX}px, ${frontY}px)`;
    }
    requestAnimationFrame(tick);
  };
  tick();
})();
