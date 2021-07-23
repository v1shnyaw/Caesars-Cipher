function rot13(str) {
    var code;
    var newstr = "";
    var length = str.length;
    for (var i = 0; i < length; i++) {
        code = str.charCodeAt(i);
        if (code >= 65 && code <= 90) {
            if (code + 12 >= 90) {
                code = code + 12;
                code = code - 90;
                code = 65 + code;
                newstr += String.fromCharCode(code);
            } else {
                code = code + 13;
                newstr += String.fromCharCode(code);
            }
        } else {
            newstr += str[i];
        }
    }
    console.log(newstr);
    return str;
}