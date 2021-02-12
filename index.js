

LS_STRING_HOME = `<span class="directory-text">About me</span> <br><span class="directory-text">Projects</span>`

LS_STRING_PROJECTS = `<span class="directory-text">project 1</span> <br><span class="directory-text">project 2</span>`

CURRENT_DIRECTORY = 'home'

document.addEventListener("click", e => {
    document.getElementById('maininput').focus()
})

function inputpress(e) {
    if (e.keyCode == 13) {
        text = document.getElementById('maininput').value
        document.getElementById('maininput').value = ""

        EMPTY_LINE = `<div class="">
        <span class="username-text">Client@alisherrusinov-site</span> <span class="directory-text">:~</span><span class="regular-text">$</span>
        <input type="text" class="text-input" id='previous' value="${text}">
        </div>`
        document.getElementById('mainblock').insertAdjacentHTML("beforeBegin", EMPTY_LINE);

        if (text == 'ls') {
            if (CURRENT_DIRECTORY == 'home') {
                document.getElementById('mainblock').insertAdjacentHTML("beforeBegin", LS_STRING_HOME);
            }
            else if (CURRENT_DIRECTORY = 'projects') {
                document.getElementById('mainblock').insertAdjacentHTML("beforeBegin", LS_STRING_PROJECTS);
            }
        }
        else if (text == 'cd Projects') {
            CURRENT_DIRECTORY = 'projects'
        }
        else if (text == 'cd Home') {
            CURRENT_DIRECTORY = 'home'
        }
    }
}