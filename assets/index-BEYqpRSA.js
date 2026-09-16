(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const x of l.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&o(x)}).observe(document,{childList:!0,subtree:!0});function a(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(i){if(i.ep)return;i.ep=!0;const l=a(i);fetch(i.href,l)}})();const ct="modulepreload",dt=function(n){return"/Balance-STAT/"+n},Ee={},ut=function(s,a,o){let i=Promise.resolve();if(a&&a.length>0){let x=function(B){return Promise.all(B.map(I=>Promise.resolve(I).then(w=>({status:"fulfilled",value:w}),w=>({status:"rejected",reason:w}))))};document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),E=(f==null?void 0:f.nonce)||(f==null?void 0:f.getAttribute("nonce"));i=x(a.map(B=>{if(B=dt(B),B in Ee)return;Ee[B]=!0;const I=B.endsWith(".css"),w=I?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${B}"]${w}`))return;const c=document.createElement("link");if(c.rel=I?"stylesheet":ct,I||(c.as="script"),c.crossOrigin="",c.href=B,E&&c.setAttribute("nonce",E),document.head.appendChild(c),I)return new Promise((u,d)=>{c.addEventListener("load",u),c.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${B}`)))})}))}function l(x){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=x,window.dispatchEvent(f),!f.defaultPrevented)throw x}return i.then(x=>{for(const f of x||[])f.status==="rejected"&&l(f.reason);return s().catch(l)})};function mt(n={}){const{immediate:s=!1,onNeedReload:a,onNeedRefresh:o,onOfflineReady:i,onRegistered:l,onRegisteredSW:x,onRegisterError:f}=n;let E,B;const I=async(c=!0)=>{await B};async function w(){if("serviceWorker"in navigator){if(E=await ut(async()=>{const{Workbox:c}=await import("./workbox-window.prod.es5-BBnX5xw4.js");return{Workbox:c}},[]).then(({Workbox:c})=>new c("/Balance-STAT/sw.js",{scope:"/Balance-STAT/",type:"classic"})).catch(c=>{f==null||f(c)}),!E)return;E.addEventListener("activated",c=>{(c.isUpdate||c.isExternal)&&(a?a():window.location.reload())}),E.addEventListener("installed",c=>{c.isUpdate||i==null||i()}),E.register({immediate:s}).then(c=>{x?x("/Balance-STAT/sw.js",c):l==null||l(c)}).catch(c=>{f==null||f(c)})}}return B=w(),I}const pt=["Body fluid compartments","Regulation of fluid & electrolyte movement","ECF volume imbalances: deficit & excess","Common fluid imbalances","Common IV fluid solutions","Electrolyte imbalances (Na, K, Mg, Ca, Phos)"],ht=[{round:"Round 1 · Compartment Check",los:"LO 1, 2, 6"},{round:"Round 2 · Bedside Triage",los:"LO 3, 4, 7"},{round:"Round 3 · Chart Review",los:"LO 3, 4, 8, 10"},{round:"Round 4 · IV Fluid Pharmacy",los:"LO 5, 9"},{round:"Round 5 · Lytes Beyond Sodium",los:"LO 8, 10"}],ft=["The crackles in Round 2 were a distractor for fluid volume excess. What other assessment and lab findings help you tell an infectious cause of crackles apart from cardiogenic volume overload?","Age was a major risk factor here — reduced thirst, reduced renal concentrating ability, and dependence on staff for fluids. What nursing interventions at the nursing home might have prevented this admission?","If this patient's sodium had been low (hyponatremia) instead of high, how would your choice and rate of IV fluids change?","Which single electrolyte would you prioritize monitoring most closely during this patient's rehydration, and why?","The team followed guideline-based, gradual sodium correction and the patient still did not recover. What does that tell you about the limits of “doing everything right” in extreme electrolyte disturbances?"],vt=[{min:.9,title:"Charge Nurse"},{min:.75,title:"RN, Ready for Rounds"},{min:.55,title:"New Grad — Solid Start"},{min:0,title:"Chart This One for Review"}],Q=[{term:"Intracellular Fluid (ICF)",def:"Fluid inside cells — about two-thirds of total body water"},{term:"Interstitial Fluid",def:"Fluid between cells and outside vessels — cushions and bathes tissue"},{term:"Intravascular Fluid (Plasma)",def:"Fluid inside blood vessels — carries cells and proteins through circulation"},{term:"Osmosis",def:"Water moves across a membrane toward the side with more solute"},{term:"Active Transport",def:"A pump (e.g., Na⁺/K⁺-ATPase) moves particles against their gradient using ATP"},{term:"Oncotic Pressure",def:"Pulling force from plasma proteins (albumin) that holds water inside vessels"},{term:"ADH (Antidiuretic Hormone)",def:"Released when the blood is too concentrated — tells the kidneys to reabsorb water"},{term:"Aldosterone (RAAS)",def:"Released when blood volume/pressure drops — tells the kidneys to reabsorb sodium (water follows)"}],ce={history:["70-year-old male, nursing home resident, brought in by ambulance for altered mental status.","PMH: Parkinson's dementia, deep vein thrombosis on chronic anticoagulation, right ventriculoperitoneal (VP) shunt for hydrocephalus.","Baseline: bedbound / wheelchair-dependent, but previously alert, oriented, and conversant.","One week prior: completed a course of azithromycin for a cough."],vitals:[{lab:"Temp",num:"36.4°C",flag:!1},{lab:"HR",num:"101",flag:!0},{lab:"BP",num:"78/51",flag:!0},{lab:"RR",num:"15",flag:!1},{lab:"SpO₂",num:"97% RA",flag:!1}],exam:"Cachectic, scaphoid abdomen, mottled lower extremities, coarse crackles bilaterally."},bt="No eye opening to painful stimuli. No vocal response. No motor response. He was intubated for airway protection.",ae={prompt:"Which extracellular fluid volume imbalance best fits this presentation?",options:[{text:"Fluid volume deficit",correct:!0},{text:"Fluid volume excess",correct:!1},{text:"Normal fluid balance",correct:!1},{text:"Cannot be determined from this information",correct:!1}],explain:"Reduced thirst response, dependence on staff for fluids, and a poor oral intake history all point to dehydration — a fluid volume deficit. Elderly, institutionalized patients are at especially high risk because thirst and renal concentrating ability both decline with age."},K={prompt:"Select every finding below that supports fluid volume deficit in this patient.",items:[{text:"Tachycardia (HR 101)",correct:!0,note:"The heart compensates for low circulating volume by beating faster."},{text:"Hypotension (BP 78/51)",correct:!0,note:"Reduced intravascular volume lowers blood pressure."},{text:"Altered mental status / decreased LOC",correct:!0,note:"Cerebral perfusion and cell hydration both suffer with severe volume and water loss."},{text:"Elevated BUN and creatinine",correct:!0,note:"Reduced renal perfusion from volume depletion raises BUN and creatinine (prerenal pattern)."},{text:"Coarse bilateral crackles",correct:!1,note:"Tempting — crackles usually signal fluid volume EXCESS. Here they most likely reflect aspiration/pneumonia, not overload: his BNP was normal (33 pg/mL) and chest imaging showed infiltrate vs. atelectasis, not pulmonary edema."},{text:"Bounding, easily palpable pulse",correct:!1,note:"A bounding pulse is a fluid volume EXCESS sign — this patient's exam doesn't show that."},{text:"Jugular venous distention",correct:!1,note:"JVD reflects volume overload, not deficit — not part of this presentation."}]},ie={prompt:"Using the neuro exam above, calculate this patient's Glasgow Coma Scale (GCS) score.",options:[{text:"0 — no response in any category",correct:!1},{text:"3 — the lowest possible score on the scale",correct:!0},{text:"8 — the usual threshold for airway protection concerns",correct:!1},{text:"15 — fully alert and oriented",correct:!1}],explain:"Every GCS category has a floor of 1 point, even with zero response: Eye opening 1 (none) + Verbal 1 (none) + Motor 1 (none) = 3. A GCS can never score 0 — 3 is the lowest possible score and 15 is fully alert."},Z={prompt:"Based on your calculated GCS score which of the following apply? (Select all that apply)",items:[{text:"There is significant neurological injury occurring",correct:!0,note:"A GCS of 3 is the lowest possible score and reflects profound impairment of consciousness."},{text:"The patient requires immediate CPR",correct:!1,note:"GCS measures level of consciousness, not cardiac or respiratory arrest — this patient still had a pulse and was breathing; he was intubated for airway protection, not resuscitated."},{text:"The patient is unable to protect their airway",correct:!0,note:"A GCS this low means the patient can't reliably guard against aspiration — exactly why he was intubated."},{text:"Fluid or electrolyte imbalances are not contributing to the patient's neurologic status",correct:!1,note:"The opposite is true here — extreme hypernatremia is a major, direct cause of his altered mental status."},{text:"This level of consciousness is consistent with the patient's baseline dementia",correct:!1,note:"He was previously alert, oriented, and conversant — this is an acute change from baseline, not his dementia, and acute changes always need a cause."}]},ue={columns:["On admission","24 h","48 h","72 h","96 h"],rows:[{label:"Sodium (mEq/L)",range:"136–145",values:["191","182","171","164","157"],flagIdx:[0,1,2,3,4]},{label:"Potassium (mEq/L)",range:"3.5–5.1",values:["5.1","3.9","3.5","3.1","3.3"],flagIdx:[3,4]},{label:"Chloride (mEq/L)",range:"98–107",values:[">150",">150","146","137","128"],flagIdx:[0,1,2,3,4]},{label:"BUN (mg/dL)",range:"8–26",values:["119","31","31","44","27"],flagIdx:[0,1,2,3,4]},{label:"Creatinine (mg/dL)",range:"0.7–1.3",values:["3.17","2.9","2.27","1.43","1.13"],flagIdx:[0,1,2,3]}]},ne=[{prompt:"The admission sodium is 191 mEq/L. How is this classified?",options:[{text:"Mild hypernatremia (>145 mEq/L)",correct:!1},{text:"Severe hypernatremia (>160 mEq/L)",correct:!1},{text:"Extreme hypernatremia (>190 mEq/L)",correct:!0},{text:"Within normal limits",correct:!1}],explain:"Hypernatremia starts above 145 mEq/L, is severe above 160 mEq/L, and is classified extreme above 190 mEq/L. A level of 191 mEq/L is at the very top of that scale and is exceptionally rare."},{prompt:"Sodium dropped from 191 to 157 mEq/L over 96 hours — about 34 mEq/L total. Guidelines recommend correcting no faster than 0.5 mEq/L/hr (or 12 mEq/L/24 hr). Was this correction rate safe?",options:[{text:"Yes — roughly 0.35 mEq/L/hr, well inside the safe range",correct:!0},{text:"No — this is dangerously fast and risks cerebral edema",correct:!1},{text:"No — it should have been corrected within the first few hours",correct:!1},{text:"Not enough information to tell",correct:!1}],explain:"34 mEq/L over 96 hours averages about 0.35 mEq/L/hr (roughly 8–9 mEq/L per 24 hr) — a slow, guideline-concordant correction. Correcting hypernatremia too fast pulls water into swollen brain cells and can cause fatal cerebral edema, so slow and steady is the rule even when the starting number is extreme."},{prompt:"Potassium trends 5.1 → 3.9 → 3.5 → 3.1 mEq/L over the first 72 hours. What's the priority nursing consideration?",options:[{text:"None — potassium isn't clinically relevant here",correct:!1},{text:"Monitor closely for hypokalemia and its cardiac effects as fluids correct",correct:!0},{text:"Give an emergency IV potassium bolus immediately",correct:!1},{text:"Hold all IV fluids until potassium stabilizes",correct:!1}],explain:"As fluid resuscitation dilutes the serum and renal excretion improves, potassium is drifting down toward hypokalemia. It needs frequent monitoring and, if ordered, slow IV replacement — potassium is never given as an IV push/bolus, which can cause fatal arrhythmias."},{prompt:"BUN 119 mg/dL and creatinine 3.17 mg/dL on admission (a BUN:Cr ratio over 20:1) both trend back toward normal with fluid resuscitation. What does this pattern suggest?",options:[{text:"Chronic kidney disease",correct:!1},{text:"Prerenal azotemia from dehydration",correct:!0},{text:"Intrinsic renal failure unrelated to hydration status",correct:!1},{text:"Urinary tract obstruction",correct:!1}],explain:"A disproportionately high BUN:Cr ratio that improves with volume repletion is the classic pattern of prerenal azotemia — the kidneys themselves are fine, but reduced perfusion from dehydration was dragging both values up."}],V=[{name:"0.9% Normal Saline (NS)",cls:"isotonic"},{name:"Lactated Ringer's (LR)",cls:"isotonic"},{name:"D5W (5% Dextrose in Water)",cls:"isotonic"},{name:"0.45% Normal Saline (½NS)",cls:"hypotonic"},{name:"3% Normal Saline",cls:"hypertonic"},{name:"D5 1/2NS",cls:"hypertonic"},{name:"D5NS",cls:"hypertonic"}],Fe=[{cls:"isotonic",label:"Isotonic"},{cls:"hypotonic",label:"Hypotonic"},{cls:"hypertonic",label:"Hypertonic"}],re={prompt:"This patient received 3 L of 0.9% NS first, then D5W at 75 mL/hr. What's the reasoning behind that two-step plan?",options:[{text:"NS restores intravascular volume and blood pressure first; D5W then supplies free water to gradually correct the water deficit and hypernatremia",correct:!0},{text:"D5W is used first because it corrects sodium the fastest",correct:!1},{text:"Normal saline is contraindicated in hypernatremia",correct:!1},{text:"The switch was arbitrary and has no clinical basis",correct:!1}],explain:"Isotonic saline expands the intravascular space and treats the hypotension/shock physiology first without changing tonicity too fast. Once perfusion is stabilized, a hypotonic free-water source (D5W, since the dextrose is metabolized) gradually replaces the water deficit driving the hypernatremia."},pe=90,F=[{clue:"Peaked T waves and muscle weakness in a patient with renal failure",answer:"Hyperkalemia"},{clue:"Flattened T waves, U waves, and leg cramps in a patient on loop diuretics",answer:"Hypokalemia"},{clue:"Absent deep tendon reflexes, hypotension, and respiratory depression from magnesium-containing antacids in renal failure",answer:"Hypermagnesemia"},{clue:"Hyperactive reflexes, tremors, and torsades de pointes in a patient with alcohol use disorder",answer:"Hypomagnesemia"},{clue:"Decreased reflexes, constipation, kidney stones, and confusion in a patient with hyperparathyroidism",answer:"Hypercalcemia"},{clue:"Positive Chvostek's and Trousseau's signs with perioral tingling after thyroid surgery",answer:"Hypocalcemia"},{clue:"Soft-tissue calcification with low calcium in a patient with chronic kidney disease",answer:"Hyperphosphatemia"},{clue:"Muscle weakness and respiratory failure in a malnourished patient just started on tube feeding",answer:"Hypophosphatemia"}],gt={r1:Q.length*10,r2:20+K.items.length*10+20+Z.items.length*10,r3:ne.length*25,r4:V.length*10+30,r5:F.length*15+30};function yt(){return{r1:{pairs:{},picked:null,submitted:!1},r2:{idx:0,answered:[!1,!1,!1,!1],selected:[null,null,null,null],gotRight:[null,null,null,null],q2Checked:{},interpretChecked:{}},r3:{idx:0,answered:[!1,!1,!1,!1],selected:[null,null,null,null],gotRight:[null,null,null,null]},r4:{placed:{},submitted:!1,q4Selected:null,q4Answered:!1,q4GotRight:null},r5:{started:!1,finished:!1,timeLeft:pe,matched:{},picked:null,timerId:null,order:[],clueOrder:[],bonus:0}}}function De(){return{screen:"title",groupName:"",startedAt:null,scores:{r1:0,r2:0,r3:0,r4:0,r5:0},max:{...gt},...yt(),elapsedId:null}}const e=De();function me(){return Object.values(e.scores).reduce((n,s)=>n+s,0)}function de(){return Object.values(e.max).reduce((n,s)=>n+s,0)}function wt(){return{title:0,r1:1,r2:2,r3:3,r4:4,r5:5,report:6}[e.screen]??0}function kt(){const n=e.max;Object.assign(e,De()),e.max=n}function $t(){e.elapsedId&&clearInterval(e.elapsedId),e.elapsedId=setInterval(()=>{const n=document.getElementById("elapsedField");n&&e.startedAt&&(n.textContent=xt())},1e3)}function xt(){const n=Math.floor((Date.now()-e.startedAt)/1e3),s=Math.floor(n/60),a=n%60;return`${s}:${String(a).padStart(2,"0")}`}function Et(){e.elapsedId&&(clearInterval(e.elapsedId),e.elapsedId=null)}function he(){document.getElementById("refOverlay").hidden=!1}function Se(){document.getElementById("refOverlay").hidden=!0}function X(){const n=document.getElementById("openRef");n&&(n.onclick=he)}function St(){document.getElementById("refClose").onclick=Se,document.getElementById("refOverlay").addEventListener("click",n=>{n.target.id==="refOverlay"&&Se()})}function Bt(){return`<div class="lo-grid">${pt.map((n,s)=>`<div class="lo-item"><span class="n">${s+1}</span><span>${n}</span></div>`).join("")}</div>`}function Ct(n,s){n.innerHTML=`
    <div class="hero">
      <span class="eyebrow">A fluids &amp; electrolytes case game</span>
      <h1>Balance, STAT!</h1>
      <p class="tag">Admit the patient. Read the chart. Keep the balance.</p>
    </div>
    <div class="card stack">
      <p class="lede">Your team is the admitting nurses for a 70-year-old nursing home resident with altered mental status. Across five short rounds you'll sort fluid compartments, triage the bedside exam, read a real basic metabolic panel, choose IV fluids, and race the clock on electrolyte imbalances. Play takes about 12&ndash;15 minutes.</p>
      <div>
        <span class="eyebrow">This session covers</span>
        ${Bt()}
      </div>
      <div>
        <label class="field-label" for="teamInput">Team / group name</label>
        <input type="text" id="teamInput" placeholder="e.g., Team Isotonic" maxlength="30">
      </div>
      <div class="btn-row">
        <button class="btn" id="startBtn">Begin Shift</button>
        <button class="btn ghost" id="refBtnTitle">Open reference card</button>
      </div>
    </div>
    <p class="footer-note">Based on Kamatam et al., <em>Extreme Hypernatremia due to Dehydration</em>, J Med Cases 2023;14(7):232&ndash;236 &middot; details adapted for classroom use.</p>
  `,document.getElementById("startBtn").onclick=()=>{const a=document.getElementById("teamInput").value.trim();e.groupName=a||"Unnamed Team",e.startedAt=Date.now(),$t(),s("r1")},document.getElementById("refBtnTitle").onclick=he}function D(n){const s=document.createElement("template");return s.innerHTML=n.trim(),s.content.firstElementChild}function J(n,s){n.draggable=!0,n.addEventListener("dragstart",a=>{a.dataTransfer.effectAllowed="move",a.dataTransfer.setData("text/plain",JSON.stringify(s)),setTimeout(()=>n.classList.add("dragging"),0)}),n.addEventListener("dragend",()=>n.classList.remove("dragging"))}function Y(n,s){n.addEventListener("dragover",a=>{a.preventDefault(),a.dataTransfer.dropEffect="move",n.classList.add("dragover")}),n.addEventListener("dragleave",()=>n.classList.remove("dragover")),n.addEventListener("drop",a=>{a.preventDefault(),n.classList.remove("dragover");let o=null;try{o=JSON.parse(a.dataTransfer.getData("text/plain"))}catch{}o&&s(o)})}function Be(n){const s=n.slice();for(let a=s.length-1;a>0;a--){const o=Math.floor(Math.random()*(a+1));[s[a],s[o]]=[s[o],s[a]]}return s}function fe(n){const s=Math.floor(n/60),a=n%60;return`${s}:${String(a).padStart(2,"0")}`}function ee(){if(e.screen==="title")return"";const n=wt(),s=e.startedAt?Math.floor((Date.now()-e.startedAt)/1e3):0;return`
  <div class="monitor">
    <div class="brand"><span class="pulse-dot"></span> Balance, STAT!</div>
    <div class="sep"></div>
    <div class="field"><span class="k">Team</span><span class="v">${e.groupName||"Unnamed"}</span></div>
    <div class="sep"></div>
    <div class="field"><span class="k">Round</span><span class="v">${n>5?"Report":`${n} of 5`}</span></div>
    <div class="sep"></div>
    <div class="field"><span class="k">Elapsed</span><span class="v mono" id="elapsedField">${fe(s)}</span></div>
    <div class="sep"></div>
    <div class="field"><span class="k">Score</span><span class="v mono">${me()}</span></div>
    <div class="grow"></div>
    <button class="refbtn" id="openRef">Reference card</button>
  </div>
  <div class="progress-track"><div class="progress-fill" style="width:${Math.min(100,n/5*100)}%"></div></div>
  `}function Ce(n,s,a){if(e.r1.submitted)return;const o=e.r1.pairs;Object.keys(o).forEach(i=>{o[i]===s&&delete o[i]}),o[n]=s,e.r1.picked=null,a()}function Ie(n,s){e.r1.submitted||(delete e.r1.pairs[n],s())}function It(n,s){if(e.r1.submitted)return;const a=e.r1.pairs[n];a!==void 0&&(delete e.r1.pairs[n],e.r1.picked=a,s())}function je(n,s){const a=()=>je(n,s),o=e.r1.pairs,i=e.r1.submitted,l=Object.keys(o).length,x=l===Q.length,f=new Set(Object.values(o));n.innerHTML=`
    <div class="match-screen">
    ${ee()}
    <div class="stack">
      <div class="round-head">
        <div>
          <div class="round-kicker"><span class="pill">Round 1 of 5</span><span class="pill amber">Untimed</span></div>
          <h2 class="round-title">Compartment Check</h2>
        </div>
      </div>
      <p class="lede">Drag a definition onto its matching term — or click to pick up, then click a row to place. Rearrange freely; scoring waits until you submit.</p>
      <div class="card stack match-board">
        <div class="match-wrap">
          <div class="match-col">
            <span class="eyebrow">Terms</span>
            <div class="term-rows" id="termRows"></div>
          </div>
          <div class="match-col">
            <span class="eyebrow">Definitions</span>
            <div class="pool-tray" id="defTray"></div>
          </div>
        </div>
        <div class="btn-row">
          <button class="btn" id="submitR1Btn" ${x&&!i?"":"disabled"}>${i?"Submitted":"Submit answer"}</button>
          <span class="lede" id="r1status">${l} of ${Q.length} placed${i?` · ${e.scores.r1} pts`:""}</span>
          <button class="btn" id="nextBtn" ${i?"":"disabled"}>Continue to Round 2 →</button>
        </div>
      </div>
      ${i?`
        <div class="card stack">
          <span class="eyebrow">Answer key</span>
          <div class="answer-key">
            ${Q.map((w,c)=>{const u=o[c]===c;return`<div class="ak-row ${u?"ok":"miss"}">
                <span class="mark">${u?"✓":"✗"}</span>
                <div class="ak-body">
                  <strong>${w.term}</strong>
                  ${w.def}
                  ${u?"":`<div class="ak-your">Your team matched: “${Q[o[c]].def}”</div>`}
                </div>
              </div>`}).join("")}
          </div>
        </div>
      `:""}
    </div>
    </div>
  `;const E=document.getElementById("defTray");Q.forEach((w,c)=>{if(f.has(c))return;const u=e.r1.picked===c,d=D(`<div class="pool-chip ${u?"selected":""}">${w.def}</div>`);i||(d.onclick=()=>{e.r1.picked=e.r1.picked===c?null:c,a()},J(d,{defIdx:c})),E.appendChild(d)}),i||Y(E,w=>{w&&w.fromTerm!=null&&Ie(w.fromTerm,a)});const B=document.getElementById("termRows");Q.forEach((w,c)=>{const u=o[c],d=u!==void 0,b=d&&u===c,v=d?"filled":"",C=D(`<div class="term-row"><div class="term-label">${w.term}</div><div class="dropzone ${v}" data-term="${c}">${d?"":'<span class="placeholder">Drop here</span>'}</div></div>`),_=C.querySelector(".dropzone");if(d){let P="";i?P=b?"correct":"incorrect":e.r1.picked===u&&(P="selected");const O=D(`<div class="slot-chip ${P}">${Q[u].def}${i?"":'<button class="remove" title="Remove">✕</button>'}</div>`);i||(O.querySelector(".remove").onclick=q=>{q.stopPropagation(),Ie(c,a)},O.addEventListener("click",q=>{q.stopPropagation(),It(c,a)}),J(O,{defIdx:u,fromTerm:c})),_.appendChild(O)}i||(_.addEventListener("click",()=>{e.r1.picked!=null&&Ce(c,e.r1.picked,a)}),Y(_,P=>{P&&P.defIdx!=null&&Ce(c,P.defIdx,a)})),B.appendChild(C)});const I=document.getElementById("submitR1Btn");I&&(I.onclick=()=>{if(!x||e.r1.submitted)return;let w=0;Q.forEach((c,u)=>{e.r1.pairs[u]===u&&w++}),e.scores.r1=w*10,e.r1.submitted=!0,a()}),document.getElementById("nextBtn").onclick=()=>s("r2"),X()}const Re=4;function Rt(){return`
  <div class="tbl-wrap">
    <table class="labs labs-admission">
      <thead><tr><th>Lab</th><th>On admission</th></tr></thead>
      <tbody>
        ${ue.rows.map(n=>`<tr><td>${n.label}<br><span class="mono" style="font-size:.7rem;color:var(--ink-soft);">ref ${n.range}</span></td><td class="${n.flagIdx.includes(0)?"flag":""}">${n.values[0]}</td></tr>`).join("")}
      </tbody>
    </table>
  </div>`}function se(n,s){let a=0;const o=[];return n.forEach((i,l)=>{!!s[l]===i.correct&&(a+=10),o.push(`<li style="margin-bottom:4px;"><strong>${i.text}:</strong> ${i.note}</li>`)}),{pts:a,notes:o}}function Me(n,s){return`<div class="feedback ${n?"good":"bad"}"><strong>${n?"Correct":"Not quite"}</strong>${s}</div>`}function Le(n,s,a){return`<div class="feedback good"><strong>${n} of ${s} pts</strong><ul style="margin:6px 0 0;padding-left:18px;">${a.join("")}</ul></div>`}function Mt(n){return n===1||n===3}function Lt(n,s){return s?!1:Mt(n)?!0:e.r2.selected[n]!=null}function Tt(n,s,a,o,i){s.options.forEach((l,x)=>{const f=o===x,E=D(`<label class="choice ${a?"locked":""}"><input type="radio" name="r2q" ${f?"checked":""} ${a?"disabled":""}><span>${l.text}</span></label>`);a&&(l.correct?E.classList.add("correct"):f&&E.classList.add("incorrect")),E.onclick=()=>{a||i(x)},n.appendChild(E)})}function Te(n,s,a,o){s.forEach((i,l)=>{const x=a[l]||!1,f=D(`<label class="choice ${o?"locked":""}"><input type="checkbox" ${x?"checked":""} ${o?"disabled":""}><span>${i.text}</span></label>`);if(o){const E=!!a[l];f.classList.add(E===i.correct?"correct":"incorrect")}f.querySelector("input").onchange=E=>{a[l]=E.target.checked},n.appendChild(f)})}function qt(n){if(!e.r2.answered[n])return"";if(n===0)return Me(e.r2.gotRight[0],ae.explain);if(n===1){const{pts:o,notes:i}=se(K.items,e.r2.q2Checked);return Le(o,K.items.length*10,i)}if(n===2)return Me(e.r2.gotRight[2],ie.explain);const{pts:s,notes:a}=se(Z.items,e.r2.interpretChecked);return Le(s,Z.items.length*10,a)}function At(n,s){const a=n===0?"Question 1":n===1?"Question 2 · select all that apply":n===2?"Question 3":"Question 4 · select all that apply",o=n===0?ae.prompt:n===1?K.prompt:n===2?ie.prompt:Z.prompt;return`
    <div class="card stack">
      <div>
        <span class="eyebrow">${a}</span>
        <p style="margin:6px 0 0;font-weight:600;">${o}</p>
      </div>
      <div class="choice-list" id="qlist"></div>
      <div class="btn-row">
        <button class="btn" id="submitBtn" ${Lt(n,s)?"":"disabled"}>${s?"Submitted":"Submit answer"}</button>
      </div>
      <div id="qfeedback">${qt(n)}</div>
    </div>`}function Pt(n,s){if(e.r2.answered[n])return;if(n===0||n===2){const o=e.r2.selected[n];if(o==null)return;const l=(n===0?ae:ie).options[o];e.r2.answered[n]=!0,e.r2.gotRight[n]=!!l.correct,l.correct&&(e.scores.r2+=20),s();return}if(n===1){e.r2.answered[1]=!0;const{pts:o}=se(K.items,e.r2.q2Checked);e.scores.r2+=o,s();return}e.r2.answered[3]=!0;const{pts:a}=se(Z.items,e.r2.interpretChecked);e.scores.r2+=a,s()}function He(n,s){const a=()=>He(n,s),o=e.r2.idx,i=e.r2.answered[o],l=o===Re-1,x=e.r2.answered.every(Boolean);n.innerHTML=`
    ${ee()}
    <div class="stack">
      <div class="round-head">
        <div>
          <div class="round-kicker"><span class="pill">Round 2 of 5</span><span class="pill amber">Untimed</span></div>
          <h2 class="round-title">Bedside Triage</h2>
        </div>
        <span class="lede">Question ${o+1} of ${Re}</span>
      </div>
      <div class="chart-note">
        <h3>Initial presentation</h3>
        ${ce.history.map(c=>`<p style="margin:0 0 6px;">${c}</p>`).join("")}
        <div class="vitals-row">
          ${ce.vitals.map(c=>`<div class="vital ${c.flag?"flag":""}"><div class="lab">${c.lab}</div><div class="num mono">${c.num}</div></div>`).join("")}
        </div>
        <p style="margin:10px 0 0;"><strong>Exam:</strong> ${ce.exam}</p>
      </div>

      <div>
        <span class="eyebrow">Admission labs</span>
        ${Rt()}
      </div>

      <div class="chart-note">
        <h3>Neurologic exam</h3>
        <p style="margin:0;">${bt}</p>
      </div>

      ${At(o,i)}

      <div class="btn-row">
        <button class="btn ghost" id="prevBtn" ${o===0?"disabled":""}>← Back</button>
        ${l?`<button class="btn" id="nextRoundBtn" ${x?"":"disabled"}>Continue to Round 3 →</button>`:`<button class="btn" id="nextQBtn" ${i?"":"disabled"}>Next question →</button>`}
        <span class="lede">${e.scores.r2} of ${e.max.r2} pts</span>
      </div>
    </div>
  `;const f=document.getElementById("qlist");o===0||o===2?Tt(f,o===0?ae:ie,i,e.r2.selected[o],u=>{e.r2.selected[o]=u,a()}):o===1?Te(f,K.items,e.r2.q2Checked,i):Te(f,Z.items,e.r2.interpretChecked,i);const E=document.getElementById("submitBtn");E&&(E.onclick=()=>Pt(o,a));const B=document.getElementById("prevBtn");B&&(B.onclick=()=>{e.r2.idx--,a()});const I=document.getElementById("nextQBtn");I&&(I.onclick=()=>{e.r2.idx++,a()});const w=document.getElementById("nextRoundBtn");w&&(w.onclick=()=>s("r3")),X()}function Ot(){return`
  <div class="tbl-wrap">
    <table class="labs">
      <thead><tr><th>Lab</th>${ue.columns.map(n=>`<th>${n}</th>`).join("")}</tr></thead>
      <tbody>
        ${ue.rows.map(n=>`<tr><td>${n.label}<br><span class="mono" style="font-size:.7rem;color:var(--ink-soft);">ref ${n.range}</span></td>${n.values.map((s,a)=>`<td class="${n.flagIdx.includes(a)?"flag":""}">${s}</td>`).join("")}</tr>`).join("")}
      </tbody>
    </table>
  </div>`}function Nt(n){if(!e.r3.answered[n])return"";const s=e.r3.gotRight[n],a=ne[n].explain;return`<div class="feedback ${s?"good":"bad"}"><strong>${s?"Correct":"Not quite"}</strong>${a}</div>`}function Ue(n,s){const a=()=>Ue(n,s),o=e.r3.idx,i=ne[o],l=e.r3.answered[o],x=e.r3.selected[o],f=o===ne.length-1,E=e.r3.answered.every(Boolean);n.innerHTML=`
    ${ee()}
    <div class="stack">
      <div class="round-head">
        <div>
          <div class="round-kicker"><span class="pill">Round 3 of 5</span><span class="pill amber">Untimed</span></div>
          <h2 class="round-title">Chart Review</h2>
        </div>
        <span class="lede">Question ${o+1} of ${ne.length}</span>
      </div>
      <p class="lede">Basic metabolic profile at admission and every 24 hours after. Choose an answer, then submit to review.</p>
      ${Ot()}
      <div class="card stack">
        <div>
          <span class="eyebrow">Question ${o+1}</span>
          <p style="margin:6px 0 0;font-weight:600;">${i.prompt}</p>
        </div>
        <div class="choice-list" id="qlist"></div>
        <div class="btn-row">
          <button class="btn" id="submitBtn" ${x==null||l?"disabled":""}>${l?"Submitted":"Submit answer"}</button>
        </div>
        <div id="qfeedback">${Nt(o)}</div>
      </div>
      <div class="btn-row">
        <button class="btn ghost" id="prevBtn" ${o===0?"disabled":""}>← Back</button>
        ${f?`<button class="btn" id="nextRoundBtn" ${E?"":"disabled"}>Continue to Round 4 →</button>`:`<button class="btn" id="nextQBtn" ${l?"":"disabled"}>Next question →</button>`}
        <span class="lede">${e.scores.r3} of ${e.max.r3} pts</span>
      </div>
    </div>
  `;const B=document.getElementById("qlist");i.options.forEach((d,b)=>{const v=x===b,C=D(`<label class="choice ${l?"locked":""}"><input type="radio" name="q3" ${v?"checked":""} ${l?"disabled":""}><span>${d.text}</span></label>`);l&&(d.correct?C.classList.add("correct"):v&&C.classList.add("incorrect")),C.onclick=()=>{e.r3.answered[o]||(e.r3.selected[o]=b,a())},B.appendChild(C)});const I=document.getElementById("submitBtn");I&&(I.onclick=()=>{if(e.r3.answered[o]||e.r3.selected[o]==null)return;const d=i.options[e.r3.selected[o]];e.r3.answered[o]=!0,e.r3.gotRight[o]=!!d.correct,d.correct&&(e.scores.r3+=25),a()});const w=document.getElementById("prevBtn");w&&(w.onclick=()=>{e.r3.idx--,a()});const c=document.getElementById("nextQBtn");c&&(c.onclick=()=>{e.r3.idx++,a()});const u=document.getElementById("nextRoundBtn");u&&(u.onclick=()=>s("r4")),X()}function qe(n,s,a){e.r4.submitted||(e.r4.placed[n]=s,a())}function Ae(n,s){e.r4.submitted||(delete e.r4.placed[n],s())}function Pe(n){var s;return((s=Fe.find(a=>a.cls===n))==null?void 0:s.label)??n}function Ft(){return V.map(n=>{const s=e.r4.placed[n.name],a=s===n.cls;return`<div class="ak-row ${a?"ok":"miss"}">
      <span class="mark">${a?"✓":"✗"}</span>
      <div class="ak-body">
        <strong>${n.name}</strong>
        ${Pe(n.cls)}
        ${a?"":`<div class="ak-your">Your team sorted: “${Pe(s)}”</div>`}
      </div>
    </div>`}).join("")}function We(n,s){const a=()=>We(n,s),o=Object.keys(e.r4.placed),i=o.length===V.length,l=e.r4.submitted,x=V.filter(d=>e.r4.placed[d.name]===d.cls).length*10;n.innerHTML=`
    ${ee()}
    <div class="stack">
      <div class="round-head">
        <div>
          <div class="round-kicker"><span class="pill">Round 4 of 5</span><span class="pill amber">Untimed</span></div>
          <h2 class="round-title">IV Fluid Pharmacy</h2>
        </div>
      </div>
      <p class="lede">Drag each fluid into the bin where it belongs — or click a fluid, then click a bin. Rearrange freely; scoring waits until you submit.</p>
      <div class="card stack">
        <div class="fluid-tray" id="tray"></div>
        <div class="bin-board" id="binBoard"></div>
        <div class="btn-row">
          <button class="btn" id="submitBinsBtn" ${i&&!l?"":"disabled"}>${l?"Submitted":"Submit answer"}</button>
          <span class="lede">${o.length} of ${V.length} sorted${l?` · ${x} pts`:""}</span>
        </div>
      </div>
      ${l?`
        <div class="card stack">
          <span class="eyebrow">Answer key</span>
          <div class="answer-key">
            ${Ft()}
          </div>
        </div>
      `:""}

      <div class="card stack" id="q4card" ${l?"":'style="opacity:.4;pointer-events:none;"'}>
        <div>
          <span class="eyebrow">Case tie-in</span>
          <p style="margin:6px 0 0;font-weight:600;">${re.prompt}</p>
        </div>
        <div class="choice-list" id="q4list"></div>
        <div class="btn-row">
          <button class="btn" id="submitQ4Btn" ${!l||e.r4.q4Selected==null||e.r4.q4Answered?"disabled":""}>${e.r4.q4Answered?"Submitted":"Submit answer"}</button>
        </div>
        <div id="q4feedback">${e.r4.q4Answered?`<div class="feedback ${e.r4.q4GotRight?"good":"bad"}"><strong>${e.r4.q4GotRight?"Correct":"Not quite"}</strong>${re.explain}</div>`:""}</div>
      </div>

      <div class="btn-row">
        <button class="btn" id="nextBtn" ${l&&e.r4.q4Answered?"":"disabled"}>Continue to Round 5 →</button>
        <span class="lede">${e.scores.r4} of ${e.max.r4} pts</span>
      </div>
    </div>
  `;const f=document.getElementById("tray");let E=null;V.forEach(d=>{if(e.r4.placed[d.name])return;const b=D(`<button class="fluid-chip" data-name="${d.name}"><span class="drop"></span>${d.name}</button>`);b.onclick=()=>{l||(f.querySelectorAll(".fluid-chip").forEach(v=>v.classList.remove("selected")),E=d,b.classList.add("selected"))},l||J(b,{name:d.name}),f.appendChild(b)}),l||Y(f,d=>{d&&d.name&&Ae(d.name,a)});const B=document.getElementById("binBoard");Fe.forEach(d=>{const b=D(`<div class="bin" data-cls="${d.cls}"><h4>${d.label}</h4><div class="items"></div></div>`),v=b.querySelector(".items");Object.entries(e.r4.placed).forEach(([C,_])=>{if(_!==d.cls)return;const O=V.find(U=>U.name===C).cls===d.cls,q=D(`<div class="bin-item ${l?O?"correct":"incorrect":""}"><span>${C}</span>${l?"":'<button title="remove">✕</button>'}</div>`);l||(q.querySelector("button").onclick=U=>{U.stopPropagation(),Ae(C,a)},J(q,{name:C})),v.appendChild(q)}),b.onclick=()=>{l||!E||e.r4.placed[E.name]||qe(E.name,d.cls,a)},l||Y(b,C=>{C&&C.name&&qe(C.name,d.cls,a)}),B.appendChild(b)});const I=document.getElementById("submitBinsBtn");I&&(I.onclick=()=>{if(!i||e.r4.submitted)return;let d=0;V.forEach(b=>{e.r4.placed[b.name]===b.cls&&(d+=10)}),e.scores.r4+=d,e.r4.submitted=!0,a()});const w=document.getElementById("q4list"),c=e.r4.q4Answered;re.options.forEach((d,b)=>{const v=e.r4.q4Selected===b,C=D(`<label class="choice ${c?"locked":""}"><input type="radio" name="q4" ${v?"checked":""} ${c||!l?"disabled":""}><span>${d.text}</span></label>`);c&&(d.correct?C.classList.add("correct"):v&&C.classList.add("incorrect")),C.onclick=()=>{!e.r4.submitted||e.r4.q4Answered||(e.r4.q4Selected=b,a())},w.appendChild(C)});const u=document.getElementById("submitQ4Btn");u&&(u.onclick=()=>{if(!e.r4.submitted||e.r4.q4Answered||e.r4.q4Selected==null)return;const d=re.options[e.r4.q4Selected];e.r4.q4Answered=!0,e.r4.q4GotRight=!!d.correct,d.correct&&(e.scores.r4+=30),a()}),document.getElementById("nextBtn").onclick=()=>s("r5"),X()}function Oe(n,s,a){if(e.r5.finished)return;const o=e.r5.matched;Object.keys(o).forEach(i=>{o[i]===s&&delete o[i]}),o[n]=s,e.r5.picked=null,a()}function Ne(n,s){e.r5.finished||(delete e.r5.matched[n],s())}function Dt(n,s){if(e.r5.finished)return;const a=e.r5.matched[n];a!==void 0&&(delete e.r5.matched[n],e.r5.picked=a,s())}function _e(n){if(e.r5.finished)return;e.r5.finished=!0,e.r5.picked=null,e.r5.timerId&&(clearInterval(e.r5.timerId),e.r5.timerId=null);let s=0;F.forEach((o,i)=>{e.r5.matched[i]===i&&s++}),e.scores.r5=s*15;let a=0;s===F.length&&(e.r5.timeLeft>=45?a=30:e.r5.timeLeft>=20&&(a=15)),e.r5.bonus=a,e.scores.r5+=a,n()}function jt(n){e.r5.timerId&&clearInterval(e.r5.timerId),e.r5.timeLeft=pe,e.r5.timerId=setInterval(()=>{e.r5.timeLeft--;const s=document.getElementById("speedTimer");s&&(s.textContent=fe(e.r5.timeLeft)),e.r5.timeLeft<=0&&(clearInterval(e.r5.timerId),e.r5.timerId=null,_e(n))},1e3)}function Ht(n,s){const a=()=>ve(n,s);n.innerHTML=`
    ${ee()}
    <div class="stack">
      <div class="round-head">
        <div>
          <div class="round-kicker"><span class="pill">Round 5 of 5</span><span class="pill amber">Speed round · ${pe}s</span></div>
          <h2 class="round-title">Lytes Beyond Sodium</h2>
        </div>
      </div>
      <div class="card stack">
        <p class="lede">This case was all sodium — but the unit sees every electrolyte. Drag each symptom onto the imbalance it matches before the clock runs out. Rearrange freely; scoring waits until you submit. Ready as a team?</p>
        <div class="btn-row"><button class="btn" id="startSpeed">Start the clock</button></div>
      </div>
    </div>
  `,document.getElementById("startSpeed").onclick=()=>{e.r5.started=!0,e.r5.order=Be(F.map((o,i)=>i)),e.r5.clueOrder=Be(F.map((o,i)=>i)),jt(a),a()},X()}function ve(n,s){if(!e.r5.started){Ht(n,s);return}const a=()=>ve(n,s),o=e.r5.matched,i=e.r5.finished,l=Object.keys(o).length,x=l===F.length,f=new Set(Object.values(o)),E=i?F.reduce((u,d,b)=>u+(o[b]===b?1:0),0):0;n.innerHTML=`
    <div class="match-screen">
    ${ee()}
    <div class="stack">
      <div class="round-head">
        <div>
          <div class="round-kicker"><span class="pill">Round 5 of 5</span><span class="pill amber">Speed round</span></div>
          <h2 class="round-title">Lytes Beyond Sodium</h2>
        </div>
      </div>
      <div class="speed-bar">
        <span>⏱</span>
        <span class="timer mono" id="speedTimer">${fe(e.r5.timeLeft)}</span>
        <span class="lede">${l} of ${F.length} placed${i?` · ${e.scores.r5} pts`:""}</span>
      </div>
      <div class="card stack match-board">
        <div class="match-wrap">
          <div class="match-col">
            <span class="eyebrow">Imbalances</span>
            <div class="term-rows" id="ansRows"></div>
          </div>
          <div class="match-col">
            <span class="eyebrow">Symptoms</span>
            <div class="pool-tray" id="clueTray"></div>
          </div>
        </div>
        <div class="btn-row">
          <button class="btn" id="submitR5Btn" ${x&&!i?"":"disabled"}>${i?"Submitted":"Submit answer"}</button>
          ${i?`<span class="lede">${E} of ${F.length} correct${e.r5.bonus?`, +${e.r5.bonus} speed bonus`:""}</span>
                 <button class="btn" id="nextBtn">See your team's report →</button>`:'<p class="lede match-hint">Drag a symptom onto its imbalance — or click to pick up, then click a row to place. Rearrange freely.</p>'}
        </div>
      </div>
      ${i?`
        <div class="card stack">
          <span class="eyebrow">Answer key</span>
          <div class="answer-key">
            ${F.map((u,d)=>{const b=o[d],v=b===d,C=b!==void 0?F[b].clue:null;return`<div class="ak-row ${v?"ok":"miss"}">
                <span class="mark">${v?"✓":"✗"}</span>
                <div class="ak-body">
                  <strong>${u.answer}</strong>
                  ${u.clue}
                  ${v?"":`<div class="ak-your">${C!=null?`Your team matched: “${C}”`:"Your team left this unmatched."}</div>`}
                </div>
              </div>`}).join("")}
          </div>
        </div>
      `:""}
    </div>
    </div>
  `;const B=document.getElementById("clueTray");(e.r5.clueOrder||[]).forEach(u=>{if(f.has(u))return;const d=e.r5.picked===u,b=D(`<div class="pool-chip ${d?"selected":""}">${F[u].clue}</div>`);i||(b.onclick=()=>{e.r5.picked=e.r5.picked===u?null:u,a()},J(b,{clueIdx:u})),B.appendChild(b)}),i||Y(B,u=>{u&&u.fromAns!=null&&Ne(u.fromAns,a)});const I=document.getElementById("ansRows");e.r5.order.forEach(u=>{const d=F[u],b=o[u],v=b!==void 0,C=v&&b===u,_=v?"filled":"",P=D(`<div class="term-row"><div class="term-label">${d.answer}</div><div class="dropzone ${_}" data-ans="${u}">${v?"":'<span class="placeholder">Drop here</span>'}</div></div>`),O=P.querySelector(".dropzone");if(v){let q="";i?q=C?"correct":"incorrect":e.r5.picked===b&&(q="selected");const U=D(`<div class="slot-chip ${q}">${F[b].clue}${i?"":'<button class="remove" title="Remove">✕</button>'}</div>`);i||(U.querySelector(".remove").onclick=te=>{te.stopPropagation(),Ne(u,a)},U.addEventListener("click",te=>{te.stopPropagation(),Dt(u,a)}),J(U,{clueIdx:b,fromAns:u})),O.appendChild(U)}else i&&(O.classList.add("missed"),O.innerHTML=`<span class="placeholder">Missed — ${d.clue}</span>`);i||(O.addEventListener("click",()=>{e.r5.picked!=null&&Oe(u,e.r5.picked,a)}),Y(O,q=>{q&&q.clueIdx!=null&&Oe(u,q.clueIdx,a)})),I.appendChild(P)});const w=document.getElementById("submitR5Btn");w&&(w.onclick=()=>{!x||e.r5.finished||_e(a)});const c=document.getElementById("nextBtn");c&&(c.onclick=()=>s("report")),X()}var be={};(function n(s,a,o,i){var l=!!(s.Worker&&s.Blob&&s.Promise&&s.OffscreenCanvas&&s.OffscreenCanvasRenderingContext2D&&s.HTMLCanvasElement&&s.HTMLCanvasElement.prototype.transferControlToOffscreen&&s.URL&&s.URL.createObjectURL),x=typeof Path2D=="function"&&typeof DOMMatrix=="function",f=(function(){if(!s.OffscreenCanvas)return!1;try{var r=new OffscreenCanvas(1,1),t=r.getContext("2d");t.fillRect(0,0,1,1);var m=r.transferToImageBitmap();t.createPattern(m,"no-repeat")}catch{return!1}return!0})();function E(){}function B(r){var t=a.exports.Promise,m=t!==void 0?t:s.Promise;return typeof m=="function"?new m(r):(r(E,E),null)}var I=(function(r,t){return{transform:function(m){if(r)return m;if(t.has(m))return t.get(m);var h=new OffscreenCanvas(m.width,m.height),g=h.getContext("2d");return g.drawImage(m,0,0),t.set(m,h),h},clear:function(){t.clear()}}})(f,new Map),w=(function(){var r=Math.floor(16.666666666666668),t,m,h={},g=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(t=function(y){var k=Math.random();return h[k]=requestAnimationFrame(function p($){g===$||g+r-1<$?(g=$,delete h[k],y()):h[k]=requestAnimationFrame(p)}),k},m=function(y){h[y]&&cancelAnimationFrame(h[y])}):(t=function(y){return setTimeout(y,r)},m=function(y){return clearTimeout(y)}),{frame:t,cancel:m}})(),c=(function(){var r,t,m={};function h(g){function y(k,p){g.postMessage({options:k||{},callback:p})}g.init=function(p){var $=p.transferControlToOffscreen();g.postMessage({canvas:$},[$])},g.fire=function(p,$,R){if(t)return y(p,null),t;var L=Math.random().toString(36).slice(2);return t=B(function(M){function T(A){A.data.callback===L&&(delete m[L],g.removeEventListener("message",T),t=null,I.clear(),R(),M())}g.addEventListener("message",T),y(p,L),m[L]=T.bind(null,{data:{callback:L}})}),t},g.reset=function(){g.postMessage({reset:!0});for(var p in m)m[p](),delete m[p]}}return function(){if(r)return r;if(!o&&l){var g=["var CONFETTI, SIZE = {}, module = {};","("+n.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{r=new Worker(URL.createObjectURL(new Blob([g])))}catch(y){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",y),null}h(r)}return r}})(),u={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function d(r,t){return t?t(r):r}function b(r){return r!=null}function v(r,t,m){return d(r&&b(r[t])?r[t]:u[t],m)}function C(r){return r<0?0:Math.floor(r)}function _(r,t){return Math.floor(Math.random()*(t-r))+r}function P(r){return parseInt(r,16)}function O(r){return r.map(q)}function q(r){var t=String(r).replace(/[^0-9a-f]/gi,"");return t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:P(t.substring(0,2)),g:P(t.substring(2,4)),b:P(t.substring(4,6))}}function U(r){var t=v(r,"origin",Object);return t.x=v(t,"x",Number),t.y=v(t,"y",Number),t}function te(r){r.width=document.documentElement.clientWidth,r.height=document.documentElement.clientHeight}function Qe(r){var t=r.getBoundingClientRect();r.width=t.width,r.height=t.height}function Ve(r){var t=document.createElement("canvas");return t.style.position="fixed",t.style.top="0px",t.style.left="0px",t.style.pointerEvents="none",t.style.zIndex=r,t}function Ge(r,t,m,h,g,y,k,p,$){r.save(),r.translate(t,m),r.rotate(y),r.scale(h,g),r.arc(0,0,1,k,p,$),r.restore()}function Ke(r){var t=r.angle*(Math.PI/180),m=r.spread*(Math.PI/180);return{x:r.x,y:r.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:r.startVelocity*.5+Math.random()*r.startVelocity,angle2D:-t+(.5*m-Math.random()*m),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:r.color,shape:r.shape,tick:0,totalTicks:r.ticks,decay:r.decay,drift:r.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:r.gravity*3,ovalScalar:.6,scalar:r.scalar,flat:r.flat}}function Ze(r,t){t.x+=Math.cos(t.angle2D)*t.velocity+t.drift,t.y+=Math.sin(t.angle2D)*t.velocity+t.gravity,t.velocity*=t.decay,t.flat?(t.wobble=0,t.wobbleX=t.x+10*t.scalar,t.wobbleY=t.y+10*t.scalar,t.tiltSin=0,t.tiltCos=0,t.random=1):(t.wobble+=t.wobbleSpeed,t.wobbleX=t.x+10*t.scalar*Math.cos(t.wobble),t.wobbleY=t.y+10*t.scalar*Math.sin(t.wobble),t.tiltAngle+=.1,t.tiltSin=Math.sin(t.tiltAngle),t.tiltCos=Math.cos(t.tiltAngle),t.random=Math.random()+2);var m=t.tick++/t.totalTicks,h=t.x+t.random*t.tiltCos,g=t.y+t.random*t.tiltSin,y=t.wobbleX+t.random*t.tiltCos,k=t.wobbleY+t.random*t.tiltSin;if(r.fillStyle="rgba("+t.color.r+", "+t.color.g+", "+t.color.b+", "+(1-m)+")",r.beginPath(),x&&t.shape.type==="path"&&typeof t.shape.path=="string"&&Array.isArray(t.shape.matrix))r.fill(Ye(t.shape.path,t.shape.matrix,t.x,t.y,Math.abs(y-h)*.1,Math.abs(k-g)*.1,Math.PI/10*t.wobble));else if(t.shape.type==="bitmap"){var p=Math.PI/10*t.wobble,$=Math.abs(y-h)*.1,R=Math.abs(k-g)*.1,L=t.shape.bitmap.width*t.scalar,M=t.shape.bitmap.height*t.scalar,T=new DOMMatrix([Math.cos(p)*$,Math.sin(p)*$,-Math.sin(p)*R,Math.cos(p)*R,t.x,t.y]);T.multiplySelf(new DOMMatrix(t.shape.matrix));var A=r.createPattern(I.transform(t.shape.bitmap),"no-repeat");A.setTransform(T),r.globalAlpha=1-m,r.fillStyle=A,r.fillRect(t.x-L/2,t.y-M/2,L,M),r.globalAlpha=1}else if(t.shape==="circle")r.ellipse?r.ellipse(t.x,t.y,Math.abs(y-h)*t.ovalScalar,Math.abs(k-g)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):Ge(r,t.x,t.y,Math.abs(y-h)*t.ovalScalar,Math.abs(k-g)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI);else if(t.shape==="star")for(var S=Math.PI/2*3,N=4*t.scalar,j=8*t.scalar,H=t.x,z=t.y,G=5,W=Math.PI/G;G--;)H=t.x+Math.cos(S)*j,z=t.y+Math.sin(S)*j,r.lineTo(H,z),S+=W,H=t.x+Math.cos(S)*N,z=t.y+Math.sin(S)*N,r.lineTo(H,z),S+=W;else r.moveTo(Math.floor(t.x),Math.floor(t.y)),r.lineTo(Math.floor(t.wobbleX),Math.floor(g)),r.lineTo(Math.floor(y),Math.floor(k)),r.lineTo(Math.floor(h),Math.floor(t.wobbleY));return r.closePath(),r.fill(),t.tick<t.totalTicks}function Je(r,t,m,h,g){var y=t.slice(),k=r.getContext("2d"),p,$,R=B(function(L){function M(){p=$=null,k.clearRect(0,0,h.width,h.height),I.clear(),g(),L()}function T(){o&&!(h.width===i.width&&h.height===i.height)&&(h.width=r.width=i.width,h.height=r.height=i.height),!h.width&&!h.height&&(m(r),h.width=r.width,h.height=r.height),k.clearRect(0,0,h.width,h.height),y=y.filter(function(A){return Ze(k,A)}),y.length?p=w.frame(T):M()}p=w.frame(T),$=M});return{addFettis:function(L){return y=y.concat(L),R},canvas:r,promise:R,reset:function(){p&&w.cancel(p),$&&$()}}}function ge(r,t){var m=!r,h=!!v(t||{},"resize"),g=!1,y=v(t,"disableForReducedMotion",Boolean),k=l&&!!v(t||{},"useWorker"),p=k?c():null,$=m?te:Qe,R=r&&p?!!r.__confetti_initialized:!1,L=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,M;function T(S,N,j){for(var H=v(S,"particleCount",C),z=v(S,"angle",Number),G=v(S,"spread",Number),W=v(S,"startVelocity",Number),tt=v(S,"decay",Number),nt=v(S,"gravity",Number),rt=v(S,"drift",Number),we=v(S,"colors",O),st=v(S,"ticks",Number),ke=v(S,"shapes"),at=v(S,"scalar"),it=!!v(S,"flat"),$e=U(S),xe=H,le=[],ot=r.width*$e.x,lt=r.height*$e.y;xe--;)le.push(Ke({x:ot,y:lt,angle:z,spread:G,startVelocity:W,color:we[xe%we.length],shape:ke[_(0,ke.length)],ticks:st,decay:tt,gravity:nt,drift:rt,scalar:at,flat:it}));return M?M.addFettis(le):(M=Je(r,le,$,N,j),M.promise)}function A(S){var N=y||v(S,"disableForReducedMotion",Boolean),j=v(S,"zIndex",Number);if(N&&L)return B(function(W){W()});m&&M?r=M.canvas:m&&!r&&(r=Ve(j),document.body.appendChild(r)),h&&!R&&$(r);var H={width:r.width,height:r.height};p&&!R&&p.init(r),R=!0,p&&(r.__confetti_initialized=!0);function z(){if(p){var W={getBoundingClientRect:function(){if(!m)return r.getBoundingClientRect()}};$(W),p.postMessage({resize:{width:W.width,height:W.height}});return}H.width=H.height=null}function G(){M=null,h&&(g=!1,s.removeEventListener("resize",z)),m&&r&&(document.body.contains(r)&&document.body.removeChild(r),r=null,R=!1)}return h&&!g&&(g=!0,s.addEventListener("resize",z,!1)),p?p.fire(S,H,G):T(S,H,G)}return A.reset=function(){p&&p.reset(),M&&M.reset()},A}var oe;function ye(){return oe||(oe=ge(null,{useWorker:!0,resize:!0})),oe}function Ye(r,t,m,h,g,y,k){var p=new Path2D(r),$=new Path2D;$.addPath(p,new DOMMatrix(t));var R=new Path2D;return R.addPath($,new DOMMatrix([Math.cos(k)*g,Math.sin(k)*g,-Math.sin(k)*y,Math.cos(k)*y,m,h])),R}function Xe(r){if(!x)throw new Error("path confetti are not supported in this browser");var t,m;typeof r=="string"?t=r:(t=r.path,m=r.matrix);var h=new Path2D(t),g=document.createElement("canvas"),y=g.getContext("2d");if(!m){for(var k=1e3,p=k,$=k,R=0,L=0,M,T,A=0;A<k;A+=2)for(var S=0;S<k;S+=2)y.isPointInPath(h,A,S,"nonzero")&&(p=Math.min(p,A),$=Math.min($,S),R=Math.max(R,A),L=Math.max(L,S));M=R-p,T=L-$;var N=10,j=Math.min(N/M,N/T);m=[j,0,0,j,-Math.round(M/2+p)*j,-Math.round(T/2+$)*j]}return{type:"path",path:t,matrix:m}}function et(r){var t,m=1,h="#000000",g='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof r=="string"?t=r:(t=r.text,m="scalar"in r?r.scalar:m,g="fontFamily"in r?r.fontFamily:g,h="color"in r?r.color:h);var y=10*m,k=""+y+"px "+g,p=new OffscreenCanvas(y,y),$=p.getContext("2d");$.font=k;var R=$.measureText(t),L=Math.ceil(R.actualBoundingBoxRight+R.actualBoundingBoxLeft),M=Math.ceil(R.actualBoundingBoxAscent+R.actualBoundingBoxDescent),T=2,A=R.actualBoundingBoxLeft+T,S=R.actualBoundingBoxAscent+T;L+=T+T,M+=T+T,p=new OffscreenCanvas(L,M),$=p.getContext("2d"),$.font=k,$.fillStyle=h,$.fillText(t,A,S);var N=1/m;return{type:"bitmap",bitmap:p.transferToImageBitmap(),matrix:[N,0,0,N,-L*N/2,-M*N/2]}}a.exports=function(){return ye().apply(this,arguments)},a.exports.reset=function(){ye().reset()},a.exports.create=ge,a.exports.shapeFromPath=Xe,a.exports.shapeFromText=et})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),be,!1);const Ut=be.exports;be.exports.create;function Wt(n,s){Et();const a=de()?me()/de():0,o=vt.find(l=>a>=l.min).title,i=[{label:"Round 1 · Compartment Check",score:e.scores.r1,max:e.max.r1},{label:"Round 2 · Bedside Triage",score:e.scores.r2,max:e.max.r2},{label:"Round 3 · Chart Review",score:e.scores.r3,max:e.max.r3},{label:"Round 4 · IV Fluid Pharmacy",score:e.scores.r4,max:e.max.r4},{label:"Round 5 · Lytes Beyond Sodium",score:e.scores.r5,max:e.max.r5}];n.innerHTML=`
    <div class="stack">
      <div class="hero">
        <span class="eyebrow">Shift report</span>
        <h1 style="font-size:2rem;">${e.groupName}</h1>
      </div>

      <div class="score-banner">
        <div>
          <div class="eyebrow">Total score</div>
          <div class="score-num">${me()} <span style="font-size:1rem;color:var(--ink-soft);font-weight:500;">/ ${de()}</span></div>
        </div>
        <div class="rank-badge">${o}</div>
      </div>

      <div class="card stack">
        <span class="eyebrow">Round breakdown</span>
        <div class="breakdown">
          ${i.map(l=>`<div class="brow"><span>${l.label}</span><span class="bar-track"><span class="bar-fill" style="width:${l.max?Math.round(l.score/l.max*100):0}%"></span></span><span class="mono">${l.score}/${l.max}</span></div>`).join("")}
        </div>
      </div>

      <div class="epilogue">
        <h3>What happened to this patient</h3>
        <p>His sodium was gradually corrected over 6&ndash;7 days down to 144 mEq/L, right on target. Despite that, he had minimal neurological recovery, developed ventilator-associated pneumonia, and could not be weaned off the ventilator. His family chose comfort-focused care, and he passed away on hospital day 11.</p>
        <p style="margin-bottom:0;"><strong>Learning point:</strong> extreme hypernatremia carries a high risk of mortality and morbidity even with guideline-based, appropriately slow correction. Early recognition — and preventing severe dehydration in dependent, elderly patients in the first place — is what actually changes outcomes.</p>
      </div>

      <div class="card stack">
        <span class="eyebrow">Learning objectives covered</span>
        <table class="cross-tbl">
          <thead><tr><th>Round</th><th>Objectives</th></tr></thead>
          <tbody>${ht.map(l=>`<tr><td>${l.round}</td><td>${l.los}</td></tr>`).join("")}</tbody>
        </table>
      </div>

      <div class="card stack">
        <span class="eyebrow">For the class discussion</span>
        <ol class="discuss-list">${ft.map(l=>`<li>${l}</li>`).join("")}</ol>
      </div>

      <div class="btn-row">
        <button class="btn" id="restartBtn">Play again</button>
        <button class="btn ghost" id="refBtnReport">Open reference card</button>
      </div>
    </div>
  `,document.getElementById("restartBtn").onclick=()=>{kt(),s("title")},document.getElementById("refBtnReport").onclick=he,a>=.9&&Ut({particleCount:120,spread:75,origin:{y:.3},colors:["#0e7c86","#c97a2e","#2f8f5b"]})}const _t=document.getElementById("app"),zt={title:Ct,r1:je,r2:He,r3:Ue,r4:We,r5:ve,report:Wt};function ze(n){e.screen=n,window.scrollTo({top:0,behavior:"smooth"}),zt[n](_t,ze)}St();mt({immediate:!0});ze(e.screen);
