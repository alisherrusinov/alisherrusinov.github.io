EMPTY_LINE = `<div class="">
<span class="username-text">Client@alisherrusinov-site</span> <span class="directory-text">:~</span><span class="regular-text">$</span>
<input type="text" class="text-input" >
</div>`
function inputpress(e) {
    if (e.keyCode == 13) {
        text = document.getElementById('maininput').value
        console.log(text)
        document.getElementById('maininput').value = ""
        document.getElementById('mainblock').insertAdjacentHTML("beforeBegin", EMPTY_LINE);
    }
}