<%@ Page Language="C#" CodeFile="BusinessLogic\ClientModificationFormDwn.aspx.cs" Inherits="IEILShell.ClientModificationFormDwn"%>
<!DOCTYPE html>
<html>
    <head runat="server">
        <script type="text/javascript" src="/Scripts/jquery.js"></script>
        <script src="scripts/ClientModificationFormDwn.js"></script>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
        <meta http-equiv="X-UA-Compatible" content="IE=9; IE=8; IE=7;chrome=1" />
        <meta http-equiv="X-UA-Compatible" content="IE=9; IE=8; IE=7;chrome=1;IE=EDGE" />
        <meta name="HandheldFriendly" content="true"/>
        <link rel="stylesheet" type="text/css" href="styles/ClientModificationFormDwn.css">
    </head>
    <body>
        <form runat="server" autocomplete="off">
            <!-- #include file ="CustomHeader_New.aspx" -->
            <script src="Scripts/IEPModalV2.js"></script>
            <div class="Flex-Cointer">
                <div class="ClntMdfHdDivCls">Client Modification Form Download</div>
                <div class="KyCodeHdDivCls">Key Code</div>
                <div class="KeyCdeClsDiv">
                    <input type="text" id="KyCodeTxt" class="KyCodeTxt" runat="server" placeholder="KEY CODE" style="text-transform: uppercase;" maxlength="16" onkeypress="return isWordsKey(event)"/>
                </div>
                <div class="CaptchaHdDivCls">Captcha</div>
                <div class="CaptchTxtClsDiv">
                    <input type="text" id="CaptchaID" runat="server" onpast=false autocomplete="off" class="inputText" placeholder="CAPTCHA" maxlength="6" style="text-transform:uppercase;" required="" />
                </div>
                <div class="CaptchRldClsDiv">
                    <label id="capdistxt" class="containerCls CaptchaStyle">6@E32</label>
                    <img src="images/reload.png"  class="imgcaptcha"  onclick="refresh_captcha();" >
                </div>
                <div class="SubmitBtnClsDiv">
                    <input type="submit" id="SubmitBtn" class="SubmitBtn" runat="server" value="Submit" onclick="return Validation()" onserverclick="Button_Save"/>
                </div>
            </div>
            <!-- **************************Mask1************************** -->
            <div class="Mode_Alert_Mask" id="Mode_Alert_Mask" runat="server">
                <div class="Mode_Alert_Content">
                    <div class="Mode_Alert_Title">ALERT MESSAGE</div>
                    <div class="Mode_Alert_Message"><div id="Mode_Alert_Message_Main" runat="server"></div></div>
                    <div class="Mode_Alert_Footer">
                        <input name="ALERT_OK_BTN" type="button" id="ALERT_OK_BTN" class="Alert_Btn" value="OK" onclick="focusing()" />
                    </div>
                </div>
            </div>
            <!-- **************************Mask2 End********************** -->
        </form>
    </body>
</html>
        