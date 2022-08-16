    //step-1: add click event handler with the submit button
    document.getElementById('btn-submit').addEventListener('click',function(){
   //step-2: get the email address inside the email input field
   //always remember to use .value to get text from an input field
   const emailField = document.getElementById('user-email');
   const email= emailField.value;
    //    console.log(email)
    //step-3: get password
    //3.a : set id on the html element
    //3.b : get the element
    //3.c : get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // console.log(email,password)

    //DANGER: DO NOT VARIFY email password on the client side--------------------------not-------
    //step-4: varify email and password and whether valid user or not
    if(email === 'sontan@baap.com' && password === 'secret'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Tui password bule gecos!!!. Toke ami teijjo putro kore dilam.');
    }

});