let input = "[{}{}({()}){{{}}}]";
let opens = "[{("
let closes = "]})"
let brk = 0;
let sqr_br = 0;
let crl_br = 0; 


function valid_braces(input) {

    for (let i = 0; i < input.length; i++) {
        if (input[i] === opens[1]) {
            sqr_br -= 1
        }
        if (input[i] === closes[1]) {
            sqr_br += 1
        }
        if (input[i] === opens[2]) {
            crl_br -= 1
        }
        if (input[i] === closes[2]) {
            crl_br += 1
        }
        if (input[i] === opens[3]) {
            brk -= 1
        }
        if (input[i] === closes[3]) {
            brk += 1
        }
    }
    console.log(sqr_br,crl_br,brk)
    if (sqr_br === 0 && crl_br === 0 && brk === 0) {
        return true
    } else {
        return false
    }
    
}

console.log(valid_braces(input))

