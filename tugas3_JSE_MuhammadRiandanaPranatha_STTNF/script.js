
// Array produkToko, nyimpen semua data produk yang dijual toko
// Tiap produk punya id, nama, harga, dan stok

var produkToko = [
  { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
  { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
  { id: 3, nama: "Keyboard", harga: 350000, stok: 7 }
];


// Fungsi tambahProduk
// Nambahin produk baru ke dalam array produkToko
// id produk baru otomatis dibikin dari id terakhir + 1

function tambahProduk(nama, harga, stok) {
  var idBaru = produkToko.length > 0
    ? produkToko[produkToko.length - 1].id + 1
    : 1;

  var produkBaru = {
    id: idBaru,
    nama: nama,
    harga: harga,
    stok: stok
  };

  produkToko.push(produkBaru); // nambahin objek produk baru ke array
  return produkBaru;
}


// Fungsi hapusProduk
// Menghapus produk dari array produkToko berdasarkan id

function hapusProduk(id) {
  var indexProduk = produkToko.findIndex(function (produk) {
    return produk.id === id;
  });

  if (indexProduk !== -1) {
    produkToko.splice(indexProduk, 1); // menghapus 1 elemen di posisi indexProduk
    return true;
  }

  return false; // produk dengan id tersebut ga ditemukan
}


// Fungsi tampilkanProduk
// Menampilkan seluruh isi array produkToko
// Bisa dipanggil kapan aja buat lihat kondisi daftar produk terkini

function tampilkanProduk() {
  console.log("Daftar Produk Saat Ini:");
  produkToko.forEach(function (produk) {
    console.log(
      "ID: " + produk.id +
      " | Nama: " + produk.nama +
      " | Harga: Rp " + produk.harga.toLocaleString("id-ID") +
      " | Stok: " + produk.stok
    );
  });

  renderTabel(); // sekalian update tampilan tabel di halaman
}


// Fungsi bantu buat nampilin isi produkToko ke tabel HTML

function renderTabel() {
  var baris = "";
  produkToko.forEach(function (produk) {
    baris += "<tr>";
    baris += "<td>" + produk.id + "</td>";
    baris += "<td>" + produk.nama + "</td>";
    baris += "<td>Rp " + produk.harga.toLocaleString("id-ID") + "</td>";
    baris += "<td>" + produk.stok + "</td>";
    baris += "</tr>";
  });
  document.getElementById("isiTabelProduk").innerHTML = baris;
}


// Contoh pemakaian fungsi-fungsi di atas


tampilkanProduk(); // tampilkan kondisi awal (3 produk dari array)

tambahProduk("Monitor", 1500000, 4); // nambah produk baru
tampilkanProduk(); // tampilkan lagi, sekarang ada 4 produk

hapusProduk(2); // hapus produk dengan id 2 (Mouse)
tampilkanProduk(); // tampilkan lagi, Mouse udah ga ada
