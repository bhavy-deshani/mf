document.addEventListener("DOMContentLoaded", function () {
  const monthlyInvestmentInput = document.getElementById("monthly-sip");
  const monthlyInvestmentValue = document.getElementById("monthly-sip-value");
  const sipPeriodInput = document.getElementById("sip-period");
  const sipPeriodValue = document.getElementById("sip-period-value");
  const expectedReturnInput = document.getElementById("return-rate");
  const expectedReturnValue = document.getElementById("return-rate-value");
  const sipChart = document.getElementById("sip-chart").getContext("2d");
  let chart;

  function formatCurrency(amount) {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  }

  function calculateSIP() {
    const monthlyInvestment = parseFloat(monthlyInvestmentInput.value);
    const years = parseFloat(sipPeriodInput.value);
    const annualReturnRate = parseFloat(expectedReturnInput.value) / 100;
    let totalInvestment = monthlyInvestment * years * 12;
    let futureValue = 0;
    for (let i = 1; i <= years; i++) {
      for (let j = 1; j <= 12; j++) {
        futureValue +=
          monthlyInvestment *
          Math.pow(1 + annualReturnRate / 12, (i - 1) * 12 + j);
      }
    }
    let investedAmount = totalInvestment;
    let wealthGained = futureValue - totalInvestment;
    let totalWealth = wealthGained + totalInvestment;

    monthlyInvestmentValue.value = formatCurrency(monthlyInvestment);
    sipPeriodValue.value = `${years}`;
    expectedReturnValue.value = `${(annualReturnRate * 100).toFixed()}`;

    document.getElementById(
      "invested-amount-display"
    ).textContent = ` ${formatCurrency(investedAmount)}`;
    document.getElementById(
      "wealth-gained-display"
    ).textContent = ` ${formatCurrency(wealthGained)}`;
    document.getElementById(
      "total-wealth-display"
    ).textContent = `${formatCurrency(totalWealth)}`;

    updateChart(investedAmount, wealthGained);
  }

  function updateChart(investedAmount, wealthGained) {
    if (chart) {
      chart.data.datasets[0].data[0] = investedAmount;
      chart.data.datasets[0].data[1] = wealthGained;
      chart.update();
    } else {
      chart = new Chart(sipChart, {
        type: "doughnut",
        data: {
          datasets: [
            {
              data: [investedAmount, wealthGained],
              backgroundColor: ["#00ad41", "#005cb9"],
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              position: "bottom",
            },
          },
          cutout: "60%",
        },
      });
    }
  }

  function updateInputs() {
    calculateSIP();
    ["monthly-sip", "sip-period", "return-rate"].forEach(function (id) {
      const inputElement = document.getElementById(id);
      const value =
        ((inputElement.value - inputElement.min) /
          (inputElement.max - inputElement.min)) *
        100;
      inputElement.style.background = `linear-gradient(to right, #033695 0%, #033695 ${value}%, #cccfcf ${value}%, #cccfcf 100%)`;
    });
  }

  function syncTextInput(id) {
    const inputElement = document.getElementById(id);
    const textElement = document.getElementById(`${id}-value`);
    const value = inputElement.value;

    if (id === "monthly-sip") {
      textElement.value = formatCurrency(value);
    } else if (id === "sip-period") {
      textElement.value = `${value}${value > 1 ? " Yrs" : " Yr"}`;
    } else if (id === "return-rate") {
      textElement.value = `${value}`;
    }
    updateInputs();
  }

  // Event listeners for range inputs
  monthlyInvestmentInput.addEventListener("input", function () {
    updateInputs();
  });

  sipPeriodInput.addEventListener("input", function () {
    updateInputs();
  });

  expectedReturnInput.addEventListener("input", function () {
    updateInputs();
  });

  // Event listeners for tel inputs (value fields)
  monthlyInvestmentValue.addEventListener("input", function () {
    const value = parseFloat(this.value.replace(/,/g, ""));
    if (
      !isNaN(value) &&
      value >= monthlyInvestmentInput.min &&
      value <= monthlyInvestmentInput.max
    ) {
      monthlyInvestmentInput.value = value;
      updateInputs();
    }
  });

  sipPeriodValue.addEventListener("input", function () {
    const value = parseFloat(this.value);
    if (
      !isNaN(value) &&
      value >= sipPeriodInput.min &&
      value <= sipPeriodInput.max
    ) {
      sipPeriodInput.value = value;
      updateInputs();
    }
  });

  expectedReturnValue.addEventListener("input", function () {
    const value = parseFloat(this.value.replace(/%/, ""));
    if (
      !isNaN(value) &&
      value >= expectedReturnInput.min &&
      value <= expectedReturnInput.max
    ) {
      expectedReturnInput.value = value;
      updateInputs();
    }
  });

  // Initial calculation
  calculateSIP();
});
