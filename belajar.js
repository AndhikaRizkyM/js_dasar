function check() {
    event.preventDefault

  let nama = document.getElementById("nama").value;
  let teori = Number(document.getElementById("teori").value);
  let praktek = Number(document.getElementById("praktek").value);
  let hadir = Number(document.getElementById("kehadiran").value);

  let rataRata = (teori + praktek) / 2;

  let status = "";

  if (rataRata >= 75 && praktek >= 75 && kehadiran >= 90) {
    if (rataRata > 90) {
      status = "Lulus - Sangat baik";
    } else {
      status = "Lulus";
    }
  } else {
    status = "Tidak Lulus";
  }

  document.getElementById("hasil").innerHTML =
    "Nama " +
    name +
    "<br>" +
    "Rata-Rata " +
    rataRata +
    "<br>" +
    "Status " +
    status;
}
