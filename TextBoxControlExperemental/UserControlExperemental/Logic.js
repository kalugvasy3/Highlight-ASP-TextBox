
//function name must be build dynamicaly
function txtUp(self) {

    var strtxt = self.value;

    var div = self.parentElement.childNodes[1]; // It will be "divCloneTxt" - jQuary find just the last userControl, not current. 
    div.innerHTML = "";

    var origin = strtxt.split("");
    var conv = "";
    var ch = "";
    var strdiv = ""

    for (i = 0; i < origin.length; i++) {
        ch = origin[i];
        conv = escape(ch);

        if (conv.length > 1 && ch != " ") {
            strdiv += '<span class="yellowbackground">' + ch + '</span>'
        } else {
            if (ch != " ") {
                strdiv += ch;
            } else {
                strdiv += "&nbsp;";
            }
        }

        div.innerHTML = strdiv.replace(/(\r\n|\n|\r)/gm, "<br>");
        txtOnScroll(self)
        //window.scrollY  $(selector).scrollLeft()
    }
    return false;
};

//function name must be build dynamicaly
function txtOnScroll(self) {
    var div = self.parentElement.childNodes[1];
    div.scrollTop = self.scrollTop;
    return false;
}
