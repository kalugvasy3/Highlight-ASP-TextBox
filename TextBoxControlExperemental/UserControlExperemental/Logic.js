function replaceSpecialCharsByName(strName) {
    var self = document.getElementById(strName);
    txtUp(self);
}


//function txtKeyUp(self) {
//    //https://javascript.info/selection-range

//    let paste = String.fromCharCode(event.keyCode);;
//    self.setRangeText(paste, self.selectionStart, self.selectionEnd, "end");
//    event.stopPropagation();
//    event.preventDefault();
//    return false;
//}

function txtUp(self) {

    replaceCommandChars(self);
    //replaceSpecialChars(self);

    var strtxt = self.value;

    if (self.clientHeight <= 25) {
        strtxt = strtxt.replaceAll(/(\r\n|\n|\r|\n\r)/ig, ' ');
    }

    var div = self.parentElement.childNodes[1]; // It will be "divCloneTxt". 
    div.innerHTML = '';

    var origin = strtxt.split('');
    var ch = '';
    var strdiv = '';
    var error = false;

    for (i = 0; i < origin.length; i++) {
        ch = origin[i];
        var ch1 = ch;
        if (ch == '>' || ch == '<' || ch == '&' || ch == '/') // control characters
        {
            ch1 = '*'
        }

        if (isCharNotValid(ch)) //wrong characters
        {
            strdiv += '<span class="yellowbackground">' + ch1 + '</span>';
            error = true;
        }
        else {
            if (ch != ' ') {
                strdiv += ch1;
            } else {
                strdiv += '&nbsp;';
            }
        }
    }

    if (self.clientHeight > 25) {
        div.innerHTML = strdiv.replaceAll(/(\r\n|\n|\r|\n\r)/ig, '<br/>') + '<br/><br/>';
    } else {
        div.innerHTML = strdiv;
    }

    div.scrollTop = self.scrollTop;
    div.scrollLeft = self.scrollLeft;

    return error;
}


function replaceCommandChars(self) {
    str = self.value;
    const regex = /\t/ig;
    str = str.replaceAll(regex, '    ');
    self.value = str.normalize("NFC").trimEnd();
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize
    return false;
}

// multiline textarea max length
function txtCounter(self) {

    var maxlimit = self.maxLength

    var strin = self.value.split('');;
    var strout = "";
    var count = 0;

    for (i = 0; i <= strin.length; i++) {
        var ch = strin[i];
        if (ch.charCodeAt(i) < 256) {
            count += 1;
        } else {
            count += 2;
        }

        if (count <= maxlimit - strout.split(/\r?\n/).length + 1) {
            strout += ch;
        }
        else {
            self.value = strout;
            return false;
        }
        return true;
    }
}

function isCharNotValid(ch) {

    var regex = /[^a-z^A-Z^0-9\^_ ~!@#$?%&*()+-=\{\}\[\]\\|`>\n\s]/ig;
    var chOut = ch.replaceAll(regex, '*');
    var blnOut = ch != chOut || ch == '>' || ch == '<';
    return blnOut;
}

function txtOnScroll(self) {
    var div = self.parentElement.childNodes[1];// name must be build dynamicaly
    div.scrollTop = self.scrollTop;
    div.scrollLeft = self.scrollLeft;
    txtUp(self);
    return false;
}

function txtOnBlur(self) {
    if (txtUp(self)) {
        if (document.activeElement == document.body) {
            alert(' Please fix an error(s)! \n All highlighted charts must be replaced/deleted!');
            self.focus();
            return false;
        }
    }
    return true;
}

function txtPaste(self) {
    //https://javascript.info/selection-range

    let paste = (event.clipboardData || window.clipboardData).getData('text');
    self.setRangeText(paste, self.selectionStart, self.selectionEnd, "end");
    txtUp(self);
    txtCounter(self);
    event.preventDefault();
    return true;
}


function replaceSpecialChars(self) {

    str = self.value;
    str = str.replaceAll('&', ' and ');
    str = str.replaceAll('<', ' less than ');
    str = str.replaceAll('>', ' greater than ');

    var regex = /â|ȁ|ä|à|á|ã|å|ă|ꜳ/ig;  // "/g" meanse replace all char from list left, do not stop after replacing first char...see below link...
    str = str.replaceAll(regex, 'a');

    regex = /Â|Ä|À|Á|Ã|Å|Ă/ig;
    str = str.replaceAll(regex, 'A');

    regex = /é|ê|ë|è|ȅ/ig;
    str = str.replaceAll(regex, 'e');

    //regex = /ĉ/ig;
    //str = str.replaceAll(regex, 'c');

    regex = /É|Ê|Ë|È|Ẽ/ig;
    str = str.replaceAll(regex, 'E');

    regex = /í|î|ï|ì|ἴ|ἶ|ἳ/ig;
    str = str.replaceAll(regex, 'i');

    regex = /Í|Î|Ï|Ì/ig;
    str = str.replaceAll(regex, 'I');

    regex = /ô|ö|ò|ó|õ/ig;
    str = str.replaceAll(regex, 'o');

    regex = /Ô|Ö|Ò|Ó|Õ/ig;
    str = str.replaceAll(regex, 'O');

    regex = /û|ü|ù|ú/ig;
    str = str.replaceAll(regex, 'u');

    regex = /Û|Ü|Ù|Ú/ig;
    str = str.replaceAll(regex, 'U');

    regex = /ÿ|ý|ӱ/ig;
    str = str.replaceAll(regex, 'y');

    regex = /Ÿ|Ý/ig;
    str = str.replaceAll(regex, 'Y');

    regex = /ñ|ῆ/ig;
    str = str.replaceAll(regex, 'n');

    regex = /Ñ|Ṅ|Ӥ/ig;
    str = str.replaceAll(regex, 'N');

    //regex = /€|₡|ç|ß|¬|Ç|¦|ø|Ø|æ|Æ|®|£|¥|©|™|¨|ꬿ|ꟹ|℅/ig;
    //str = str.replaceAll(regex, ' ');

    str = str.replaceAll('^', ''); // It must be empty.

    regex = /¢|\u005C/ig;  // ¢ \ 
    str = str.replaceAll(regex, ' ');

    regex = /"|'|´|‘|’|“|”|\u0091|\u0092|\u0093|\u0094|\u005C/ig;
    str = str.replaceAll(regex, '`');


    str = str.replaceAll('¼', ' 1/4 ');
    str = str.replaceAll('½', ' 1/2 ');
    str = str.replaceAll('⅓', ' 1/3 ');
    str = str.replaceAll('⅔', ' 2/3 ');
    str = str.replaceAll('¾', ' 3/4 ');
    str = str.replaceAll('�', ' ');
    //str = str.replaceAll('♀', ' ');
    //str = str.replacev('–', '-');

    return false;
}


