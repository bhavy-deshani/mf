document.addEventListener("DOMContentLoaded", function () {
  function updateInputValue(rangeInput, numberInput) {
    numberInput.value = rangeInput.value;
    fetchData();
  }

  function updateRangeValue(numberInput, rangeInput) {
    rangeInput.value = numberInput.value;
    fetchData();
  }

  function setupSync(rangeInput, numberInput) {
    rangeInput.addEventListener("input", () =>
      updateInputValue(rangeInput, numberInput)
    );
    numberInput.addEventListener("input", () =>
      updateRangeValue(numberInput, rangeInput)
    );
  }

  const inputs = [
    { range: "current_age_range", number: "current_age" },
    { range: "retirement_age_range", number: "retirement_age" },
    { range: "wealth_amount_range", number: "wealth_amount" },
    { range: "inflation_rate_range", number: "inflation_rate" },
    { range: "expected_return_range", number: "expected_return" },
    { range: "savings_amount_range", number: "savings_amount" },
  ];

  inputs.forEach(({ range, number }) => {
    const rangeInput = document.getElementById(range);
    const numberInput = document.getElementById(number);
    setupSync(rangeInput, numberInput);
  });

  // Initialize default values
  function initializeDefaults() {
    document.getElementById("current_age").value = 30;
    document.getElementById("current_age_range").value = 30;
    document.getElementById("retirement_age").value = 60;
    document.getElementById("retirement_age_range").value = 60;
    document.getElementById("wealth_amount").value = 5000000;
    document.getElementById("wealth_amount_range").value = 5000000;
    document.getElementById("inflation_rate").value = 6;
    document.getElementById("inflation_rate_range").value = 6;
    document.getElementById("expected_return").value = 8;
    document.getElementById("expected_return_range").value = 8;
    document.getElementById("savings_amount").value = 1000000;
    document.getElementById("savings_amount_range").value = 1000000;
  }

  initializeDefaults();

  async function fetchData() {
    const current_age = document.getElementById("current_age").value;
    const retirement_age = document.getElementById("retirement_age").value;
    const wealth_amount = document.getElementById("wealth_amount").value;
    const inflation_rate = document.getElementById("inflation_rate").value;
    const expected_return = document.getElementById("expected_return").value;
    const savings_amount = document.getElementById("savings_amount").value;

    // const apiKey = "bf27810f-27a3-44f3-b28d-c0a863d04ffb";
    const apiKey = "mfapikey";
    // const reqtype = `?reqtype=calc/getCrorepatiResult&current_age=${current_age}&retirement_age=${retirement_age}&wealth_amount=${wealth_amount}&inflation_rate=${inflation_rate}&expected_return=${expected_return}&savings_amount=${savings_amount}&key=${apiKey}`;
    const apiUrl = `https://www.integratedindia.in/API/ADKAPI.aspx?reqtype=calc/getCrorepatiResult&current_age=${current_age}&retirement_age=${retirement_age}&wealth_amount=${wealth_amount}&inflation_rate=${inflation_rate}&expected_return=${expected_return}&savings_amount=${savings_amount}&key=${apiKey}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 200) {
          displayResult(data);
          displayChart(data);
        } else {
          displayError("Error fetching data from the API");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        displayError("Error fetching data from the API");
      });
  }

  function displayResult(data) {
    const formatter = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    });
    const resultsDiv = document.getElementById("results");
    resultsDiv.style.display = "block";
    resultsDiv.innerHTML = `
        <div class='col-12 m-auto overflow-auto'>
 <table class="table table-bordered">
    <tbody>
        <tr>
            <td>Monthly Savings Needed:</td>
            <td class="fw-bold" >${formatter.format(data.monthly_savings)}</td>
        </tr>
        <tr>
            <td>Total Invested Amount:</td>
            <td class="fw-bold" >${formatter.format(data.invested_amount)}</td>
        </tr>
        <tr>
            <td>Total Earnings:</td>
            <td class="fw-bold" >${formatter.format(data.total_earnings)}</td>
        </tr>
    </tbody>
</table>

</div>
        `;
  }

  function displayError(message) {
    const errorDiv = document.getElementById("results");
    if (errorDiv) {
      errorDiv.innerHTML = `<strong>Error:</strong> ${message}`;
      errorDiv.style.display = "block";
    }
  }

  function displayChart(data) {
    const ctx = document.getElementById("resultChart").getContext("2d");

    // Check if a chart instance already exists and has a destroy method
    if (
      window.resultChart &&
      typeof window.resultChart.destroy === "function"
    ) {
      window.resultChart.destroy();
    }

    // Create a new chart instance
    window.resultChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [data.invested_amount, data.total_earnings],
            backgroundColor: ["#00ae42", "#143980"],
            hoverBackgroundColor: ["#00ae42", "#143980"],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          tooltip: {
            callbacks: {
              label: function (tooltipItem) {
                return `${tooltipItem.label}: ${tooltipItem.raw.toLocaleString(
                  "en-IN",
                  {
                    style: "currency",
                    currency: "INR",
                  }
                )}`;
              },
            },
          },
        },
      },
    });
  }

  // Initial data fetch
  fetchData();
});
