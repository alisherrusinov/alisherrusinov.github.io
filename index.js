

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

ABOUT_FILE = `<span class="regular-text">Тут будет инфа обо мне</span>`

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
add_ls_home();
function add_ls() {
    if (CURRENT_DIRECTORY == '~') {
        EMPTY_LINE = `<div class="">
        <span class="username-text">Client@alisherrusinov-site</span> <span class="directory-text"> ${CURRENT_DIRECTORY}</span><span class="regular-text">$</span>
        <input type="text" class="text-input" id='previous' readonly value='ls'>
        </div>`
        document.getElementById('mainblock').insertAdjacentHTML("beforeBegin", EMPTY_LINE);
        document.getElementById('mainblock').insertAdjacentHTML("beforeBegin", LS_STRING_HOME);
        window.scroll(0, document.getElementById('mainblock').getBoundingClientRect().bottom)
    }
    else if (CURRENT_DIRECTORY == '~/projects') {
        EMPTY_LINE = `<div class="">
        <span class="username-text">Client@alisherrusinov-site</span> <span class="directory-text"> ${CURRENT_DIRECTORY}</span><span class="regular-text">$</span>
        <input type="text" class="text-input" id='previous' readonly value='ls'>
        </div>`
        document.getElementById('mainblock').insertAdjacentHTML("beforeBegin", EMPTY_LINE);
        document.getElementById('mainblock').insertAdjacentHTML("beforeBegin", LS_STRING_PROJECTS);
        window.scroll(0, document.getElementById('mainblock').getBoundingClientRect().bottom)
    }
    else if (CURRENT_DIRECTORY == '~/about_me') {
        EMPTY_LINE = `<div class="">
        <span class="username-text">Client@alisherrusinov-site</span> <span class="directory-text"> ${CURRENT_DIRECTORY}</span><span class="regular-text">$</span>
        <input type="text" class="text-input" id='previous' readonly value='ls'>
        </div>`
        document.getElementById('mainblock').insertAdjacentHTML("beforeBegin", EMPTY_LINE);
        document.getElementById('mainblock').insertAdjacentHTML("beforeBegin", LS_STRING_ABOUT);
        window.scroll(0, document.getElementById('mainblock').getBoundingClientRect().bottom)
    }
    else if (CURRENT_DIRECTORY == '~/projects/AlexaSuck') {
        EMPTY_LINE = `<div class="">
        <span class="username-text">Client@alisherrusinov-site</span> <span class="directory-text"> ${CURRENT_DIRECTORY}</span><span class="regular-text">$</span>
        <input type="text" class="text-input" id='previous' readonly value='ls'>
        </div>`
        document.getElementById('mainblock').insertAdjacentHTML("beforeBegin", EMPTY_LINE);
        document.getElementById('mainblock').insertAdjacentHTML("beforeBegin", LS_STRING_ALEXA);
        window.scroll(0, document.getElementById('mainblock').getBoundingClientRect().bottom)
    }
    else if (CURRENT_DIRECTORY == '~/projects/ParserKolesa') {
        EMPTY_LINE = `<div class="">
        <span class="username-text">Client@alisherrusinov-site</span> <span class="directory-text"> ${CURRENT_DIRECTORY}</span><span class="regular-text">$</span>
        <input type="text" class="text-input" id='previous' readonly value='ls'>
        </div>`
        document.getElementById('mainblock').insertAdjacentHTML("beforeBegin", EMPTY_LINE);
        document.getElementById('mainblock').insertAdjacentHTML("beforeBegin", LS_STRING_KOLESA);
        window.scroll(0, document.getElementById('mainblock').getBoundingClientRect().bottom)
    }
    else if (CURRENT_DIRECTORY == '~/projects/SofiaPavlova') {
        EMPTY_LINE = `<div class="">
        <span class="username-text">Client@alisherrusinov-site</span> <span class="directory-text"> ${CURRENT_DIRECTORY}</span><span class="regular-text">$</span>
        <input type="text" class="text-input" id='previous' readonly value='ls'>
        </div>`
        document.getElementById('mainblock').insertAdjacentHTML("beforeBegin", EMPTY_LINE);
        document.getElementById('mainblock').insertAdjacentHTML("beforeBegin", LS_STRING_SOFIAPAVLOVA);
        window.scroll(0, document.getElementById('mainblock').getBoundingClientRect().bottom)
    }
}

function inputpress(e) {
    if (e.keyCode == 13) {
        text = document.getElementById('maininput').value
        document.getElementById('maininput').value = ""

        EMPTY_LINE = `<div class="">
        <span class="username-text">Client@alisherrusinov-site</span> <span class="directory-text"> ${CURRENT_DIRECTORY}</span><span class="regular-text">$</span>
        <input type="text" class="text-input" id='previous' readonly value="${text}">
        </div>`
        document.getElementById('mainblock').insertAdjacentHTML("beforeBegin", EMPTY_LINE);
        window.scroll(0, document.getElementById('mainblock').getBoundingClientRect().bottom)

        if (text == 'ls') {
            if (CURRENT_DIRECTORY == '~') {
                document.getElementById('mainblock').insertAdjacentHTML("beforeBegin", LS_STRING_HOME);
                window.scroll(0, document.getElementById('mainblock').getBoundingClientRect().bottom)
            }
            else if (CURRENT_DIRECTORY == '~/projects') {
                document.getElementById('mainblock').insertAdjacentHTML("beforeBegin", LS_STRING_PROJECTS);
                window.scroll(0, document.getElementById('mainblock').getBoundingClientRect().bottom)
            }
            else if (CURRENT_DIRECTORY == '~/about_me') {
                document.getElementById('mainblock').insertAdjacentHTML("beforeBegin", LS_STRING_ABOUT);
                window.scroll(0, document.getElementById('mainblock').getBoundingClientRect().bottom)
            }
        }
    }
}

function about_file() {
    EMPTY_LINE = `<div class="">
        <span class="username-text">Client@alisherrusinov-site</span> <span class="directory-text"> ${CURRENT_DIRECTORY}</span><span class="regular-text">$</span>
        <input type="text" class="text-input" id='previous' readonly value="cat about.txt">
        </div>`
    document.getElementById('mainblock').insertAdjacentHTML("beforeBegin", EMPTY_LINE);
    window.scroll(0, document.getElementById('mainblock').getBoundingClientRect().bottom)
    document.getElementById('mainblock').insertAdjacentHTML("beforeBegin", ABOUT_FILE);
    window.scroll(0, document.getElementById('mainblock').getBoundingClientRect().bottom)
}

function cd_click(text) {
    console.log(text)
    EMPTY_LINE = `<div class="">
        <span class="username-text">Client@alisherrusinov-site</span> <span class="directory-text"> ${CURRENT_DIRECTORY}</span><span class="regular-text">$</span>
        <input type="text" class="text-input" id='previous' readonly value="${text}">
        </div>`
    document.getElementById('mainblock').insertAdjacentHTML("beforeBegin", EMPTY_LINE);
    window.scroll(0, document.getElementById('mainblock').getBoundingClientRect().bottom)

    //MAIN MENU
    if (text == 'cd Projects') {
        CURRENT_DIRECTORY = '~/projects'
        document.getElementById('current-directory').innerHTML = CURRENT_DIRECTORY
        window.scroll(0, document.getElementById('mainblock').getBoundingClientRect().bottom)
        add_ls()
    }
    else if (text == 'cd Home') {
        CURRENT_DIRECTORY = '~'
        document.getElementById('current-directory').innerHTML = CURRENT_DIRECTORY
        window.scroll(0, document.getElementById('mainblock').getBoundingClientRect().bottom)
        add_ls()
    }
    else if (text == 'cd About me') {
        CURRENT_DIRECTORY = '~/about_me'
        document.getElementById('current-directory').innerHTML = CURRENT_DIRECTORY
        window.scroll(0, document.getElementById('mainblock').getBoundingClientRect().bottom)
        add_ls()
    }
    //MAIN MENU


    //ABOUT
    else if (text == 'cat about.txt') {
        if (CURRENT_DIRECTORY == '~/about_me') {
            document.getElementById('mainblock').insertAdjacentHTML("beforeBegin", ABOUT_FILE);
            window.scroll(0, document.getElementById('mainblock').getBoundingClientRect().bottom)
        }
    }
    //ABOUT

    //PROJECTS
    else if (text == 'cd AlexaSuck') {
        CURRENT_DIRECTORY = '~/projects/AlexaSuck'
        document.getElementById('current-directory').innerHTML = CURRENT_DIRECTORY
        window.scroll(0, document.getElementById('mainblock').getBoundingClientRect().bottom)
        add_ls()
    }
    else if (text == 'cd ParserKolesa') {
        CURRENT_DIRECTORY = '~/projects/ParserKolesa'
        document.getElementById('current-directory').innerHTML = CURRENT_DIRECTORY
        window.scroll(0, document.getElementById('mainblock').getBoundingClientRect().bottom)
        add_ls()
    }
    else if (text == 'cd SofiaPavlova') {
        CURRENT_DIRECTORY = '~/projects/SofiaPavlova'
        document.getElementById('current-directory').innerHTML = CURRENT_DIRECTORY
        window.scroll(0, document.getElementById('mainblock').getBoundingClientRect().bottom)
        add_ls()
    }
}