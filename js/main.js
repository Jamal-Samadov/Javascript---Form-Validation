
/* Passwordun görünməsi vəya görünməməsi */

var eye = document.querySelector('#eye')

eye.addEventListener('click', function(){
    var input = document.querySelector('#pass')
    var type = input.getAttribute('type')
    if( type === 'password'){
        input.setAttribute('type', 'text')
        eye.className = 'fa-solid fa-eye-slash'
    }
    else{
        input.setAttribute('type', 'password')
        eye.className = 'fa-solid fa-eye'
    }
})

/* Form Validation */

let form = document.querySelector('#form');

form.addEventListener('submit', function(e){
    e.preventDefault()
    let username = document.querySelector('#username').value
    
    let pw = document.querySelector('#pass').value;
    let email = document.querySelector('#email').value;

    if(email.length == '' || email.length == null){
        alert('Emaili boş göndərə bilməzsiniz')
    }
    
    else if(pw.length <= 6 ){
        alert('Passwordun uzunluğu minumum 6')
    }    
     else if(username.length == '' || username.length == null){
        alert('Username boş göndərə bilməzsiniz')
    }
    else if(username.substring(0,1) >= 'A' && username.substring(0,1) <= 'Z'){
        alert('Uçuş tarixiniz. 20.07.2022 saat 21:00 \n Xoş uçuşlar')
    }
    else if (username.substring(0,1) >= 'a' && username.substring(0,1) <= 'z'){
        alert('Ilk hərf böyük olmalıdır!')
    }
})







 