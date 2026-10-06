// controller.mjs
import users from "./data.mjs";

// Melihat data
// pake map() buat nampilin tiap data user satu-satu ke console
const index = () => {
  console.log("=== Daftar Data ===");
  users.map((user) => {
    console.log(
      "Nama: " + user.nama +
      " | Umur: " + user.umur +
      " | Alamat: " + user.alamat +
      " | Email: " + user.email
    );
  });
};

// Menambahkan data
// nerima objek user baru, lalu dimasukin ke array users pake push
const store = (user) => {
  users.push(user);
};

// Menghapus data
// nyari index data berdasarkan nama, kalau ketemu langsung dihapus pake splice
const destroy = (nama) => {
  const idx = users.findIndex((user) => user.nama === nama);
  if (idx !== -1) {
    users.splice(idx, 1);
  }
};

export { index, store, destroy };
