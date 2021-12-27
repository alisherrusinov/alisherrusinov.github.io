

LS_STRING_HOME = `<span class="directory-text" onclick="cd_click('cd Home')">Home</span> <br> <span class="directory-text" onclick="cd_click('cd About me')">About me</span> <br><span class="directory-text" onclick="cd_click('cd Projects')">Projects</span>`

LS_STRING_PROJECTS = `
<span class="directory-text" onclick="cd_click('cd AlexaSuck')">Альтернатива Алексы</span> <br>
<span class="directory-text" onclick="cd_click('cd ParserKolesa')">Парсер сайта Колеса</span> <br>
<span class="directory-text" onclick="cd_click('cd SofiaPavlova')">Архив исторических данных</span> <br>

`

LS_STRING_ABOUT = `<span class="file-text" onclick="about_file()">about.txt</span>`

LS_STRING_ALEXA = `
<span class="regular-text">
Название проекта: Альтернатива Алексы <br>
Стоимость проекта: 100000р <br>
Ссылка на итоговый продукт: <a class='directory-text' target="_blank" href="https://www.smart-speaker.co.uk">Ссылка</a> <br>
Описание проекта: Голосовой помощник, работающий прямо в браузере. <br>
Ссылка на страницу заказа: <a class='directory-text' target="_blank" href="https://freelancehunt.com/project/alternativa-aleksyi/810536.html">Ссылка</a> <br>
Стек технологий: Python, Django, SpeechRecognition, Чистый Js, Bootstrap4
</span>
`

LS_STRING_KOLESA = `
<span class="regular-text">
Название проекта: Web monitor на Python <br>
Стоимость проекта: 2500р <br>
Ссылка на итоговый продукт: Ссылки нет, проект с ограниченным доступом <br>
Описание проекта: Парсер сайта объявлений с уведомлением в телеграмм. <br>
Ссылка на страницу заказа: <a class='directory-text' target="_blank" href="https://freelancehunt.com/project/web-monitor-na-python/803993.html">Ссылка</a> <br>
Стек технологий: Python, Aiogram
</span>
`

LS_STRING_SOFIAPAVLOVA = `
<span class="regular-text">
Название проекта: Создание сайта Python (Flask, Celery) <br>
Стоимость проекта: 3000р <br>
Ссылка на исходный код: <a class='directory-text' target="_blank" href="https://github.com/alisherrusinov/sofiapavlova">Ссылка</a> <br>
Описание проекта: Сайт-архив исторических данных. Есть возможность подписаться на рассылку о новых публикациях по Email <br>
Ссылка на страницу заказа: <a class='directory-text' target="_blank" href="https://freelancehunt.com/project/sozdanie-sayta-python-flask-celery/798715.html">Ссылка</a> <br>
Стек технологий: Python, Flask, Celery, Bootstrap, JQuery
</span>
`

CURRENT_DIRECTORY = '~'

ABOUT_FILE = `
<span class="regular-text">
Алишер Русинов <br>
Возраст: 18 лет <br>
Навыки: 
Python3,Django, Flask, Aiogram, PSQL, HTML5 CSS3. <br>
ОС: Ubuntu, Windows <br>
IDE: Pycharm <br>
Telegram: @alisherrusinov <br>
FreelanceHunt: <a href="https://freelancehunt.com/freelancer/alisher200316.html" target="_blank" class="directory-text">Ссылка</a>
</span>
`
CMD_DIRECTORY_REL = {
    "cd Projects": "~/projects",
    "cd Home": "~",
    "cd About me": "~/about_me",
    "cat about.txt": "~/about_me",
    "cd AlexaSuck": "~/projects/AlexaSuck",
    "cd ParserKolesa": "~/projects/ParserKolesa",
    "cd SofiaPavlova": "~/projects/SofiaPavlova"
}

DIRECTORY_STRING_REL = {
    "~/projects": LS_STRING_PROJECTS,
    "~":LS_STRING_HOME,
    "~/about_me":LS_STRING_ABOUT,
    "~/projects/AlexaSuck":LS_STRING_ALEXA,
    "~/projects/ParserKolesa":LS_STRING_KOLESA,
    "~/projects/SofiaPavlova":LS_STRING_SOFIAPAVLOVA
}

document.addEventListener("click", e => {
    document.getElementById('maininput').focus()
})

function add_ls_home() {
    EMPTY_LINE = `<div class="">
        <span class="username-text">Client@alisherrusinov-site</span> <span class="directory-text"> ${CURRENT_DIRECTORY}</span><span class="regular-text">$</span>
        <input type="text" class="text-input" id='previous' readonly>
        </div>`
    document.getElementById('mainblock').insertAdjacentHTML("beforeBegin", EMPTY_LINE);
    document.getElementById('mainblock').insertAdjacentHTML("beforeBegin", LS_STRING_HOME);
    window.scroll(0, document.getElementById('mainblock').getBoundingClientRect().bottom)
}

function generate_empty_line(text){
    EMPTY_LINE = `<div class="">
    <span class="username-text">Client@alisherrusinov-site</span> <span class="directory-text"> ${CURRENT_DIRECTORY}</span><span class="regular-text">$</span>
    <input type="text" class="text-input" id='previous' readonly value='${text}'>
    </div>`
    return EMPTY_LINE
}

add_ls_home();

function add_ls(cmd) {
    EMPTY_LINE = generate_empty_line('ls')
    document.getElementById('mainblock').insertAdjacentHTML("beforeBegin", EMPTY_LINE);
    document.getElementById('mainblock').insertAdjacentHTML("beforeBegin", DIRECTORY_STRING_REL[CURRENT_DIRECTORY])
    window.scroll(0, document.getElementById('mainblock').getBoundingClientRect().bottom)
    // if (CURRENT_DIRECTORY == '~') {
    //     EMPTY_LINE = generate_empty_line('cd Home')
    //     document.getElementById('mainblock').insertAdjacentHTML("beforeBegin", EMPTY_LINE);
    //     document.getElementById('mainblock').insertAdjacentHTML("beforeBegin", LS_STRING_HOME);
    //     window.scroll(0, document.getElementById('mainblock').getBoundingClientRect().bottom)
    // }
    // else if (CURRENT_DIRECTORY == '~/projects') {
    //     EMPTY_LINE = generate_empty_line('cd Projects')
    //     document.getElementById('mainblock').insertAdjacentHTML("beforeBegin", EMPTY_LINE);
    //     document.getElementById('mainblock').insertAdjacentHTML("beforeBegin", LS_STRING_PROJECTS);
    //     window.scroll(0, document.getElementById('mainblock').getBoundingClientRect().bottom)
    // }
    // else if (CURRENT_DIRECTORY == '~/about_me') {
    //     EMPTY_LINE = generate_empty_line('cd About me') 
    //     document.getElementById('mainblock').insertAdjacentHTML("beforeBegin", EMPTY_LINE);
    //     document.getElementById('mainblock').insertAdjacentHTML("beforeBegin", LS_STRING_ABOUT);

    //     EMPTY_LINE = generate_empty_line('cat about.')
    //     document.getElementById('mainblock').insertAdjacentHTML("beforeBegin", EMPTY_LINE);
    //     document.getElementById('mainblock').insertAdjacentHTML("beforeBegin", ABOUT_FILE);
    //     window.scroll(0, document.getElementById('mainblock').getBoundingClientRect().bottom)
    // }
    // else if (CURRENT_DIRECTORY == '~/projects/AlexaSuck') {
    //     EMPTY_LINE = generate_empty_line()
    //     document.getElementById('mainblock').insertAdjacentHTML("beforeBegin", EMPTY_LINE);
    //     document.getElementById('mainblock').insertAdjacentHTML("beforeBegin", LS_STRING_ALEXA);
    //     window.scroll(0, document.getElementById('mainblock').getBoundingClientRect().bottom)
    // }
    // else if (CURRENT_DIRECTORY == '~/projects/ParserKolesa') {
    //     EMPTY_LINE = generate_empty_line()
    //     document.getElementById('mainblock').insertAdjacentHTML("beforeBegin", EMPTY_LINE);
    //     document.getElementById('mainblock').insertAdjacentHTML("beforeBegin", LS_STRING_KOLESA);
    //     window.scroll(0, document.getElementById('mainblock').getBoundingClientRect().bottom)
    // }
    // else if (CURRENT_DIRECTORY == '~/projects/SofiaPavlova') {
    //     EMPTY_LINE = generate_empty_line()
    //     document.getElementById('mainblock').insertAdjacentHTML("beforeBegin", EMPTY_LINE);
    //     document.getElementById('mainblock').insertAdjacentHTML("beforeBegin", LS_STRING_SOFIAPAVLOVA);
    //     window.scroll(0, document.getElementById('mainblock').getBoundingClientRect().bottom)
    // }
}


function about_file() {
    EMPTY_LINE = generate_empty_line()

    document.getElementById('mainblock').insertAdjacentHTML("beforeBegin", EMPTY_LINE);
    window.scroll(0, document.getElementById('mainblock').getBoundingClientRect().bottom)
    document.getElementById('mainblock').insertAdjacentHTML("beforeBegin", ABOUT_FILE);
    window.scroll(0, document.getElementById('mainblock').getBoundingClientRect().bottom)
}

function cd_click(text) {
    console.log(text)
    window.scroll(0, document.getElementById('mainblock').getBoundingClientRect().bottom)
    EMPTY_LINE = generate_empty_line(text)
    document.getElementById('mainblock').insertAdjacentHTML("beforeBegin", EMPTY_LINE);

    CURRENT_DIRECTORY = CMD_DIRECTORY_REL[text]
    document.getElementById('current-directory').innerHTML = CURRENT_DIRECTORY
    window.scroll(0, document.getElementById('mainblock').getBoundingClientRect().bottom)
    add_ls(text)

    // //MAIN MENU
    // if (text == 'cd Projects') {
    //     CURRENT_DIRECTORY = '~/projects'
    //     document.getElementById('current-directory').innerHTML = CURRENT_DIRECTORY
    //     window.scroll(0, document.getElementById('mainblock').getBoundingClientRect().bottom)
    //     add_ls()
    // }
    // else if (text == 'cd Home') {
    //     CURRENT_DIRECTORY = '~'
    //     document.getElementById('current-directory').innerHTML = CURRENT_DIRECTORY
    //     window.scroll(0, document.getElementById('mainblock').getBoundingClientRect().bottom)
    //     add_ls()
    // }
    // else if (text == 'cd About me') {   
    //     CURRENT_DIRECTORY = '~/about_me'
    //     document.getElementById('current-directory').innerHTML = CURRENT_DIRECTORY
    //     window.scroll(0, document.getElementById('mainblock').getBoundingClientRect().bottom)
    //     add_ls()
    // }
    // else if (text == 'cat about.txt') {
    //     if (CURRENT_DIRECTORY == '~/about_me') {
    //         document.getElementById('mainblock').insertAdjacentHTML("beforeBegin", ABOUT_FILE);
    //         window.scroll(0, document.getElementById('mainblock').getBoundingClientRect().bottom)
    //     }
    // }
    // else if (text == 'cd AlexaSuck') {
    //     CURRENT_DIRECTORY = '~/projects/AlexaSuck'
    //     document.getElementById('current-directory').innerHTML = CURRENT_DIRECTORY
    //     window.scroll(0, document.getElementById('mainblock').getBoundingClientRect().bottom)
    //     add_ls()
    // }
    // else if (text == 'cd ParserKolesa') {
    //     CURRENT_DIRECTORY = '~/projects/ParserKolesa'
    //     document.getElementById('current-directory').innerHTML = CURRENT_DIRECTORY
    //     window.scroll(0, document.getElementById('mainblock').getBoundingClientRect().bottom)
    //     add_ls()
    // }
    // else if (text == 'cd SofiaPavlova') {
    //     CURRENT_DIRECTORY = '~/projects/SofiaPavlova'
    //     document.getElementById('current-directory').innerHTML = CURRENT_DIRECTORY
    //     window.scroll(0, document.getElementById('mainblock').getBoundingClientRect().bottom)
    //     add_ls()
    // }
    
    function command_dispatcher(command){

    }
}