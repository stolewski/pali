const input = document.querySelector('input'),
      btn = document.querySelector('#button-addon2'),
      reset = document.getElementById('reset'),
      userMsg = document.getElementById('userMsg'),
      userMgsFail = document.getElementById('userMsgFail'),
      modalSuccess = document.getElementById('modalSuc'),
      modalFail = document.getElementById('modalFail'),
      modalErr = document.getElementById('modalErr'),
      modalS = new bootstrap.Modal(modalSuccess),
      modalF = new bootstrap.Modal(modalFail),
      modalE = new bootstrap.Modal(modalErr);

input.focus();

function palindrome(str){
    
    let wordAr = str.toLowerCase().split('');
   
    for(let i = wordAr.length - 1; i >= 0; i--){
        wordAr.push(wordAr[i]);
    }
    wordAr.splice(0, (wordAr.length/2));
    return wordAr.join('');
}

function checkPalindrom() {
    let userData = input.value.toLowerCase();
    if(userData == '' || !isNaN(userData)){
        modalE.show();
    } else if(userData == palindrome(userData)){
        userMsg.innerHTML = 'You reverse word is "' + palindrome(userData).toUpperCase() +'" and it is a palindrome!';
        modalS.show();

    } else {
        userMgsFail.innerHTML = 'You reverse word is "' + palindrome(userData).toUpperCase() +'" and it is not a palindrome!';
        modalF.show();
    }
}

reset.onclick = function(){
    input.value = '';
}

btn.onclick = checkPalindrom;

input.addEventListener('keydown', function(e) {
   if (e.keyCode === 13) {
  checkPalindrom();
   }
});
