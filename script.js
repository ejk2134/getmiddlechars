//return middle character(s) in a string

function returnMiddleChars(word){
    if (word.length % 2 === 0){ // if word has even number of characters
        // return two middle characters
        return word.slice((word.length / 2) - 1, (word.length / 2) + 1);
    }else{
        // else return middle character
        return word.charAt(word.length / 2);
    }
}