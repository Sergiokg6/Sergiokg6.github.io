document.addEventListener('DOMContentLoaded', () => {

    const chartData = {
         min_interior: { labels: ['Budget', 'Staff', 'Projects'], data: [50, 80, 70] },
          min_economy: { labels: ['GDP', 'Exports', 'Tourism'], data: [90, 75, 85] },
         min_education: { labels: ['Students', 'Teachers', 'Funding'], data: [70, 60, 80] },
          min_health: { labels: ['Budget', 'Hospitals', 'Patients'], data: [80, 90, 70] },
         min_transport: { labels: ['Budget', 'Infrastructure', 'Projects'], data: [60, 80, 80] },
         min_energy: { labels: ['Renewables', 'Consumption', 'Budget'], data: [80, 60, 70] },
       min_finance: { labels: ['Investment', 'Tax Revenue', 'Savings'], data: [90, 80, 70] }
    };

 const ministryId = document.body.dataset.ministry;

  if(ministryId && chartData[ministryId]){
          const data = chartData[ministryId];
           document.querySelectorAll('.ministries__item').forEach(chartContainer =>{
               const chartId = chartContainer.getAttribute('data-ministry');
          });
  }
});