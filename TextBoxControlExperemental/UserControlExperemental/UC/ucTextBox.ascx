﻿<%@ Control Language="vb" AutoEventWireup="true" CodeBehind="ucTextBox.ascx.vb" Inherits="UserControlExperemental.ucTextBox" %>

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
        width: 300px;
        height: 20px;
        border: 1px solid #000000;
        word-wrap: break-word;
        overflow-x: hidden;
        overflow-y: auto;
        text-align: justify;
        cursor: text;
    }

    .scroll {
        margin: 4px, 4px;
        padding: 4px;
        background-color: lightgoldenrodyellow;
        font-family: Consolas;
        word-wrap: break-word;
        font-size: medium;
        overflow-x: hidden;
        overflow-y: auto;
        text-align: justify;
        cursor: none;
    }
</style>

<script src="Logic.js"></script>

<%--<script>


    //function name must be build dynamicaly
    function txtUp(self) {

        var strtxt = self.value;
        var div = self.parentElement.childNodes[1];
        div.innerHTML = "";
        // alert(self.value);

        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/escape

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


</script>--%>


<%--  this is only single line TextBox!!!--%>

<div id="divContainer" class="relative" clientidmode="AutoID" runat="server">

    <div id="divCloneTxt" style="resize: none" 
        runat="server" 
        clientidmode="AutoID" 
        class="whitebackground scroll" >
    </div>

    <asp:TextBox ID="txtUC" runat="server" 
        
        Style="resize: none"
        class="absolute transporentbackground transparentfont"
        onkeyup="txtUp(this)"
        onblure="txtUp(this)"
        onscroll = "txtUp(this)"
        onchange = "txtUp(this)"

        Text="" AutoPostBack="false" >
    </asp:TextBox>



</div>