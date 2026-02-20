document.getElementById("transfer-btn").addEventListener("click", function () {
  // 1 get user account number
  let accountNumber = getValueFromInput("transfer-input-number");
  if (accountNumber.length != 11) {
    alert("Input The Correct Number ");
    return;
  }

  // 2 get amount
  let amount = getValueFromInput("transfer-input-amount");
  // 2.1 calculate amount
  let newBalance = getBalance() - Number(amount);
  if (newBalance < 0) {
    alert("Insufficient balance ");
    return;
  }

  // get pin number
  let password = getValueFromInput("transfer-input-pin");
  if (password === "1234") {
    alert("Transfer Money successful ");
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
            <h1 class="text-[16px] font-semibold">Transfer Money</h1>
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
    alert("Worng Password");
  }
  setBalance(newBalance);
});
