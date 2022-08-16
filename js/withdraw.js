//1. add event handler with the withdraw buttton
//2. get the withdraw amoun from the witdraw input amount field
//2-5. make sure the input of number. string to convert number by using a parsrFloat
//3. get previous withdraw total

//4. calculate withdraw total amount
//4-5. set total withdraw amount

//5. get the previous balance total

//6.calculate new balance total
//6-5. set the new balance total

//7. clear the withdraw field

// step-1: 
document.getElementById('btn-withdraw').addEventListener('click',function(){
    
    //steo-2:
   const withdrawField= document.getElementById('withdraw-field');
   const newWithdrawAmountString = withdrawField.value ;
   const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    //step-7:
    withdrawField.value = '';


   if(isNaN(newWithdrawAmount)){
    alert('Please provide a valid number');
    return;
   }

    //step-3:
    const WithdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString =WithdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);


    // step-5:
    const balanceTotalElement = document.getElementById('balance-total');
    const previousTotalBalanceString = balanceTotalElement.innerText;
    const previousTotalBalance = parseFloat(previousTotalBalanceString);

    

    if(newWithdrawAmount > previousTotalBalance){
        alert('baap ar bank a ato taka nai!!!');
        return;
    }

     // step-4:
     const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount ;
     WithdrawTotalElement.innerText = currentWithdrawTotal;

    //step-6:
    const newBalanceTotal = previousTotalBalance - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;



})