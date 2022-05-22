/***********************************************
 * ID -------------------- signupValidation    *
 * Student --------------- Lilit Khalatyan     *
 * Date ------------------ 10-05-2022          *
/**********************************************/

class SignupValidation {
    
    constructor(inputName, inputPass) {
        this.name = inputName;
        this.pass = inputPass;
        this.errorStatusUser = true;
        this.errorStatusPass = true;
    }

    checkUsername() {

        const nameToCheck = this.name;
        let errorListU = errorListUsername(nameToCheck);

        if (errorListU !== '') {
            errorListU = 'The User Name should contian ' + errorListU;
            document.getElementById('notCorrectU').innerHTML = errorListU;
            this.errorStatusUser = false;
        }
    }
    
    checkPassword() {

        const passToCheck = this.pass;
        const nameToSplit = this.name;
        let errorListP = errorListPassword(passToCheck, nameToSplit);

        if (errorListP !== '') {
            errorListP = 'The password should ' + errorListP;
            document.getElementById('notCorrectP').innerHTML = errorListP;
            this.errorStatusPass = false;
        }
    }
    
    main() {
        
        this.checkUsername();
        this.checkPassword();

        if (this.errorStatusUser === true && this.errorStatusPass === true) {
            window.open('success.html');
        }
    }
}

function inputInit() {
    document.getElementById('notCorrectU').innerHTML = '';
    document.getElementById('notCorrectP').innerHTML = '';
}

const getSubmit = document.getElementById('submit');
getSubmit.addEventListener('click', function() {

    inputInit();
    const inputName = (document.getElementById('userName').value).toLowerCase();
    const inputPass = document.getElementById('userPassword').value;
    
    if (!inputName || !inputPass) {
        document.getElementById('notCorrectP').innerHTML = 'Please fill out both input fields';
        throw new Error('Input fileds cannot be empty');
    }
    
    const signup = new SignupValidation(inputName, inputPass);
    
    signup.main();
})

const getRefresh = document.getElementById('refresh');
getRefresh.addEventListener('click', function() {
    window.location.reload();
})