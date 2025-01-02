using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;
using System.Web;
using System.Web.UI;
using System.Configuration;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;
using System.Collections;
using iTextSharp.text;
using iTextSharp.text.pdf;
using iTextSharp.text.html;
using iTextSharp.text.html.simpleparser;
using IEPCore;
using IEPBLL;

namespace Iep_EApplication
{
	partial class EApplication : System.Web.UI.Page
	{
		public string RegionItem,BranchItem,Query;
		public string DownloadIP,ProductCode,ProductTypeCode,BrokerCode,EApplicationFileName,RefNo,CurrentSessionID,ApplicationFolderName,FilePath;
		public string EApplicationFileNo,ApplicationPath,EditStatus;
		
		//DALProperty_Common Common_Obj = new DALProperty_Common();
		//IepDBManager DB_Obj = new IepDBManager("NSDL");
        DBManager DB_Obj = new DBManager(DataProvider.SqlServer, "NSDL");
		public void Page_Load(object sender, EventArgs e)
		{
			
			Page.DataBind();
		}
        public void CaptchaButtonClick(object sender, System.EventArgs e)
        {
            divcaptcha.InnerHtml = "<img id=img1 class=img1 alt='' src='CatptchaVerifier.aspx' />";
        }    
		public void EApplicationDownload(object sender, System.EventArgs e)
		{
            if (Session["RandomStr"].ToString().ToLower() == txtCaptcha.Text.ToLower())
            {
                try
                {
                    if (1 == 1)
                    {
                        DownloadIP = "";
						//Response.Write("sdsd");
						eApplication_Container.Visible = false;
                        //Session["RandomStr"]="";                        
                        Submit_EApplication.Visible = false;
                        StatusContainer.Visible = true;
                        StatusContainer.InnerHtml = "Successfully Downloaded";

                        Download_E_Application();
                    }
                }
                catch (Exception PDFException)
                {
                    //Response.Write("<h1><font color='#CC0000'><b>Session Invalid ! Try again to download</b></font></h1>");				
                    Response.End();
                }
            }
            else
            {
                
                StatusContainer.Visible = true;
                StatusContainer.InnerHtml = "<font color=red>Invalid Captcha</font>";
            }
			//else
			//{
			//	Response.Write("<h1><font color='#CC0000'><b>Session Invalid ! Try again to download</b></font></h1>");				
			//	Response.End();
			//}
		}
		
		public void Download_E_Application()
		{
			Submit_EApplication.Enabled=true;
			if (DownloadIP.Trim()=="")
			{
				DownloadIP = Request.ServerVariables["REMOTE_ADDR"].ToString();
			}
		
			ProductCode =  Request.QueryString["PCODE"].ToString();
			ProductTypeCode =  Request.QueryString["PTCODE"].ToString();	
			BrokerCode =  Request.QueryString["BCODE"].ToString();	
			CurrentSessionID=Session.SessionID.ToString();
			if(ProductCode=="undefined")
			{
				//Response.Write("<font color=red>Try after sometimes</font>");
				//Response.End();
			}
			/*Common_Obj.Query = ConfigurationSettings.AppSettings["EApplication_Download"].ToString();
			Common_Obj.Query+=ProductCode+","+ProductTypeCode+","+BrokerCode+",null,null,null,null,null,null,null,null,null,null,";
			Common_Obj.Query+="'"+CurrentSessionID+"'";
			Common_Obj.Query+=",'"+DownloadIP+"'";*/
            Query = ConfigurationSettings.AppSettings["EApplication_Download"].ToString();
            Query += ProductCode + "," + ProductTypeCode + "," + BrokerCode + ",null,null,null,null,null,null,null,null,null,null,";
            Query += "'" + CurrentSessionID + "'";
            Query += ",'" + DownloadIP + "'";
            //Response.Write(Query);
			//Response.End();
			
			//SqlDataReader EApplication_Reader = DB_Obj.GetDataReader(Common_Obj);
            DB_Obj.Open();
            SqlDataReader EApplication_Reader = (SqlDataReader)DB_Obj.ExecuteReader(Query);
			ApplicationPath="";
            if (EApplication_Reader.HasRows)
            {
                while (EApplication_Reader.Read())
                {
                    EApplicationFileName = EApplication_Reader["Application_Name"].ToString();
                    EApplicationFileNo = EApplication_Reader["Appln_No"].ToString();
                    ApplicationPath = EApplication_Reader["Application_Path"].ToString();
                    EditStatus = EApplication_Reader["Edit_Status"].ToString();
                }
            }			
			EApplication_Reader.Close();
            DB_Obj.Close();
			if(ApplicationPath!="")
			{	
				FilePath=Server.MapPath(".") + "/"+ApplicationPath+"/"+EApplicationFileName;
				
				if (File.Exists(FilePath))
				{
					PDF_Download(FilePath,EApplicationFileNo);
				}
				else
				{
					Response.Write("No Application Found");
				}
			}
			else
			{
				StatusContainer.InnerHtml = "No Application Found";
			}					
		}
		
		public void PDF_Download(string SourceFileName,string ApplicationNo )
		{
           
			MemoryStream PdfMemoryStream = new MemoryStream();
			CreatePDFStream(PdfMemoryStream,SourceFileName,ApplicationNo);
			byte[] buffer = PdfMemoryStream.GetBuffer();
			/*
			Response.Clear();
			Response.ContentType = "application/pdf";
			Response.AddHeader("Accept-Header", buffer.Length.ToString());
			Response.AddHeader("Content-Length", buffer.Length.ToString());
			Response.OutputStream.Write(buffer, 0, buffer.Length);
			Response.Flush();
			Response.End();
			*/
            //divcaptcha.InnerHtml = "<img id=img1 class=img1 alt='' src='CatptchaVerifier.aspx' />";
            //Response.End();
			//string FileName = EApplicationFileNo
			Response.Clear();
			Response.AddHeader("Content-Type", "binary/octet-stream");
			//Response.ContentType = "application/pdf";
		    //Response.AddHeader("Content-Disposition", "attachment; filename="+EApplicationFileNo+".pdf"+ "; size=" + buffer.Length.ToString());
			Response.AddHeader("Content-Disposition", "attachment; filename="+EApplicationFileNo+".pdf"+ "; size=" + buffer.Length.ToString());
			//Response.AddHeader("Content-Disposition", "Inline");
			Response.BinaryWrite(buffer);
			Response.Flush();
            img1.Src = "CatptchaVerifier.aspx";
            txtCaptcha.Text = "";
			Response.End();

		}
        
		
		private void CreatePDFStream(Stream PdfMemoryStream,string SourceFileName,string ApplicationNo)
		{
			iTextSharp.text.pdf.PdfReader pdfRd = new iTextSharp.text.pdf.PdfReader(FilePath);
			iTextSharp.text.pdf.PdfStamper stamp = new iTextSharp.text.pdf.PdfStamper(pdfRd, PdfMemoryStream);
			iTextSharp.text.pdf.AcroFields fields = stamp.AcroFields;
			fields.SetField("FF01", ApplicationNo);
			try
			{
				fields.SetField("FF02", ApplicationNo);
			}catch(Exception exp){}
            try
            {
                fields.SetField("FF03", ApplicationNo);
            }
            catch (Exception exp) { }
            try
            {
                fields.SetField("FF04", ApplicationNo);
            }
            catch (Exception exp) { }
            try
            {
                fields.SetField("FF05", ApplicationNo);
            }
            catch (Exception exp) { }
            try
            {
                fields.SetField("FF06", ApplicationNo);
            }
            catch (Exception exp) { }
            try
            {
                fields.SetField("FF07", ApplicationNo);
            }
            catch (Exception exp) { }
            if (EditStatus == "Y")
            {
                stamp.FormFlattening = false;
                stamp.FreeTextFlattening = false;
            }
            else
            {
                stamp.FormFlattening = true;
                stamp.FreeTextFlattening = true;
            }
			stamp.Close();
		}
		
		public void Page_Error(object sender,EventArgs e)
		{
			Exception HttpErr = Server.GetLastError();
			int httpCode =0;
			Exception objErr = Server.GetLastError().GetBaseException();
			Server.ClearError();
		}
	}
}