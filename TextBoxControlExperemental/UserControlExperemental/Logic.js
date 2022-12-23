
//function name must be build dynamicaly

function escapeSpecialChars(str) {
    return str
        .replace(/t/g, "&Tab;")
        .replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;");
}



function txtUp(self) {

    var strtxt = self.value;

    var div = self.parentElement.childNodes[1]; // It will be "divCloneTxt" - jQuary find just the last userControl, not current. 
    div.innerHTML = "";

    var origin = strtxt.split("");
    var conv = "";
    var ch = "";
    var strdiv = "";
    var error = false;
    const pattern = /(\r\n|\n|\r|\n\r)/gm;


    for (i = 0; i < origin.length; i++) {
        ch = escapeSpecialChars(origin[i]);
        // conv = escape(ch);

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
    // strdiv = strdiv.substr(strdiv.length - 4);

    div.innerHTML = strdiv + "&nbsp;";
    txtOnScroll(self);
    //window.scrollY  $(selector).scrollLeft()

    return error;
}

//function name must be build dynamicaly
function txtOnScroll(self) {
    var div = self.parentElement.childNodes[1];
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
    div.style.fontFamily = "Consolas";
    self.style.fontFamily = "Consolas";

    div.style.fontSize = "medium";
    self.style.fontSize = "medium";

    txtOnBlure(self);
    return true;
}


