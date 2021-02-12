

LS_STRING_HOME = `<span class="directory-text" onclick="cd_click('cd About me')">About me</span> <br><span class="directory-text" onclick="cd_click('cd Projects')">Projects</span>`

LS_STRING_PROJECTS = `<span class="directory-text">project 1</span> <br><span class="directory-text">project 2</span>`

LS_STRING_ABOUT = `<span class="file-text" onclick="about_file()" onmousehover=>about.txt</span>`

CURRENT_DIRECTORY = '~'

ABOUT_FILE = `<span class="regular-text">Тут будет инфа обо мне</span>`

document.addEventListener("click", e => {
    document.getElementById('maininput').focus()
})

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

        else if (text == 'cd Projects') {
            CURRENT_DIRECTORY = '~/projects'
            document.getElementById('current-directory').innerHTML += '/projects'
            window.scroll(0, document.getElementById('mainblock').getBoundingClientRect().bottom)
        }
        else if (text == 'cd Home') {
            CURRENT_DIRECTORY = '~'
            document.getElementById('current-directory').innerHTML = CURRENT_DIRECTORY
            window.scroll(0, document.getElementById('mainblock').getBoundingClientRect().bottom)
        }
        else if (text == 'cd About me') {
            CURRENT_DIRECTORY = '~/about_me'
            document.getElementById('current-directory').innerHTML = CURRENT_DIRECTORY
            window.scroll(0, document.getElementById('mainblock').getBoundingClientRect().bottom)
        }
        else if (text == 'cat about.txt') {
            if (CURRENT_DIRECTORY == '~/about_me') {
                document.getElementById('mainblock').insertAdjacentHTML("beforeBegin", ABOUT_FILE);
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
    if (text == 'cd Projects') {
        CURRENT_DIRECTORY = '~/projects'
        document.getElementById('current-directory').innerHTML += '/projects'
        window.scroll(0, document.getElementById('mainblock').getBoundingClientRect().bottom)
    }
    else if (text == 'cd Home') {
        CURRENT_DIRECTORY = '~'
        document.getElementById('current-directory').innerHTML = CURRENT_DIRECTORY
        window.scroll(0, document.getElementById('mainblock').getBoundingClientRect().bottom)
    }
    else if (text == 'cd About me') {
        CURRENT_DIRECTORY = '~/about_me'
        document.getElementById('current-directory').innerHTML = CURRENT_DIRECTORY
        window.scroll(0, document.getElementById('mainblock').getBoundingClientRect().bottom)
    }
    else if (text == 'cat about.txt') {
        if (CURRENT_DIRECTORY == '~/about_me') {
            document.getElementById('mainblock').insertAdjacentHTML("beforeBegin", ABOUT_FILE);
            window.scroll(0, document.getElementById('mainblock').getBoundingClientRect().bottom)
        }
    }
}