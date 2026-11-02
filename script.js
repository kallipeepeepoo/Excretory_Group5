const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

$("#menuToggle").addEventListener("click", () => $("#navLinks").classList.toggle("open"));
$$(".nav-links a").forEach(link => link.addEventListener("click", () => $("#navLinks").classList.remove("open")));

/* -------------------- Anatomy explorer -------------------- */
const organInfo = {
  kidney: {
    title: "Kidneys",
    description: "A pair of bean-shaped organs located toward the back of the upper abdomen, on either side of the spine. They filter blood, remove wastes, and regulate water and electrolyte balance.",
    fact: "Each kidney contains many nephrons, its microscopic functional units."
  },
  ureter: {
    title: "Ureters",
    description: "Two muscular tubes that carry urine from the renal pelvis of each kidney to the urinary bladder through rhythmic contractions called peristalsis.",
    fact: "There is one ureter connecting each kidney to the bladder."
  },
  bladder: {
    title: "Urinary bladder",
    description: "A hollow, muscular organ in the pelvic cavity that temporarily stores urine until urination.",
    fact: "The detrusor muscle in the bladder wall contracts during urination."
  },
  urethra: {
    title: "Urethra",
    description: "The tube that carries urine from the bladder to the outside of the body. Its length differs between typical male and female anatomy.",
    fact: "The urethra is the final passageway for urine to leave the body."
  },
  nephron: {
    title: "The nephron",
    description: "The microscopic functional unit of the kidney. It includes a renal corpuscle and a renal tubule, where filtration, reabsorption, and secretion take place.",
    fact: "The three key processes of urine formation are filtration, reabsorption, and secretion."
  },
  sweat: {
    title: "Sweat glands",
    description: "Coiled tubular glands in the skin. Eccrine glands produce watery sweat that reaches the skin surface and helps cool the body through evaporation.",
    fact: "Sweat is mostly water with dissolved salts, especially sodium and chloride."
  }
};

const anatomyDiagrams = {
  kidney: `<svg viewBox="0 0 360 250" role="img" aria-label="Detailed bean-shaped kidney cross-section"><defs><linearGradient id="kidShell" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#f2b0a4"/><stop offset=".55" stop-color="#bd5e75"/><stop offset="1" stop-color="#71364f"/></linearGradient></defs><path d="M164 35 C91 8 48 62 59 132 C70 204 132 226 177 187 C208 160 203 134 181 119 C158 104 151 91 169 73 C187 55 190 45 164 35Z" fill="url(#kidShell)" stroke="#ffd0c7" stroke-width="5"/><path d="M153 48 C99 30 70 76 79 132 C88 184 131 202 165 173 C185 155 184 139 165 125 C143 108 137 88 153 48Z" fill="none" stroke="#f7c9ad" stroke-width="12"/><path d="M111 79 L145 98 L126 128Z M143 60 L169 91 L146 119Z M98 132 L137 145 L120 171Z M141 135 L166 148 L150 170Z" fill="#8f405c" stroke="#d88a91" stroke-width="2"/><path d="M179 117 Q216 125 228 158 Q202 164 177 143Z" fill="#f4c27e" stroke="#ffe0b2" stroke-width="3"/><path d="M215 149 Q250 158 272 174" fill="none" stroke="#d98c69" stroke-width="10" stroke-linecap="round"/><path d="M213 128 Q249 111 277 119" fill="none" stroke="#c84d62" stroke-width="8" stroke-linecap="round"/><path d="M213 140 Q250 138 278 146" fill="none" stroke="#75b6df" stroke-width="8" stroke-linecap="round"/><g fill="#c9dce8" font-size="11"><text x="16" y="28">RENAL CORTEX</text><path d="M105 31 L120 54" stroke="#c9dce8"/><text x="18" y="225">RENAL MEDULLA</text><path d="M120 211 L137 171" stroke="#c9dce8"/><text x="244" y="92">RENAL VESSELS</text><path d="M250 98 L239 126" stroke="#c9dce8"/><text x="245" y="205">URETER</text><path d="M245 196 L231 174" stroke="#c9dce8"/></g></svg>`,
  ureter: `<svg viewBox="0 0 360 250" role="img" aria-label="Ureter carrying urine from kidney to bladder"><path d="M94 35 C60 24 44 55 53 88 C62 121 91 119 108 97 C120 80 111 51 94 35Z" fill="#bd6177" stroke="#ffd0c7" stroke-width="4"/><path d="M105 90 C145 111 139 140 164 164 C183 183 188 191 181 209" fill="none" stroke="#8b4b63" stroke-width="18" stroke-linecap="round"/><path d="M105 90 C145 111 139 140 164 164 C183 183 188 191 181 209" fill="none" stroke="#f0b2a4" stroke-width="9" stroke-linecap="round"/><path d="M105 90 C145 111 139 140 164 164 C183 183 188 191 181 209" fill="none" stroke="#b5e4ed" stroke-width="3" stroke-dasharray="5 9"/><path d="M150 205 Q180 185 210 205 Q219 229 180 238 Q141 229 150 205Z" fill="#d88a70" stroke="#ffd7b4" stroke-width="3"/><g fill="#c9dce8" font-size="12"><text x="18" y="24">RENAL PELVIS</text><text x="205" y="111">URETER</text><text x="229" y="231">BLADDER</text></g></svg>`,
  bladder: `<svg viewBox="0 0 360 250" role="img" aria-label="Urinary bladder cross-section"><path d="M180 42 C132 42 105 75 113 132 C120 190 147 211 180 216 C213 211 240 190 247 132 C255 75 228 42 180 42Z" fill="#d98b70" stroke="#ffd5b2" stroke-width="6"/><path d="M124 137 Q180 116 236 137 Q230 190 180 199 Q130 190 124 137Z" fill="#8b4d6d" opacity=".65"/><path d="M142 50 L126 20 M218 50 L234 20" stroke="#bd6177" stroke-width="11" stroke-linecap="round"/><path d="M180 214 V245" stroke="#d9a078" stroke-width="13" stroke-linecap="round"/><g fill="#c9dce8" font-size="12"><text x="14" y="25">URETERS</text><text x="250" y="103">DETRUSOR</text><path d="M247 108 L228 124" stroke="#c9dce8"/><text x="228" y="236">URETHRA</text></g></svg>`,
  urethra: `<svg viewBox="0 0 360 250" role="img" aria-label="Urethra leading from bladder to outside"><path d="M180 22 C139 22 116 52 123 92 C130 128 151 143 180 147 C209 143 230 128 237 92 C244 52 221 22 180 22Z" fill="#d98b70" stroke="#ffd5b2" stroke-width="5"/><path d="M180 145 C178 174 180 207 180 232" fill="none" stroke="#9a5b6c" stroke-width="22" stroke-linecap="round"/><path d="M180 145 C178 174 180 207 180 232" fill="none" stroke="#f2c6a4" stroke-width="10" stroke-linecap="round"/><path d="M180 158 V225" stroke="#b6e5ed" stroke-width="3" stroke-dasharray="5 8"/><g fill="#c9dce8" font-size="12"><text x="15" y="35">BLADDER</text><text x="218" y="202">URETHRA</text></g></svg>`,
  nephron: `<svg viewBox="0 0 360 250" role="img" aria-label="Nephron with glomerulus and renal tubule"><circle cx="85" cy="85" r="34" fill="#b65b73" stroke="#ffd0c7" stroke-width="4"/><path d="M65 87 C65 52 109 54 109 84 C109 112 66 118 66 88 M77 56 C116 68 53 103 94 111 M55 82 C90 47 115 102 82 117" fill="none" stroke="#f3b4a8" stroke-width="5"/><path d="M118 85 C165 45 202 55 192 100 C183 143 137 124 151 159 C166 195 215 174 229 142 C248 101 207 86 224 62 C241 38 281 54 278 85 L278 216" fill="none" stroke="#d89b70" stroke-width="10" stroke-linecap="round"/><path d="M118 85 C165 45 202 55 192 100 C183 143 137 124 151 159 C166 195 215 174 229 142 C248 101 207 86 224 62 C241 38 281 54 278 85 L278 216" fill="none" stroke="#f6d4b0" stroke-width="4" stroke-linecap="round"/><g fill="#c9dce8" font-size="11"><text x="25" y="145">GLOMERULUS</text><text x="185" y="235">COLLECTING DUCT</text><text x="200" y="25">RENAL TUBULE</text></g></svg>`,
  sweat: `<svg viewBox="0 0 360 250" role="img" aria-label="Coiled eccrine sweat gland in skin layers"><path d="M15 52 H345" stroke="#efc49e" stroke-width="30"/><path d="M15 89 H345" stroke="#c88e70" stroke-width="42"/><path d="M15 147 H345" stroke="#8c655d" stroke-width="62"/><path d="M180 37 V116 Q180 132 157 143 Q130 158 140 188 Q150 218 180 205 Q208 192 190 171 Q178 157 165 170" fill="none" stroke="#c28aef" stroke-width="9" stroke-linecap="round"/><path d="M180 37 V15" stroke="#c28aef" stroke-width="6"/><circle cx="180" cy="12" r="6" fill="#e2c4ff"/><g fill="#c9dce8" font-size="12"><text x="18" y="20">EPIDERMIS</text><text x="18" y="83">DERMIS</text><text x="18" y="229">COILED SWEAT GLAND</text></g></svg>`
};

function selectOrgan(key) {
  const item = organInfo[key] || organInfo.kidney;
  $("#anatomyTitle").textContent = item.title;
  $("#anatomyDescription").textContent = item.description;
  $("#anatomyFact").textContent = item.fact;
  $$(".organ-chip").forEach(button => button.classList.toggle("active", button.dataset.detail === key));
  const visual = $("#anatomyVisual");
  visual.innerHTML = anatomyDiagrams[key] || anatomyDiagrams.kidney;
  visual.dataset.organ = key;
}

$$(".organ-chip").forEach(button => button.addEventListener("click", () => selectOrgan(button.dataset.detail)));

$$("[data-organ]").forEach(button => button.addEventListener("click", () => {
  selectOrgan(button.dataset.organ);
  $("#anatomyPanel").scrollIntoView({ behavior: "smooth", block: "center" });
}));

selectOrgan("kidney");

/* -------------------- Disease pathway simulator -------------------- */
const conditions = {
  normal: {
    eyebrow: "NORMAL PATHWAY",
    state: "FUNCTIONING",
    title: "Normal urine formation",
    description: "The kidneys filter blood, adjust water and electrolyte levels, and produce urine. Urine travels through the urinary tract before leaving the body.",
    steps: ["Blood enters the kidneys for filtration.", "Useful substances and needed water are reabsorbed.", "Urine travels through the ureters to the bladder.", "Urine leaves the body through the urethra."],
    foot: "The flow shown is simplified and represents the normal route of urine.",
    visual: ""
  },
  uti: {
    eyebrow: "INFECTION PATHWAY",
    state: "INFLAMMATION",
    title: "Urinary tract infection",
    description: "Bacteria can enter through the urethra and multiply in the urinary tract. Infection may affect the bladder and can sometimes spread upward toward the kidneys.",
    steps: ["Bacteria enter through the urethra.", "They may multiply in the bladder.", "Inflammation can cause burning or frequent urination.", "An infection may spread to the kidneys."],
    foot: "UTI is a broad term that includes infections in different parts of the urinary tract.",
    visual: "infection"
  },
  cystitis: {
    eyebrow: "BLADDER INFLAMMATION",
    state: "IRRITATED BLADDER",
    title: "Cystitis",
    description: "Cystitis is inflammation of the urinary bladder, commonly caused by a bacterial infection. The bladder wall becomes irritated and may cause urgency, frequency, and discomfort during urination.",
    steps: ["Bacteria may enter through the urethra.", "The bladder lining becomes inflamed.", "The bladder may feel irritated even when it contains little urine.", "Medical assessment helps confirm the cause and guide treatment."],
    foot: "Cystitis commonly refers to bladder inflammation and is often associated with a lower UTI.",
    visual: "infection"
  },
  pyelo: {
    eyebrow: "KIDNEY INFECTION",
    state: "INFECTION",
    title: "Pyelonephritis",
    description: "Pyelonephritis is an infection involving one or both kidneys. It can occur when bacteria from the lower urinary tract travel upward. It needs prompt medical assessment.",
    steps: ["Bacteria may ascend from the bladder through a ureter.", "The kidney tissue and collecting system become infected.", "Fever, chills, nausea, and side or back pain may occur.", "Clinical assessment and appropriate treatment are important."],
    foot: "Fever with side or back pain can indicate kidney involvement and needs prompt medical care.",
    visual: "kidney-infection"
  },
  ckd: {
    eyebrow: "REDUCED KIDNEY FUNCTION",
    state: "IMPAIRED FILTRATION",
    title: "Chronic kidney disease",
    description: "Chronic kidney disease involves abnormalities of kidney structure or function that persist over time. As function declines, waste removal and fluid and electrolyte regulation can become impaired.",
    steps: ["Kidney damage persists over time.", "Filtering capacity may gradually decline.", "Waste products and fluid may become harder to regulate.", "Monitoring and treatment aim to slow progression and manage complications."],
    foot: "CKD is a long-term condition. Blood and urine tests help assess kidney function and damage.",
    visual: "decreased"
  },
  aki: {
    eyebrow: "SUDDEN KIDNEY FUNCTION CHANGE",
    state: "ACUTE IMPAIRMENT",
    title: "Acute kidney injury",
    description: "Acute kidney injury (AKI) is a sudden decline in kidney function. It may be associated with severe illness, reduced blood flow to the kidneys, blockage, or certain medicines.",
    steps: ["A sudden problem affects kidney function.", "The kidneys filter less effectively.", "Waste products and fluid may build up in the body.", "Prompt medical evaluation is needed to identify and treat the cause."],
    foot: "AKI differs from CKD because it develops over a short period and may sometimes improve when the cause is treated.",
    visual: "acute"
  },
  stones: {
    eyebrow: "OBSTRUCTION PATHWAY",
    state: "FLOW MAY BE BLOCKED",
    title: "Kidney stones",
    description: "Minerals and salts can form crystals that grow into stones. A stone may move from the kidney into a ureter and partially or completely obstruct urine flow.",
    steps: ["Minerals become concentrated in urine.", "Crystals can form and grow into a stone.", "A stone may move from the kidney into a ureter.", "The stone can obstruct urine flow and cause pain."],
    foot: "The stone is placed directly on the ureter pathway in this illustration. A stone does not always cause a complete blockage.",
    visual: "obstruction"
  },
  glomerulo: {
    eyebrow: "FILTER UNIT INFLAMMATION",
    state: "GLOMERULAR DAMAGE",
    title: "Glomerulonephritis",
    description: "Glomerulonephritis is inflammation or damage involving the glomeruli, the tiny capillary networks where blood filtration begins. It can affect the kidney's filtering barrier.",
    steps: ["The glomeruli become inflamed or damaged.", "The filtering barrier may allow blood or protein into urine.", "Swelling and high blood pressure may occur.", "Urine and blood tests help assess kidney function and damage."],
    foot: "This simplified diagram highlights the kidneys. The actual inflammation occurs in microscopic glomeruli inside nephrons.",
    visual: "glomerular"
  },
  retention: {
    eyebrow: "URINE OUTFLOW PROBLEM",
    state: "INCOMPLETE EMPTYING",
    title: "Urinary retention",
    description: "Urinary retention means difficulty emptying the bladder completely. It can result from an obstruction, nerve-related problems, or other conditions affecting bladder emptying.",
    steps: ["Urine reaches and collects in the bladder.", "The bladder does not empty normally.", "Residual urine remains after attempted urination.", "Sudden inability to urinate needs urgent medical care."],
    foot: "The bladder is shown distended to represent retained urine. The underlying cause needs medical assessment.",
    visual: "retention"
  },
  "sweat-normal": {
    eyebrow: "NORMAL SWEAT PATHWAY", state: "COOLING", title: "Normal sweating",
    description: "Eccrine sweat glands release watery sweat onto the skin. As sweat evaporates, heat leaves the body and helps maintain a stable temperature.",
    steps: ["Body temperature rises.", "The hypothalamus signals eccrine sweat glands.", "Sweat travels through a duct to a skin pore.", "Evaporation removes heat from the skin."],
    foot: "The illustration shows a simplified cross-section of skin and one eccrine sweat gland.", visual: ""
  },
  hyperhidrosis: {
    eyebrow: "EXCESSIVE SWEATING", state: "OVERACTIVE SWEATING", title: "Hyperhidrosis",
    description: "Hyperhidrosis is sweating greater than needed for temperature control. It may affect the palms, soles, underarms, face, or other areas, even when the body does not need extra cooling.",
    steps: ["Sweat glands receive or respond to signals.", "Sweat production is excessive for the situation.", "Clothing or skin may remain unusually wet.", "A health professional can assess causes and treatment options."],
    foot: "Hyperhidrosis describes excessive sweating; it is not the same as normal sweating during exercise or heat.", visual: "sweat-excess"
  },
  anhidrosis: {
    eyebrow: "REDUCED OR ABSENT SWEATING", state: "LESS COOLING", title: "Anhidrosis / hypohidrosis",
    description: "Anhidrosis is the inability to sweat normally; hypohidrosis means reduced sweating. Because sweat helps cool the body, reduced sweating can increase the risk of overheating.",
    steps: ["The body temperature begins to rise.", "Sweat production is reduced or absent.", "Less sweat reaches the skin surface.", "The body may overheat, especially in hot conditions."],
    foot: "Reduced sweating over a large area can be serious because the body may not cool effectively.", visual: "sweat-low"
  },
  miliaria: {
    eyebrow: "BLOCKED SWEAT DUCTS", state: "TRAPPED SWEAT", title: "Miliaria (heat rash)",
    description: "Miliaria develops when sweat ducts become blocked and sweat is trapped in or beneath the skin. It can cause clusters of small itchy or prickly bumps, often in hot and humid conditions.",
    steps: ["Heat and sweating increase.", "A sweat duct becomes blocked.", "Sweat is trapped beneath the skin surface.", "Small itchy or prickly bumps may appear."],
    foot: "Heat rash affects the skin around blocked sweat ducts; it is not a kidney or urinary tract condition.", visual: "sweat-blocked"
  },
  bromhidrosis: {
    eyebrow: "SWEAT-RELATED BODY ODOUR", state: "ODOUR", title: "Bromhidrosis", 
    description: "Bromhidrosis is noticeable body odour associated with sweat. Odour can develop when skin bacteria break down substances in sweat, particularly in warm, moist areas such as the underarms and feet.",
    steps: ["Sweat and skin secretions reach the surface.", "Bacteria naturally present on the skin break down substances.", "Odour-producing compounds may form.", "Washing, breathable clothing, and clinical advice when persistent may help."],
    foot: "Sweat itself is usually not strongly scented; skin bacteria and other factors contribute to body odour.", visual: "sweat-odour"
  }
};

let activeCondition = "normal";

function renderCondition(key) {
  activeCondition = conditions[key] ? key : "normal";
  const data = conditions[activeCondition];

  $("#simEyebrow").textContent = data.eyebrow;
  $("#simState").textContent = data.state;
  $("#simTitle").textContent = data.title;
  $("#simDescription").textContent = data.description;
  $("#simFootnote").textContent = data.foot;

  $("#simSteps").innerHTML = data.steps
    .map((step, i) => `<div class="step-item"><span>${i + 1}</span>${step}</div>`)
    .join("");

  $$(".condition-button").forEach(button => {
    button.classList.toggle("active", button.dataset.condition === activeCondition);
  });

  const visual = $(".sim-visual");
  visual.classList.remove(
    "infection",
    "decreased",
    "obstruction",
    "kidney-infection",
    "acute",
    "glomerular",
    "retention"
  );

  if (data.visual) visual.classList.add(data.visual);

  const marks = {
    uti: `<g fill="#ff8b72"><circle cx="219" cy="253" r="5"/><circle cx="204" cy="246" r="4"/><circle cx="232" cy="263" r="4"/><circle cx="216" cy="233" r="3"/></g>`,
    cystitis: `<path d="M193 247 Q220 225 247 247" fill="none" stroke="#ff8d91" stroke-width="8" stroke-linecap="round"/><g fill="#ff9c83"><circle cx="210" cy="257" r="4"/><circle cx="231" cy="254" r="4"/></g>`,
    pyelo: `<g fill="#ff7d89" opacity=".9"><circle cx="164" cy="158" r="7"/><circle cx="174" cy="175" r="5"/><circle cx="278" cy="158" r="7"/><circle cx="269" cy="175" r="5"/></g>`,
    stones: `<g><path d="M215 215 L221 210 L228 214 L230 223 L223 229 L215 224Z" fill="#ffbd70" stroke="#fff0c8" stroke-width="2"/><circle cx="222" cy="219" r="2" fill="#fff2c7"/><path d="M207 220 Q222 202 237 220" fill="none" stroke="#ffbd70" stroke-width="1.5" stroke-dasharray="3 3"/></g>`,
    glomerulo: `<g fill="none" stroke="#ff8f9d" stroke-width="3"><circle cx="166" cy="158" r="10"/><circle cx="274" cy="158" r="10"/></g>`,
    retention: `<path d="M197 244 Q220 229 243 244" fill="none" stroke="#ffbf76" stroke-width="7"/><path d="M220 287 V306" stroke="#ffbf76" stroke-width="3" stroke-dasharray="2 5"/>`
  };

  $("#simProblem").innerHTML = marks[activeCondition] || "";
  $("#simUrinary").classList.toggle("hidden", $("#simSystem").value === "sweat");
  $("#simSweat").classList.toggle("hidden", $("#simSystem").value !== "sweat");
  $("#simUrinaryLabels").classList.toggle("hidden", $("#simSystem").value === "sweat");

  if ($("#simSystem").value === "sweat") {
    const sweatData = conditions[activeCondition] && activeCondition !== "normal" && !["uti","cystitis","pyelo","ckd","aki","stones","glomerulo","retention"].includes(activeCondition)
      ? data : conditions["sweat-normal"];
    $("#simEyebrow").textContent = sweatData.eyebrow;
    $("#simState").textContent = sweatData.state;
    $("#simTitle").textContent = sweatData.title;
    $("#simDescription").textContent = sweatData.description;
    $("#simSteps").innerHTML = sweatData.steps.map((step, i) => `<div class="step-item"><span>${i + 1}</span>${step}</div>`).join("");
    $("#simFootnote").textContent = sweatData.foot;
    $("#simProblem").innerHTML = "";
    $(".sim-visual").classList.remove("infection","decreased","obstruction","kidney-infection","acute","glomerular","retention");
    if (sweatData.visual) $(".sim-visual").classList.add(sweatData.visual);
  }

}

const urinaryChoices = [
  ["normal","Normal function","Urine formation and flow"],["uti","Urinary tract infection","Infection in the urinary tract"],
  ["cystitis","Cystitis","Bladder inflammation"],["pyelo","Pyelonephritis","Kidney infection"],
  ["ckd","Chronic kidney disease","Long-term loss of function"],["aki","Acute kidney injury","Sudden decline in function"],
  ["stones","Kidney stones","Mineral deposits may block a ureter"],["glomerulo","Glomerulonephritis","Inflammation of kidney filters"],
  ["retention","Urinary retention","Difficulty emptying the bladder"]
];
const sweatChoices = [
  ["sweat-normal","Normal sweating","Cooling through evaporation"],["hyperhidrosis","Hyperhidrosis","Excessive sweating"],
  ["anhidrosis","Anhidrosis / hypohidrosis","Reduced or absent sweating"],["miliaria","Miliaria (heat rash)","Blocked sweat ducts"],
  ["bromhidrosis","Bromhidrosis","Sweat-related body odour"]
];
function setConditionChoices(system) {
  const choices = system === "sweat" ? sweatChoices : urinaryChoices;
  const controls = $(".sim-controls");
  controls.querySelectorAll(".condition-button").forEach(button => button.remove());
  const heading = controls.querySelector(".eyebrow");
  choices.forEach(([id,title,subtitle], index) => {
    const button = document.createElement("button");
    button.className = "condition-button";
    button.dataset.condition = id;
    button.innerHTML = `<span class="condition-number">${String(index + 1).padStart(2,"0")}</span><span><strong>${title}</strong><small>${subtitle}</small></span><b>→</b>`;
    button.addEventListener("click", () => renderCondition(id));
    controls.insertBefore(button, controls.querySelector(".sim-system-toggle"));
  });
  if (heading) heading.textContent = system === "sweat" ? "SWEAT CONDITIONS" : "URINARY CONDITIONS";
  renderCondition(choices[0][0]);
}

$("#simSystem").addEventListener("change", () => setConditionChoices($("#simSystem").value));
setConditionChoices("urinary");

/* -------------------- Scanner system + educational condition overlays -------------------- */
const scannerConditionInfo = {
  normal: "Normal pathway: blood is filtered in the kidneys, and urine travels through the ureters to the bladder.",
  uti: "UTI simulation: symbolic bacteria are shown around the lower urinary tract. This is an educational overlay, not a test for infection.",
  cystitis: "Cystitis simulation: the bladder wall is highlighted to represent inflammation. It cannot be identified through a webcam.",
  pyelo: "Pyelonephritis simulation: both kidney areas are highlighted to represent a kidney infection. This is not medical imaging.",
  ckd: "CKD simulation: both kidneys are shaded to represent long-term loss of filtering function. Real CKD cannot be seen through a webcam.",
  aki: "AKI simulation: kidney areas are highlighted to represent a sudden decline in function. A webcam cannot detect this condition.",
  stones: "Kidney-stone simulation: a mineral deposit is placed on the ureter pathway, where it may obstruct urine flow.",
  glomerulo: "Glomerulonephritis simulation: the kidney filters are symbolically highlighted. The actual affected structures are microscopic glomeruli.",
  retention: "Urinary-retention simulation: the bladder is highlighted to represent incomplete emptying. This is not a diagnosis."
};

function updateScannerDescription() {
  const system = $("#scannerSystem").value;
  const condition = $("#scannerCondition").value;
  const guide = $("#guideOrgans");

  // The current HTML does not contain this optional group.
  // Check that it exists before trying to update it.
  if (guide) {
    guide.querySelectorAll(".kidney,.ureter,.bladder,.urethra").forEach(el => {
      el.style.opacity = system === "sweat" ? ".12" : "1";
    });

    guide.querySelectorAll(".sweat-dots").forEach(el => {
      el.style.opacity = system === "urinary" ? ".12" : "1";
    });
  }

  $("#guideTitle").textContent =
    system === "sweat"
      ? "Sweat glands across the skin"
      : system === "urinary"
        ? "Urinary organs"
        : "Approximate organ locations";

  $("#guideDescription").textContent =
    system === "sweat"
      ? "Sweat glands are distributed throughout the skin. The dots are symbolic indicators, not a map of every gland."
      : "The kidneys, ureters, bladder, and urethra are shown in approximate positions. The camera tracks body landmarks, not internal organs.";

  $("#scannerConditionNote").textContent =
    system === "sweat" && condition !== "normal"
      ? "This condition selector illustrates urinary conditions. Switch the highlight system to Urinary system to view the selected disease simulation."
      : scannerConditionInfo[condition];
}

$("#scannerSystem").addEventListener("change", updateScannerDescription);

$("#scannerCondition").addEventListener("change", (event) => {
  updateScannerDescription();
  if (conditions[event.target.value]) renderCondition(event.target.value);
});

// The simulator and webcam scanner share the same selected condition.
$$(".condition-button").forEach(button => {
  button.addEventListener("click", () => {
    $("#scannerCondition").value = button.dataset.condition;
    updateScannerDescription();
  });
});

updateScannerDescription();

/* -------------------- Webcam + MediaPipe pose landmarks -------------------- */
const video = $("#webcam");
const canvas = $("#poseCanvas");
const ctx = canvas.getContext("2d");

let cameraStream = null;
let poseLandmarker = null;
let animationFrame = null;
let lastVideoTime = -1;
let isDetecting = false;

async function loadPoseDetector() {
  if (poseLandmarker) return poseLandmarker;

  $("#scanMessage").textContent = "Loading body detection model...";

  // Load the optional pose library only after the webcam is already running.
  // If the CDN, model file, or graphics backend is unavailable, the live preview remains usable.
  const { FilesetResolver, PoseLandmarker } = await import(
    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/+esm"
  );
  const vision = await FilesetResolver.forVisionTasks(
    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm"
  );
  poseLandmarker = await PoseLandmarker.createFromOptions(vision, {
    baseOptions: {
      modelAssetPath: "https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task",
      delegate: "GPU"
    },
    runningMode: "VIDEO",
    numPoses: 1
  }).catch(() => PoseLandmarker.createFromOptions(vision, {
    baseOptions: {
      modelAssetPath: "https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task",
      delegate: "CPU"
    },
    runningMode: "VIDEO",
    numPoses: 1
  }));

  return poseLandmarker;
}

function drawKidney(x, y, w, h, flip, condition) {
  ctx.save();
  ctx.translate(x, y);

  if (flip) ctx.scale(-1, 1);

  const impaired = condition === "ckd";
  const shell = ctx.createLinearGradient(-w, -h, w, h);

  shell.addColorStop(0, impaired ? "#a96c82" : "#f1a0a4");
  shell.addColorStop(.48, impaired ? "#76556f" : "#b94e67");
  shell.addColorStop(1, impaired ? "#4e405e" : "#71334f");

  ctx.shadowColor = impaired ? "rgba(217,112,145,.45)" : "rgba(242,126,146,.55)";
  ctx.shadowBlur = 15;
  ctx.fillStyle = shell;
  ctx.strokeStyle = impaired ? "#d9a0b2" : "#ffd0c5";
  ctx.lineWidth = Math.max(1.5, w * .055);

  ctx.beginPath();
  ctx.moveTo(-w * .10, -h * .50);
  ctx.bezierCurveTo(-w * .62, -h * .72, -w * 1.02, -h * .30, -w * .88, h * .18);
  ctx.bezierCurveTo(-w * .78, h * .62, -w * .34, h * .78, w * .10, h * .48);
  ctx.bezierCurveTo(w * .34, h * .31, w * .34, h * .10, w * .12, -h * .02);
  ctx.bezierCurveTo(w * .02, -h * .08, -w * .02, -h * .16, w * .18, -h * .25);
  ctx.bezierCurveTo(w * .52, -h * .40, w * .48, -h * .70, w * .12, -h * .62);
  ctx.bezierCurveTo(w * .02, -h * .60, -w * .04, -h * .54, -w * .10, -h * .50);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.shadowBlur = 0;

  // Outer cortex and inner medullary texture.
  ctx.strokeStyle = impaired ? "rgba(241,190,202,.45)" : "rgba(255,218,207,.68)";
  ctx.lineWidth = Math.max(1, w * .045);
  ctx.beginPath();
  ctx.moveTo(-w * .48, -h * .30);
  ctx.quadraticCurveTo(-w * .78, h * .12, -w * .35, h * .43);
  ctx.quadraticCurveTo(w * .02, h * .58, w * .30, h * .20);
  ctx.stroke();

  const medulla = impaired ? "#9e718b" : "#8d405d";
  ctx.fillStyle = medulla;

  for (let i = 0; i < 4; i++) {
    const yy = -h * .27 + i * h * .17;
    ctx.beginPath();
    ctx.moveTo(-w * .36 + i * w * .045, yy);
    ctx.lineTo(-w * .05 + i * w * .02, yy + h * .11);
    ctx.lineTo(w * .10, yy - h * .025);
    ctx.closePath();
    ctx.fill();
  }

  // Renal hilum and vessels.
  ctx.strokeStyle = "#f2b2a4";
  ctx.lineWidth = Math.max(2, w * .075);
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(w * .18, h * .03);
  ctx.lineTo(w * .58, h * .03);
  ctx.stroke();

  ctx.strokeStyle = "#e76d79";
  ctx.lineWidth = Math.max(1.5, w * .055);
  ctx.beginPath();
  ctx.moveTo(w * .28, h * .12);
  ctx.lineTo(w * .60, h * .18);
  ctx.stroke();

  ctx.strokeStyle = "#77b9df";
  ctx.beginPath();
  ctx.moveTo(w * .28, -h * .06);
  ctx.lineTo(w * .60, -h * .12);
  ctx.stroke();

  if (impaired) {
    ctx.fillStyle = "rgba(246,211,220,.72)";

    for (let i = 0; i < 7; i++) {
      const px = -w * .48 + (i % 3) * w * .27;
      const py = -h * .23 + Math.floor(i / 3) * h * .18;

      ctx.beginPath();
      ctx.arc(px, py, Math.max(1.2, w * .035), 0, Math.PI * 2);
      ctx.fill();
    }
  }

  ctx.restore();
}

function drawBladder(x, y, w, h, condition) {
  ctx.save();

  const bladder = ctx.createRadialGradient(x - w * .25, y - h * .35, 1, x, y, h);
  bladder.addColorStop(0, "#ffd0a0");
  bladder.addColorStop(.7, "#d88962");
  bladder.addColorStop(1, "#814b55");

  ctx.shadowColor = condition === "uti" ? "rgba(255,91,105,.9)" : "rgba(255,181,111,.45)";
  ctx.shadowBlur = condition === "uti" ? 22 : 12;
  ctx.fillStyle = bladder;
  ctx.strokeStyle = condition === "uti" ? "#ff9b9e" : "#ffe0bd";
  ctx.lineWidth = Math.max(1.5, w * .07);

  ctx.beginPath();
  ctx.moveTo(x - w * .48, y - h * .18);
  ctx.bezierCurveTo(x - w * .56, y - h * .75, x + w * .56, y - h * .75, x + w * .48, y - h * .18);
  ctx.bezierCurveTo(x + w * .42, y + h * .46, x + w * .18, y + h * .60, x, y + h * .62);
  ctx.bezierCurveTo(x - w * .18, y + h * .60, x - w * .42, y + h * .46, x - w * .48, y - h * .18);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.shadowBlur = 0;

  // Simplified urine volume inside the bladder.
  ctx.save();
  ctx.beginPath();
  ctx.ellipse(x, y + h * .18, w * .36, h * .30, 0, 0, Math.PI * 2);
  ctx.clip();

  ctx.fillStyle = "rgba(177,139,220,.42)";
  ctx.fillRect(x - w, y + (-h * .02), w * 2, h);

  ctx.restore();
  ctx.restore();
}

function drawStone(x, y, size) {
  ctx.save();
  ctx.shadowColor = "#ffb45f";
  ctx.shadowBlur = 18;

  const stone = ctx.createRadialGradient(x - size * .25, y - size * .3, 1, x, y, size);
  stone.addColorStop(0, "#fff0bd");
  stone.addColorStop(.45, "#e7a75d");
  stone.addColorStop(1, "#9a573f");

  ctx.fillStyle = stone;
  ctx.strokeStyle = "#ffe2a8";
  ctx.lineWidth = 1.8;

  ctx.beginPath();
  ctx.moveTo(x, y - size);
  ctx.lineTo(x + size * .72, y - size * .48);
  ctx.lineTo(x + size, y + size * .25);
  ctx.lineTo(x + size * .25, y + size);
  ctx.lineTo(x - size * .68, y + size * .58);
  ctx.lineTo(x - size, y - size * .12);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.restore();
}

function drawContextSystems(centerX, shoulderY, hipY, torsoWidth, torsoHeight) {
  ctx.save();
  ctx.globalAlpha = 0.58;

  const top = shoulderY + torsoHeight * 0.10;
  const chestY = shoulderY + torsoHeight * 0.23;
  const midY = shoulderY + torsoHeight * 0.48;
  const lowerY = shoulderY + torsoHeight * 0.72;

  // Major vessels: aorta and vena cava, with renal branches.
  ctx.lineCap = "round";
  ctx.strokeStyle = "#b96c83";
  ctx.lineWidth = Math.max(3, torsoWidth * 0.026);
  ctx.beginPath();
  ctx.moveTo(centerX + torsoWidth * .045, top);
  ctx.bezierCurveTo(centerX + torsoWidth * .08, chestY, centerX + torsoWidth * .05, midY, centerX + torsoWidth * .02, hipY);
  ctx.stroke();

  ctx.strokeStyle = "#7897bd";
  ctx.lineWidth = Math.max(3, torsoWidth * 0.022);
  ctx.beginPath();
  ctx.moveTo(centerX - torsoWidth * .055, top + torsoHeight * .02);
  ctx.bezierCurveTo(centerX - torsoWidth * .09, chestY, centerX - torsoWidth * .07, midY, centerX - torsoWidth * .035, hipY);
  ctx.stroke();

  // Branches toward the renal region.
  ctx.lineWidth = Math.max(2, torsoWidth * 0.014);
  ctx.strokeStyle = "#b96c83";
  ctx.beginPath();
  ctx.moveTo(centerX + torsoWidth * .045, midY);
  ctx.lineTo(centerX + torsoWidth * .24, midY + torsoHeight * .015);
  ctx.moveTo(centerX + torsoWidth * .045, midY);
  ctx.lineTo(centerX - torsoWidth * .22, midY + torsoHeight * .015);
  ctx.stroke();

  ctx.strokeStyle = "#7897bd";
  ctx.beginPath();
  ctx.moveTo(centerX - torsoWidth * .055, midY + torsoHeight * .035);
  ctx.lineTo(centerX + torsoWidth * .22, midY + torsoHeight * .045);
  ctx.moveTo(centerX - torsoWidth * .055, midY + torsoHeight * .035);
  ctx.lineTo(centerX - torsoWidth * .24, midY + torsoHeight * .045);
  ctx.stroke();

  // Muted contextual organs: lungs, heart, liver, stomach and intestines.
  ctx.fillStyle = "rgba(176,139,173,.28)";
  ctx.strokeStyle = "rgba(206,166,196,.62)";
  ctx.lineWidth = Math.max(1.2, torsoWidth * .009);
  ctx.beginPath();
  ctx.ellipse(centerX - torsoWidth * .19, chestY + torsoHeight * .035, torsoWidth * .12, torsoHeight * .13, -.12, 0, Math.PI * 2);
  ctx.ellipse(centerX + torsoWidth * .19, chestY + torsoHeight * .035, torsoWidth * .12, torsoHeight * .13, .12, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "rgba(202,119,143,.35)";
  ctx.beginPath();
  ctx.ellipse(centerX + torsoWidth * .015, chestY + torsoHeight * .15, torsoWidth * .055, torsoHeight * .065, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "rgba(190,133,145,.34)";
  ctx.beginPath();
  ctx.moveTo(centerX - torsoWidth * .25, midY - torsoHeight * .13);
  ctx.quadraticCurveTo(centerX - torsoWidth * .03, midY - torsoHeight * .20, centerX + torsoWidth * .13, midY - torsoHeight * .12);
  ctx.quadraticCurveTo(centerX + torsoWidth * .19, midY - torsoHeight * .04, centerX + torsoWidth * .07, midY + torsoHeight * .005);
  ctx.quadraticCurveTo(centerX - torsoWidth * .12, midY + torsoHeight * .04, centerX - torsoWidth * .25, midY - torsoHeight * .13);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "rgba(174,130,165,.26)";
  ctx.beginPath();
  ctx.ellipse(centerX + torsoWidth * .19, midY - torsoHeight * .08, torsoWidth * .09, torsoHeight * .11, .18, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  ctx.strokeStyle = "rgba(190,143,177,.62)";
  ctx.lineWidth = Math.max(2, torsoWidth * .018);
  ctx.beginPath();

  for (let i = 0; i < 4; i++) {
    const yy = lowerY - torsoHeight * .09 + i * torsoHeight * .035;
    ctx.moveTo(centerX - torsoWidth * .15, yy);
    ctx.bezierCurveTo(centerX - torsoWidth * .23, yy - torsoHeight * .035, centerX + torsoWidth * .23, yy - torsoHeight * .035, centerX + torsoWidth * .15, yy + torsoHeight * .005);
  }

  ctx.stroke();

  ctx.globalAlpha = 0.85;
  ctx.font = `500 ${Math.max(9, torsoWidth * .045)}px DM Sans`;
  ctx.fillStyle = "#d9c5d7";






  ctx.restore();
}

function drawPose(result) {
  const width = video.videoWidth;
  const height = video.videoHeight;

  if (!width || !height) return;

  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
  }

  ctx.clearRect(0, 0, width, height);

  const landmarks = result.landmarks?.[0];

  if (!landmarks) {
    $("#scanMessage").textContent = "No body detected yet. Stand where your shoulders and hips are visible.";
    $("#guideStatus").textContent = "SEARCHING";
    return;
  }

  $("#scanMessage").textContent = "Body landmarks detected. Excretory organs are shown as educational overlays in approximate positions.";
  $("#guideStatus").textContent = "BODY DETECTED";

  const leftShoulder = landmarks[11];
  const rightShoulder = landmarks[12];
  const leftHip = landmarks[23];
  const rightHip = landmarks[24];

  const required = [leftShoulder, rightShoulder, leftHip, rightHip];

  if (required.some(point => !point || (point.visibility ?? 1) < 0.15)) return;

  const shoulderX = (leftShoulder.x + rightShoulder.x) / 2 * width;
  const shoulderY = (leftShoulder.y + rightShoulder.y) / 2 * height;
  const hipX = (leftHip.x + rightHip.x) / 2 * width;
  const hipY = (leftHip.y + rightHip.y) / 2 * height;

  const torsoHeight = Math.max(hipY - shoulderY, height * .12);
  const centerX = (shoulderX + hipX) / 2;
  const torsoWidth = Math.max(Math.abs(leftShoulder.x - rightShoulder.x) * width, torsoHeight * .58);

  const system = $("#scannerSystem").value;
  const condition = $("#scannerCondition").value;
  const showUrinary = system !== "sweat";
  const showSweat = system !== "urinary";

  // Surrounding organs and major vessels stay subtle; excretory structures are drawn on top.
  drawContextSystems(centerX, shoulderY, hipY, torsoWidth, torsoHeight);

  ctx.save();

  // Subtle body alignment frame.
  ctx.strokeStyle = "rgba(174,145,190,.38)";
  ctx.lineWidth = Math.max(1.5, width * .0025);
  ctx.setLineDash([8, 8]);
  ctx.beginPath();
  ctx.moveTo(shoulderX - torsoWidth * .55, shoulderY + torsoHeight * .05);
  ctx.quadraticCurveTo(centerX - torsoWidth * .60, shoulderY + torsoHeight * .55, hipX - torsoWidth * .30, hipY);
  ctx.moveTo(shoulderX + torsoWidth * .55, shoulderY + torsoHeight * .05);
  ctx.quadraticCurveTo(centerX + torsoWidth * .60, shoulderY + torsoHeight * .55, hipX + torsoWidth * .30, hipY);
  ctx.stroke();
  ctx.setLineDash([]);

  if (showUrinary) {
    // Kidneys sit high in the posterior abdomen, just below the rib area.
    const kidneyY = shoulderY + torsoHeight * .53;
    const kidneyOffset = torsoWidth * .22;
    const kidneyW = torsoWidth * .12;
    const kidneyH = torsoHeight * .17;

    drawKidney(centerX - kidneyOffset, kidneyY, kidneyW, kidneyH, true, condition);
    drawKidney(centerX + kidneyOffset, kidneyY, kidneyW, kidneyH, false, condition);

    // Renal pelvis to ureter path, with a visible wall and inner urine stream.
    const ureterStartY = kidneyY + kidneyH * .30;
    const bladderY = shoulderY + torsoHeight * .93;
    const bladderW = torsoWidth * .19;
    const bladderH = torsoHeight * .12;

    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = "rgba(103,77,139,.95)";
    ctx.lineWidth = Math.max(5, torsoWidth * .025);
    ctx.beginPath();
    ctx.moveTo(centerX - kidneyOffset + kidneyW * .28, ureterStartY);
    ctx.bezierCurveTo(centerX - kidneyOffset + kidneyW * .30, kidneyY + kidneyH * .72, centerX - kidneyOffset * .55, bladderY - bladderH * .8, centerX - bladderW * .45, bladderY - bladderH * .25);
    ctx.moveTo(centerX + kidneyOffset - kidneyW * .28, ureterStartY);
    ctx.bezierCurveTo(centerX + kidneyOffset - kidneyW * .30, kidneyY + kidneyH * .72, centerX + kidneyOffset * .55, bladderY - bladderH * .8, centerX + bladderW * .45, bladderY - bladderH * .25);
    ctx.stroke();

    ctx.strokeStyle = "#58d6e5";
    ctx.lineWidth = Math.max(2, torsoWidth * .009);
    ctx.beginPath();
    ctx.moveTo(centerX - kidneyOffset + kidneyW * .28, ureterStartY);
    ctx.bezierCurveTo(centerX - kidneyOffset + kidneyW * .30, kidneyY + kidneyH * .72, centerX - kidneyOffset * .55, bladderY - bladderH * .8, centerX - bladderW * .45, bladderY - bladderH * .25);
    ctx.moveTo(centerX + kidneyOffset - kidneyW * .28, ureterStartY);
    ctx.bezierCurveTo(centerX + kidneyOffset - kidneyW * .30, kidneyY + kidneyH * .72, centerX + kidneyOffset * .55, bladderY - bladderH * .8, centerX + bladderW * .45, bladderY - bladderH * .25);
    ctx.stroke();

    drawBladder(centerX, bladderY, bladderW, bladderH, condition);

    ctx.strokeStyle = "#d99b70";
    ctx.lineWidth = Math.max(3, torsoWidth * .012);
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(centerX, bladderY + bladderH * .52);
    ctx.lineTo(centerX, bladderY + bladderH * 1.05);
    ctx.stroke();

    ctx.fillStyle = "#e7d8fb";
    ctx.font = `600 ${Math.max(10, width * .012)}px DM Sans`;
  
  

    if (condition === "uti") {
      // Bacteria are drawn as symbolic particles around the bladder/lower tract.
      const bacteria = [[-.34, -.10], [.28, -.28], [-.12, .20], [.38, .18], [-.45, .30], [.08, -.42]];

      bacteria.forEach(([dx, dy], i) => {
        const bx = centerX + dx * bladderW * 1.55;
        const by = bladderY + dy * bladderH * 1.45;

        ctx.fillStyle = i % 2 ? "#ff817c" : "#ffb36e";
        ctx.shadowColor = "#ff756e";
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.ellipse(bx, by, Math.max(2.5, bladderW * .035), Math.max(4, bladderW * .055), i * .55, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = "#ffe0bd";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(bx - 3, by - 5);
        ctx.lineTo(bx + 3, by + 5);
        ctx.stroke();
      });

      ctx.shadowBlur = 0;
      ctx.fillStyle = "#ffaaa0";

    }

    if (condition === "stones") {
      const stoneX = centerX - kidneyOffset + kidneyW * .30;
      const stoneY = kidneyY + kidneyH * .67;

      drawStone(stoneX, stoneY, Math.max(5, torsoWidth * .035));

      ctx.strokeStyle = "#ffb66f";
      ctx.lineWidth = 2;
      ctx.setLineDash([3, 4]);
      ctx.beginPath();
      ctx.arc(stoneX, stoneY, Math.max(10, torsoWidth * .065), 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = "#ffd19a";

    }

    if (condition === "ckd") {
      ctx.fillStyle = "#f1bdca";
      ctx.font = `600 ${Math.max(9, width * .010)}px DM Sans`;

    }
  }

  if (showSweat) {
    ctx.fillStyle = "rgba(188,145,207,.9)";

    const dots = [
      [-.42, .16], [.42, .16], [-.48, .42], [.48, .42],
      [-.35, .72], [.35, .72], [-.54, .88], [.54, .88]
    ];

    dots.forEach(([dx, dy]) => {
      ctx.beginPath();
      ctx.arc(
        centerX + dx * torsoWidth * .58,
        shoulderY + torsoHeight * dy,
        Math.max(2.5, width * .004),
        0,
        Math.PI * 2
      );
      ctx.fill();
    });

    ctx.fillStyle = "#e9c9dc";
    ctx.font = `600 ${Math.max(9, width * .011)}px DM Sans`;

  }

  ctx.restore();
}

async function detectLoop() {
  if (!cameraStream || !poseLandmarker) return;

  if (video.currentTime !== lastVideoTime) {
    lastVideoTime = video.currentTime;

    try {
      const result = poseLandmarker.detectForVideo(video, performance.now());
      drawPose(result);
    } catch (error) {
      console.error("Pose detection error:", error);
      $("#scanMessage").textContent = "Body detection encountered a problem. Try restarting the camera.";
    }
  }

  animationFrame = requestAnimationFrame(detectLoop);
}

async function startCamera() {
  if (!navigator.mediaDevices?.getUserMedia) {
    $("#scanMessage").textContent = "Camera access needs a secure page. Open this site through localhost or HTTPS, not by double-clicking the HTML file.";
    return;
  }
  $("#startCamera").disabled = true;
  $("#scanMessage").textContent = "Requesting camera permission...";
  try {
    try {
      cameraStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user", width: { ideal: 960 }, height: { ideal: 540 }, frameRate: { ideal: 24, max: 30 } },
        audio: false
      });
    } catch (firstError) {
      // Some webcams reject ideal constraints. Retry with the browser's default camera settings.
      if (["OverconstrainedError", "ConstraintNotSatisfiedError"].includes(firstError.name)) {
        cameraStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
      } else {
        throw firstError;
      }
    }
    video.srcObject = cameraStream;
    video.muted = true;
    video.playsInline = true;
    await video.play();
    $("#cameraStage").classList.add("active");
    $("#cameraStatus").textContent = "Camera active";
    $("#stopCamera").disabled = false;
    $("#guideStatus").textContent = "CAMERA ON";
    $("#scanMessage").textContent = "Camera connected. Loading optional body tracking...";

    try {
      await loadPoseDetector();
      isDetecting = true;
      lastVideoTime = -1;
      detectLoop();
    } catch (modelError) {
      console.warn("Optional body tracking could not load. Keeping webcam preview active.", modelError);
      poseLandmarker = null;
      isDetecting = false;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      $("#guideStatus").textContent = "CAMERA ONLY";
      $("#scanMessage").textContent = "Live camera is working. Body tracking could not load, but use the anatomical guide beside the preview.";
    }
  } catch (error) {
    console.error("Camera startup error:", error);
    stopCamera();
    let message = "Could not start the camera. Check that your webcam is connected and try again.";
    if (error.name === "NotAllowedError" || error.name === "PermissionDeniedError") message = "Camera permission was blocked. Allow camera access for this site in your browser settings, then reload.";
    if (error.name === "NotFoundError" || error.name === "DevicesNotFoundError") message = "No webcam was found. Connect or enable a camera and try again.";
    if (error.name === "NotReadableError" || error.name === "TrackStartError") message = "The webcam may be in use by another app. Close other camera apps and try again.";
    if (error.name === "SecurityError") message = "The browser blocked camera access. Run the site on localhost or HTTPS.";
    $("#scanMessage").textContent = message;
  } finally {
    $("#startCamera").disabled = false;
  }
}
function stopCamera() {
  isDetecting = false;

  if (animationFrame) cancelAnimationFrame(animationFrame);
  animationFrame = null;

  if (cameraStream) {
    cameraStream.getTracks().forEach(track => track.stop());
  }

  cameraStream = null;
  if (video) { video.pause(); video.srcObject = null; }

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  $("#cameraStage").classList.remove("active");
  $("#cameraStatus").textContent = "Camera is off";
  $("#stopCamera").disabled = true;
  $("#guideStatus").textContent = "WAITING";
  $("#scanMessage").textContent = "Camera stopped. Your video was not saved.";
}

$("#startCamera").addEventListener("click", startCamera);
$("#stopCamera").addEventListener("click", stopCamera);
window.addEventListener("beforeunload", stopCamera);