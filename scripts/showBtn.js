function showBtn(){
    const callBackButton = document.getElementById('btn_callback')

    window.addEventListener("scroll", ()=>{
        if(window.scrollY > 568 && window.scrollY < 4000){
            callBackButton.classList.add('btn_callback--active')
        }else{
            callBackButton.classList.remove('btn_callback--active')
        }

    })

}
showBtn()