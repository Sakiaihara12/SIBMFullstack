// main.mjs
import { index, store, destroy } from "./controller.mjs";

const main = () => {
  console.log("--- Data awal (10 data dari data.mjs) ---");
  index();

  // tambah dua data baru
  store({ nama: "Data 11", umur: 30, alamat: "Jl. Data 11", email: "data11@mail.com" });
  store({ nama: "Data 12", umur: 31, alamat: "Jl. Data 12", email: "data12@mail.com" });

  console.log("\n--- Data setelah ditambah (jadi 12 data) ---");
  index();

  // hapus salah satu data yang baru ditambah
  destroy("Data 11");

  console.log("\n--- Data setelah dihapus (Data 11 hilang) ---");
  index();
};

main();
