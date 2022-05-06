function validationForm(){
    const errorLabel = document.querySelector('.form-error')
    const successLabel = document.querySelector('.form-success')
    const formButton = document.getElementById('form-button');
    const form = document.querySelector('form');
    const inputArr = Array.from(form)
    const inputValidArr = []
    
    inputArr.forEach(item =>{
        if(item.hasAttribute('data-reg')){
            item.setAttribute('is-valid', 0)
            inputValidArr.push(item)
        }   
    })

    form.addEventListener('input', inputHandler)

    function inputHandler({target}){
        if (target.hasAttribute('data-reg')){
            inputCheck(target)
        }
    }

    function inputCheck(target){
        const inputValue = target.value
        const inputReg = target.getAttribute('data-reg')
        const reg = new RegExp(inputReg)
        if(reg.test(inputValue)){
            target.style.border="1px solid green"
            target.setAttribute('is-valid', 1)
        }else{
            target.style.border="1px solid red"
            target.setAttribute('is-valid', 0)
        }
    }

    formButton.addEventListener('click',(event)=>{
        buttonHandler(event)  
    })

    function buttonHandler(event){
        const isAllValid = []
        inputValidArr.forEach(input=>{
            isAllValid.push(input.getAttribute('is-valid'))
        })
        const isValid = isAllValid.reduce((acc, current)=>{
            return acc && current;
        })
        console.log(isValid)
        console.log(!Boolean(Number(isValid)))
        if(!Boolean(Number(isValid))){
            event.preventDefault()
            //alert('заполните форму правильно')
            errorLabel.classList.add('form-error--active')
            return
        }
        errorLabel.classList.remove('form-error--active')
        formSubmit()
    }

//Отправкка формы
    async function formSubmit(){
        const data = serializeForm(form);
        const response = await sendData(data);
        //alert('отправка')
        
        if (response.ok){
            let result = await response.json();
            //alert(result.message);
            successLabel.classList.add("form-success--active")
            formReset();
        } else {
           alert("Error:" +  response.status);
        }
    }

    function serializeForm(formNode){
        return new FormData(form)
    }

    async function sendData(data){
        return await fetch("send_mail.php", {
            method: "POST",
            body: data,
        })
    }

    function formReset(){
        form.reset();
    }

}
validationForm()