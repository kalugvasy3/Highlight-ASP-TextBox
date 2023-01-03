
function txtUp(self) {

    var strtxt = self.value;

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize
    strtxt = strtxt.normalize('NFC');

    var div = self.parentElement.childNodes[1]; // It will be "divCloneTxt" - jQuary find just the last userControl, not current. 
    div.innerHTML = "";

    var origin = strtxt.split("");
    var conv = "";
    var ch = "";
    var strdiv = "";
    var error = false;
    const pattern = /(\r\n|\n|\r|\n\r)/gm;


    for (i = 0; i < origin.length; i++) {
        ch = origin[i];
        if (ch == "!") {
            strdiv += '<span class="yellowbackground">' + ch + '</span>';
            error = true;
        } else {
            if (ch != " ") {
                if (pattern.test(ch)) {
                    strdiv += "<br>";
                }
                else {
                    strdiv += ch;
                }
            } else {
                strdiv += "&nbsp;";
            }
        }
    }
    strdiv = strdiv.replace(/(\r\n|\n|\r|\n\r)/gm, "<br>");

    div.innerHTML = strdiv + "&nbsp;";
    txtOnScroll(self);

    return error;
}

function txtOnScroll(self) {
    var div = self.parentElement.childNodes[1];// name must be build dynamicaly
    div.scrollTop = self.scrollTop;
    div.scrollLeft = self.scrollLeft;
    return true;
}

function txtOnBlure(self) {

    if (txtUp(self)) {
        setInterval(alert(' Please fix an error(s)! \n All highlighted charts must be replaced/deleted!'), 1000);
        setInterval(self.focus(), 1000);
    }
    return true;
}

function txtPaste(self) {
    var div = self.parentElement.childNodes[1];

    setTimeout(function () {
        div.style.fontFamily = self.style.fontFamily;
        div.style.fontSize = self.style.fontSize;
        txtOnBlure(self);
    }, 0);
    return true;
}


