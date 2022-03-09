//Animation écriture

const txtAnim = document.querySelector('.text-animation')

let typewriter = new Typewriter(txtAnim, {
    loop: false,
    delay: 40
})

typewriter
.typeString('<span style="color:#154d89;">S</span>')
.typeString('<span style="color:#a80d7c;">a</span>')
.typeString('<span style="color:#e2b11d;">l</span>')
.typeString('<span style="color:#8fc4a3;">u</span>')
.typeString('<span style="color:#ea2588;">t,</span><br>')
.typeString('<span style="color:#e05066;">c\'</span>')
.typeString('<span style="color:#717bc6;">e</span>')
.typeString('<span style="color:#e2b11d;">s</span>')
.typeString('<span style="color:#ea2588;">t </span>')
.typeString('<span style="color:#055e6d;">Imane </span>')
.typeString('<span style="color:#1b434d;">El ouazzani,</span><br>')
.typeString('<span style="color:#e05066;">d</span>')
.typeString('<span style="color:#f0b733;">é</span>')
.typeString('<span style="color:#ea2588;">v</span>')
.typeString('<span style="color:#01875c;">e</span>')
.typeString('<span style="color:#a80d7c;">l</span>')
.typeString('<span style="color:#577d9b;">o</span>')
.typeString('<span style="color:#e2b11d;">pp</span>')
.typeString('<span style="color:#05a58f;">e</span>')
.typeString('<span style="color:#844da5;">u</span>')
.typeString('<span style="color:#b37c07;">s</span>')
.typeString('<span style="color:#055e6d;">e </span>')
.typeString('<span style="color:#154d89;">w</span>')
.typeString('<span style="color:#f520ae;">e</span>')
.typeString('<span style="color:#8fc4a3;">b </span>')
.typeString('<span style="color:#d004eb;">f</span>')
.typeString('<span style="color:#717bc6;">r</span>')
.typeString('<span style="color:#ddbe0d;">o</span>')
.typeString('<span style="color:#ea2588;">n</span>')
.typeString('<span style="color:#8fc4a3;">t-</span>')
.typeString('<span style="color:#154d89;">e</span>')
.typeString('<span style="color:#d783da;">n</span>')
.typeString('<span style="color:#f520ae;">d </span>')
//.typeString('👩‍💻')
.start()

// Animation btn menu
const btnMenu = document.querySelector('.btn-rond-menu')
const nav = document.querySelector('.nav-gauche')
const allItemNav = document.querySelectorAll('.nav-menu-item')
const ligne = document.querySelector('.cont-ligne')

btnMenu.addEventListener('click', () => {
    ligne.classList.toggle('active')
    nav.classList.toggle('menu-visible')
})

