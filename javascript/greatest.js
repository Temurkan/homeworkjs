const btn = document.querySelector('.btn')
const out = document.querySelector('.answer')
const input1 = document.querySelector('#input1')
const input2 = document.querySelector('#input2')
const input3 = document.querySelector('#input3')

function greatest() {
    const x = +input1.value
    const y = +input2.value
    const z = +input3.value
    if(x > y && x > z) {
        out.innerText = x
    }else if(y > x && y > z) {
        out.innerText = y
    }else if(z > x && z > y) {
        out.innerText = z
    }else if(x == y && x > z) {
        out.innerText = 'First = second > third'
    }else if(x == z && x > y) {
        out.innerText = 'First = third > second'
    }else if(y == z && y > x) {
        out.innerText = 'Second = third > first'
    }else if(x == y && x == z) {
        out.innerText = 'They`re all equal '
    }
    input1.value = ''
    input2.value = ''
    input3.value = ''
}

function reload() {
    document.location.reload
}
btn.onclick = greatest
restart.onclick = reload