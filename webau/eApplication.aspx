<%@ Page Language="C#" validateRequest="false" enableEventValidation="false"  Inherits="Iep_EApplication.EApplication" codefile="BusinessLogic/Iep_EApplication.aspx.cs" Debug="true"%>
<!DOCTYPE html>
<html lang="en-US" dir="ltr">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- ===============================================-->
    <!--    Document Title-->
    <!-- ===============================================-->
    <title>Integratedindia</title>

    <!-- ===============================================-->
    <!--    Favicons-->
    <!-- ===============================================-->
    <link rel="shortcut icon" type="image/x-icon" href="assets/images/favicons/favicon.ico">
    <meta name="theme-color" content="#ffffff">

    <!-- ===============================================-->
    <!--    Stylesheets-->
    <!-- ===============================================-->
    <link href="assets/css/theme.css" rel="stylesheet" />

    <style>
        .issue {
            justify-content: center;
            align-items: center;
            margin: 10px;
            position: relative;
            cursor: pointer;
        }

        .issue img {
            width: 200px;
            height: auto;
        }

        .view-btn {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            display: none;
        }

        .view-btn button {
            display: block;
            margin: auto;
        }

        .issue:hover .view-btn {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: rgba(0, 0, 0, 0.5);
        }
        .Newscls {
            margin-bottom: 2%;
            margin-right: 2%;
        }
    </style>
</head>

<body>
    <main>
        <script src="assets/js/header.js"></script>
        <script src="assets/js/footer.js"></script>
        <section class="pt-9">
<div class='OPreface'>
<div id="Page_Preface" class="Page_Preface">E-Application</div>
</div>
<div class="IEPBwrapper">
    <form id="EApplication_Form" runat="server">
        <div style="width:100%; min-height:350px;">
            <div id="eApplication_Container" runat=server style="width:100%">
                <div style='float:left; width:100%; text-align:center; margin-top:5%; font-family:"Rubik", sans-serif; font-size:25px;'>
                    <asp:Label ID="LabelBox" runat="server">Enter the below image in text to download application Form</asp:Label><br /><br />
                </div>
                <div id='divcaptcha' runat=server style='float:left; width:100%; text-align:center;'>
                    <img id="img1" class="img1" runat="server" alt="" src="CatptchaVerifier.aspx" style="width: 180px;height: 75px;"/>                
                    <br /><br />
                </div>
                <div style='float:left; width:100%; text-align:center'><asp:TextBox runat="Server" ID="txtCaptcha" class="Captcha"/><br /><br /></div>
                <div style='float:left; width:100%; text-align:center'><asp:RequiredFieldValidator ControlToValidate="txtCaptcha" CssClass="style16" ErrorMessage="* Please Enter above text in the textbox" id="RequiredFieldValidatortxtCaptcha" runat="server" Display="Dynamic"></asp:RequiredFieldValidator></div>
                <div style='float:left; width:100%; text-align:center'><asp:Button ID="Submit_EApplication" runat="server" Text="Submit" OnClick="EApplicationDownload" class="SubmitButton"></asp:Button></div>
                <div class='Contact_HeaderDiv' id=StatusContainer runat=server></div>
                <div class='Contact_HeaderDiv' id=StatusContainer1></div>
            </div>
        </div>
        
    </form>
</div>
<br/>
</section>
</main>

</body>
</html>