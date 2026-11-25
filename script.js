// ====== PENGATURAN KONTAK (cukup ubah di sini) ======
// Nomor WhatsApp: awali 62, tanpa + atau 0  (083865955152 -> 6283865955152)
const WA_NUMBER = "6283865955152";
// Username Instagram tanpa @  (GANTI dengan username asli Biloria Florist)
const IG_USERNAME = "biloriaflorist";
// =====================================================

const products = [
  {id:1, cat:"Kawat Bulu", name:"Buket Kawat Bulu Pink Soft", desc:"Rangkaian bunga lily dan tulip kawat bulu warna pink lembut, awet dan manis.", price:45000, icon:"🌷", bg:"#f7e9ef", img:"images/download (57).jpg"},
  {id:2, cat:"Kawat Bulu", name:"Buket Lily Maroon & Krem", desc:"Perpaduan bunga lily merah marun dan krem yang elegan, cocok untuk wisuda atau anniversary.", price:55000, icon:"🌺", bg:"#f5e8e8", img:"images/bouquet ide bunga kabel berbulu.jpg"},
  {id:3, cat:"Kawat Bulu", name:"Buket Lily Tulip Pink", desc:"Kombinasi bunga lily dan tulip kawat bulu pink cerah dengan balutan wrapping putih.", price:50000, icon:"🌸", bg:"#f8ebf0", img:"images/750c21fe7003cf3e35c4084e4c7bdcbf.jpg"},
  {id:4, cat:"Kawat Bulu", name:"Buket Mix Pastel Ungu Pink", desc:"Bunga lily dan tulip bernuansa pastel ungu, pink, dan kuning dengan pita lilac.", price:55000, icon:"💐", bg:"#f1e9f7", img:"images/download (58).jpg"},
  {id:5, cat:"Kawat Bulu", name:"Mini Buket Single Flower", desc:"Buket mini kawat bulu pilihan warna biru atau ungu, praktis untuk hadiah kecil.", price:25000, icon:"🩵", bg:"#e8f1f8", img:"images/download (59).jpg"},
  {id:6, cat:"Kawat Bulu", name:"Buket Mawar Merah Bulat", desc:"Rangkaian penuh mawar kawat bulu merah menyala dengan wrapping putih mewah.", price:75000, icon:"🌹", bg:"#f9e6e6", img:"images/buket-6.jpg"},
  {id:7, cat:"Kawat Bulu", name:"Buket Bunga Matahari", desc:"Buket bunga matahari kawat bulu kuning cerah yang membawa kesan hangat dan ceria.", price:65000, icon:"🌻", bg:"#f6eddc", img:"images/Bunga matahari.jpg"},
  {id:8, cat:"Kawat Bulu", name:"Buket Mix Warna Meriah", desc:"Rangkaian lengkap berbagai jenis bunga kawat bulu warna-warni, cocok untuk ulang tahun.", price:70000, icon:"🌼", bg:"#f7f2e4", img:"images/Thumbelina bouquet fuzzy wire_pipe cleaner Philippine based_Terima bouquet Thumbelina berserabut kawat penggulung pipa berbasis Filipina.jpg"},
  {id:9, cat:"Bunga Palsu", name:"Buket Ruffle Pink & Lily", desc:"Rangkaian bunga artifisial nuansa pink dengan aksen ruffle dan pita serasi.", price:85000, icon:"🌸", bg:"#f8e6ec", img:"images/buket-9.jpg"},
  {id:10, cat:"Bunga Palsu", name:"Buket Lily Pink Soft & Pita", desc:"Kombinasi bunga lily dan bunga kecil bernuansa pink lembut dengan pita manis.", price:95000, icon:"💐", bg:"#f5e8ef", img:"images/buket-10.jpg"},
  {id:11, cat:"Bunga Palsu", name:"Buket Lily Magenta & Putih", desc:"Perpaduan bunga lily magenta mencolok dan bunga putih dengan wrapping kertas lembut.", price:80000, icon:"🌺", bg:"#f7e7ef", img:"images/Hoa ly mix.jpg"},
  {id:12, cat:"Bunga Palsu", name:"Buket Lily Pink Wrapping Kraft", desc:"Bunga lily pink dan aksen bunga putih dalam balutan kertas kraft cokelat hangat.", price:75000, icon:"🌷", bg:"#f3eadb", img:"images/download (62).jpg"},
  {id:13, cat:"Bunga Palsu", name:"Buket Mawar Merah & Krim", desc:"Buket padat berisi mawar merah dan bunga krem dengan kartu ucapan dan pita.", price:115000, icon:"🌹", bg:"#f8e5e6", img:"images/download (63).jpg"},
  {id:14, cat:"Bunga Palsu", name:"Buket Bunga Hitam & Pink", desc:"Kontras elegan bunga pink dan lily dengan balutan kain jaring hitam serta pita pink.", price:90000, icon:"🖤", bg:"#ece9ee", img:"images/Buket Bunga Hitam Polynet.jpg"},
  {id:15, cat:"Bunga Palsu", name:"Buket Cascade Lily & Anggrek", desc:"Rangkaian menjuntai bergaya cascade dengan bunga lily pink, pastel, dan anggrek.", price:125000, icon:"🪷", bg:"#f6e7f0", img:"images/bunga.jpg"},
  {id:16, cat:"Bunga Palsu", name:"Buket Mix Bunga Warna-Warni", desc:"Rangkaian bunga artifisial warna-warni yang meriah dengan wrapping biru muda dan pink.", price:105000, icon:"🌼", bg:"#e7eff7", img:"images/Bunga-bunga cantik diterima!.jpg"},
  {id:17, cat:"Bunga Asli", name:"Buket Mawar Pink & Baby's Breath", desc:"Rangkaian mawar pink segar dan baby's breath dengan balutan kertas motif lembut.", price:145000, icon:"🌹", bg:"#f7e8ec", img:"images/download (61).jpg"},
  {id:18, cat:"Bunga Asli", name:"Buket Mawar Soft Pink Wrapping Blush", desc:"Bunga mawar segar bernuansa pink lembut dengan wrapping warna blush dan pita senada.", price:165000, icon:"💐", bg:"#f6e7ec", img:"images/download (60).jpg"},
  {id:19, cat:"Bunga Asli", name:"Buket Mawar Pink Pastel Romantis", desc:"Rangkaian padat mawar segar pink dan krem dengan wrapping floral yang manis.", price:185000, icon:"🌷", bg:"#f8e6ea", img:"images/download (64).jpg"},
  {id:20, cat:"Bunga Asli", name:"Buket Mawar Putih & Ungu", desc:"Perpaduan mawar putih segar dan bunga ungu dengan balutan wrapping putih bersih.", price:175000, icon:"💜", bg:"#ece8f5", img:"images/download (65).jpg"},
  {id:21, cat:"Bunga Asli", name:"Buket Mawar Merah Wrapping Hitam", desc:"Mawar merah segar dan baby's breath dalam balutan hitam elegan dengan pita merah.", price:210000, icon:"❤️", bg:"#ece7ea", img:"images/Rose bookey.jpg"},
  {id:22, cat:"Bunga Asli", name:"Buket Mawar Merah Bulat Mewah", desc:"Buket bulat penuh mawar merah segar dan baby's breath dengan wrapping putih berenda.", price:235000, icon:"🌹", bg:"#f7e5e7", img:"images/download (66).jpg"},
  {id:23, cat:"Bunga Asli", name:"Buket Bunga Matahari Segar", desc:"Rangkaian bunga matahari segar kuning cerah dengan pita kuning dan kartu ucapan.", price:195000, icon:"🌻", bg:"#f6eedc", img:"images/download (67).jpg"},
  {id:24, cat:"Bunga Asli", name:"Buket Lily & Mawar Pink Meriah", desc:"Kombinasi bunga lily dan mawar pink segar yang rimbun dengan balutan kertas pink.", price:225000, icon:"🌺", bg:"#f8e5ee", img:"images/sweetsbysadie.jpg"},
  {id:25, cat:"Snack", name:"Buket Snack Pink & Cokelat", desc:"Aneka camilan dan cokelat bernuansa pink dengan balutan kertas lembut dan pita.", price:75000, icon:"🍫", bg:"#f8e6ec", img:"images/download (68).jpg"},
  {id:26, cat:"Snack", name:"Buket Snack Jumbo Pink", desc:"Buket camilan ukuran besar bernuansa pink dan merah dengan pita menonjol.", price:135000, icon:"🍬", bg:"#f7e4ec", img:"images/Panduan camilan estetik.jpg"},
  {id:27, cat:"Snack", name:"Snack Tower & Buket Camilan", desc:"Susunan camilan berbentuk tower dan buket dengan pita emas yang menarik.", price:150000, icon:"🎂", bg:"#f6ebd8", img:"images/Snack tart by esa bunga.jpg"},
  {id:28, cat:"Snack", name:"Buket Wafer & Cokelat Mini", desc:"Buket praktis berisi wafer dan camilan manis dengan wrapping bening serta pita pink.", price:45000, icon:"🧇", bg:"#f7e9ef", img:"images/download (69).jpg"},
  {id:29, cat:"Snack", name:"Buket Camilan Bentuk Hati Pink", desc:"Rangkaian camilan kecil bernuansa pink yang dibentuk menyerupai hati dengan pita satin.", price:140000, icon:"🩷", bg:"#f8e5ed", img:"images/download (70).jpg"},
  {id:30, cat:"Snack", name:"Buket Permen & Lollipop Warna-Warni", desc:"Buket penuh permen dan lollipop warna-warni yang ceria dengan balutan kertas pink.", price:95000, icon:"🍭", bg:"#f7e7ef", img:"images/buket-30.jpg"},
  {id:31, cat:"Snack", name:"Buket Stroberi Segar", desc:"Rangkaian buah stroberi merah segar yang ditata rapi dengan balutan motif titik.", price:115000, icon:"🍓", bg:"#f8e5e7", img:"images/download (71).jpg"},
  {id:32, cat:"Snack", name:"Buket Sayuran Segar Unik", desc:"Buket kreatif berisi aneka sayuran segar seperti wortel, brokoli, jagung, dan tomat.", price:110000, icon:"🥦", bg:"#e7f2e6", img:"images/sayur-mayur.jpg"},
  {id:33, cat:"Boneka", name:"Buket Boneka Kostum Pink & Mawar", desc:"Boneka berkostum pink menggemaskan di tengah rangkaian bunga mawar pink dan wrapping putih.", price:115000, icon:"🧸", bg:"#f7e7ec", img:"images/Beruang Coklat (1).jpg"},
  {id:34, cat:"Boneka", name:"Buket Boneka Wisuda & Bunga Pink", desc:"Boneka beruang memakai toga wisuda yang dipadukan bunga bernuansa pink lembut dan pita.", price:95000, icon:"🎓", bg:"#f8e6ec", img:"images/bunga (1).jpg"},
  {id:35, cat:"Boneka", name:"Buket Boneka loopy & Mawar", desc:"Boneka karakter loopy di atas rangkaian bunga pink dalam wadah tabung dan pita.", price:110000, icon:"🐷", bg:"#f8e5ed", img:"images/download (72).jpg"},
  {id:36, cat:"Boneka", name:"Buket Boneka Karakter Rame", desc:"Buket penuh aneka boneka karakter lucu warna-warni dengan aksen pita biru muda.", price:135000, icon:"🎀", bg:"#e6eff8", img:"images/download (74).jpg"},
  {id:37, cat:"Boneka", name:"Buket Boneka Wisuda & Bunga Matahari", desc:"Boneka beruang toga dipadukan bunga matahari dan nuansa wrapping pastel pink-krem.", price:50000, icon:"🌻", bg:"#f7ece0", img:"images/download (75).jpg"},
  {id:38, cat:"Boneka", name:"Buket Single Boneka Beruang", desc:"Buket ringkas berisi satu boneka beruang cokelat atau putih dalam balutan kertas pastel.", price:55000, icon:"🐻", bg:"#f3eadf", img:"images/Ide hadiah.jpg"},
  {id:39, cat:"Boneka", name:"Buket Boneka Karakter Mini", desc:"Buket berukuran ringkas berisi boneka karakter lucu seperti katak dan kelinci dengan pita.", price:35000, icon:"🐸", bg:"#e8f3e8", img:"images/download (76).jpg"},
  {id:40, cat:"Boneka", name:"Buket Boneka Bunga Senyum", desc:"Boneka berbentuk bunga tersenyum warna cerah dengan wrapping motif kotak dan pita pink.", price:25000, icon:"🌼", bg:"#f8e7ef", img:"images/download (77).jpg"},
  {id:41, cat:"Uang", name:"Buket Uang Bulat Pink", desc:"Lembaran uang disusun melingkar padat menyerupai bunga pink dengan pita lembut.", price:85000, icon:"💵", bg:"#f7e7ec", img:"images/money bouquet.jpg"},
  {id:42, cat:"Uang", name:"Buket Uang Kipas Jumlah Besar", desc:"Susunan uang jumlah banyak berbentuk kipas lebar dengan pita satin pink menonjol.", price:150000, icon:"💰", bg:"#f8e6ee", img:"images/Buket Uang 100 Lembar.jpg"},
  {id:43, cat:"Uang", name:"Buket Uang Bentuk Mawar", desc:"Rangkaian uang yang dibentuk menyerupai kelopak mawar mekar dengan aksen jaring bening.", price:95000, icon:"🌹", bg:"#f6e8ec", img:"images/download (78).jpg"},
  {id:44, cat:"Uang", name:"Tangkai Buket Uang Bunga", desc:"Satu tangkai buket uang berbentuk bunga mekar yang ringkas dan unik untuk kado.", price:45000, icon:"🌼", bg:"#f5e7ea", img:"images/download (79).jpg"},
  {id:45, cat:"Uang", name:"Buket Uang Kincir Wrapping Krem", desc:"Rangkaian uang berbentuk kincir dengan balutan wrapping krem dan pita emas manis.", price:80000, icon:"🎀", bg:"#f6ebd8", img:"images/Buket Uang Kincir Cream.jpg"},
  {id:46, cat:"Uang", name:"Buket Uang Bunga Biru & Emas", desc:"Lembaran uang dibentuk bunga bernuansa biru dan emas dengan wrapping biru muda.", price:90000, icon:"💎", bg:"#e6eff8", img:"images/Buket uang.jpg"},
  {id:47, cat:"Uang", name:"Buket Uang Wrapping Biru Elegan", desc:"Susunan uang rapi di tengah buket dengan balutan kertas biru lembut dan pita senada.", price:85000, icon:"💠", bg:"#e7eff7", img:"images/download (80).jpg"},
  {id:48, cat:"Uang", name:"Buket Uang & Kartu Ucapan Pink", desc:"Rangkaian uang bernuansa pink yang dilengkapi kartu ucapan dan pita satin besar.", price:100000, icon:"💌", bg:"#f8e5ee", img:"images/download (81).jpg"},
  {id:49, cat:"Satin", name:"Buket Mawar Satin Merah & Hitam", desc:"Rangkaian mawar pita satin merah menyala dengan kartu ucapan dan balutan hitam elegan.", price:95000, icon:"🌹", bg:"#ece7ea", img:"images/Bucket pita satin.jpg"},
  {id:50, cat:"Satin", name:"Buket Mawar Satin Pink Kupu-Kupu", desc:"Bunga mawar pita satin pink lembut dengan hiasan kupu-kupu dan wrapping putih bergerigi.", price:110000, icon:"🦋", bg:"#f8e6ec", img:"images/Bucket Pita Satin di Solo.jpg"},
  {id:51, cat:"Satin", name:"Buket Mawar Satin Pink Mahkota", desc:"Rangkaian mawar satin pink dengan pita, kupu-kupu, dan aksen mahkota mini dalam balutan biru muda.", price:125000, icon:"👑", bg:"#e6eff8", img:"images/buket pink.jpg"},
  {id:52, cat:"Satin", name:"Buket Satin Biru Muda & Putih", desc:"Komposisi bunga satin biru muda dan putih dengan pita biru serta wrapping putih bergelombang.", price:105000, icon:"🎀", bg:"#e7eff7", img:"images/download (82).jpg"},
  {id:53, cat:"Satin", name:"Buket Bunga Matahari Satin", desc:"Rangkaian bunga matahari dari pita satin kuning cerah dengan balutan kertas cokelat emas hangat.", price:115000, icon:"🌻", bg:"#f6ebd8", img:"images/download (86).jpg"},
  {id:54, cat:"Satin", name:"Buket Satin Pink, Putih & Lily", desc:"Perpaduan mawar satin pink, putih, dan kelopak lily dengan aksen bunga kecil bernuansa pastel.", price:120000, icon:"💐", bg:"#f7e7ef", img:"images/download (84).jpg"},
  {id:55, cat:"Satin", name:"Buket Satin Lampu LED Hangat", desc:"Rangkaian bunga pita satin bernuansa pink dan krem dengan tambahan lampu LED hangat yang estetik.", price:135000, icon:"✨", bg:"#f8e9e4", img:"images/satin2.jpg"},
  {id:56, cat:"Satin", name:"Buket Mawar Satin Merah & Pink Padat", desc:"Buket bulat penuh mawar satin merah marun dan pink lembut dengan wrapping putih dan pita pink.", price:150000, icon:"🌷", bg:"#f7e5ea", img:"images/download (85).jpg"},
  {id:57, cat:"Request", name:"Request Buket Sesuai Keinginan", desc:"Punya ide atau foto referensi sendiri? Chat admin untuk request bunga, warna, ukuran, dan budget.", price:0, icon:"💬", bg:"#f1e9f7", img:"images/request-chat-admin.png", chat:true}
];

const rp = n => n === 0 ? "Tanya admin" : "Rp" + n.toLocaleString("id-ID");
let cart = [];
let active = "Semua";

const $ = id => document.getElementById(id);
const waLink = text => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

function renderFilters(){
  const cats = ["Semua", ...new Set(products.map(p => p.cat))];
  $("filters").innerHTML = cats.map(c => `<button class="${c===active?'on':''}" data-cat="${c}">${c}</button>`).join("");
  $("filters").querySelectorAll("button").forEach(b => b.onclick = () => { active = b.dataset.cat; renderFilters(); renderGrid(); });
}

function renderGrid(){
  const list = active === "Semua" ? products : products.filter(p => p.cat === active);
  $("grid").innerHTML = list.map(p => `
    <article class="card">
      <div class="thumb" style="background:${p.bg}">${p.img ? `<img src="${p.img}" alt="${p.name}" loading="lazy">` : p.icon}</div>
      <div class="info">
        <small>${p.cat}</small>
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <span class="price">${rp(p.price)}</span>
        ${p.chat ? `<a class="add chat" href="${waLink("Halo Biloria Florist, saya mau request buket sesuai keinginan saya.\n\nJenis bunga/isi: \nWarna: \nBudget: \nTanggal diperlukan: \n(Foto referensi saya kirim setelah ini)")}" target="_blank" rel="noopener">💬 Chat Admin</a>` : `<button class="add" data-id="${p.id}">Tambah</button>`}
      </div>
    </article>`).join("");
  $("grid").querySelectorAll(".thumb img").forEach(im => im.onclick = () => openLightbox(im.src, im.alt));
  $("grid").querySelectorAll("button.add").forEach(b => b.onclick = () => { cart.push(products.find(p => p.id == b.dataset.id)); renderCart(); });
}

function renderCart(){
  $("cartCount").textContent = cart.length;
  $("cartList").innerHTML = cart.length
    ? cart.map((p,i) => `<li><span>${p.name}<br><small>${rp(p.price)}</small></span><button data-i="${i}" aria-label="Hapus ${p.name}">Hapus</button></li>`).join("")
    : "<li>Belum ada bucket yang dipilih.</li>";
  $("cartList").querySelectorAll("button").forEach(b => b.onclick = () => { cart.splice(b.dataset.i,1); renderCart(); });
  const total = cart.reduce((s,p) => s + p.price, 0);
  $("total").textContent = "Rp" + total.toLocaleString("id-ID");
  const lines = cart.map((p,i) => `${i+1}. ${p.name} (${rp(p.price)})`).join("\n");
  const msg = cart.length
    ? `Halo Biloria Florist, saya mau pesan:\n${lines}\nTotal: Rp${total.toLocaleString("id-ID")}\n\nNama:\nAlamat:\nTanggal kirim:`
    : "Halo Biloria Florist, saya mau tanya-tanya soal bucket.";
  $("waBtn").href = waLink(msg);
}

const drawer = $("drawer");
$("cartBtn").onclick = () => { drawer.classList.add("open"); drawer.setAttribute("aria-hidden","false"); };
$("closeBtn").onclick = () => { drawer.classList.remove("open"); drawer.setAttribute("aria-hidden","true"); };
$("clearBtn").onclick = () => { cart = []; renderCart(); };

document.querySelectorAll("[data-wa]").forEach(a => { a.href = waLink("Halo Biloria Florist, saya mau tanya-tanya."); });
document.querySelectorAll("[data-ig]").forEach(a => { a.href = `https://instagram.com/${IG_USERNAME}`; });
document.querySelectorAll("[data-ig-name]").forEach(s => { s.textContent = "@" + IG_USERNAME; });
renderFilters(); renderGrid(); renderCart();


function openLightbox(src, alt){
  let lb = document.getElementById("lightbox");
  if(!lb){
    lb = document.createElement("div");
    lb.id = "lightbox"; lb.className = "lightbox";
    lb.innerHTML = '<button aria-label="Tutup">✕</button><img alt="">';
    lb.onclick = () => { lb.classList.remove("open"); lb.style.display = "none"; document.body.style.overflow = ""; };
    document.addEventListener("keydown", e => { if(e.key === "Escape") lb.onclick(); });
    document.body.appendChild(lb);
  }
  // Gaya ditulis langsung di sini supaya foto SELALU pas di layar (tidak bergantung cache CSS)
  Object.assign(lb.style, {position:"fixed", inset:"0", display:"flex", alignItems:"center", justifyContent:"center", padding:"0", zIndex:"50", background:"rgba(70,41,90,.9)", cursor:"zoom-out"});
  const img = lb.querySelector("img");
  Object.assign(img.style, {display:"block", width:"auto", height:"auto", maxWidth:"96vw", maxHeight:"94vh", objectFit:"contain", borderRadius:"10px", boxShadow:"0 10px 40px rgba(0,0,0,.4)"});
  const btn = lb.querySelector("button");
  Object.assign(btn.style, {position:"fixed", top:"14px", right:"14px", width:"44px", height:"44px", borderRadius:"50%", border:"0", background:"#fff", color:"#5b3a6e", fontSize:"20px", cursor:"pointer", zIndex:"51"});
  img.src = src; img.alt = alt;
  lb.classList.add("open");
  document.body.style.overflow = "hidden";
}
