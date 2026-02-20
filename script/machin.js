function getValueFromInput(id){
     let input =document.getElementById(id);
     let value = input.value;
     console.log( id ,value );
     return value;
}
// get balance 
function getBalance(){
     let balanceId = document.getElementById("balance");
     let balance = balanceId.innerText;
     console.log(balance)
     return Number(balance);
}

// set balace 
function setBalance (value){
     let balanceElement = document.getElementById("balance");
     balanceElement.innerText=value;
}
//  hide all show id 
function showOnly(id){
     let CashIn=document.getElementById("add-money");
     let cashOut =document.getElementById("Cashout");
     let Transactions = document.getElementById("Transactions");
     let transferMoney = document.getElementById("transfer-Money");
     let bonus = document.getElementById("Get-Bonus");
     let payBill = document.getElementById("Pay-Bill");
     CashIn.classList.add('hidden');
     cashOut.classList.add('hidden');
     Transactions.classList.add('hidden');
     transferMoney.classList.add('hidden');
     bonus.classList.add('hidden');
     payBill.classList.add('hidden');
     let select=document.getElementById(id);
     select.classList.remove('hidden');
}