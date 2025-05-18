window.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('skillsChart').getContext('2d');
  
    const skillsChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['HTML', 'CSS', 'JavaScript', 'NodeJS', 'React', 'Share Market'],
        datasets: [{
          label: 'Technical Skills',
          data: [60, 60, 45, 50, 60, 100], // skill percentages
          backgroundColor: [
            '#ff6384',
            '#36a2eb',
            '#ffce56',
            '#4bc0c0',
            '#9966ff'
          ],
          borderWidth: 20
        }]
      },
      options: {
        indexAxis: 'x', // <---- THIS makes it horizontal
        responsive: true,
        scales: {
          x: {
            ticks: {
              color: '#ffffff'
            },
            grid: {
              color: '#333'
            }
          },
          y: {
            ticks: {
              color: '#ffffff'
            },
            grid: {
              color: '#333'
            }
          }
        },
        plugins: {
          legend: {
            labels: {
              color: '#ffffff'
            }
          }
        }
      }
    });
  });
  