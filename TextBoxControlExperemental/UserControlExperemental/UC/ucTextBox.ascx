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

//function txtUp(self) {

//    var strtxt = self.value;

//    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize
//    strtxt = strtxt.normalize('NFC');

//    var div = self.parentElement.childNodes[1]; // It will be "divCloneTxt" - jQuary find just the last userControl, not current.
//    div.innerHTML = "";

//    var origin = strtxt.split("");
//    var conv = "";
//    var ch = "";
//    var strdiv = "";
//    var error = false;
//    const pattern = /(\r\n|\n|\r|\n\r)/gm;


//    for (i = 0; i < origin.length; i++) {
//        ch = origin[i];
//        if (ch == "!") {
//            strdiv += '<span class="yellowbackground">' + ch + '</span>';
//            error = true;
//        } else {
//            if (ch != " ") {
//                if (pattern.test(ch)) {
//                    strdiv += "<br>";
//                }
//                else {
//                    strdiv += ch;
//                }
//            } else {
//                strdiv += "&nbsp;";
//            }
//        }
//    }
//    strdiv = strdiv.replace(/(\r\n|\n|\r|\n\r)/gm, "<br>");

//    div.innerHTML = strdiv + "&nbsp;";
//    txtOnScroll(self);

//    return error;
//}

//function txtOnScroll(self) {
//    var div = self.parentElement.childNodes[1];// name must be build dynamicaly
//    div.scrollTop = self.scrollTop;
//    div.scrollLeft = self.scrollLeft;
//    return true;
//}

//function txtOnBlure(self) {

//    if (txtUp(self)) {
//        setInterval(alert(' Please fix an error(s)! \n All highlighted charts must be replaced/deleted!'), 1000);
//        setInterval(self.focus(), 1000);
//    }
//    return true;
//}

//function txtPaste(self) {
//    var div = self.parentElement.childNodes[1];

//    setTimeout(function () {
//        div.style.fontFamily = self.style.fontFamily;
//        div.style.fontSize = self.style.fontSize;
//        txtOnBlure(self);
//    }, 0);
//    return true;
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
        onpaste="setTimeout(txtPaste(this))"
        onkeydown="txtUp(this)"
        onkeyup="txtUp(this)"
        onscroll="txtOnScroll(this)"
        onblur="txtOnBlur(this)"
        oncut="txtUp(this)"
        autocomplete="off"
        Text="" AutoPostBack="false">
    </asp:TextBox>




    <script>
        // We must disable "paste" default logic.
        window.onload = function () {
            document.addEventListener('paste', function (e) {
               // console.log("paste handler");
                //var s = e.clipboardData.getData('text/html').replace("this", "that")
                //document.execCommand("insertHTML", false, s);
                e.preventDefault();
            });
        }
         //https://stackoverflow.com/questions/46645587/how-to-create-a-paste-event-after-preventdefault

    </script>

</div>

