let mail = document.getElementById('mail');
let country = document.getElementById('country');
let zipCode = document.getElementById('zip-code');
Number(zipCode)
let password = document.getElementById('password')
let passwordConfirmation = document.getElementById('password-confirmation')
let form = document.getElementById('form');
let submitButton = document.getElementById('submit-button')
let errorSpace = document.querySelector('.error')

form.addEventListener('submit', function(e){
    let messages = [];
    if(mail.value === '' || mail.value == null){
        mail.style.border = 'solid 2px red'
        messages.push('Mail is required')
    }
    if(country.value === ''|| country.value == null){
        country.style.border = 'solid 2px red'
        messages.push('Country is required')
    }
    if(zipCode.value === '' || zipCode.value == null){
        zipCode.style.border = 'solid 2px red'
        messages.push('Zip code is required')
    }

    if(password.value === '' || password.value == null){
        password.style.border = 'solid 2px red'
        messages.push('Password is required')
    }
    if(passwordConfirmation.value != password.value){
        passwordConfirmation.style.border = 'solid 2px red'
        messages.push('This password is not the same')
    }

    if(messages.length > 0){
        errorSpace.innerText = messages.join(' | ')
        e.preventDefault()
    }else if(messages.length === 0){
        alert('High-Five')
    }
})