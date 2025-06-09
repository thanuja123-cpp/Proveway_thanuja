const radios = document.querySelectorAll('input[name="unit"]');
    const selectors = {
      1: document.getElementById("selectors1"),
      2: document.getElementById("selectors2"),
      3: document.getElementById("selectors3"),
    };

    const optionLabels = {
      1: document.getElementById("option1"),
      2: document.getElementById("option2"),
      3: document.getElementById("option3"),
    };

    const prices = {
      1: "$10.00 USD",
      2: "$18.00 USD",
      3: "$24.00 USD",
    };

    const total = document.getElementById("total");

    function updateView(value) {
      for (let i = 1; i <= 3; i++) {
        if (i == value) {
          selectors[i].classList.remove("hidden");
          optionLabels[i].classList.add("selected");
        } else {
          selectors[i].classList.add("hidden");
          optionLabels[i].classList.remove("selected");
        }
      }
      total.textContent = prices[value];
    }

    radios.forEach((radio) => {
      radio.addEventListener("change", (e) => {
        updateView(Number(e.target.value));
      });
    });