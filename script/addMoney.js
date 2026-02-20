document.getElementById("CashIn-btn").addEventListener("click", function () {
  // 1 get bank name
  let selectBank = getValueFromInput("ad-money-bank");
  if (selectBank === "Select bank") {
    alert("Pleace select a bank");
    return;
  }
  //     2 get bank account number ?
  let accountNumber = getValueFromInput("input-Account-Number");
  if (accountNumber.length != 11) {
    alert("worng account number");
    return;
  }
  let addAmount = getValueFromInput("input-amount-for-add");

  let totalBalance = getBalance() + Number(addAmount);
  console.log(totalBalance);

  // get pin number
  let password = getValueFromInput("input-pin-for-add");
  if (password === "1234") {
    alert(`add money from ${selectBank} at ${new Date()}`);
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
            <h1 class="text-[16px] font-semibold">Add Money</h1>
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
  setBalance(totalBalance);
});
