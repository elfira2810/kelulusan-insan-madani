document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const nisnInput = document.getElementById("nisn").value.trim();
  const dobInput = document.getElementById("dob").value;

  const student = students.find(s => s.nisn === nisnInput && s.birthdate === dobInput);

  const resultDiv = document.getElementById("result");
  if (student) {
    resultDiv.innerHTML = `
      <p>NISN: ${student.nisn}</p>
      <p>Nama: ${student.name}</p>
      <p>Tempat, Tanggal Lahir: ${student.birthplace}, ${new Date(student.birthdate).toLocaleDateString('id-ID')}</p>
      <p>Status: <strong style="color: green">${student.status}</strong></p>
    `;
  } else {
    resultDiv.innerHTML = `<p style="color: red;">Data tidak ditemukan. Pastikan NISN dan tanggal lahir sesuai.</p>`;
  }
});
