document.getElementById("bonus-btn").addEventListener("click", function () {
  // 1 get coupon
  let couponInput = getValueFromInput("bonus-input-number");
  if (couponInput !="mamun") {
    alert("coupon is note available");

    return;
  } else {
    alert("Congrats! You got 500 TK.");

    // fint history container
    let historyContainer = document.getElementById("Transactions-container");
    let newDiv = document.createElement("div");
    newDiv.innerHTML = `
       <div class="btn w-full bg-base-200 h-[71.5px] flex justify-start rounded-[12px]">
          <div
            class="bg-neutral-content w-12 h-12 flex items-center justify-center rounded-full"
          >
            <img src="./assets/opt-5.png" alt="" />
          </div>
          <div class="flex flex-col items-start">
            <h1 class="text-[16px] font-semibold">Get Bonus</h1>
            <p class="text-[12px] font-normal">${new Date().toLocaleString(
              "en-GB",
              {
                weekday: "long",
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              },
            )}</p>
          </div>
        </div>
    `;
    historyContainer.append(newDiv);
  }

  let totalBalance = getBalance() + 500;

  setBalance(totalBalance);
});
