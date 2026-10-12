const $=s=>document.querySelector(s);
const T={
en:{title:"Tender Package Builder",h1:"1. Load the tender list",bjson:"Open requirements.json",hint:"Choose the requirements.json file to begin.",tid:"Tender ID",ttl:"Title",ent:"Procuring entity",bid:"Bidder",dl:"Submission deadline",
h2:"2. Add your PDF files",bpdf:"Choose PDF files",limits:"Up to 30 files, 50 MB in total.",pages:"pages",rm:"Remove",dup:"Duplicate of {n}. It cannot be matched.",nofiles:"No files added yet.",
notpdf:"{n}: not a PDF file, skipped.",bad:"{n}: damaged PDF, skipped.",pw:"{n}: password-protected PDF, skipped.",lim:"{n}: limit of 30 files / 50 MB reached, skipped.",
h3:"3. Match files and check",doc:"Document",file:"File",exp:"Expiry date",stat:"Status",req:"Required",opt:"Optional",none:"— No file —",auto:"Auto-match by file name",csv:"Export checklist (CSV)",
missing:"Missing",need:"Expiry date needed",expired:"Expired",notprov:"Not provided",ok:"OK",
h4:"4. Make the package",gen:"Make package PDF",blocked:"Fix these first:",ready:"All checks passed. You can make the package.",work:"Making the package…",done:"Done. Your download has started.",fail:"Could not make the package: ",badjson:"This is not a valid requirements file.",needlist:"Load the tender list first.",drop:"Drag PDF files here, or",sum:"{a} of {b} documents ready",attn:"{n} need attention",allok:"Everything is ready.",hLogo:"Logo (optional)",logoHint:"Add your company logo (PNG or JPG). It will appear on the top right of the cover page.",bLogo:"Choose logo",rmLogo:"Remove logo",logoBad:"{n}: not a PNG or JPG image, skipped.",lang:"বাংলা"},
bn:{title:"টেন্ডার প্যাকেজ নির্মাতা",h1:"১. টেন্ডার তালিকা লোড করুন",bjson:"requirements.json খুলুন",hint:"শুরু করতে requirements.json ফাইলটি বেছে নিন।",tid:"টেন্ডার আইডি",ttl:"শিরোনাম",ent:"ক্রয়কারী প্রতিষ্ঠান",bid:"দরদাতা",dl:"জমাদানের শেষ তারিখ",
h2:"২. আপনার PDF ফাইল যোগ করুন",bpdf:"PDF ফাইল বেছে নিন",limits:"সর্বোচ্চ ৩০টি ফাইল, মোট ৫০ MB।",pages:"পৃষ্ঠা",rm:"মুছুন",dup:"{n} ফাইলের হুবহু কপি। এটি মিলানো যাবে না।",nofiles:"এখনো কোনো ফাইল যোগ করা হয়নি।",
notpdf:"{n}: PDF ফাইল নয়, বাদ দেওয়া হয়েছে।",bad:"{n}: ফাইলটি নষ্ট, বাদ দেওয়া হয়েছে।",pw:"{n}: পাসওয়ার্ড দেওয়া PDF, বাদ দেওয়া হয়েছে।",lim:"{n}: ৩০টি ফাইল / ৫০ MB সীমা পূর্ণ, বাদ দেওয়া হয়েছে।",
h3:"৩. ফাইল মিলান ও যাচাই করুন",doc:"নথি",file:"ফাইল",exp:"মেয়াদ শেষের তারিখ",stat:"অবস্থা",req:"আবশ্যক",opt:"ঐচ্ছিক",none:"— কোনো ফাইল নয় —",auto:"ফাইলের নাম দেখে স্বয়ংক্রিয় মিল",csv:"চেকলিস্ট এক্সপোর্ট (CSV)",
missing:"অনুপস্থিত",need:"মেয়াদের তারিখ দিন",expired:"মেয়াদ উত্তীর্ণ",notprov:"দেওয়া হয়নি",ok:"ঠিক আছে",
h4:"৪. প্যাকেজ তৈরি করুন",gen:"প্যাকেজ PDF তৈরি করুন",blocked:"আগে এগুলো ঠিক করুন:",ready:"সব যাচাই সফল। এখন প্যাকেজ তৈরি করতে পারেন।",work:"প্যাকেজ তৈরি হচ্ছে…",done:"সম্পন্ন। ডাউনলোড শুরু হয়েছে।",fail:"প্যাকেজ তৈরি করা যায়নি: ",badjson:"এটি সঠিক requirements ফাইল নয়।",needlist:"আগে টেন্ডার তালিকা লোড করুন।",drop:"PDF ফাইল এখানে টেনে আনুন, অথবা",sum:"{b}টি নথির মধ্যে {a}টি প্রস্তুত",attn:"{n}টিতে মনোযোগ দরকার",allok:"সব প্রস্তুত।",hLogo:"লোগো (ঐচ্ছিক)",logoHint:"আপনার কোম্পানির লোগো (PNG বা JPG) যোগ করুন। এটি প্রচ্ছদ পাতার উপরের ডানদিকে দেখা যাবে।",bLogo:"লোগো বেছে নিন",rmLogo:"লোগো মুছুন",logoBad:"{n}: PNG বা JPG ছবি নয়, বাদ দেওয়া হয়েছে।",lang:"English"}};
Object.assign(T.en,{hSeal:"Seal / signature (optional)",sealHint:"Add a PNG seal or signature and choose which package pages it appears on.",bSeal:"Choose seal PNG",rmSeal:"Remove seal",sealPages:"Pages, e.g. 3, 5-8 (empty = page 1)",sealBad:"{n}: not a PNG image, skipped.",view:"View",saveP:"Save project",loadP:"Open project"});
Object.assign(T.bn,{hSeal:"সিল / স্বাক্ষর (ঐচ্ছিক)",sealHint:"PNG সিল বা স্বাক্ষর যোগ করুন এবং প্যাকেজের কোন পৃষ্ঠায় বসবে তা লিখুন।",bSeal:"সিল PNG বেছে নিন",rmSeal:"সিল মুছুন",sealPages:"পৃষ্ঠা, যেমন 3, 5-8 (খালি = পৃষ্ঠা 1)",sealBad:"{n}: PNG ছবি নয়, বাদ দেওয়া হয়েছে।",view:"দেখুন",saveP:"প্রকল্প সংরক্ষণ",loadP:"প্রকল্প খুলুন"});
T.hi={title:"टेंडर पैकेज बिल्डर",h1:"1. टेंडर सूची लोड करें",bjson:"requirements.json खोलें",hint:"शुरू करने के लिए requirements.json फ़ाइल चुनें।",tid:"टेंडर आईडी",ttl:"शीर्षक",ent:"खरीदार संस्था",bid:"बोलीदाता",dl:"जमा करने की अंतिम तिथि",
h2:"2. अपनी PDF फ़ाइलें जोड़ें",bpdf:"PDF फ़ाइलें चुनें",limits:"अधिकतम 30 फ़ाइलें, कुल 50 MB।",pages:"पृष्ठ",rm:"हटाएँ",dup:"{n} की हूबहू प्रति। इसे मिलाया नहीं जा सकता।",nofiles:"अभी कोई फ़ाइल नहीं जोड़ी गई।",
notpdf:"{n}: PDF फ़ाइल नहीं है, छोड़ी गई।",bad:"{n}: फ़ाइल खराब है, छोड़ी गई।",pw:"{n}: पासवर्ड वाली PDF, छोड़ी गई।",lim:"{n}: 30 फ़ाइल / 50 MB की सीमा पूरी, छोड़ी गई।",
h3:"3. फ़ाइलें मिलाएँ और जाँचें",doc:"दस्तावेज़",file:"फ़ाइल",exp:"समाप्ति तिथि",stat:"स्थिति",req:"अनिवार्य",opt:"वैकल्पिक",none:"— कोई फ़ाइल नहीं —",auto:"फ़ाइल नाम से अपने-आप मिलाएँ",csv:"चेकलिस्ट निर्यात (CSV)",
missing:"अनुपस्थित",need:"समाप्ति तिथि चाहिए",expired:"समय सीमा समाप्त",notprov:"नहीं दिया गया",ok:"ठीक है",
h4:"4. पैकेज बनाएँ",gen:"पैकेज PDF बनाएँ",blocked:"पहले इन्हें ठीक करें:",ready:"सभी जाँच सफल। अब पैकेज बना सकते हैं।",work:"पैकेज बन रहा है…",done:"हो गया। डाउनलोड शुरू हो गया है।",fail:"पैकेज नहीं बन सका: ",badjson:"यह सही requirements फ़ाइल नहीं है।",needlist:"पहले टेंडर सूची लोड करें।",drop:"PDF फ़ाइलें यहाँ खींचें, या",sum:"{b} में से {a} दस्तावेज़ तैयार",attn:"{n} पर ध्यान चाहिए",allok:"सब कुछ तैयार है।",
hLogo:"लोगो (वैकल्पिक)",logoHint:"अपनी कंपनी का लोगो (PNG या JPG) जोड़ें। यह कवर पेज के ऊपर दाईं ओर दिखेगा।",bLogo:"लोगो चुनें",rmLogo:"लोगो हटाएँ",logoBad:"{n}: PNG या JPG चित्र नहीं है, छोड़ा गया।",
hSeal:"मुहर / हस्ताक्षर (वैकल्पिक)",sealHint:"PNG मुहर या हस्ताक्षर जोड़ें और चुनें कि वह पैकेज के किन पृष्ठों पर लगे।",bSeal:"मुहर PNG चुनें",rmSeal:"मुहर हटाएँ",sealPages:"पृष्ठ, जैसे 3, 5-8 (खाली = पृष्ठ 1)",sealBad:"{n}: PNG चित्र नहीं है, छोड़ा गया।",view:"देखें",saveP:"प्रोजेक्ट सहेजें",loadP:"प्रोजेक्ट खोलें"};
T.ar={title:"منشئ حزمة المناقصة",h1:"١. تحميل قائمة المناقصة",bjson:"فتح requirements.json",hint:"اختر ملف requirements.json للبدء.",tid:"رقم المناقصة",ttl:"العنوان",ent:"الجهة المشترية",bid:"مقدّم العطاء",dl:"آخر موعد للتقديم",
h2:"٢. أضف ملفات PDF",bpdf:"اختر ملفات PDF",limits:"حتى 30 ملفًا وبحجم إجمالي 50 ميغابايت.",pages:"صفحات",rm:"حذف",dup:"نسخة مطابقة من {n}. لا يمكن مطابقتها.",nofiles:"لم تتم إضافة ملفات بعد.",
notpdf:"{n}: ليس ملف PDF، تم تجاهله.",bad:"{n}: ملف تالف، تم تجاهله.",pw:"{n}: ملف PDF محمي بكلمة مرور، تم تجاهله.",lim:"{n}: تم بلوغ حد 30 ملفًا / 50 ميغابايت، تم تجاهله.",
h3:"٣. طابق الملفات وافحصها",doc:"المستند",file:"الملف",exp:"تاريخ الانتهاء",stat:"الحالة",req:"إلزامي",opt:"اختياري",none:"— بلا ملف —",auto:"مطابقة تلقائية حسب اسم الملف",csv:"تصدير القائمة (CSV)",
missing:"مفقود",need:"تاريخ الانتهاء مطلوب",expired:"منتهي الصلاحية",notprov:"غير مقدَّم",ok:"سليم",
h4:"٤. أنشئ الحزمة",gen:"إنشاء ملف PDF للحزمة",blocked:"أصلح هذه أولًا:",ready:"اكتملت كل الفحوصات. يمكنك إنشاء الحزمة.",work:"جارٍ إنشاء الحزمة…",done:"تم. بدأ التنزيل.",fail:"تعذّر إنشاء الحزمة: ",badjson:"هذا ليس ملف requirements صالحًا.",needlist:"حمّل قائمة المناقصة أولًا.",drop:"اسحب ملفات PDF هنا، أو",sum:"{a} من {b} مستندات جاهزة",attn:"{n} تحتاج إلى انتباه",allok:"كل شيء جاهز.",
hLogo:"الشعار (اختياري)",logoHint:"أضف شعار شركتك (PNG أو JPG). سيظهر أعلى يمين صفحة الغلاف.",bLogo:"اختر الشعار",rmLogo:"إزالة الشعار",logoBad:"{n}: ليست صورة PNG أو JPG، تم تجاهلها.",
hSeal:"الختم / التوقيع (اختياري)",sealHint:"أضف ختمًا أو توقيعًا بصيغة PNG واختر صفحات الحزمة التي يظهر عليها.",bSeal:"اختر ملف الختم PNG",rmSeal:"إزالة الختم",sealPages:"الصفحات، مثل 3, 5-8 (فارغ = الصفحة 1)",sealBad:"{n}: ليست صورة PNG، تم تجاهلها.",view:"عرض",saveP:"حفظ المشروع",loadP:"فتح المشروع"};
let lang="en";try{lang=localStorage.getItem("lang")||"en"}catch(e){}
if(!T[lang])lang="en";
let theme="";try{theme=localStorage.getItem("theme")||""}catch(e){}
if(!theme)theme=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";
document.documentElement.dataset.theme=theme;
const t=(k,v={})=>(T[lang][k]||T.en[k]||k).replace(/\{(\w+)\}/g,(_,x)=>v[x]);
const esc=s=>String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

let logo=null,logoErr="",seal=null,sealErr="",sealPages="";
let data=null,files=[],match={},expiry={},rej=[],uid=0,status1="",outMsg="";

const reqs=()=>data?[...data.requirements].sort((a,b)=>a.order-b.order):[];
const fileById=id=>files.find(f=>f.id==id);
const used=()=>Object.values(match);
const dupOf=f=>files.find(g=>g.hash===f.hash&&files.indexOf(g)<files.indexOf(f));
const ICON={ok:"✓",missing:"✕",expired:"✕",need:"!",notprov:"–"};
const title=r=>(lang==="bn"&&r.title_bn)||r.title_en;
function status(r){
  if(!match[r.id])return r.mandatory?"missing":"notprov";
  if(r.has_expiry){const e=expiry[r.id];if(!e)return"need";if(e<data.tender.submission_deadline)return"expired";}
  return"ok";
}
const blocking=()=>reqs().filter(r=>["missing","need","expired"].includes(status(r)));
const key=()=>"proj_"+data.tender.tender_id;

function save(clear=[]){
  if(!data)return;
  try{
    const o=JSON.parse(localStorage.getItem(key())||"{}");
    clear.forEach(k=>delete o[k]);
    for(const r of data.requirements)if(match[r.id]){const f=fileById(match[r.id]);if(f)o[r.id]={hash:f.hash,exp:expiry[r.id]||""}}
    localStorage.setItem(key(),JSON.stringify(o));
  }catch(e){}
}
function restore(){
  if(!data)return;let o;
  try{o=JSON.parse(localStorage.getItem(key())||"{}")}catch(e){return}
  for(const r of reqs()){
    const s=o[r.id];if(!s||match[r.id])continue;
    const f=files.find(f=>f.hash===s.hash&&!dupOf(f)&&!used().includes(f.id));
    if(f){match[r.id]=f.id;if(r.has_expiry&&s.exp)expiry[r.id]=s.exp}
  }
}

function render(){
  document.documentElement.lang=lang;document.documentElement.dir=lang==="ar"?"rtl":"ltr";
  $("#h-title").textContent=t("title");$("#langSel").value=lang;
  for(const [id,k] of [["h1","h1"],["b-json","bjson"],["h2","h2"],["b-pdf","bpdf"],["limits","limits"],["h3","h3"],["h4","h4"],["gen","gen"],["b-auto","auto"],["b-csv","csv"],["dropTxt","drop"],["b-save","saveP"],["b-load","loadP"],["hSeal","hSeal"],["sealHint","sealHint"],["b-seal","bSeal"],["b-seal-rm","rmSeal"]])$("#"+id).textContent=t(k);
  $("#b-auto").disabled=$("#b-csv").disabled=$("#b-save").disabled=$("#b-load").disabled=!data;
  $("#msg1").innerHTML=data?"":`<p class="muted">${esc(status1||t("hint"))}</p>`;
  $("#tender").innerHTML=data?`<div class="grid">${[["tid",data.tender.tender_id],["ttl",data.tender.title],["ent",data.tender.procuring_entity],["bid",data.tender.bidder],["dl",data.tender.submission_deadline]].map(([k,v])=>`<div><b>${t(k)}</b>${esc(v)}</div>`).join("")}</div>`:"";
  $("#rej").innerHTML=rej.map(m=>`<div class="notice">${esc(t(m.k,{n:m.n}))}</div>`).join("");
  $("#files").innerHTML=files.length?files.map(f=>{const d=dupOf(f);return `<div class="file"><div><span>${esc(f.name)}</span><br><span class="muted">${f.pages} ${t("pages")}</span> ${d?`<span class="tag">${esc(t("dup",{n:d.name}))}</span>`:""}</div><div class="row" style="margin:0"><button class="btn alt sm" data-view="${f.id}">${t("view")}</button><button class="btn alt sm" data-rm="${f.id}">${t("rm")}</button></div></div>`}).join(""):`<p class="muted">${t("nofiles")}</p>`;
  $("#reqs").innerHTML=data?`<table><thead><tr><th>${t("doc")}</th><th>${t("file")}</th><th>${t("exp")}</th><th>${t("stat")}</th></tr></thead><tbody>${reqs().map(r=>{
    const s=status(r),opts=files.filter(f=>!dupOf(f)&&(match[r.id]==f.id||!used().includes(f.id)));
    return `<tr class="r-${s}"><td><b>${esc(title(r))}</b><br><span class="muted">${r.mandatory?t("req"):t("opt")}</span></td>
    <td><select data-m="${r.id}" aria-label="${esc(title(r))}"><option value="">${t("none")}</option>${opts.map(f=>`<option value="${f.id}"${match[r.id]==f.id?" selected":""}>${esc(f.name)}</option>`).join("")}</select></td>
    <td>${r.has_expiry&&match[r.id]?`<input type="date" data-e="${r.id}" value="${esc(expiry[r.id]||"")}" aria-label="${t("exp")}">`:"—"}</td>
    <td><span class="pill ${s}">${ICON[s]} ${t(s)}</span></td></tr>`}).join("")}</tbody></table>`:"";
  const bl=data?blocking():[];
  $("#why").innerHTML=!data?`<p class="muted">${t("needlist")}</p>`:bl.length?`<b>${t("blocked")}</b><ul>${bl.map(r=>`<li>${esc(title(r))} — ${t(status(r))}</li>`).join("")}</ul>`:`<p style="color:var(--ok)"><b>${t("ready")}</b></p>`;
  $("#gen").disabled=!data||bl.length>0;$("#out").textContent=outMsg;
  if(data){const n=reqs().length,a=n-bl.length,pct=n?Math.round(a/n*100):0;
    $("#sum").innerHTML=`<div class="sumbar"><b>${t("sum",{a,b:n})}</b> <span class="muted">${bl.length?t("attn",{n:bl.length}):t("allok")}</span><div class="prog"><i style="width:${pct}%"></i></div></div>`}
  else $("#sum").innerHTML="";
  renderLogo();renderSeal();
}

function renderLogo(){
  $("#hLogo").textContent=t("hLogo");$("#logoHint").textContent=t("logoHint");
  $("#b-logo").textContent=t("bLogo");$("#b-logo-rm").textContent=t("rmLogo");
  $("#b-logo-rm").hidden=!logo;
  $("#logoBox").innerHTML=(logoErr?`<div class="notice">${esc(t("logoBad",{n:logoErr}))}</div>`:"")+(logo?`<img src="${logo.url}" alt="" style="max-height:80px;max-width:100%">`:"");
}
async function setLogo(file){
  logoErr="";
  const b=new Uint8Array(await file.arrayBuffer());
  const png=b[0]===0x89&&b[1]===0x50&&b[2]===0x4E&&b[3]===0x47,jpg=b[0]===0xFF&&b[1]===0xD8&&b[2]===0xFF;
  if(!png&&!jpg){logoErr=file.name;render();return}
  if(logo)URL.revokeObjectURL(logo.url);
  logo={bytes:b,type:png?"png":"jpg",url:URL.createObjectURL(new Blob([b],{type:png?"image/png":"image/jpeg"}))};
  render();
}

function renderSeal(){
  $("#b-seal-rm").hidden=!seal;
  $("#sealBox").innerHTML=(sealErr?`<div class="notice">${esc(t("sealBad",{n:sealErr}))}</div>`:"")+(seal?`<div class="row" style="align-items:center"><img src="${seal.url}" alt="" style="max-height:70px;max-width:140px"><input id="sealPg" placeholder="${esc(t("sealPages"))}" aria-label="${esc(t("sealPages"))}" value="${esc(sealPages)}" style="flex:1;min-width:200px;padding:8px;border:1px solid var(--line);border-radius:6px;background:var(--card);color:var(--ink)"></div>`:"");
}
async function setSeal(file){
  sealErr="";
  const b=new Uint8Array(await file.arrayBuffer());
  if(!(b[0]===0x89&&b[1]===0x50&&b[2]===0x4E&&b[3]===0x47)){sealErr=file.name;render();return}
  if(seal)URL.revokeObjectURL(seal.url);
  seal={bytes:b,url:URL.createObjectURL(new Blob([b],{type:"image/png"}))};
  render();
}
const parsePages=(s,max)=>{
  const set=new Set();
  for(const part of String(s).split(",")){
    const m=part.trim().match(/^(\d+)(?:\s*-\s*(\d+))?$/);if(!m)continue;
    const a=+m[1],b=+(m[2]||m[1]);
    for(let i=Math.max(a,1);i<=Math.min(b,max);i++)set.add(i);
  }
  return set.size?[...set]:[1];
};
function saveProject(){
  const o={};
  for(const r of data.requirements)if(match[r.id]){const f=fileById(match[r.id]);if(f)o[r.id]={hash:f.hash,exp:expiry[r.id]||""}}
  const a=document.createElement("a");
  a.href=URL.createObjectURL(new Blob([JSON.stringify({tender_id:data.tender.tender_id,items:o})],{type:"application/json"}));
  a.download=`${data.tender.tender_id}_project.json`;document.body.appendChild(a);a.click();a.remove();
}
async function loadProject(f){
  rej=[];
  try{
    const j=JSON.parse(await f.text());
    if(j.tender_id!==data.tender.tender_id||!j.items)throw 0;
    localStorage.setItem(key(),JSON.stringify(j.items));restore();save();outMsg="";
  }catch(e){rej=[{k:"badjson",n:""}]}
  render();
}

async function addFiles(list){
  rej=[];let total=files.reduce((s,f)=>s+f.size,0);
  for(const file of list){
    const buf=new Uint8Array(await file.arrayBuffer());
    const head=String.fromCharCode(...buf.slice(0,5));
    if(!/\.pdf$/i.test(file.name)||head!=="%PDF-"){rej.push({k:"notpdf",n:file.name});continue}
    if(files.length>=30||total+file.size>50*1024*1024){rej.push({k:"lim",n:file.name});continue}
    try{
      const doc=await PDFLib.PDFDocument.load(buf);
      const h=await crypto.subtle.digest("SHA-256",buf);
      const hash=[...new Uint8Array(h)].map(b=>b.toString(16).padStart(2,"0")).join("");
      files.push({id:++uid,name:file.name,size:file.size,pages:doc.getPageCount(),hash,buf});total+=file.size;
    }catch(e){rej.push({k:/encrypt/i.test(e.name+e.message)?"pw":"bad",n:file.name})}
  }
  restore();render();
}

const STOP=new Set(["of","and","the","for","certificate","letter","pdf","copy","scan","final","document","new","old"]);
const tok=s=>String(s).toLowerCase().replace(/\.pdf$/,"").split(/[^a-z0-9]+/).filter(w=>w.length>1&&!STOP.has(w));
function autoMatch(){
  for(const r of reqs()){
    if(match[r.id])continue;
    const words=new Set([...tok(r.title_en),String(r.id).toLowerCase()]);
    let best=null,score=0;
    for(const f of files){
      if(dupOf(f)||used().includes(f.id))continue;
      const s=tok(f.name).filter(w=>words.has(w)).length;
      if(s>score){score=s;best=f}
    }
    if(best)match[r.id]=best.id;
  }
  save();outMsg="";render();
}

function exportCsv(){
  const q=v=>`"${String(v??"").replace(/"/g,'""')}"`;
  const rows=[[t("doc"),t("file"),t("pages"),t("exp"),t("stat")]];
  for(const r of reqs()){const f=fileById(match[r.id]);rows.push([title(r),f?f.name:"",f?f.pages:"",expiry[r.id]||"",t(status(r))])}
  const blob=new Blob(["\ufeff"+rows.map(r=>r.map(q).join(",")).join("\r\n")],{type:"text/csv;charset=utf-8"});
  const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=`${data.tender.tender_id}_Checklist.csv`;
  document.body.appendChild(a);a.click();a.remove();
}

function wrap(txt,font,size,w){
  const out=[];let line="";
  for(const word of String(txt).split(/\s+/)){const x=line?line+" "+word:word;
    if(font.widthOfTextAtSize(x,size)>w&&line){out.push(line);line=word}else line=x}
  if(line)out.push(line);return out;
}
const L1=s=>String(s??"").replace(/[^\x20-\x7E\u00A0-\u00FF]/g,"?");
const localDate=()=>{const n=new Date();return `${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`};

async function makePackage(){
  const {PDFDocument,StandardFonts,rgb}=PDFLib,d=data.tender;
  const inc=reqs().filter(r=>match[r.id]);
  const out=await PDFDocument.create();
  const reg=await out.embedFont(StandardFonts.Helvetica),bold=await out.embedFont(StandardFonts.HelveticaBold);
  const fs=inc.length>18?9:11,step=fs+4;

  const cover=out.addPage([595,842]);let y=780;
  if(logo){
    const img=logo.type==="png"?await out.embedPng(logo.bytes):await out.embedJpg(logo.bytes);
    const k=Math.min(110/img.width,60/img.height,1);
    cover.drawImage(img,{x:545-img.width*k,y:825-img.height*k,width:img.width*k,height:img.height*k});
  }
  cover.drawText("Tender Document Package",{x:50,y,size:24,font:bold,color:rgb(.08,.14,.17)});y-=40;
  for(const [k,v] of [["Tender ID",d.tender_id],["Tender title",d.title],["Procuring entity",d.procuring_entity],["Bidder",d.bidder],["Submission deadline",d.submission_deadline],["Package made on",localDate()]]){
    cover.drawText(k,{x:50,y,size:10,font:reg,color:rgb(.34,.41,.45)});y-=15;
    for(const ln of wrap(L1(v),bold,13,495)){cover.drawText(ln,{x:50,y,size:13,font:bold});y-=17}y-=8}
  y-=6;cover.drawText("Included documents",{x:50,y,size:15,font:bold});y-=22;
  inc.forEach((r,i)=>{
    const lines=wrap(`${i+1}. ${L1(r.title_en)}`,reg,fs,495);
    lines.forEach((ln,j)=>cover.drawText(ln,{x:50,y:y-j*step,size:fs,font:reg}));
    y-=lines.length*step+2});

  const index=out.addPage([595,842]);y=780;
  index.drawText("Index",{x:50,y,size:24,font:bold,color:rgb(.08,.14,.17)});y-=40;
  let start=3;
  inc.forEach((r,i)=>{
    const f=fileById(match[r.id]);
    const lines=wrap(`${i+1}. ${L1(r.title_en)}`,reg,fs,420);
    lines.forEach((ln,j)=>index.drawText(ln,{x:50,y:y-j*step,size:fs,font:reg}));
    const pg=`Page ${start}`;index.drawText(pg,{x:545-reg.widthOfTextAtSize(pg,fs),y,size:fs,font:reg});
    y-=lines.length*step+2;start+=f.pages});

  const STRIP=30;
  for(const r of inc){
    const src=await PDFDocument.load(fileById(match[r.id]).buf);
    const emb=await out.embedPdf(src,src.getPageIndices());
    for(const e of emb){const p=out.addPage([e.width,e.height+STRIP]);p.drawPage(e,{x:0,y:STRIP,width:e.width,height:e.height})}
  }

  const pages=out.getPages(),n=pages.length;
  pages.forEach((p,i)=>{
    const s=`${L1(d.tender_id)} | Page ${i+1} of ${n}`,w=reg.widthOfTextAtSize(s,10);
    p.drawText(s,{x:(p.getWidth()-w)/2,y:12,size:10,font:reg,color:rgb(0,0,0)})});
  if(seal){
    const img=await out.embedPng(seal.bytes),k=Math.min(110/img.width,70/img.height,1);
    for(const n of parsePages(sealPages,pages.length))pages[n-1].drawImage(img,{x:pages[n-1].getWidth()-img.width*k-30,y:42,width:img.width*k,height:img.height*k});
  }
  const bytes=await out.save();
  const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([bytes],{type:"application/pdf"}));
  a.download=`${d.tender_id}_Package.pdf`;document.body.appendChild(a);a.click();a.remove();
}

$("#langSel").onchange=e=>{lang=e.target.value;try{localStorage.setItem("lang",lang)}catch(err){}render()};
$("#themeBtn").onclick=()=>{theme=theme==="dark"?"light":"dark";document.documentElement.dataset.theme=theme;try{localStorage.setItem("theme",theme)}catch(e){}};
$("#b-seal").onclick=()=>$("#in-seal").click();
$("#b-seal-rm").onclick=()=>{if(seal)URL.revokeObjectURL(seal.url);seal=null;sealErr="";render()};
$("#in-seal").onchange=e=>{const f=e.target.files[0];e.target.value="";if(f)setSeal(f)};
$("#sealBox").oninput=e=>{if(e.target.id==="sealPg")sealPages=e.target.value};
$("#b-save").onclick=saveProject;
$("#b-load").onclick=()=>$("#in-proj").click();
$("#in-proj").onchange=e=>{const f=e.target.files[0];e.target.value="";if(f)loadProject(f)};
$("#b-json").onclick=()=>$("#in-json").click();
$("#b-pdf").onclick=()=>$("#in-pdf").click();
$("#b-logo").onclick=()=>$("#in-logo").click();
$("#b-logo-rm").onclick=()=>{if(logo)URL.revokeObjectURL(logo.url);logo=null;logoErr="";render()};
$("#in-logo").onchange=e=>{const f=e.target.files[0];e.target.value="";if(f)setLogo(f)};
$("#b-auto").onclick=autoMatch;
$("#b-csv").onclick=exportCsv;
$("#in-json").onchange=async e=>{
  const f=e.target.files[0];e.target.value="";if(!f)return;
  try{const j=JSON.parse(await f.text());
    if(!j.tender||!j.tender.tender_id||!Array.isArray(j.requirements))throw 0;
    data=j;match={};expiry={};status1="";outMsg="";restore()}
  catch(err){data=null;status1=t("badjson")}
  render();
};
$("#in-pdf").onchange=e=>{const l=[...e.target.files];e.target.value="";addFiles(l)};
$("#files").onclick=e=>{const v=e.target.dataset.view;if(v){window.open(URL.createObjectURL(new Blob([fileById(v).buf],{type:"application/pdf"})));return}const id=e.target.dataset.rm;if(!id)return;
  const gone=[];for(const k in match)if(match[k]==id){gone.push(k);delete match[k];delete expiry[k]}
  files=files.filter(f=>f.id!=id);save(gone);rej=[];outMsg="";render()};
$("#reqs").onchange=e=>{
  if(e.target.dataset.m){const k=e.target.dataset.m;
    delete expiry[k];
    if(e.target.value){match[k]=+e.target.value;save()}else{delete match[k];save([k])}}
  if(e.target.dataset.e){expiry[e.target.dataset.e]=e.target.value;save()}
  outMsg="";render();
};
$("#gen").onclick=async()=>{
  if(blocking().length)return;
  $("#gen").disabled=true;$("#out").textContent=t("work");
  try{await makePackage();outMsg=t("done")}catch(err){outMsg=t("fail")+(err.message||err)}
  render();
};
const dz=$("#drop");
["dragenter","dragover"].forEach(ev=>dz.addEventListener(ev,e=>{e.preventDefault();dz.classList.add("on")}));
["dragleave","drop"].forEach(ev=>dz.addEventListener(ev,e=>{e.preventDefault();dz.classList.remove("on")}));
dz.addEventListener("drop",e=>addFiles([...e.dataTransfer.files]));
["dragover","drop"].forEach(ev=>window.addEventListener(ev,e=>e.preventDefault()));
render();
