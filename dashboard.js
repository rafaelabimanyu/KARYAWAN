// Menyiapkan notifikasi dummy
const notifications = [
  { message: "Karyawan A telah mengisi absen.", date: "2024-10-30" },
  { message: "Laporan keuangan bulan ini sudah siap.", date: "2024-10-29" },
  { message: "Karyawan B sedang dalam cuti.", date: "2024-10-28" },
];

// Fungsi untuk memuat notifikasi
function loadNotifications() {
  const notificationList = document.getElementById('notificationList');
  notifications.forEach(notification => {
    const li = document.createElement('li');
    li.textContent = `${notification.message} (${notification.date})`;
    notificationList.appendChild(li);
  });
}

// Fungsi untuk memuat laporan harian
function loadDailyReport() {
  const reportContainer = document.getElementById('dailyReport');
  const today = new Date().toLocaleDateString();

  const reportContent = `
    <h3>Laporan Harian - ${today}</h3>
    <p>Jumlah Karyawan yang Hadir: 20</p>
    <p>Jumlah Karyawan yang Cuti: 2</p>
    <p>Jumlah Karyawan yang Sakit: 1</p>
  `;
  
  reportContainer.innerHTML = reportContent;
}

// Event listener saat dokumen dimuat
document.addEventListener('DOMContentLoaded', () => {
  loadNotifications();
  loadDailyReport();
});
