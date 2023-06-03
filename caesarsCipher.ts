function rot13(str) : string {
  let decipherStr = '';

  for (let i in str) {
    const codePoint = str.codePointAt(i);
    console.log(codePoint - 65);


    if ( codePoint == 32 ) {
      decipherStr += ' ';
    } else if ( (codePoint - 13 < 65) && ( codePoint - 65 >= 0)) {
      decipherStr += String.fromCharCode( 65 + 13 + ( codePoint - 65 ));
    } else if ( codePoint - 13 >= 65 ) {
      decipherStr += String.fromCharCode(codePoint - 13);
    } else {
      decipherStr += String.fromCharCode(codePoint);
    }
  }

  console.log(decipherStr);

  return decipherStr;
}

rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!");
rot13("SERR YBIR?");
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");