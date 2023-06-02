function rot13(str) {
    // get the unicode of each character, +13, ???, profit
    // perfect plan !!!!
    var myArray = str.split('');
    console.log(myArray);
    //console.log(str.fromCharCode())
    myArray.forEach(function (input) {
        //console.log(input.fromCharCode())
    });
    return str;
}
rot13("SERR PBQR PNZC");
