let Email = document.querySelector('input')

let form = document.querySelector('form')

let par = document.querySelector('#error')

let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

form.addEventListener('submit',(e)=>{
    if(Email.value == "" && !Email.value.match(pattern)){
        e.preventDefault()
        console.log('wrong')
        Email.classList.add('error')
        par.style.display = 'flex'
        
    }
    else{
        console.log("wow")
        Email.classList.remove('error')
        par.style.display = 'none'
        
    }

})