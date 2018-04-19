function validate() {
    let checkboxCompany = $('input#company').change(isChecked);

    let usernameInput = $('#username');
    let emailInput = $('#email');
    let passwordInput = $('#password');
    let confirmPassword = $('#confirm-password');
    let companyInput = $('#companyNumber');
    let valid = $('#valid');
    let submitBtn = $('#submit');
    submitBtn.click(validateInput);
    let isCheck = false;

    let usernameRegex = /^([a-zA-Z0-9]{3,20})$/;
    let passwordRegex = /^\w{5,15}/;
    let emailRegex = /^.*@.*[.]+.*$/;

    function isChecked() {
        if(checkboxCompany.is(':checked')){
            $('#companyInfo').css('display','block');
            isCheck = true;
        }else {
            $('#companyInfo').css('display', 'none');
            isCheck = false;
        }
    }
    
    function validateInput(){
        let formPassed = true;
        event.preventDefault();

        if(!usernameRegex.test(usernameInput.val())){
            usernameInput.css('border', '1px solid red');
            formPassed = false;
        }else {
            usernameInput.css('border-color', '');
        }

        if(!emailRegex.test(emailInput.val())){
            emailInput.css('border-color', 'red');
            formPassed = false;
        }else {
            emailInput.css('border-color', '');
        }

        if(!passwordRegex.test(passwordInput.val())){
            passwordInput.css('border-color', 'red');
            formPassed = false;
        }else {
            passwordInput.css('border-color', '');
        }

        if(!passwordRegex.test(confirmPassword.val())){
            confirmPassword.css('border-color', 'red');
            formPassed = false;
        }else if(confirmPassword.val() !== passwordInput.val()) {
            formPassed = false;
            confirmPassword.css('border-color', 'red');
        }else {
            confirmPassword.css('border-color', '');
        }
        if(isCheck){
            let companyNumber = Number(companyInput.val());
            if(isNaN(companyNumber) || companyNumber < 1000 || companyNumber > 9999){
                companyInput.css('border-color', 'red');
                formPassed = false;
            }else {
                companyInput.css('border-color', '');
            }
        }
        if(formPassed) {
            valid.css('display', 'block');
        }else {
            valid.css('display', 'none')
        }
    }
}
