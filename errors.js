/***********************************************
 * ID -------------------- signupValidation    *
 * Student --------------- Lilit Khalatyan     *
 * Date ------------------ 10-05-2022          *
/**********************************************/

const errorUserLen = ' - min 3 and max 20 characters';
const errorUserChar = ' - latin letters and numbers';

const errorPwordLen = ' - contian min 8 and max 16 characters';
const errorPwordLowercase = ' - contian at least one lowercase letter';
const errorPwordUppercase = ' - contian at least one uppercase letter';
const errorPwordNumber = ' - contian at least one number';
const errorPwordSymbol = ' - contian at least one symbol';
const errorPwordSpace = ' - not contian space character';
const errorPwordUnicode = ' - be in Latin/Armenian/Russian letters only';
const errorPwordKayword = ' - not contian username';


function errorListUsername(username) {
    
    let errorListUser = '';
    
    if (!username.match(/^.{3,20}$/)) {
        errorListUser += '\n' + errorUserLen;
    }
    if (!username.match(/^([a-zA-Z1-9])*$/)) {
        errorListUser += '\n' + errorUserChar;
    }
    return errorListUser;
}

function errorListPassword(password, username) {
    
    let errorListPassword = '';
   
    if (!password.match(/^.{8,16}$/)) {
        errorListPassword += '\n' + errorPwordLen;
    }
    if (!password.match(/^(?=.*[a-zа-яա-ֆ]).*$/)) {
        errorListPassword += '\n' + errorPwordLowercase;
    }
    if (!password.match(/^(?=.*[A-ZА-ЯԱ-Ֆ]).*$/)) {
        errorListPassword += '\n' + errorPwordUppercase;
    }
    if (!password.match(/^(?=.*[0-9]).*$/)) { // 
        errorListPassword +=  '\n' + errorPwordNumber;
    }
    if (!password.match(/^(?=.*[(~`!@#$%^&*()-_+={}]|;:"<>,.\/?).*$/)) {
        errorListPassword += '\n' + errorPwordSymbol;
    }
    if (password.match(/^(?=.*[ ]).*$/)) {
        errorListPassword += '\n' + errorPwordSpace;
    }
    if (!password.match(/^([1-9a-zA-Zа-яА-Яա-ֆԱ-Ֆ[(~`!@#$%^&*()-_+={}]|;:"<>,.\/?])*$/)) {
        errorListPassword += '\n' + errorPwordUnicode;
    }
    if (password.includes(username)) {
        return errorListPassword += '\n' + errorPwordKayword;
    }
    return errorListPassword;
}