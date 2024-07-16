const inpName = document.querySelector('.inpName')
const nickName = document.querySelector('.name')
const inpSurName= document.querySelector('.inpSurName')
const surName = document.querySelector('.surName')
const inpEmail = document.querySelector('.inpEmail')
const email = document.querySelector('.email')
const inpPass = document.querySelector('.inpPass')
const pass = document.querySelector('.pass')
const inpNum = document.querySelector('.inpNum')
const number = document.querySelector('.number')
const btn = document.querySelector('.btn')
const text = document.querySelector('.text')

btn.onclick = () => {
    let patternName = /^[A-Z][a-z]+$/
    let patternEmail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
    let patternPass = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
    let patternNum = /^\d+$/
    let change = 0

    if(!inpName.value.match(patternName)) {
        nickName.textContent = 'Please enter a valid name'
        inpName.style.border = '1px solid red'
        inpName.style.outline = '1px solid red'
        nickName.style.color = 'red'
        change--
        
    }else {
        inpName.style.border = '1px solid grey'
        inpName.style.outline = 'none'
        nickName.textContent = ''
    }

    if(!inpSurName.value.match(patternName) || inpSurName.value.length < 6) {
        surName.textContent = 'Please enter a valid surname'
        inpSurName.style.border = '1px solid red'
        inpSurName.style.outline = '1px solid red'
        surName.style.color = 'red'
        change--
        
    }else {
        inpSurName.style.border = '1px solid grey'
        inpSurName.style.outline = 'none'
        surName.textContent = ''

    }

    if(!inpEmail.value.match(patternEmail)) {
        email.textContent = 'Please enter a valid email'
        inpEmail.style.border = '1px solid red'
        inpEmail.style.outline = '1px solid red'
        email.style.color = 'red'
        change--
        
    }else {
        inpEmail.style.border = '1px solid grey'
        inpEmail.style.outline = 'none'
        email.textContent = ''
        

    }
        
    if(!inpPass.value.match(patternPass) || inpPass.value.length < 8) {
        pass.textContent = 'Password is not in a correct form'
        inpPass.style.border = '1px solid red'
        inpPass.style.outline = '1px solid red'
        pass.style.color = 'red'
        change--
        
    }else {
        inpPass.style.border = '1px solid grey'
        inpPass.style.outline = 'none'
        pass.textContent = ''

    }
    
    if(!inpNum.value.match(patternNum) || +inpNum.value === 0 || +inpNum.value > 100) {
        number.textContent = 'Age must be a positive number between 1-100'
        inpNum.style.border = '1px solid red'
        inpNum.style.outline = '1px solid red'
        number.style.color = 'red'
        change-- 
        
    }else {
        inpNum.style.border = '1px solid grey'
        inpNum.style.outline = 'none'
        number.textContent = ''

    }

    if(change === 0) {
         text.textContent = 'Thank You'
        setTimeout(() => {
            text.textContent = ''
        }, 2000) 
    }
}

