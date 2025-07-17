document.addEventListener('DOMContentLoaded', function() {
  // Hero Chart
  const heroCtx = document.getElementById('heroChart').getContext('2d');
  const heroChart = new Chart(heroCtx, {
    type: 'doughnut',
    data: {
      labels: ['Data Cleaning', 'Analysis', 'Visualization', 'Model Building', 'Deployment'],
      datasets: [{
        data: [15, 25, 30, 20, 10],
        backgroundColor: [
          '#7c3aed',
          '#10b981',
          '#3b82f6',
          '#f59e0b',
          '#ef4444'
        ],
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            boxWidth: 12,
            padding: 20,
            font: {
              family: 'Inter'
            }
          }
        },
        tooltip: {
          bodyFont: {
            family: 'Inter'
          },
          titleFont: {
            family: 'Inter'
          }
        }
      },
      cutout: '65%'
    }
  });

  // Project charts would be initialized here
  // You would need to add canvas elements to your project templates
});
