// Sample data representing user's past plan history
const planHistory = [
    { date: '2024-03-02', plan: 'Daily', price: '500' },
    { date: '2024-03-03', plan: 'Weekly', price: '2000' },
    { date: '2024-03-10', plan: 'Daily', price: '500' }
  ];
  
  // Function to populate the table with plan history data
  function PlanTable() {
    const tableBody = document.getElementById('planTableBody');
  
    // Clear any existing rows
    tableBody.innerHTML = '';
  
    // Loop through the plan history data and create table rows
    planHistory.forEach(plan => {
      const row = `<tr>
                    <td>${plan.date}</td>
                    <td>${plan.plan}</td>
                    <td>${plan.price}</td>
                  </tr>`;
      tableBody.innerHTML += row;
    });
  }
  
  // Call the function to populate the table when the page loads
  document.addEventListener('DOMContentLoaded', PlanTable);
  