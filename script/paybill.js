document.getElementById("pay-btn").addEventListener("click", function () {
  // 1 get select to pay
  let selectToPay = getValueFromInput("pay-money");
  if (selectToPay === "Select bank") {
    alert("Please select a bank");
    return;
  }

  // 2 pay bank number
  let billAccountNumber = getValueFromInput("pay-account");
  if (billAccountNumber.length != 11) {
    alert("Invalid Account Number ");
    return;
  }

  // 3 get amount to pay
  let amountForPay = getValueFromInput("input-amount-for-pay");
  let currentBalance = getBalance() - Number(amountForPay);
  if (currentBalance < 0) {
    alert("Insufficient Balance");
    return;
  }

  // pin get
  let password = getValueFromInput("input-pin-for-pay");
  if (password === "1234") {
    alert("Pay Bill Successful");
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
            <h1 class="text-[16px] font-semibold">Pay Bill</h1>
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
  } else {
    alert("worng password");
    return;
  }
  setBalance(currentBalance);
});
