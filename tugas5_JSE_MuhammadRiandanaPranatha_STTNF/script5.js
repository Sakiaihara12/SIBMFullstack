// **Data Produk**
// minimal 5 produk sesuai ketentuan soal
let produkList = [
  { id: 1, nama: "Laptop", harga: 12000000 },
  { id: 2, nama: "Smartphone", harga: 5000000 },
  { id: 3, nama: "Headset", harga: 350000 },
  { id: 4, nama: "Keyboard", harga: 250000 },
  { id: 5, nama: "Monitor", harga: 1800000 }
];

// **Menambahkan Produk dengan Spread Operator**
// Spread operator (...produkList) dipake buat bikin array baru
// yang isinya semua produk lama ditambah 1 produk baru di akhir,
// jadi ga ngubah array produkList lama secara langsung (immutable)
function tambahProduk(id, nama, harga) {
  const produkBaru = { id, nama, harga };
  produkList = [...produkList, produkBaru];
}

// **Menghapus Produk dengan Rest Parameter**
// Rest parameter (...id) dipake biar fungsi ini bisa nerima
// satu id atau lebih dari satu id sekaligus buat dihapus bareng,
// contoh: hapusProduk(2) atau hapusProduk(2, 4, 5)
function hapusProduk(...id) {
  produkList = produkList.filter((produk) => !id.includes(produk.id));
}

// **Menampilkan Produk dengan Destructuring**
// Destructuring { id, nama, harga } dipake buat langsung "membongkar"
// properti dari tiap objek produk waktu looping, jadi ga perlu
// nulis produk.id, produk.nama, produk.harga satu-satu
function tampilkanProduk() {
  console.log("=== Daftar Produk ===");
  produkList.forEach(({ id, nama, harga }) => {
    console.log(
      "ID: " + id + " | Nama: " + nama + " | Harga: Rp " + harga.toLocaleString("id-ID")
    );
  });

  renderTabel(); // sekalian update tampilan tabel di halaman
}

// ----------------------------------------------------------
// Fungsi bantu buat nampilin produkList ke tabel HTML
// ----------------------------------------------------------
function renderTabel() {
  const tbody = document.getElementById("isiTabelProduk");
  if (!tbody) return; // kalau dipanggil di luar halaman HTML, skip aja

  let baris = "";
  produkList.forEach(({ id, nama, harga }) => {
    baris += "<tr>";
    baris += "<td>" + id + "</td>";
    baris += "<td>" + nama + "</td>";
    baris += "<td>Rp " + harga.toLocaleString("id-ID") + "</td>";
    baris += "</tr>";
  });
  tbody.innerHTML = baris;
}

// **Event Handler buat tombol-tombol di halaman**
// nama fungsi bebas, di sini dikumpulin jadi satu objek eventHandler
const eventHandler = {
  tambah: function () {
    const inputId = document.getElementById("inputId");
    const inputNama = document.getElementById("inputNama");
    const inputHarga = document.getElementById("inputHarga");

    const id = Number(inputId.value);
    const nama = inputNama.value;
    const harga = Number(inputHarga.value);

    if (!id || !nama || !harga) {
      alert("Isi dulu ID, Nama, dan Harga produknya.");
      return;
    }

    tambahProduk(id, nama, harga);
    tampilkanProduk();

    inputId.value = "";
    inputNama.value = "";
    inputHarga.value = "";
    document.getElementById("formTambah").classList.remove("aktif");
  },

  hapus: function () {
    const inputHapusId = document.getElementById("inputHapusId");
    const id = Number(inputHapusId.value);

    if (!id) {
      alert("Isi dulu ID produk yang mau dihapus.");
      return;
    }

    hapusProduk(id);
    tampilkanProduk();

    inputHapusId.value = "";
    document.getElementById("formHapus").classList.remove("aktif");
  }
};

// **Toggle buka/tutup form Tambah dan Hapus Produk**
// biar tabel di atas tetep rapi, form baru muncul pas tombolnya diklik
eventHandler.toggleTambah = function () {
  document.getElementById("formTambah").classList.toggle("aktif");
  document.getElementById("formHapus").classList.remove("aktif"); // tutup form hapus kalau lagi kebuka
};

eventHandler.toggleHapus = function () {
  document.getElementById("formHapus").classList.toggle("aktif");
  document.getElementById("formTambah").classList.remove("aktif"); // tutup form tambah kalau lagi kebuka
};

// ==========================================================
// Pasang Event Listener ke tombol-tombol di halaman
// ==========================================================
document.getElementById("btnToggleTambah").addEventListener("click", eventHandler.toggleTambah);
document.getElementById("btnToggleHapus").addEventListener("click", eventHandler.toggleHapus);
document.getElementById("btnTambah").addEventListener("click", eventHandler.tambah);
document.getElementById("btnHapus").addEventListener("click", eventHandler.hapus);

// ==========================================================
// Contoh pemakaian (sesuai contoh di soal)
// ==========================================================
tampilkanProduk();

// contoh penambahan data
tambahProduk(6, "Tablet", 7000000);
tampilkanProduk();

hapusProduk(2);
tampilkanProduk();
