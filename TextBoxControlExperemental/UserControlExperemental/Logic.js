
//function name must be build dynamicaly
function txtUp(self) {

    var strtxt = self.value;

    var div = self.parentElement.childNodes[1]; // It will be "divCloneTxt" - jQuary find just the last userControl, not current. 
    div.innerHTML = "";

    var origin = strtxt.split("");
    var conv = "";
    var ch = "";
    var strdiv = ""
    const pattern = /(\r\n|\n|\r|\n\r)/gm;


    for (i = 0; i < origin.length; i++) {
        ch = origin[i];
        conv = escape(ch);

        if (ch == "!") {
            strdiv += '<span class="yellowbackground">' + ch + '</span>'
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

        strdiv = strdiv.replace(/(\r\n|\n|\r|\n\r)/gm, "<br>");
        // strdiv = strdiv.substr(strdiv.length - 4);

        div.innerHTML = strdiv;
        txtOnScroll(self)
        //window.scrollY  $(selector).scrollLeft()
    }
    return false;
};

//function name must be build dynamicaly
function txtOnScroll(self) {
    var div = self.parentElement.childNodes[1];
    div.scrollTop = self.scrollTop - 12;
    return true;
}
