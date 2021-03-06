/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
    const socks = [];
    for (let sock of ar){
        socks[sock] ? socks[sock] += 1 : socks[sock] = 1; 
    }
    let pairs = 0;
    for (let number of Object.values(socks)){
        pairs += Math.floor(number / 2);
    }
    return pairs;
}

/*
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

function caesarCipher(s,  k) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    alphabet = alphabet.split("");
    let result = "";
    for(let char of s){
        char = char.toLowerCase();
        if(alphabet.indexOf(char) > -1){
            let position = alphabet.indexOf(char) + k;
            if(position > 25){
                position = position % 25;
            }
            result += alphabet[position];
        }else{
           result += char; 
        }
    }
    return result;
}


/*
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

function caesarCipher(s,  k) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    alphabet = alphabet.split("");
    let result = "";
    
    for(let char of s){
        let letter = char.toLowerCase();
        //If lowercase letter is not found in alphabet
        if(alphabet.indexOf(letter) === -1){
            //add character back to result
            result += char; 
        }else{
            //find new letter at new location
            let position = alphabet.indexOf(letter) + k;
            if(position > 25){
                position = position % 25 - 1 ;
            }
            //If original was capitalized, add capitalized version to result
            if(char === char.toUpperCase()){
                result += alphabet[position].toUpperCase();
            }else{
                result += alphabet[position];
            }
            
        }
    }
    
    return result;
}

