document.getElementById('Cashout-btn').addEventListener('click' , function(){
     // call the agent number
     let number =getValueFromInput("input-Number");
     if (number.length != 11) {
    alert("Invalid Number");
    return;
  }
     // call the cash out amount
     let cashOutAmount =getValueFromInput("input-amount");
     //  call the net amount
  let netAmount =getBalance();
  console.log(netAmount);
  let totalAmount = netAmount -Number(cashOutAmount);
  console.log('biyog krar pr', totalAmount);
  if (totalAmount < 0) {
    alert("Invalid Balance");
    return;
  }
    //   get pass ?
    let password= getValueFromInput("input-pin");
    if (password === "1234") {
    alert("Cash Out Successful ");
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
            <h1 class="text-[16px] font-semibold">CashOut</h1>
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
  else {
     alert('worng password');
     return;
  }
 setBalance(totalAmount);

} )





// document.getElementById("Cashout-btn").addEventListener("click", function () {
//   // call the agent number
//   let inputNumber = document.getElementById("input-Number");
//   let number = inputNumber.value;
//   console.log(number);
//   if (number.length != 11) {
//     alert("Invalid Number");
//     return;
//   }
//   // call the cash out amount
//   let cashOutAmount = document.getElementById("input-amount");
//   let amount = cashOutAmount.value;
//   console.log(amount);
//   // call the net amount
//   let netAmount = document.getElementById("balance");
//   let Netamount = netAmount.innerText;
//   console.log(Netamount);
//   // amount identy
//   let totalAmount = Number(Netamount) - Number(amount);
//   if (totalAmount < 0) {
//     alert("Invalid Balance");
//     return;
//   }
//   console.log(totalAmount);
//   //   get pass ?
//   let inputPass = document.getElementById("input-pin");
//   let password = inputPass.value;
//   console.log(password);
//   if (password === "1234") {
//     alert("Cash Out Successful ");
//   } 
//   else {
//      alert('worng password');
//      return;
//   }

//   netAmount.innerText = totalAmount;
// });
