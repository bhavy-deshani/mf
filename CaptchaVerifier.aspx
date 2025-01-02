<%@ Page Language="C#" AutoEventWireup="True" debug="true" EnableViewState="false"%>
<%@ Import Namespace="System.Data" %>
<%@ Import Namespace="System.Drawing" %>
<%@ Import Namespace="System.Drawing.Text" %>
<%@ Import Namespace="System.Drawing.Imaging" %>
<%@Import Namespace="System.Data.SqlClient"%>
<html>
<head>
<title>Integrated Enterprises India Ltd.</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<script runat="server">
    public void CaptchaVerifier()
    {
        Bitmap objBMP = new Bitmap(200, 50);
        Graphics objGraphics = Graphics.FromImage(objBMP);
        objGraphics.Clear(Color.CornflowerBlue);
        objGraphics.TextRenderingHint = TextRenderingHint.AntiAlias;
        Font objFont = new Font("Arial", 30, FontStyle.Italic);
        string randomStr = "";
        char[] myArray = new char[6];
        int x;
        Random autoRand = new Random();
        for (x = 0; x < 6; x++)
        {
            myArray[x] = System.Convert.ToChar(autoRand.Next(65,90));
            randomStr += (myArray[x].ToString());
        }
        Session["RandomStr"] = randomStr; 
        objGraphics.DrawString(randomStr, objFont, Brushes.White, 3, 3);
        Response.ContentType = "image/GIF";
        objBMP.Save(Response.OutputStream, ImageFormat.Gif);
        objFont.Dispose();
        objGraphics.Dispose();
        objBMP.Dispose();
    }
   protected void Page_Load(object sender,EventArgs e)
  {
	CaptchaVerifier();
  }
</script>
