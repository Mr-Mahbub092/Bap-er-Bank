document.getElementById("btn-deposit").addEventListener("click", function () {
  // get new deposit value
  let depositField = document.getElementById("deposit-input");
  const depositAmount = parseFloat(depositField.value);

    // clear the deposit field
    depositField.value = '';


  if(isNaN(depositAmount)){
    alert('Please provide a valid number');
    return;
  }

  // To update Deposit Balance
  // ------------------------------
  // get previous deposite value
  const depositTotalElement = document.getElementById('total-deposit');
  const previousTotalDeposit = parseFloat(depositTotalElement.innerText);
  // add current deposit with previous
  depositTotalElement.innerText = previousTotalDeposit + depositAmount;




  // To update Total Balance
  // ----------------------------
  // get total Balance
  const balanceTotalElement = document.getElementById('total-balance');
  const previousBalance = parseFloat(balanceTotalElement.innerText);
  console.log(previousBalance);
  // add current deposit with total balance
  balanceTotalElement.innerText = previousBalance + depositAmount;


});
