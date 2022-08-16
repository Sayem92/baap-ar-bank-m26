    //step-1: add event listener with deposit button
    document.getElementById('btn-deposit').addEventListener('click',function(){
    //step-2: get the deposit amount from the deposit field
    //sub-step: for input field use .value to the value inside the input field
    const depositfield = document.getElementById('deposit-field');
    const newDepositAmountString = depositfield.value;
    const newDepositAmount = parseFloat(newDepositAmountString)
     
    //step-3: get the current deposit total
    //non-input(element other input text,textarea) field can use the value to put the innertext
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

        //step-4: add numbers to set the total deposit
        const currentDepositTotal = previousDepositTotal + newDepositAmount;
        //set the deposit total
    depositTotalElement.innerText = currentDepositTotal
    
    //step-5: get balance current  total 
    const balaceTotalElement = document.getElementById('balance-total');
    const previousTotalBalanceString =balaceTotalElement.innerText;
    const previousTotalBalance = parseFloat(previousTotalBalanceString);

    //step-6: calculate current total balance
    const currentBalanceTotal = previousTotalBalance + newDepositAmount ;
        //set the balance total
        balaceTotalElement.innerText = currentBalanceTotal;

    //step-7: clear the deposit field
    depositfield.value = '';
});