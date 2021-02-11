EMPTY_LINE = `<div class="">
<span class="username-text">Client@alisherrusinov-site</span> <span class="directory-text">:~</span><span class="regular-text">$</span>
</div>`

LS_STRING = `<span class="directory-text">project 1</span> <br><span class="directory-text">project 2</span>`

document.addEventListener("click", e => {
    document.getElementById('maininput').focus()
  })

function inputpress(e) {
    if (e.keyCode == 13) {
        text = document.getElementById('maininput').value
        document.getElementById('maininput').value = ""
        document.getElementById('mainblock').insertAdjacentHTML("beforeBegin", EMPTY_LINE);
        if(text == 'ls'){
            document.getElementById('mainblock').insertAdjacentHTML("beforeBegin", LS_STRING);
        }
    }
}