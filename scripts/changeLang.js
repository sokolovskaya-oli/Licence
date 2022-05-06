const select = document.querySelector('select');
const allLang = ['ru', 'en'];

select.addEventListener('change', changeURlLanguage)

function changeURlLanguage(){
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLanguage(){
    let hash = window.location.hash;
    hash = hash.substring(1);
    if (!allLang.includes(hash)){
        location.href =window.location.pathname + '#ru';
        location.reload();
    }
    select.value = hash;
    document.querySelector('.input-name').placeholder=langArr['name'][hash];
    document.querySelector('.input-phone').placeholder=langArr['phone'][hash];
    document.querySelector('.input-email').placeholder=langArr['email'][hash];
    document.querySelector('.input-text').placeholder=langArr['textarea'][hash];
    for (let key in langArr){
        let element = document.querySelector('.lng-' + key)
        if(element){
            if (typeof langArr[key][hash]!== 'undefined') {
                element.innerHTML = langArr[key][hash];
              }
            
        }
    }
}
changeLanguage()