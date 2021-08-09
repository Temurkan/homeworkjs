const input = document.querySelector('input')
const btn = document.querySelector('.btn')
const out = document.querySelector('.answer')

function week() {
    const answer = +input.value

    if(isNaN(answer)){
        out.innerText = 'Enter only numbers'
        out.style.color = 'red'
    }else if(answer == '') {
        out.innerText = 'Enter numbers'
        out.style.color = 'red'
    }else if(answer == 1) {
        out.innerText = 'Понедельник'
        out.style.color = 'turquoise'
    }else if(answer == 2) {
        out.innerText = 'Вторник'
        out.style.color = 'khaki'
    }else if(answer == 3) {
        out.innerText = 'Среда' 
        out.style.color = 'violet'       
    }else if(answer == 4) {
        out.innerText = 'Четверг'        
        out.style.color = 'mediumpurple'
    }else if(answer == 5) {
        out.innerText = 'Пятница' 
        out.style.color = 'white'       
    }else if(answer == 6) {
        out.innerText = 'Суббота'  
        out.style.color = 'springgreen'      
    }else if(answer == 7) {
        out.innerText = 'Воскресенье'  
        out.style.color = 'gold'      
    }else if(answer > 7 || week < 1) {
        out.innerText = 'That day not exist'
        out.style.color = 'red'
    }

    input.value = ''
}

function reload() {
    document.location.reload
}

btn.onclick = week
restart.onclick = reload