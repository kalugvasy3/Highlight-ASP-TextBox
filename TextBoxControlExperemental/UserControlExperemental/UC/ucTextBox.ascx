<%@ Control Language="vb" AutoEventWireup="true" CodeBehind="ucTextBox.ascx.vb" Inherits="UserControlExperemental.ucTextBox" %>

<style type="text/css">
    .transparentfont {
        color: transparent;
    }

    .yellowbackground {
        background: #e0e219;
    }


    .relative {
        position: relative;
    }

    .whitebackground {
        background: #ffffff;
    }

    .transporentbackground {
        background: rgba(0, 0, 0, 0.0);
    }

    .absolute {
        position: absolute;
        font-family: Consolas;
        font-size: medium;
        padding: 0px;
        top: 0px;
        left: 0;
        border: 1px solid #000000;
        white-space: nowrap;
        word-wrap: keep-all;
        overflow-x: auto;
        overflow-y: auto;
        text-align: left;
        cursor: text;
    }

    .scroll {
/*        margin: 4px, 4px;
        padding: 4px;*/        
        background-color: white;
        font-family: Consolas;
        white-space: nowrap;        
        word-wrap: keep-all;
        font-size: medium;
        overflow-x: hidden;
        overflow-y: hidden;
        text-align: left;
        cursor: none;
    }
</style>

<script src="Logic.js"></script>

<script>

    //function replaceSpecialCharsByName(strName) {
    //    var self = document.getElementById(strName);
    //    txtUp(self);
    //}

    //function txtUp(self) {
    //    replaceCommandChars(self);
    //    //replaceSpecialChars(self);

    //    var strtxt = self.value;

    //    if (self.clientHeight <= 25) {
    //        strtxt = strtxt.replaceAll(/(\r\n|\n|\r|\n\r)/ig, ' ');
    //    }

    //    var div = self.parentElement.childNodes[1]; // It will be "divCloneTxt". 
    //    div.innerHTML = '';

    //    var origin = strtxt.split('');
    //    var ch = '';
    //    var strdiv = '';
    //    var error = false;

    //    for (i = 0; i < origin.length; i++) {
    //        ch = origin[i];
    //        var ch1 = ch;
    //        if (ch == '>' || ch == '<' || ch == '&' || ch == '/') // control characters
    //        {
    //            ch1 = '*'
    //        }

    //        if (isCharNotValid(ch)) //wrong characters
    //        {
    //            strdiv += '<span class="yellowbackground">' + ch1 + '</span>';
    //            error = true;
    //        }
    //        else {
    //            if (ch != ' ') {
    //                strdiv += ch1;
    //            } else {
    //                strdiv += '&nbsp;';
    //            }
    //        }
    //    }

    //    if (self.clientHeight > 25) {
    //        div.innerHTML = strdiv.replaceAll(/(\r\n|\n|\r|\n\r)/ig, '<br/>') + '<br/><br/>';
    //    } else {
    //        div.innerHTML = strdiv;
    //    }

    //    div.scrollTop = self.scrollTop;
    //    div.scrollLeft = self.scrollLeft;

    //    return error;
    //}

    //// multiline textarea max length
    //function textCounter(self) {

    //    var maxlimit = self.MaxLength

    //    var strIn = self.value;
    //    var strOut = "";
    //    var countBytes = 0;

    //    for (i = 0; i < strIn.length; i++) {

    //        if (strIn.charCodeAt(i) < 256) {
    //            countBytes += 1;
    //        } else {
    //            countBytes += 2;
    //        }

    //        if (countBytes <= maxlimit - strOut.split(/\r?\n/).length + 1) {
    //            strOut += strIn.charAt(i);
    //        }
    //    }

    //    self.value = strOut;
    //}

    //function isCharNotValid(ch) {

    //    var regex = /[^a-z^A-Z^0-9\^_ ~!@#$?%&*()+-=\{\}\[\]\\|`>\n\s]/ig;
    //    var chOut = ch.replaceAll(regex, '*');
    //    var blnOut = ch != chOut || ch == '>' || ch == '<';
    //    return blnOut;
    //}

    //function txtOnScroll(self) {
    //    var div = self.parentElement.childNodes[1];// name must be build dynamicaly
    //    div.scrollTop = self.scrollTop;
    //    div.scrollLeft = self.scrollLeft;
    //    txtUp(self);
    //    return false;
    //}

    //function txtOnBlur(self) {
    //    if (txtUp(self)) {
    //        if (document.activeElement == document.body) {
    //            alert(' Please fix an error(s)! \n All highlighted charts must be replaced/deleted!');
    //            self.focus();
    //            return false;
    //        }
    //    }
    //    return true;
    //}

    //function txtPaste(self) {
    //    //https://javascript.info/selection-range

    //    let paste = (event.clipboardData || window.clipboardData).getData('text');
    //    self.setRangeText(paste, self.selectionStart, self.selectionEnd, "end");
    //    txtUp(self);
    //    event.preventDefault();
    //    return true;
    //}

    //function replaceCommandChars(self) {
    //    str = self.value;
    //    const regex = /\t/ig;
    //    str = str.replaceAll(regex, '    ');
    //    self.value = str.normalize("NFC").trimEnd();
    //    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize
    //    return false;
    //}

    //function replaceSpecialChars(self) {

    //    str = self.value;
    //    str = str.replaceAll('&', ' and ');
    //    str = str.replaceAll('<', ' less than ');
    //    str = str.replaceAll('>', ' greater than ');

    //    var regex = /â|ȁ|ä|à|á|ã|å|ă|ꜳ/ig;  // "/g" meanse replace all char from list left, do not stop after replacing first char...see below link...
    //    str = str.replaceAll(regex, 'a');

    //    regex = /Â|Ä|À|Á|Ã|Å|Ă/ig;
    //    str = str.replaceAll(regex, 'A');

    //    regex = /é|ê|ë|è|ȅ/ig;
    //    str = str.replaceAll(regex, 'e');

    //    //regex = /ĉ/ig;
    //    //str = str.replaceAll(regex, 'c');

    //    regex = /É|Ê|Ë|È|Ẽ/ig;
    //    str = str.replaceAll(regex, 'E');

    //    regex = /í|î|ï|ì|ἴ|ἶ|ἳ/ig;
    //    str = str.replaceAll(regex, 'i');

    //    regex = /Í|Î|Ï|Ì/ig;
    //    str = str.replaceAll(regex, 'I');

    //    regex = /ô|ö|ò|ó|õ/ig;
    //    str = str.replaceAll(regex, 'o');

    //    regex = /Ô|Ö|Ò|Ó|Õ/ig;
    //    str = str.replaceAll(regex, 'O');

    //    regex = /û|ü|ù|ú/ig;
    //    str = str.replaceAll(regex, 'u');

    //    regex = /Û|Ü|Ù|Ú/ig;
    //    str = str.replaceAll(regex, 'U');

    //    regex = /ÿ|ý|ӱ/ig;
    //    str = str.replaceAll(regex, 'y');

    //    regex = /Ÿ|Ý/ig;
    //    str = str.replaceAll(regex, 'Y');

    //    regex = /ñ|ῆ/ig;
    //    str = str.replaceAll(regex, 'n');

    //    regex = /Ñ|Ṅ|Ӥ/ig;
    //    str = str.replaceAll(regex, 'N');

    //    //regex = /€|₡|ç|ß|¬|Ç|¦|ø|Ø|æ|Æ|®|£|¥|©|™|¨|ꬿ|ꟹ|℅/ig;
    //    //str = str.replaceAll(regex, ' ');

    //    str = str.replaceAll('^', ''); // It must be empty.

    //    regex = /¢|\u005C/ig;  // ¢ \ 
    //    str = str.replaceAll(regex, ' ');

    //    regex = /"|'|´|‘|’|“|”|\u0091|\u0092|\u0093|\u0094|\u005C/ig;
    //    str = str.replaceAll(regex, '`');


    //    str = str.replaceAll('¼', ' 1/4 ');
    //    str = str.replaceAll('½', ' 1/2 ');
    //    str = str.replaceAll('⅓', ' 1/3 ');
    //    str = str.replaceAll('⅔', ' 2/3 ');
    //    str = str.replaceAll('¾', ' 3/4 ');
    //    str = str.replaceAll('�', ' ');
    //    //str = str.replaceAll('♀', ' ');
    //    //str = str.replacev('–', '-');

    //    return false;
    //}

</script>


<%-- Do not change sequences "Div"/ "TextBox" - JS using this sequences --%>


<div id="divContainer" class="relative" clientidmode="AutoID" runat="server">

    <div id="divCloneTxt" style="resize: none"
        runat="server"
        clientidmode="AutoID"
        class="whitebackground scroll transparentfont">
    </div>

    <asp:TextBox ID="txtUC" runat="server"
        Style="resize: none"
        class="absolute transporentbackground "
        onpaste="txtPaste(this)"

        onkeyup="txtUp(this)"
        onscroll="txtOnScroll(this)"
        onblur="txtOnBlur(this)"
        oncut="txtUp(this)"
        autocomplete="off"
        Text="" 
        AutoPostBack="false">
    </asp:TextBox>




    <script>
        // We must disable "paste" default logic.
        //window.onload = function () {
        //    document.addEventListener('paste', function (e) {
        //       // console.log("paste handler");
        //        //var s = e.clipboardData.getData('text/html').replace("this", "that")
        //        //document.execCommand("insertHTML", false, s);
        //        e.preventDefault();
        //    });
        //}
         //https://stackoverflow.com/questions/46645587/how-to-create-a-paste-event-after-preventdefault

    </script>

</div>

