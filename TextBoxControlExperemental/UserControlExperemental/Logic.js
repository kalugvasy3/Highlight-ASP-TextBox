


function txtUp(self) {

    // replaceSpecialChars(self);

    var strtxt = self.value;
    if (self.clientHeight <= 25)
    {
        strtxt.replace(/(\r\n|\n|\r|\n\r)/gm, ' ');
    }

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize
    //strtxt = strtxt.normalize('NFC'); //"NFC"  NFKC

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
        div.innerHTML = strdiv.replace(/(\r\n|\n|\r|\n\r)/gm, '<br/>') + '<br/><br/>';
    } else {
        div.innerHTML = strdiv;
    }

   // self.value = strtxt; // do not do that ...

    div.scrollTop = self.scrollTop;
    div.scrollLeft = self.scrollLeft;

    // requered Scroll after enter char ... 
    return error;
}


function isCharNotValid(ch) {

    var regex = /[^a-z^A-Z^0-9\^_ ~!@#$?%&*()+-=\{\}\[\]\\|`>\n\s]/g;
    var chOut = ch.replace(regex, '*');
    var blnOut = ch != chOut;
    return blnOut;
}

function txtOnScroll(self) {
    var div = self.parentElement.childNodes[1];// name must be build dynamicaly
    div.scrollTop = self.scrollTop;
    div.scrollLeft = self.scrollLeft;
    txtUp(self);
    return true;
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
    self.focus();

    txtUp(self);

    var div = self.parentElement.childNodes[1];// name must be build dynamicaly
    div.scrollTop = self.scrollTop;
    div.scrollLeft = self.scrollLeft;

    return false;
}


function replaceSpecialChars(self) {

    str = self.value;
    str = str.replace('&', ' and ');
    str = str.replace('<', ' less than ');
    str = str.replace('>', ' greater than ');

    var regex = /â|ȁ|ä|à|á|ã|å|ă|ꜳ/g;  // "/g" meanse replace all char from list left, do not stop after replacing first char...see below link...
    str = str.replace(regex, 'a');

    regex = /Â|Ä|À|Á|Ã|Å|Ă/g;
    str = str.replace(regex, 'A');

    regex = /é|ê|ë|è|ȅ/g;
    str = str.replace(regex, 'e');

    //regex = /ĉ/g;
    //str = str.replace(regex, 'c');

    regex = /É|Ê|Ë|È|Ẽ/g;
    str = str.replace(regex, 'E');

    regex = /í|î|ï|ì|ἴ|ἶ|ἳ/g;
    str = str.replace(regex, 'i');

    regex = /Í|Î|Ï|Ì/g;
    str = str.replace(regex, 'I');

    regex = /ô|ö|ò|ó|õ/g;
    str = str.replace(regex, 'o');

    regex = /Ô|Ö|Ò|Ó|Õ/g;
    str = str.replace(regex, 'O');

    regex = /û|ü|ù|ú/g;
    str = str.replace(regex, 'u');

    regex = /Û|Ü|Ù|Ú/g;
    str = str.replace(regex, 'U');

    regex = /ÿ|ý|ӱ/g;
    str = str.replace(regex, 'y');

    regex = /Ÿ|Ý/g;
    str = str.replace(regex, 'Y');

    regex = /ñ|ῆ/g;
    str = str.replace(regex, 'n');

    regex = /Ñ|Ṅ|Ӥ/g;
    str = str.replace(regex, 'N');

    //regex = /€|₡|ç|ß|¬|Ç|¦|ø|Ø|æ|Æ|®|£|¥|©|™|¨|ꬿ|ꟹ|℅/g;
    //str = str.replace(regex, ' ');

    str = str.replace('^', ''); // It must be empty.

    regex = /¢|\u005C/g;  // ¢ \ 
    str = str.replace(regex, ' ');

    regex = /"|'|´|‘|’|“|”|\u0091|\u0092|\u0093|\u0094|\u005C/g;
    str = str.replace(regex, '`');


    str = str.replace('¼', ' 1/4 ');
    str = str.replace('½', ' 1/2 ');
    str = str.replace('⅓', ' 1/3 ');
    str = str.replace('⅔', ' 2/3 ');
    str = str.replace('¾', ' 3/4 ');
    str = str.replace('�', ' ');
    //str = str.replace('♀', ' ');
    //str = str.replace('–', '-');
    str = str.replace(/\t/g, '    '); // all TAB replace with 4 spaces.

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize
    self.value = str.normalize("NFC");
}



