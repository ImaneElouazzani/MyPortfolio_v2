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
.typeString('<span style="color:#51a83f;">t,</span><br>')
.typeString('<span style="color:#e05066;">c\'</span>')
.typeString('<span style="color:#717bc6;">e</span>')
.typeString('<span style="color:#2fef5c;">s</span>')
.typeString('<span style="color:#ea2588;">t </span>')
.typeString('<span style="color:#e83df4;">Imane </span>')
.typeString('<span style="color:#c338ea;">El ouazzani,</span><br>')
.typeString('<span style="color:#378937;">d</span>')
.typeString('<span style="color:#e28409;">é</span>')
.typeString('<span style="color:#f73416;">v</span>')
.typeString('<span style="color:#01875c;">e</span>')
.typeString('<span style="color:#c9db08;">l</span>')
.typeString('<span style="color:#0cbde9;">o</span>')
.typeString('<span style="color:#e90c56;">pp</span>')
.typeString('<span style="color:#05a58f;">e</span>')
.typeString('<span style="color:#6a05a5;">u</span>')
.typeString('<span style="color:#b37c07;">s</span>')
.typeString('<span style="color:#ebe704;">e </span>')
.typeString('<span style="color:#f520ae;">w</span>')
.typeString('<span style="color:#f520ae;">e</span>')
.typeString('<span style="color:#f520ae;">b </span>')
.typeString('<span style="color:#d004eb;">f</span>')
.typeString('<span style="color:#5504eb;">r</span>')
.typeString('<span style="color:#ddbe0d;">o</span>')
.typeString('<span style="color:#066e06;">n</span>')
.typeString('<span style="color:#72a105;">t-</span>')
.typeString('<span style="color:#059974;">e</span>')
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

