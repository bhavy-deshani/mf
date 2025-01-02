<%@ Page Language="C#" AutoEventWireup="true" CodeFile="BusinessLogic/PledgeForm43.aspx.cs" Inherits="DRNCDAllotment.PledgeForm43" Debug="true" %>
<!DOCTYPE html>
<html>
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <meta http-equiv="X-UA-Compatible" content="IE=9; IE=8; IE=7;chrome=1" />
    <meta http-equiv="X-UA-Compatible" content="IE=9; IE=8; IE=7;chrome=1;IE=EDGE" />
    <meta name="HandheldFriendly" content="true"/>    
    <title>INTEGRATED ENTEPRISES (INDIA) LIMITED : ADMINISTRATIVE INFORMATION WEBSITE</title>
    
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" >
    <!-- Font -->
    <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css">
    <!-- Slicknav -->
    <link rel="stylesheet" type="text/css" href="css/slicknav.css">
    <!-- Owl carousel -->
    <link rel="stylesheet" type="text/css" href="css/owl.carousel.css">
    <link rel="stylesheet" type="text/css" href="css/owl.theme.css">
    <!-- Animate -->
    <!--<link rel="stylesheet" type="text/css" href="css/animate.css">-->
    <!-- Main Style -->
    <link rel="stylesheet" type="text/css" href="css/main.css">
    <!-- Extras Style -->
    <link rel="stylesheet" type="text/css" href="css/extras.css?V=1.10">
    
    <!-- About Style -->
    <link rel="stylesheet" type="text/css" href="css/About.css">
    <link rel="stylesheet" type="text/css" href="css/style.css?ver231">
    <!-- Responsive Style -->
    <link rel="stylesheet" type="text/css" href="css/responsive.css">
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Abel" />
    <link rel="stylesheet" type="text/css" href="css/TimeLine.css">

    <link href="css/NewIIndiaWidget.css" rel="Stylesheet" />
    <link rel="stylesheet" type="text/css" href="css/IEP_Common.css" />
    <style>
        .inputbanner{height:20px; font-family: "Rubik", sans-serif; font-weight:normal; font-size:16px; color:#666666; margin-top:-5px;}
        .commondiv{ width:100%; float:left; clear:both; padding:1px; height:auto; font-size:16px; margin-left:0%;font-family:"Rubik", sans-serif;}
        .leftdiv{ width:49%; float:left; text-align:left; margin-left:1%; min-height:35px; font-size:14px; border:0px solid #000000}
        .rightdiv{ width:49%; float:left; text-align:left; padding:1px; min-height:35px; color:#000088; border:0px solid #000000}
        .contentdiv{width:50%; margin:0 auto;}
        select{ width:99%; text-transform:uppercase; height:30px; border-radius:0px;
            -webkit-box-shadow: none;
            -webkit-border-radius: 0px; 
            -moz-border-radius: 0px; 
            border-radius: 0px; 
            border: 0px solid #848484; 
            border-bottom: 1px solid #848484; 
            -webkit-border: 0px solid #848484; 
            -webkit-border-bottom: 1px solid #848484; 
            outline:0; 
            height:25px; 
        }
        /*#DpDdl{ width:75%;}*/
        #captchadiv{ width:50%; float:left; }
        #captchaspan{ font-weight:bold; font-size:35px; text-decoration:line-through; width:100px; height:35px; background-color:#FFFFFF; padding:3px; float:left; border:0px solid #000000;}
        .Ac_RightCaptions1{float:left; width:33%; font-family:"Rubik", sans-serif; font-weight:bold; font-size:14px; padding-top:2%; text-align:left}
        input[type=button],input[type=submit]{ height:30px;}
        #Mailid_Txt{ text-transform:none;}
        @media screen and (max-width:1200px)
        {
            .contentdiv{width:70%; margin:0 auto;}
            .commondiv{ width:100%; float:left; clear:both; padding:1px; min-height:25px; line-height:25px; font-size:12px; margin-left:0%}
            .leftdiv{ width:39%; float:left; text-align:left; margin-left:0%; min-height:25px; line-height:25px; font-size:12px}
            .rightdiv{ width:59%; float:left; text-align:left; padding:1px; min-height:25px; line-height:25px; color:#000088}
        }
        @media screen and (max-width:900px)
        {
            .contentdiv{width:80%; margin:0 auto;}
            .commondiv{ width:100%; float:left; clear:both; padding:1px; min-height:25px; line-height:25px; font-size:12px; margin-left:0%}
            .leftdiv{ width:39%; float:left; text-align:left; margin-left:0%; min-height:25px; line-height:25px; font-size:12px}
            .rightdiv{ width:59%; float:left; text-align:left; padding:1px; min-height:25px; line-height:25px; color:#000088}
        }
        @media screen and (max-width:600px)
        {
            .contentdiv{width:98%; margin:0 auto;}
            .commondiv{ width:100%; float:left; clear:both; padding:1px; min-height:25px; line-height:25px; font-size:12px; margin-left:0%}
            .leftdiv{ width:39%; float:left; text-align:left; margin-left:0%; min-height:25px; line-height:25px; font-size:12px}
            .rightdiv{ width:59%; float:left; text-align:left; padding:1px; min-height:25px; line-height:25px; color:#000088}
        }
    </style>
<base target="_parent" />
</head>
<body>
<!-- #include file ="CustomHeader_New.aspx" -->
<div class='OPreface'>
    <div id="Page_Preface" class="Page_Preface"></div>
</div>
<div class="IEPBwrapper">
    <form id="ShareNews_Sub_Form" runat="server">
        <center><div id="NCD_Container" runat="server" class="NCD_NoCont">
        <div class="contentdiv">
        <div class="GF_BtnHeaderDiv" runat="Server" id="PB_Header"><br /><br /><br />FORM 43 - MARGIN PLEDGE FORM<br /><br /><br /></div>
          <div id="inputdiv" runat="server" class="AcOpen_Ldiv" style="width:100%; float:left; clear:none;">
          <div class="Ac_RightCaptions">Select DP ID<div class="inputbanner"></div>
            <asp:DropDownList ID="DpDdl" runat="server">
                <asp:ListItem Value="0">Select DPID</asp:ListItem>
                <asp:ListItem Value="IN300441">IN300441</asp:ListItem>
                <asp:ListItem Value="IN301313">IN301313</asp:ListItem>
                <asp:ListItem Value="IN300757">IN300757</asp:ListItem>
            </asp:DropDownList>
            <%--<asp:RequiredFieldValidator ID="ReqNCD" runat="server" ControlToValidate="DpDdl" InitialValue="-1"></asp:RequiredFieldValidator>--%>
          </div>
        <div class="Ac_RightCaptions" id="dpdiv" runat="server">Enter Client ID<div class="inputbanner"></div>
        <asp:TextBox ID="DPClnt_txt" placeholder="Client ID" runat="server" MaxLength="8" onkeyup="this.value=this.value.replace(/[^0-9]/g,'');"></asp:TextBox></div>
        <div class="Ac_RightCaptions">Trading With Integrated<div class="inputbanner"></div>
        <asp:DropDownList runat="server" ID="ChoiceDdl" style="font-size:120%;">
        <asp:ListItem Value="">Select Choice</asp:ListItem>
        <asp:ListItem Value="Y">YES</asp:ListItem>
        <asp:ListItem Value="N">NO</asp:ListItem></asp:DropDownList></div>
        <div class="Ac_RightCaptions1">Enter Captcha Code<div class="inputbanner"></div>
        <input autocomplete="off" type="text" name="CaptchaTxt" id="CaptchaTxt" runat="server" maxlength="6" /></div>
		
          <div id="captchadiv">
                &nbsp;&nbsp;<div class="inputbanner"></div><div id="captchaspan" runat="server"></div>&nbsp;&nbsp;
                <div style="float:left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src="images/captcha.png" style=" width:30px; height:30px;cursor: pointer; " onclick="refresh_captcha();" /></div>
          </div>
          
          <div class="GF_BtnHeaderDiv" style=" clear:both">
         <br /> <hr />
          <asp:Button runat="server" ID="Sub_Btn" Text="DOWNLOAD PLEDGE FORM" style="margin-top: 1%; margin-bottom:2%;" OnClientClick="javascript:return CheckInput()" OnClick="Input_Check_Submit" />
              &nbsp;&nbsp;&nbsp;<input type="button" value="Reset" onclick="window.location.href=window.location.href" style="margin-top: 1%; margin-bottom:2%;"/>
              </div>
        </div>
        </div>
        </div>
        </center>
        <input type="hidden" runat="server" id="caphid" />
    </form>
<script type="text/javascript" src="Scripts/jquery-3.1.1.js"></script>
</div>
<br/>
<div style="float:left;width: 100%;"><!-- #include file ="Footer_New.aspx" --></div>
<script>
    $("#DpDdl").focus();
    function refresh_captcha() { $("#captchaspan").text(String(Math.floor(100000 + Math.random() * 10000)).substring(0, 6)); $("#caphid").val($("#captchaspan").text()); }
    refresh_captcha();
    
    $(document).ready(function () {
    });
    function CheckInput() {
        if ($("#DpDdl").val() == "0") {
            alert("Select DP ID");
            $("#DpDdl").focus();
            return false;
        }
        else if ($("#DPClnt_txt").val().length != 8) {
            alert("Enter Valid Client ID");
            $("#DPClnt_txt").focus();
            return false;
        }
        else if ($("#CaptchaTxt").val() == "") {
            alert("Enter Captcha");
            $("#CaptchaTxt").focus();
            return false;
        }
        else if ($("#CaptchaTxt").val() != $("#caphid").val()) {
            alert("Enter Valid Captcha");
            $("#CaptchaTxt").focus();
            return false;
        }
        else if (confirm("Do you want to proceed ?") == true) {
            $("#DpDdl").prop("disabled", false);
		    return true;
	    }
	    return false;
        //return true;
	}
</script>
</body>
</html>