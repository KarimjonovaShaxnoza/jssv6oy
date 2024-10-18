function darkMode() {
    let body = document.querySelector('body')
    body.style.backgroundColor =  'black'

    let links = document.querySelectorAll('.nav-link')
    let logo = document.querySelector('.logo')
    logo.style.color =  'white'

    let headtext = document.querySelector('.headtext')
    headtext.style.color =  'white'

    let headp = document.querySelector('.headp')
    headp.style.color =  'white'

    let one = document.querySelector('.one')
    one.style.background = '#C4B5A5'

    let two = document.querySelector('.two')
    two.style.background = '#FA9021'

    for (const element of links) {
       element.style.color = 'white'
    }
}

function lightMode() {
    console.log('lightModce')
    let body = document.querySelector('body')
    body.style.background =  '#C4B5A5'
    
    let links = document.querySelector('.nav-link')

    let logo = document.querySelector('.logo')
    logo.style.color = 'black'

    let headtext = document.querySelector('.headtext')
    headtext.style.color =  'black'

    let headp = document.querySelector('.headp')
    headp.style.color =  'black'

    let one = document.querySelector('.one')
    one.style.background = '#FA9021'

    let two = document.querySelector('.two')
    two.style.background = 'black'

    for (const element of links) {
    element.style.color = 'black'
     }
}




