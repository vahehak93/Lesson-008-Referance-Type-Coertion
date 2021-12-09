let input = "{[({})]}{}[]()"; // []{()}(()){{[]}}{]
let opens = "[{("
let closes = "]})"
let brk = 0;
let sqr_br = 0;
let crl_br = 0; 
let error_count = 0;
let count = 0;

function valid_braces(input) {

    for (let i = 0; i < input.length; i++) {
        if (input[i] === opens[0] && input[i+1] !== closes[1] && input[i+1] !== closes[2]) {
            sqr_br -= 1
            count++
        }
        if (input[i] === closes[0] && sqr_br < 0) {
            sqr_br += 1
            count++
        }   
        if (input[i] === opens[1] && input[i+1] !== closes[0] && input[i+1] !== closes[2]) {
            crl_br -= 1
            count++
        }
        if (input[i] === closes[1] && crl_br < 0) {
            crl_br += 1
            count++
            
        }
        if (input[i] === opens[2] && input[i+1] !== closes[0] && input[i+1] !== closes[1]) {
            brk -= 1
            count++
        }
        if (input[i] === closes[2] && brk < 0) {
            brk += 1
            count++
        }
        
    }
    // console.log(input.length)
    // console.log(count)
    // console.log(error_count)
    console.log(sqr_br,crl_br,brk)
    if (sqr_br === 0 && crl_br === 0 && brk === 0 && count === input.length) {
        return true
    } else {
        return false
    }
    
}

console.log(valid_braces(input))

