const input = document.querySelector('input')
const btn = document.querySelector('.btn')
const out = document.querySelector('.answer')
const img1 = document.querySelector('#ageImg1')
const img2 = document.querySelector('#ageImg2')
const img3 = document.querySelector('#ageImg3')
const img4 = document.querySelector('#ageImg4')
const img5 = document.querySelector('#ageImg5')

function age() {
    const answer = +input.value

    if(isNaN(answer)){
            out.innerText = 'Enter only numbers'
            out.style.color = 'red'
    }else if(answer == '') {
        out.innerText = 'Enter numbers'
    }else if(answer < 0){
        out.innerText = 'Enter your age'
    }else if(answer < 8 || answer == 0){
        out.innerText = 'You still grow and grow'
        out.style.color = 'green'
        img1.style.opacity = '100'
        img2.style.opacity = '0'
        img3.style.opacity = '0'
        img4.style.opacity = '0'
        img5.style.opacity = '0'
    }else if(answer < 19){
        out.innerText = 'You still have to study and learn'
        out.style.color = 'dodgerblue'
        img1.style.opacity = '0'
        img2.style.opacity = '100'
        img3.style.opacity = '0'
        img4.style.opacity = '0'
        img5.style.opacity = '0'
    }else if(answer < 61){
        out.innerText = 'You still have to work and work'
        out.style.color = 'gold'
        img1.style.opacity = '0'
        img2.style.opacity = '0'
        img3.style.opacity = '100'
        img4.style.opacity = '0'
        img5.style.opacity = '0'
    }else if(answer < 122){
        out.innerText = 'It`s time for you to retire'
        out.style.color = 'lightsalmon'
        img1.style.opacity = '0'
        img2.style.opacity = '0'
        img3.style.opacity = '0'
        img4.style.opacity = '100'
        img5.style.opacity = '0'
    }else if(answer > 122){
        out.innerText = '0_0'
        out.style.color = 'lightslategrey'
        img1.style.opacity = '0'
        img2.style.opacity = '0'
        img3.style.opacity = '0'
        img4.style.opacity = '0'
        img5.style.opacity = '100'
    }
    input.value = ''
}

btn.onclick = age