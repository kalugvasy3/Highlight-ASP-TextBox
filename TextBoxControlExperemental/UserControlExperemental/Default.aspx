<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="Default.aspx.vb" Inherits="UserControlExperemental._Default" %>

<%@ Register Src="~/UC/ucTextBox.ascx" TagPrefix="uc1" TagName="ucTextBox" %>


<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>

    <script src="https://code.jquery.com/jquery-3.5.1.min.js"> </script>


</head>

<body>
    <form id="form1" runat="server" >

        <uc1:ucTextBox  ID="ucTextBox" runat="server"  TextMode="SingleLine" Width="350" />   
        <br /> <br />

        <uc1:ucTextBox  ID="ucTextBox3" runat="server" TextMode="MultiLine" Width="700"  Height="150" />

        <br /> <br />
        <uc1:ucTextBox  ID="ucTextBox1" runat="server" TextMode="MultiLine" Width="700"  Height="150" />
        <br /> <br /> 

    <div>
    
    </div>
    </form>
</body>
</html>
`