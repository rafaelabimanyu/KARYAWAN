const attendanceRecords = [];

// Fungsi untuk menampilkan daftar absensi
function displayAttendance(filter = '') {
    const attendanceList = document.getElementById('attendanceList');
    attendanceList.innerHTML = '';

    const filteredRecords = attendanceRecords.filter(record =>
        record.name.toLowerCase().includes(filter.toLowerCase())
    );

    filteredRecords.forEach(record => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${record.name}</td>
            <td>${record.status}</td>
        `;
        row.style.opacity = 0; // Set opacity untuk animasi
        attendanceList.appendChild(row);

        // Animasi masuk
        setTimeout(() => {
            row.style.opacity = 1;
            row.style.transition = 'opacity 0.5s ease-in';
        }, 0);
    });
}

// Event listener untuk pengiriman form absensi
document.getElementById('attendanceForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('employeeName').value;
    const status = document.getElementById('attendanceStatus').value;

    attendanceRecords.push({ name, status });
    document.getElementById('attendanceForm').reset();
    displayAttendance();

    const notification = document.getElementById('notification');
    notification.textContent = "Absensi berhasil dikirim!";
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
});

// Event listener untuk pencarian
document.getElementById('filterInput').addEventListener('input', (e) => {
    const filterValue = e.target.value;
    displayAttendance(filterValue);
});

// Event listener untuk ikon hamburger
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navbar = document.getElementById("navbar").querySelector("ul");

    hamburger.addEventListener("click", () => {
        navbar.classList.toggle("active");
        hamburger.classList.toggle("active");
    });
});
