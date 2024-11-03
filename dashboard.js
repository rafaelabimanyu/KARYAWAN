// Menyiapkan notifikasi dummy
const notifications = [
  { message: "Karyawan A telah mengisi absen.", date: "2024-10-30" },
  { message: "Laporan keuangan bulan ini sudah siap.", date: "2024-10-29" },
  { message: "Karyawan B sedang dalam cuti.", date: "2024-10-28" },
];

// Variabel untuk menyimpan tugas
let tasks = [];

// Fungsi untuk memuat notifikasi
function loadNotifications() {
  const notificationList = document.getElementById('notificationList');
  notifications.forEach(notification => {
    const li = document.createElement('li');
    li.textContent = `${notification.message} (${notification.date})`;
    notificationList.appendChild(li);
  });
}

// Fungsi untuk menambah tugas
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskName = taskInput.value.trim();

  if (taskName) {
    const task = {
      name: taskName,
      completed: false,
    };
    tasks.push(task);
    taskInput.value = '';
    renderTaskList();
    updateStats();
  }
}

// Fungsi untuk merender daftar tugas
function renderTaskList() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task.name;
    if (task.completed) {
      li.classList.add('completed');
    }

    const completeButton = document.createElement('button');
    completeButton.textContent = task.completed ? 'Undo' : 'Selesai';
    completeButton.onclick = () => toggleTaskCompletion(index);

    li.appendChild(completeButton);
    taskList.appendChild(li);
  });
}

// Fungsi untuk mengubah status tugas
function toggleTaskCompletion(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTaskList();
  updateStats();
}

// Fungsi untuk memperbarui statistik
function updateStats() {
  const totalTasks = document.getElementById('totalTasks');
  const completedTasks = document.getElementById('completedTasks');
  totalTasks.textContent = tasks.length;
  completedTasks.textContent = tasks.filter(task => task.completed).length;
}

// Fungsi untuk menggambar grafik kehadiran
function drawAttendanceChart() {
  const ctx = document.getElementById('attendanceChart').getContext('2d');
  const attendanceData = [12, 15, 8, 20, 18, 22]; // contoh data kehadiran

  const chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'],
      datasets: [{
        label: 'Kehadiran',
        data: attendanceData,
        backgroundColor: 'rgba(52, 152, 219, 0.6)',
        borderColor: 'rgba(52, 152, 219, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

// Fungsi untuk menggambar grafik pekerjaan
function drawWorkChart() {
  const ctx = document.getElementById('workChart').getContext('2d');
  const workData = [5, 8, 12, 3, 7, 10]; // contoh data pekerjaan

  const chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'],
      datasets: [{
        label: 'Tugas Selesai',
        data: workData,
        backgroundColor: 'rgba(39, 174, 96, 0.6)',
        borderColor: 'rgba(39, 174, 96, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

// Event listener saat dokumen dimuat
document.addEventListener('DOMContentLoaded', () => {
  loadNotifications();
  document.getElementById('addTaskButton').onclick = addTask;
  drawAttendanceChart(); // menggambar grafik kehadiran
  drawWorkChart(); // menggambar grafik pekerjaan
});
