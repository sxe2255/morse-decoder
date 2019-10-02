const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let answer = "";
    let strSort = expr.match(/.{1,10}/g);
    let z ="";
    strSort.forEach((x)=>{
        if(x === "**********"){
            z = z + " ";
        }
        let s = x.match(/.{1,2}/g);
        s.forEach((x)=> {
            if (x === "10"){
                z = z+ ".";
            }
            else if(x === "11"){
                z = z + "-";
        }

        })
        if(z === " "){
            answer = answer + " ";
        } else {answer = answer + MORSE_TABLE[z]};
    z="";    
    })
    return answer;
}

module.exports = {
    decode
}