let password = localStorage.getItem("pass") || "";
let gallery = JSON.parse(localStorage.getItem("gallery")||"[]");

if(password){
 document.getElementById("lock").classList.remove("hidden");
}

function unlock(){
 if(document.getElementById("passInput").value === password){
  document.getElementById("lock").classList.add("hidden");
 }
}

function home(){
 const s = document.getElementById("screen");
 s.innerHTML = `
 <div class="app" onclick="openApp('whatsapp')">WhatsApp</div>
 <div class="app" onclick="openApp('youtube')">YouTube</div>
 <div class="app" onclick="openApp('browser')">Google</div>
 <div class="app" onclick="openApp('gallery')">Galeria</div>
 <div class="app" onclick="openApp('settings')">Config</div>
 `;
}

function openApp(app){
 const s = document.getElementById("screen");

 if(app==="whatsapp"){
  s.innerHTML = '<iframe src="https://web.whatsapp.com"></iframe>';
 }

 if(app==="youtube"){
  s.innerHTML = '<iframe src="https://m.youtube.com"></iframe>';
 }

 if(app==="browser"){
  s.innerHTML = '<iframe src="https://www.google.com"></iframe>';
 }

 if(app==="gallery"){
  s.innerHTML = '<h3>Galeria</h3><input type="file" onchange="addImg(event)">';
  gallery.forEach(i=> s.innerHTML += `<img src="${i}">`);
 }

 if(app==="settings"){
  s.innerHTML = `
  <h3>Config</h3>
  <input placeholder="Senha" id="p">
  <button onclick="savePass()">Salvar</button>
  `;
 }
}

function savePass(){
 password = document.getElementById("p").value;
 localStorage.setItem("pass", password);
 alert("Salvo");
}

function addImg(e){
 const r = new FileReader();
 r.onload = ()=>{
  gallery.push(r.result);
  localStorage.setItem("gallery", JSON.stringify(gallery));
  openApp("gallery");
 }
 r.readAsDataURL(e.target.files[0]);
}

home();