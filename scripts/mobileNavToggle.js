function mobileNavToggle(){
    const navToggle = document.querySelector('.nav-burger-btn')
    const navMenu=document.querySelector('.nav_menu')
    const navMobile = document.querySelector('.nav_items')
    const logo = document.querySelector('.logo')

    const navLink = document.querySelectorAll('.nav_item_link')
    
    navLink.forEach(element => {
        element.addEventListener('click', ()=>{
            navToggle.classList.toggle('nav-burger-btn--active')
            navMenu.classList.toggle('nav_menu--active')
            navMobile.classList.toggle('nav_items--active')
            logo.classList.toggle('logo--active');
        })
    })
    
    navToggle.addEventListener('click', ()=>{
        navToggle.classList.toggle('nav-burger-btn--active');
        navMenu.classList.toggle('nav_menu--active');
        navMobile.classList.toggle('nav_items--active');
        logo.classList.toggle('logo--active');
    })
}
mobileNavToggle()
