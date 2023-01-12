
function txtUp(self) {


    //var strtxt = self.value.replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;');;
    var strtxt = self.value.replace(/\t/g, '    '); // all TAB replace with 4 spaces.

    if (self.clientHeight <= 20) { strtxt.replace(/(\r\n|\n|\r|\n\r)/gm, " ") };


    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize
    strtxt = strtxt.normalize('NFKC');

    var div = self.parentElement.childNodes[1]; // It will be "divCloneTxt" - jQuary find just the last userControl, not current. 
    div.innerHTML = "";

    var origin = strtxt.split("");
    var conv = "";
    var ch = "";
    var strdiv = "";
    var error = false;

    for (i = 0; i < origin.length; i++) {

        ch = origin[i];

        if (ch == ">" || ch == "<" || ch == "&" || ch == "/") // control characters
        {
            ch = " "
        }

        if (ch == "!") //wrong characters
        {
            strdiv += '<span class="yellowbackground">' + ch + '</span>';
            error = true;
        }
        else
        {
            if (ch != " ") {
                strdiv += ch;
            } else {
                strdiv += "&nbsp;";
            }
        }
    }

    strdiv = strdiv.replace(/(\r\n|\n|\r|\n\r)/gm, "<br>"); // replace all new line chars
    div.innerHTML = strdiv + "&nbsp;";

   /* txtOnScroll(self);*/
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
    txtOnScroll(self); 
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


