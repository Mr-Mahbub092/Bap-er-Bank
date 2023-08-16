document.getElementById("btn-withdraw").addEventListener("click", function () {
  // get new withdraw value
  let withdrawField = document.getElementById("withdraw-input");
  const withdrawAmount = parseFloat(withdrawField.value);

   // clear the deposit field
   withdrawField.value = "";

  if(isNaN(withdrawAmount)){
    alert('Please provide a valid number');
    return;
  }

  // To update withdraw Balance
  // ------------------------------
  // get previous withdraw value
  const withdrawTotalElement = document.getElementById("total-withdraw");
  const previousTotalWithdraw = parseFloat(withdrawTotalElement.innerText);

  // To update Total Balance
  // ----------------------------
  // get total Balance
  const balanceTotalElement = document.getElementById("total-balance");
  const previousBalance = parseFloat(balanceTotalElement.innerText);
 

  if (withdrawAmount > previousBalance) {
    alert("Baper Bank e eto taka nai");
    return;
  }
  // add current deposit with previous
  withdrawTotalElement.innerText = previousTotalWithdraw + withdrawAmount;
  balanceTotalElement.innerText = previousBalance - withdrawAmount;
});
