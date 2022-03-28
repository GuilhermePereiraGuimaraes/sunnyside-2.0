var nav= document.getElementById('nav-op')
var hamb= document.getElementById('menu-cell')
var checar= false
function menu() {
    if (checar==false) {
        checar=true
        nav.style.display='block'
    } else {
        checar=false
        nav.style.display='none'
    }
}