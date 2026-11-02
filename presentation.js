(() => {
  "use strict";

  function startPresentation() {
    const main = document.querySelector("main");
    const dock = document.getElementById("slideDock");
    const previous = document.getElementById("previousSlide");
    const next = document.getElementById("nextSlide");
    const counter = document.getElementById("slideCounter");
    const progress = document.getElementById("slideProgress");
    if (!main || !dock || !previous || !next || !counter || !progress) return;

    const source = [...main.children].filter(el => el.tagName === "SECTION");
    const slides = [];
    const makeSlide = (sourceSection, nodes, id, extraClass = "") => {
      const slide = document.createElement("section");
      slide.className = `${sourceSection.className} deck-slide ${extraClass}`.trim();
      if (id) slide.id = id;
      nodes.filter(Boolean).forEach(node => slide.appendChild(node));
      main.appendChild(slide);
      slides.push(slide);
      return slide;
    };
    const makeHeading = (sourceHeading, eyebrow, title) => {
      if (sourceHeading) return sourceHeading.cloneNode(true);
      const h = document.createElement("div");
      h.className = "section-heading deck-generated-heading";
      h.innerHTML = `<div><div class="eyebrow">${eyebrow}</div><h2>${title}</h2></div>`;
      return h;
    };
    const removeSource = () => source.forEach(section => section.remove());

    // 1. Cover. 2. No arbitrary-number statistics slide: it has been removed.
    const hero = source.find(el => el.id === "home");
    if (hero) makeSlide(hero, [...hero.children], "home", "hero-slide");

    // Overview, anatomy explorer, and key research facts are separated by purpose.
    const explore = source.find(el => el.id === "explore");
    if (explore) {
      const heading = explore.querySelector(":scope > .section-heading");
      const systemGrid = explore.querySelector(":scope > .system-grid");
      const anatomy = explore.querySelector(":scope > .anatomy-panel");
      const research = explore.querySelector(":scope > .research-grid");
      makeSlide(explore, [heading, systemGrid], "explore", "overview-slide");
      if (anatomy) {
        const ah = makeHeading(null, "ANATOMY EXPLORER", "Explore the organs <em>one by one.</em>");
        makeSlide(explore, [ah, anatomy], "anatomy-slide", "anatomy-slide");
      }
      if (research) {
        const cards = [...research.children];
        const groups = [cards.slice(0, 2), cards.slice(2)];
        groups.forEach((group, i) => {
          if (!group.length) return;
          const grid = research.cloneNode(false);
          group.forEach(card => grid.appendChild(card));
          const rh = makeHeading(null, `RESEARCH NOTES · ${i + 1} OF 2`, i === 0 ? "Five details that explain <em>how it works.</em>" : "Health, assessment & <em>what to watch for.</em>");
          makeSlide(explore, [rh, grid], `research-${i + 1}`, "research-slide");
        });
      }
    }

    // The webcam is kept as one dedicated slide. Its guide and controls are laid out
    // side-by-side with fixed space so buttons and labels remain visible.
    const scanner = source.find(el => el.id === "scanner");
    if (scanner) makeSlide(scanner, [...scanner.children], "scanner", "scanner-deck-slide");

    // Each learning topic gets a readable, full-content slide. No tiny purple text
    // and no title-only slides; the heading always travels with its lesson card.
    ["learning", "day-two"].forEach(sectionId => {
      const section = source.find(el => el.id === sectionId);
      if (!section) return;
      const heading = section.querySelector(":scope > .section-heading");
      const grid = section.querySelector(":scope > .lesson-grid");
      if (!grid) return;
      const cards = [...grid.children];
      let topicSlide = 0;
      cards.forEach((card, i) => {
        const list = card.querySelector(":scope > ul, :scope > ol");
        const items = list ? [...list.children].filter(el => el.tagName === "LI") : [];
        // Dense lessons are continued on a second slide instead of clipping the
        // bottom of a card. Keep the intro with the first group of points.
        const chunks = items.length > 3
          ? [items.slice(0, Math.ceil(items.length / 2)), items.slice(Math.ceil(items.length / 2))]
          : [items];
        chunks.forEach((chunk, part) => {
          const cardCopy = card.cloneNode(false);
          [...card.children].forEach(child => {
            if (child === list) {
              if (!chunk.length) return;
              const listCopy = list.cloneNode(false);
              chunk.forEach(item => listCopy.appendChild(item.cloneNode(true)));
              cardCopy.appendChild(listCopy);
            } else if (part === 0 || child.classList?.contains("lesson-number") || child.tagName === "H3") {
              cardCopy.appendChild(child.cloneNode(true));
            }
          });
          if (part > 0) {
            const continued = document.createElement("div");
            continued.className = "lesson-continued-label";
            continued.textContent = "CONTINUED · KEY DETAILS";
            cardCopy.insertBefore(continued, cardCopy.firstChild);
          }
          const cardHeading = makeHeading(heading, `${sectionId === "learning" ? "CORE LESSON" : "REGULATION & HEALTH"} · ${String(i + 1).padStart(2, "0")} / ${String(cards.length).padStart(2, "0")}${part ? " · CONTINUED" : ""}`, "");
          const eyebrow = cardHeading.querySelector(".eyebrow");
          if (eyebrow) eyebrow.textContent = `${sectionId === "learning" ? "CORE LESSON" : "REGULATION & HEALTH"} · ${String(i + 1).padStart(2, "0")} / ${String(cards.length).padStart(2, "0")}${part ? " · CONTINUED" : ""}`;
          const id = topicSlide === 0 ? sectionId : `${sectionId}-${topicSlide + 1}`;
          makeSlide(section, [cardHeading, cardCopy], id, "lesson-topic-slide");
          topicSlide++;
        });
      });
    });

    // Plant comparison is intentionally maximized into two balanced slides.
    const plants = source.find(el => el.id === "plants");
    if (plants) {
      const heading = plants.querySelector(":scope > .section-heading");
      const intro = plants.querySelector(":scope > .plant-intro-card");
      const grid = plants.querySelector(":scope > .plant-method-grid");
      const takeaway = plants.querySelector(":scope > .plant-takeaway");
      const methods = grid ? [...grid.children] : [];
      if (grid) {
        const first = grid.cloneNode(false);
        methods.slice(0, 2).forEach(card => first.appendChild(card));
        makeSlide(plants, [heading, intro, first], "plants", "plant-topic-slide");
        const second = grid.cloneNode(false);
        methods.slice(2).forEach(card => second.appendChild(card));
        const h2 = makeHeading(heading, "PLANT WASTE MANAGEMENT · 2 OF 2", "More ways plants <em>manage waste.</em>");
        const eyebrow = h2.querySelector(".eyebrow");
        if (eyebrow) eyebrow.textContent = "PLANT WASTE MANAGEMENT · 2 OF 2";
        makeSlide(plants, [h2, second, takeaway], "plants-2", "plant-topic-slide");
      }
    }

    // One complete simulator slide; condition controls become a compact 3 × 3 grid.
    const simulator = source.find(el => el.id === "simulator");
    if (simulator) makeSlide(simulator, [...simulator.children], "simulator", "simulator-deck-slide");

    // Closing slide is a simple thank-you, not another summary page.
    const closing = source.find(el => el.id === "about");
    if (closing) makeSlide(closing, [...closing.children], "about", "closing-slide");

    removeSource();

    let index = 0;
    function showSlide(nextIndex) {
      index = Math.max(0, Math.min(nextIndex, slides.length - 1));
      slides.forEach((slide, i) => {
        const active = i === index;
        slide.classList.toggle("active-slide", active);
        slide.setAttribute("aria-hidden", active ? "false" : "true");
        slide.style.display = active ? "flex" : "none";
        if (active) slide.scrollTop = 0;
      });
      counter.textContent = `${String(index + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
      progress.style.width = `${(index + 1) / slides.length * 100}%`;
      previous.disabled = index === 0;
      next.disabled = index === slides.length - 1;
      previous.style.visibility = index === 0 ? "hidden" : "visible";
      next.textContent = index === slides.length - 1 ? "FINISH" : "NEXT →";
      dock.setAttribute("aria-label", `Slide ${index + 1} of ${slides.length}`);
    }
    previous.onclick = () => showSlide(index - 1);
    next.onclick = () => showSlide(index + 1);
    document.onkeydown = event => {
      if (event.altKey || event.ctrlKey || event.metaKey) return;
      if (["INPUT", "TEXTAREA", "SELECT", "BUTTON"].includes(event.target?.tagName) || event.target?.isContentEditable) return;
      if (["ArrowRight", "PageDown", " "].includes(event.key)) { event.preventDefault(); showSlide(index + 1); }
      if (["ArrowLeft", "PageUp"].includes(event.key)) { event.preventDefault(); showSlide(index - 1); }
    };
    document.querySelectorAll('a[href^="#"]').forEach(link => link.addEventListener("click", event => {
      const target = slides.findIndex(slide => slide.id === link.getAttribute("href").slice(1));
      if (target >= 0) { event.preventDefault(); showSlide(target); document.getElementById("navLinks")?.classList.remove("open"); }
    }));
    showSlide(0);
    console.info(`Presentation ready: ${slides.length} slides.`);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", startPresentation, { once: true });
  else startPresentation();
})();
