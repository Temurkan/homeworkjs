const input = document.querySelector('input')
const btn = document.querySelector('.btn')
const out = document.querySelector('.answer')
const restart = document.querySelector('.restart')

const randNum = Math.random() *100
const random = Math.floor(randNum) +1

console.log(random)

function game() {
    const answer = +input.value
    const ansRan = answer - random
    const ranAns = random - answer

    if(isNaN(answer)) {
        out.innerText = 'Enter only numbers'
        out.style.color = 'red'
    } else if(answer == '') {
        out.innerText = 'Enter numbers'
        out.style.color = 'red'
    } else if(answer > 100 || answer < 1) {
        out.innerText = 'Enter only numbers from 1 to 100'
        out.style.color = 'red'
    } else if(ansRan > 0 && ansRan < 6 || ranAns > 0 && ranAns < 6) {
        out.innerText = 'Very hot'
        out.style.color = 'red'
    } else if(ansRan > 5 && ansRan < 11 || ranAns > 5 && ranAns < 11) {
        out.innerText = 'Hot'
        out.style.color = 'orangered'
    } else if(ansRan > 10 && ansRan < 21 || ranAns > 10 && ranAns < 21) {
        out.innerText = 'Warm'
        out.style.color = 'orange'
    } else if(ansRan > 20 || ranAns > 20) {
        out.innerText = 'Cold'
        out.style.color = 'LightSkyBlue'
    } else { 
        out.innerText = 'Congratulations you guessed the numeric: ' + random + ' !!!'
        out.style.color ='lime'
        btn.style.display = 'none'
        restart.style.display = 'inline-block'  
        restart.style.color = 'teal'
        restart.style.borderColor = 'teal'
    }

    input.value = ''
}

function reload() {
    document.location.reload()
}

btn.onclick = game
restart.onclick = reload