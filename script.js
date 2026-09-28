const steps = [
  {
    label:"STEP 01", title:"Sense the environment.",
    body:"Vayu receives existing camera feeds and operational context. The system establishes a live view of what the vehicle is experiencing without requiring a hardware replacement by default.",
    metric:"INPUT", value:"RGB camera + fleet context"
  },
  {
    label:"STEP 02", title:"Detect what changed.",
    body:"Computer vision estimates weather conditions and identifies vehicles, pedestrians, road edges, lane markings and obstacles in the scene.",
    metric:"PERCEPTION", value:"Weather + objects + tracking"
  },
  {
    label:"STEP 03", title:"Measure confidence.",
    body:"The system does not treat every prediction equally. It estimates perception reliability and converts uncertainty into an operational risk signal.",
    metric:"RISK", value:"Confidence + safety threshold"
  },
  {
    label:"STEP 04", title:"Choose a response.",
    body:"The Vayu Agent selects a predefined workflow based on severity, confidence and fleet policy. Low-risk digital actions can be automated.",
    metric:"ACTION", value:"Safety protocol + alert"
  },
  {
    label:"STEP 05", title:"Escalate when uncertain.",
    body:"Safety-critical uncertainty triggers human oversight. The system can stop, warn or escalate rather than silently acting outside its validated operating envelope.",
    metric:"GUARDRAIL", value:"Human-in-the-loop escalation"
  }
];

document.querySelectorAll(".system-node").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const i = Number(btn.dataset.step);
    document.querySelectorAll(".system-node").forEach(x=>x.classList.remove("active"));
    btn.classList.add("active");
    const s = steps[i];
    document.querySelector("#step-label").textContent=s.label;
    document.querySelector("#step-title").textContent=s.title;
    document.querySelector("#step-body").textContent=s.body;
    document.querySelector("#step-metric").textContent=s.metric;
    document.querySelector("#step-value").textContent=s.value;
  });
});

const nav = document.querySelector(".nav");
let lastY = 0;
window.addEventListener("scroll",()=>{
  const y=window.scrollY;
  nav.style.boxShadow = y>20 ? "0 8px 35px rgba(0,0,0,.22)" : "none";
  lastY=y;
});
