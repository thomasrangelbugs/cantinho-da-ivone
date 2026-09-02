const CONTENT = window.CANTINHO_CONTENT || {
  greetings:{morning:{ivone:[],osvaldo:[]},afternoon:{ivone:[],osvaldo:[]},evening:{ivone:[],osvaldo:[]}},
  dailyMessages:["Que a paz de Deus acompanhe Ivone e Osvaldo hoje."],
  affirmations:["Acolhemos este dia com fé e carinho."],
  bibleStories:[{title:"O Bom Samaritano",ref:"Lucas 10",story:"Ajudar quem precisa.",lesson:"Seja misericordioso."}],
  diets:{},
  weatherTips:{clear:{title:"Sol",tips:["Beba água."]}}
};

const prayers=[
"Senhor, agradeço por este novo dia. Ilumina meus pensamentos, fortalece minha fé e ajuda-me a espalhar bondade, paciência e amor. Que eu encontre serenidade para aceitar o que não posso mudar, coragem para transformar o que estiver ao meu alcance e sabedoria para reconhecer cada oportunidade de fazer o bem. Assim seja.",
"Deus de amor, visita hoje o meu coração. Leva para longe a inquietação, renova minhas forças e inspira minhas palavras e atitudes. Que eu seja instrumento de paz dentro da minha casa e por onde passar. Assim seja.",
"Bons amigos espirituais, acompanhem meus passos neste dia. Ajudem-me a perceber as lições escondidas nas dificuldades e as bênçãos presentes nas coisas simples. Que eu siga com confiança, humildade e gratidão.",
"Senhor, entrego em Tuas mãos aquilo que ainda não consigo resolver. Dá-me calma para viver um dia de cada vez e coragem para continuar fazendo a minha parte com amor. Que a esperança permaneça acesa dentro de mim.",
"Pai de infinita bondade, abençoa minha família, minha casa e todos aqueles que precisam de consolo. Que nossas palavras sejam mais gentis, nossos pensamentos mais claros e nossas escolhas guiadas pelo bem.",
"Senhor, abençoa Ivone e Osvaldo. Guarda a saúde deles, fortalece a união da família e derrama paz sobre a casa em Venâncio Aires. Assim seja."
];

const spiritReadings=[
{quote:"Fora da caridade não há salvação.",source:"Allan Kardec — O Evangelho Segundo o Espiritismo",reflection:"A caridade não vive apenas nas grandes ações. Ela aparece na paciência, na escuta, no perdão e no cuidado oferecido a quem está perto."},
{quote:"Nascer, morrer, renascer ainda e progredir sempre, tal é a lei.",source:"Máxima tradicionalmente associada a Allan Kardec",reflection:"A vida pode ser compreendida como uma caminhada de aprendizado contínuo. Cada experiência oferece uma oportunidade de crescimento."},
{quote:"Reconhece-se o verdadeiro espírita pela sua transformação moral.",source:"Allan Kardec — O Evangelho Segundo o Espiritismo",reflection:"A espiritualidade se revela menos nas palavras e mais no esforço cotidiano para sermos pacientes, honestos, humildes e bondosos."},
{quote:"A fé raciocinada é aquela que pode encarar a razão face a face.",source:"Allan Kardec — O Evangelho Segundo o Espiritismo",reflection:"A fé pode caminhar ao lado da reflexão. Perguntar, estudar e compreender também são formas de fortalecer a vida espiritual."},
{quote:"A prece é um ato de adoração.",source:"Allan Kardec — O Livro dos Espíritos",reflection:"Orar é elevar o pensamento, agradecer, pedir força e abrir o coração para inspirações que nos aproximem do bem."},
{quote:"O homem de bem é aquele que pratica a lei de justiça, amor e caridade.",source:"Allan Kardec — O Evangelho Segundo o Espiritismo",reflection:"A bondade é construída em cada decisão: agir com justiça, oferecer compreensão e evitar aumentar a dor de alguém."}
];

const sonMessages=[
"Mãe e pai, este cantinho foi feito para lembrar vocês de que sempre existe uma luz acesa. Eu amo vocês.",
"Ivone e Osvaldo, sua força, seu carinho e tudo o que fizeram por nossa família permanecem comigo todos os dias.",
"Nunca se esqueçam: a presença de vocês faz diferença na minha vida. Vocês são muito importantes para mim.",
"Que vocês abram este site sempre que precisarem de calma e sintam, em cada palavra, um abraço meu.",
"Obrigado por tantas vezes acreditarem em mim. Este é um pequeno jeito de devolver o amor que recebi de vocês.",
"Vocês não precisam resolver tudo de uma vez. Descansem o coração e lembrem que têm um filho que ama muito vocês.",
"Desejo que seus dias tenham mais serenidade, saúde, esperança e pequenos motivos para sorrir.",
"Mesmo quando eu não disser em voz alta: tenho orgulho de vocês e sou grato por ser filho de Ivone e Osvaldo.",
"Este espaço é de vocês dois — e todo o amor nele veio do que me ensinaram.",
"Que os bons espíritos protejam seus passos. Com amor, Thomas.",
"Pai Osvaldo, obrigado pelo exemplo e pelo cuidado. Mãe Ivone, obrigado pela fé e pelo carinho. Vocês são meu porto seguro.",
"Chris, Nicolas e eu somos gratos por ter vocês como pais. Que Deus multiplique saúde e paz em casa."
];

const familyBirthdays=[
  {name:"Ivone",day:19,month:7,eyebrow:"Aniversário da mamãe",title:"Feliz aniversário, Ivone",text:"Hoje o mundo ganhou você — e Thomas, Nicolas e Chris ganhamos a melhor mãe do mundo. Obrigado por tanto amor. Que este novo ciclo venha com saúde, paz e muito carinho. Com todo o meu amor, Thomas."},
  {name:"Osvaldo",day:27,month:6,eyebrow:"Aniversário do papai",title:"Feliz aniversário, Osvaldo",text:"Hoje celebramos o papai. Thomas, Nicolas e Chris somos gratos por você. Que Deus abençoe os seus dias com saúde, paz e a alegria da nossa família reunida. Com carinho, Thomas."},
  {name:"Chris",day:12,month:5,eyebrow:"Aniversário do Chris",title:"Feliz aniversário, Chris",text:"Hoje é o aniversário do Chris — filho da Ivone e do Osvaldo, irmão do Thomas e do Nicolas. Que este dia seja leve, abençoado e cheio de coisas boas. Com carinho da família."},
  {name:"Nicolas",day:17,month:9,eyebrow:"Aniversário do Nicolas",title:"Feliz aniversário, Nicolas",text:"Hoje é o aniversário do Nicolas — filho da Ivone e do Osvaldo, irmão do Thomas e do Chris. Que a vida traga a ele proteção, alegria e muitos motivos para sorrir. Com carinho da família."},
  {name:"Thomas",day:13,month:1,eyebrow:"Aniversário do Thomas",title:"Feliz aniversário, Thomas",text:"Hoje é o aniversário do Thomas — filho da Ivone e do Osvaldo, irmão do Chris e do Nicolas. Mãe e pai, obrigado por me darem a vida e tanto amor. Este cantinho continua sendo um abraço meu para vocês."}
];

const $=id=>document.getElementById(id);
const now=new Date();
const dayKey=now.toISOString().slice(0,10);
const day=Math.floor((now-new Date(now.getFullYear(),0,0))/86400000);
let prayerIndex=day%prayers.length;
let reflectionIndex=day%spiritReadings.length;
let sonIndex=day%sonMessages.length;
let bibleIndex=day%CONTENT.bibleStories.length;
let parentMsgOffset=0;
const completedSteps=new Set();
let sleepMode=false;
let themeBeforeSleep=null;
let currentWeatherKey="cloudy";
let lastCalcCategory="normal";

function toast(msg){
  $("toast").textContent=msg;
  $("toast").classList.add("show");
  clearTimeout(toast.t);
  toast.t=setTimeout(()=>$("toast").classList.remove("show"),2800);
}

function greeting(){
  const h=new Date().getHours();
  return h<12?"Bom dia":h<18?"Boa tarde":"Boa noite";
}

function periodKey(date=new Date()){
  const h=date.getHours();
  if(h<12)return"morning";
  if(h<18)return"afternoon";
  return"evening";
}

function periodMeta(){
  const key=periodKey();
  if(key==="morning")return{label:"Mensagens de bom dia",icon:"☀️",sky:"morning"};
  if(key==="afternoon")return{label:"Mensagens de boa tarde",icon:"🌤️",sky:"afternoon"};
  return{label:"Mensagens de boa noite",icon:"🌙",sky:"night"};
}

function pickFrom(list,offset=0){
  if(!list||!list.length)return"";
  return list[Math.abs(day+offset)%list.length];
}

function renderParentMessages(){
  const key=periodKey();
  const meta=periodMeta();
  const ivoneList=CONTENT.greetings[key]?.ivone||[];
  const osvaldoList=CONTENT.greetings[key]?.osvaldo||[];
  $("periodLabel").textContent=meta.label;
  $("periodIcon").textContent=meta.icon;
  $("msgIvone").textContent=pickFrom(ivoneList,parentMsgOffset);
  $("msgOsvaldo").textContent=pickFrom(osvaldoList,parentMsgOffset+17);
  document.body.dataset.sky=meta.sky;
}

function renderPrayer(){
  $("prayerOfDay").textContent=prayers[prayerIndex];
  $("quickPrayerText").textContent=prayers[prayerIndex];
}

function renderReflection(){
  const r=spiritReadings[reflectionIndex];
  $("spiritQuote").textContent=`“${r.quote}”`;
  $("spiritSource").textContent=r.source;
  $("spiritReflection").textContent=r.reflection;
}

function renderSon(){
  const msg=sonMessages[sonIndex];
  $("sonMessage").textContent=msg;
  $("nightSonMessage").textContent=msg;
  $("messageCounter").textContent=`${sonIndex+1} de ${sonMessages.length}`;
}

function renderBible(){
  const s=CONTENT.bibleStories[bibleIndex%CONTENT.bibleStories.length];
  $("bibleTitle").textContent=s.title;
  $("bibleRef").textContent=s.ref;
  $("bibleStory").textContent=s.story;
  $("bibleLesson").textContent=s.lesson;
}

function mothersDayDate(year){
  const first=new Date(year,4,1);
  const sundayOffset=(7-first.getDay())%7;
  return new Date(year,4,1+sundayOffset+7);
}

function fathersDayDate(year){
  const first=new Date(year,7,1);
  const sundayOffset=(7-first.getDay())%7;
  return new Date(year,7,1+sundayOffset+7);
}

function showSpecialDay(){
  const banner=$("birthdayBanner");
  const todayBirthday=familyBirthdays.find(p=>now.getDate()===p.day&&(now.getMonth()+1)===p.month);
  const mothers=mothersDayDate(now.getFullYear());
  const fathers=fathersDayDate(now.getFullYear());
  const isMothersDay=now.getDate()===mothers.getDate()&&now.getMonth()===mothers.getMonth();
  const isFathersDay=now.getDate()===fathers.getDate()&&now.getMonth()===fathers.getMonth();

  if(todayBirthday){
    banner.hidden=false;
    $("specialDayEyebrow").textContent=todayBirthday.eyebrow;
    $("specialDayTitle").textContent=todayBirthday.title;
    $("specialDayText").textContent=todayBirthday.text;
  }else if(isMothersDay){
    banner.hidden=false;
    $("specialDayEyebrow").textContent="Dia das Mães";
    $("specialDayTitle").textContent="Feliz Dia das Mães";
    $("specialDayText").textContent="Thomas, Nicolas e Chris agradecemos por cada oração, cada cuidado e cada gesto de amor. Você é nosso porto seguro. Com gratidão e carinho, Thomas.";
  }else if(isFathersDay){
    banner.hidden=false;
    $("specialDayEyebrow").textContent="Dia dos Pais";
    $("specialDayTitle").textContent="Feliz Dia dos Pais, Osvaldo";
    $("specialDayText").textContent="Hoje Thomas, Nicolas e Chris agradecemos ao papai por tanto cuidado e presença. Que Deus continue abençoando os seus caminhos. Com carinho, Thomas.";
  }
}

function updateClock(){
  const d=new Date();
  $("liveClock").textContent=d.toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit",second:"2-digit"});
  $("liveDate").textContent=new Intl.DateTimeFormat("pt-BR",{weekday:"long",day:"numeric",month:"long"}).format(d);
  const prev=document.body.dataset.sky;
  const next=periodMeta().sky;
  if(prev!==next)renderParentMessages();
}

function mapWeather(code,temp,humidity,wind){
  if(code>=95)return{key:"storm",label:"Temporal / trovoadas",icon:"⛈️"};
  if(code>=80&&code<=82)return{key:"rain",label:"Pancadas de chuva",icon:"🌦️"};
  if(code>=61&&code<=67)return{key:"rain",label:"Chuva",icon:"🌧️"};
  if(code>=51&&code<=57)return{key:"rain",label:"Garoa",icon:"🌦️"};
  if(code>=71&&code<=77)return{key:"cold",label:"Neve / frio intenso",icon:"❄️"};
  if(code===45||code===48)return{key:"cloudy",label:"Neblina",icon:"🌫️"};
  if(wind>=40)return{key:"wind",label:"Vento forte",icon:"💨"};
  if(temp<=10)return{key:"cold",label:"Tempo frio",icon:"🥶"};
  if(temp>=30)return{key:"hot",label:"Calor intenso",icon:"🥵"};
  if(humidity<=35&&temp>=22)return{key:"dry",label:"Tempo seco",icon:"☀️"};
  if(code===0)return{key:"clear",label:"Céu limpo",icon:"☀️"};
  if(code<=3)return{key:"cloudy",label:"Parcialmente nublado",icon:"⛅"};
  return{key:"cloudy",label:"Nublado",icon:"☁️"};
}

function applyWeatherTips(key){
  const tip=CONTENT.weatherTips[key]||CONTENT.weatherTips.clear;
  const list=tip.tips||["Beba água ao longo do dia."];
  $("weatherTip").textContent=`${tip.title}: ${list[day%list.length]} Lembrete: tome água.`;
}

async function loadWeather(){
  const url="https://api.open-meteo.com/v1/forecast?latitude=-29.6064&longitude=-52.1917&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m,cloud_cover&timezone=America%2FSao_Paulo";
  try{
    const res=await fetch(url);
    if(!res.ok)throw new Error("weather");
    const data=await res.json();
    const c=data.current||{};
    const mapped=mapWeather(Number(c.weather_code||3),Number(c.temperature_2m||20),Number(c.relative_humidity_2m||50),Number(c.wind_speed_10m||0));
    currentWeatherKey=mapped.key;
    document.body.dataset.weather=mapped.key;
    $("weatherIcon").textContent=mapped.icon;
    $("weatherLabel").textContent=mapped.label;
    $("weatherMeta").textContent=`${Number(c.temperature_2m).toFixed(1)}°C · sensação ${Number(c.apparent_temperature).toFixed(1)}°C · umidade ${c.relative_humidity_2m}% · vento ${Number(c.wind_speed_10m).toFixed(0)} km/h`;
    applyWeatherTips(mapped.key);
  }catch{
    document.body.dataset.weather="cloudy";
    $("weatherIcon").textContent="⛅";
    $("weatherLabel").textContent="Tempo indisponível no momento";
    $("weatherMeta").textContent="Venâncio Aires · RS — tente novamente em breve";
    applyWeatherTips("cloudy");
  }
}

function bmiCategory(bmi){
  if(bmi<18.5)return"underweight";
  if(bmi<25)return"normal";
  if(bmi<30)return"overweight";
  return"obesity";
}

function bmiLabel(cat){
  return({underweight:"Abaixo do peso",normal:"Peso adequado",overweight:"Sobrepeso",obesity:"Obesidade"})[cat]||cat;
}

function estimateBodyFat(bmi,age,sex){
  // Deurenberg et al. (estimativa)
  const sexVal=sex==="m"?1:0;
  return(1.20*bmi)+(0.23*age)-(10.8*sexVal)-5.4;
}

function waterLiters(weightKg,weatherKey){
  let ml=35*weightKg;
  if(weatherKey==="hot"||weatherKey==="dry")ml=40*weightKg;
  if(weatherKey==="cold")ml=32*weightKg;
  if(weatherKey==="storm"||weatherKey==="rain")ml=34*weightKg;
  return Math.max(1.5,ml/1000);
}

function renderDiet(category){
  const diet=CONTENT.diets[category]||CONTENT.diets.normal;
  if(!diet)return;
  lastCalcCategory=category;
  document.querySelectorAll(".diet-tab").forEach(btn=>{
    btn.classList.toggle("is-active",btn.dataset.diet===category);
  });
  $("dietTitle").textContent=diet.label;
  $("dietGoal").textContent=diet.goal;
  $("dietPrep").innerHTML=(diet.prep||[]).map(p=>`<li>${p}</li>`).join("");
  $("dietWeek").innerHTML=(diet.week||[]).map(dayItem=>`
    <article class="diet-day">
      <strong>${dayItem.day}</strong>
      <span>Café: ${dayItem.breakfast}</span>
      <span>Almoço: ${dayItem.lunch}</span>
      <span>Lanche: ${dayItem.snack}</span>
      <span>Jantar: ${dayItem.dinner}</span>
    </article>
  `).join("");
}

function runCalculator(){
  const weight=Number($("calcWeight").value);
  const heightCm=Number($("calcHeight").value);
  const age=Number($("calcAge").value)||60;
  const sex=$("calcSex").value;
  const name=($("calcName").value||"").trim();

  if(!weight||!heightCm||weight<30||heightCm<100){
    toast("Preencha peso e altura válidos.");
    return;
  }

  const heightM=heightCm/100;
  const bmi=weight/(heightM*heightM);
  const cat=bmiCategory(bmi);
  const fat=estimateBodyFat(bmi,age,sex);
  const water=waterLiters(weight,currentWeatherKey);
  const who=name?`${name}: `:"";

  $("calcResult").hidden=false;
  $("calcImcLabel").textContent=`${who}IMC ${bmi.toFixed(1)} — ${bmiLabel(cat)}`;
  $("calcDetails").textContent=`Estimativa de gordura corporal: ${Math.max(5,fat).toFixed(1)}% (fórmula aproximada de Deurenberg).`;
  $("calcWater").textContent=`Água sugerida hoje: cerca de ${water.toFixed(1)} litros (${Math.round(water*1000)} ml), ajustada ao clima atual.`;
  renderDiet(cat);
  $("dietas").scrollIntoView({behavior:"smooth",block:"start"});
  toast("Cálculo pronto. Veja também o cardápio da semana.");
  localStorage.setItem("ivone-calc",JSON.stringify({weight,heightCm,age,sex,name}));
}

// boot UI text
$("personalGreeting").textContent=`${greeting()}, Ivone e Osvaldo.`;
$("todayDate").textContent=new Intl.DateTimeFormat("pt-BR",{weekday:"long",day:"numeric",month:"long",year:"numeric"}).format(now);
$("dailyMessage").textContent=CONTENT.dailyMessages[day%CONTENT.dailyMessages.length];
$("dailyAffirmation").textContent=CONTENT.affirmations[day%CONTENT.affirmations.length];
renderParentMessages();
renderPrayer();
renderReflection();
renderBible();
renderDiet("normal");
const savedSon=Number(localStorage.getItem("ivone-son-index"));
if(Number.isFinite(savedSon))sonIndex=savedSon%sonMessages.length;
renderSon();
showSpecialDay();
updateClock();
setInterval(updateClock,1000);
loadWeather();
setInterval(loadWeather,15*60*1000);

try{
  const savedCalc=JSON.parse(localStorage.getItem("ivone-calc")||"null");
  if(savedCalc){
    $("calcWeight").value=savedCalc.weight??"";
    $("calcHeight").value=savedCalc.heightCm??"";
    $("calcAge").value=savedCalc.age??"";
    $("calcSex").value=savedCalc.sex||"f";
    $("calcName").value=savedCalc.name||"";
  }
}catch{}

(()=>{
  const photo=$("lovePhoto");
  const real=new Image();
  real.onload=()=>{photo.src="assets/foto-carinho.jpg";photo.alt="Ivone, Osvaldo e Thomas"};
  real.src="assets/foto-carinho.jpg";
})();

$("newParentMessages").onclick=()=>{parentMsgOffset+=1;renderParentMessages();toast("Novas mensagens deste horário.");};
$("newBibleStory").onclick=()=>{bibleIndex=(bibleIndex+1)%CONTENT.bibleStories.length;renderBible();};
$("newPrayerButton").onclick=()=>{prayerIndex=(prayerIndex+1)%prayers.length;renderPrayer();};
$("newReflectionButton").onclick=()=>{reflectionIndex=(reflectionIndex+1)%spiritReadings.length;renderReflection();};
const nextSon=()=>{sonIndex=(sonIndex+1)%sonMessages.length;localStorage.setItem("ivone-son-index",sonIndex);renderSon();};
$("nextSonMessage").onclick=nextSon;
$("nightNextSon").onclick=nextSon;
$("calcButton").onclick=runCalculator;
$("calcClear").onclick=()=>{
  ["calcName","calcWeight","calcHeight","calcAge"].forEach(id=>$(id).value="");
  $("calcResult").hidden=true;
  localStorage.removeItem("ivone-calc");
};
$("waterReminderBtn").onclick=()=>toast("Hora de beber um copo de água 💧");
setInterval(()=>{
  if(!document.body.classList.contains("sleep-mode")&&!document.hidden){
    toast("Lembrete suave: tome um gole de água 💧");
  }
},50*60*1000);

document.querySelectorAll(".diet-tab").forEach(btn=>{
  btn.onclick=()=>renderDiet(btn.dataset.diet);
});

const savedTheme=localStorage.getItem("ivone-theme")||(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");
document.documentElement.dataset.theme=savedTheme;
$("themeToggle").textContent=savedTheme==="dark"?"☀":"☾";
$("themeToggle").onclick=()=>{
  if(sleepMode)return;
  const next=document.documentElement.dataset.theme==="dark"?"light":"dark";
  document.documentElement.dataset.theme=next;
  localStorage.setItem("ivone-theme",next);
  $("themeToggle").textContent=next==="dark"?"☀":"☾";
};

function openStep(step){
  document.querySelectorAll(".night-step").forEach(el=>{
    el.classList.toggle("is-open",Number(el.dataset.step)===step);
  });
}
function updateNightFinish(){$("nightFinish").hidden=completedSteps.size<3;}
function completeStep(step){
  completedSteps.add(step);
  const el=document.querySelector(`.night-step[data-step="${step}"]`);
  if(el)el.classList.add("is-done");
  updateNightFinish();
  if(step+1<=3)openStep(step+1);
  toast(step===3?"Rotina concluída. Descanse com paz.":`Passo ${step} concluído.`);
}
document.querySelectorAll("[data-open-step]").forEach(btn=>{btn.onclick=()=>openStep(Number(btn.dataset.openStep));});
document.querySelectorAll("[data-complete-step]").forEach(btn=>{btn.onclick=()=>completeStep(Number(btn.dataset.completeStep));});

function enterSleepMode(){
  if(sleepMode)return;
  sleepMode=true;
  themeBeforeSleep=document.documentElement.dataset.theme||"light";
  document.documentElement.dataset.theme="dark";
  document.body.classList.add("sleep-mode");
  $("sleepBar").hidden=false;
  $("sleepToggle").classList.add("is-active");
  $("sleepToggle").title="Sair do modo dormir";
  openStep(1);
  $("rotina-noturna").scrollIntoView({behavior:"smooth",block:"start"});
  toast("Modo dormir ativado.");
}
function exitSleepMode(){
  if(!sleepMode)return;
  sleepMode=false;
  document.body.classList.remove("sleep-mode");
  $("sleepBar").hidden=true;
  $("sleepToggle").classList.remove("is-active");
  $("sleepToggle").title="Modo dormir";
  document.documentElement.dataset.theme=themeBeforeSleep||localStorage.getItem("ivone-theme")||"light";
  $("themeToggle").textContent=document.documentElement.dataset.theme==="dark"?"☀":"☾";
  toast("Modo dormir encerrado.");
}
$("sleepToggle").onclick=()=>{sleepMode?exitSleepMode():enterSleepMode();};
$("exitSleep").onclick=exitSleepMode;
$("startNightButton").onclick=enterSleepMode;

const backgroundMusic=new Audio("assets/luz_serena.mp3");
backgroundMusic.loop=true;
backgroundMusic.preload="auto";
backgroundMusic.volume=0;
let sound=false;
let volumeTimer=null;

const miguelAudio=new Audio("assets/oracao_arcanjo_miguel.mp3");
miguelAudio.preload="metadata";
miguelAudio.volume=0.85;
let miguelPlaying=false;

function formatTime(sec){
  if(!Number.isFinite(sec)||sec<0)return"--:--";
  const m=Math.floor(sec/60);
  const s=Math.floor(sec%60);
  return`${m}:${String(s).padStart(2,"0")}`;
}
function setMiguelProgress(){
  const seek=$("miguelSeek");
  const duration=miguelAudio.duration||0;
  const current=miguelAudio.currentTime||0;
  const pct=duration?(current/duration)*100:0;
  seek.value=String(pct);
  seek.style.setProperty("--fill",`${pct}%`);
  $("miguelCurrent").textContent=formatTime(current);
  if(duration)$("miguelDuration").textContent=formatTime(duration);
}
function setMiguelPlayingUI(playing){
  miguelPlaying=playing;
  const btn=$("miguelPlay");
  btn.textContent=playing?"❚❚":"▶";
  btn.classList.toggle("is-playing",playing);
  btn.setAttribute("aria-label",playing?"Pausar oração do Arcanjo Miguel":"Tocar oração do Arcanjo Miguel");
  btn.title=playing?"Pausar":"Tocar";
}
function pauseAmbientMusic(){
  if(!sound)return;
  sound=false;
  fadeMusic(0,700);
  $("soundToggle").textContent="♫";
  $("soundToggle").title="Tocar música";
}
function pauseMiguelPrayer(){
  if(!miguelPlaying&&miguelAudio.paused)return;
  miguelAudio.pause();
  setMiguelPlayingUI(false);
}
function fadeMusic(targetVolume,duration=1200){
  clearInterval(volumeTimer);
  const initial=backgroundMusic.volume;
  const steps=30;
  let step=0;
  volumeTimer=setInterval(()=>{
    step+=1;
    backgroundMusic.volume=Math.max(0,Math.min(1,initial+(targetVolume-initial)*(step/steps)));
    if(step>=steps){
      clearInterval(volumeTimer);
      volumeTimer=null;
      if(targetVolume===0)backgroundMusic.pause();
    }
  },duration/steps);
}

$("soundToggle").onclick=async()=>{
  if(sound){
    sound=false;
    fadeMusic(0,900);
    $("soundToggle").textContent="♫";
    $("soundToggle").title="Tocar música";
    toast("Música pausada.");
    return;
  }
  try{
    pauseMiguelPrayer();
    await backgroundMusic.play();
    sound=true;
    fadeMusic(0.42,1300);
    $("soundToggle").textContent="♬";
    $("soundToggle").title="Pausar música";
    toast("Tocando “Luz Serena”.");
  }catch{
    toast("Toque novamente no botão para iniciar a música.");
  }
};

$("miguelPlay").onclick=async()=>{
  if(miguelPlaying){
    pauseMiguelPrayer();
    toast("Oração pausada.");
    return;
  }
  try{
    pauseAmbientMusic();
    await miguelAudio.play();
    setMiguelPlayingUI(true);
    openStep(1);
    toast("Oração do Arcanjo Miguel.");
  }catch{
    toast("Toque novamente no botão para iniciar a oração.");
  }
};

$("miguelSeek").oninput=()=>{
  const duration=miguelAudio.duration||0;
  if(!duration)return;
  const pct=Number($("miguelSeek").value);
  miguelAudio.currentTime=(pct/100)*duration;
  $("miguelSeek").style.setProperty("--fill",`${pct}%`);
  $("miguelCurrent").textContent=formatTime(miguelAudio.currentTime);
};

miguelAudio.addEventListener("loadedmetadata",setMiguelProgress);
miguelAudio.addEventListener("timeupdate",setMiguelProgress);
miguelAudio.addEventListener("ended",()=>{
  setMiguelPlayingUI(false);
  miguelAudio.currentTime=0;
  setMiguelProgress();
  if(!completedSteps.has(1))completeStep(1);
  else toast("Que o Arcanjo Miguel guarde o seu sono.");
});
miguelAudio.addEventListener("pause",()=>{if(!miguelAudio.ended)setMiguelPlayingUI(false);});
miguelAudio.addEventListener("play",()=>setMiguelPlayingUI(true));

document.addEventListener("visibilitychange",()=>{
  if(document.hidden&&sound)backgroundMusic.pause();
  else if(!document.hidden&&sound)backgroundMusic.play().catch(()=>{});
});

let timer=null,seconds=60;
function timerUI(){
  $("timerDisplay").textContent=`00:${String(seconds).padStart(2,"0")}`;
  $("timerRing").style.setProperty("--progress",`${((60-seconds)/60)*360}deg`);
}
$("timerButton").onclick=()=>{
  if(timer)return;
  $("timerPanel").hidden=false;
  seconds=60;
  timerUI();
  timer=setInterval(()=>{
    seconds--;
    timerUI();
    if(seconds<=0){
      clearInterval(timer);timer=null;
      $("timerStatus").textContent="Que este momento tenha trazido paz e serenidade ao seu coração.";
      $("timerButton").textContent="Recomeçar 1 minuto";
      toast("Seu minuto de silêncio foi concluído.");
    }
  },1000);
};

let nightTimer=null,nightSeconds=60;
function nightTimerUI(){
  $("nightTimerDisplay").textContent=`00:${String(nightSeconds).padStart(2,"0")}`;
  $("nightTimerRing").style.setProperty("--progress",`${((60-nightSeconds)/60)*360}deg`);
}
$("nightTimerButton").onclick=()=>{
  if(nightTimer)return;
  nightSeconds=60;
  nightTimerUI();
  $("nightTimerStatus").textContent="Respire sem pressa.";
  $("nightTimerButton").textContent="Respirando...";
  nightTimer=setInterval(()=>{
    nightSeconds--;
    nightTimerUI();
    if(nightSeconds<=0){
      clearInterval(nightTimer);nightTimer=null;
      $("nightTimerStatus").textContent="Que este minuto tenha acalmado o seu coração.";
      $("nightTimerButton").textContent="Recomeçar 1 minuto";
      if(!completedSteps.has(2))completeStep(2);
      else toast("Minuto de respiração concluído.");
    }
  },1000);
};

const gratitudeIds=["gratitude1","gratitude2","gratitude3"];
const gratitudeKey=`ivone-gratitude-${dayKey}`;
const intentionKey=`ivone-intention-${dayKey}`;
try{
  const saved=JSON.parse(localStorage.getItem(gratitudeKey)||"[]");
  gratitudeIds.forEach((id,i)=>$(id).value=saved[i]||"");
}catch{}
$("prayerIntention").value=localStorage.getItem(intentionKey)||"";
$("saveGratitude").onclick=()=>{
  localStorage.setItem(gratitudeKey,JSON.stringify(gratitudeIds.map(id=>$(id).value.trim())));
  $("gratitudeStatus").textContent="Sua gratidão foi guardada com carinho neste aparelho. 🌿";
};
$("saveIntention").onclick=()=>{
  localStorage.setItem(intentionKey,$("prayerIntention").value.trim());
  $("intentionStatus").textContent="Sua intenção foi guardada para este dia. ✨";
};
$("clearIntention").onclick=()=>{
  $("prayerIntention").value="";
  localStorage.removeItem(intentionKey);
  $("intentionStatus").textContent="A intenção foi apagada.";
};

let paused=false,phaseTimers=[];
function setBreathTexts(inspire){
  $("breathingText").textContent=inspire;
  $("nightBreathingText").textContent=inspire;
}
function breathing(){
  if(paused)return;
  phaseTimers.forEach(clearTimeout);
  setBreathTexts("Inspire");
  phaseTimers=[
    setTimeout(()=>setBreathTexts("Segure"),4000),
    setTimeout(()=>setBreathTexts("Expire"),5800)
  ];
}
breathing();
setInterval(breathing,10000);
$("breathingToggle").onclick=()=>{
  paused=!paused;
  document.querySelectorAll(".breathing-stage").forEach(el=>el.classList.toggle("paused",paused));
  $("breathingToggle").textContent=paused?"Continuar animação":"Pausar animação";
  setBreathTexts(paused?"Pausa":"Inspire");
  if(!paused)breathing();
};

const dialog=$("prayerDialog");
$("quickPrayerButton").onclick=()=>{renderPrayer();dialog.showModal();};
$("closeDialog").onclick=()=>dialog.close();
$("amenButton").onclick=()=>dialog.close();

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{
  if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target);}
}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

if("serviceWorker"in navigator&&location.protocol.startsWith("http")){
  addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}));
}
