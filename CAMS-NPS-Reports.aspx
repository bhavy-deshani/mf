<%@ Page Language="C#" CodeFile="BusinessLogic/CAMSNPSReports.aspx.cs" Inherits="IEILShell.NPS" ResponseEncoding="utf-8"  AutoEventWireup="true"%>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Access CAMS NPS Reports Online - View Your NPS Statements</title>
    <meta name="description" content="Securely access your CAMS NPS reports and transaction statements with Integrated India. View detailed records of your National Pension System contributions and holdings online." />
    <meta name="keywords" CAMS NPS reports, NPS statements, NPS transaction report, NPS contributions, Integrated India NPS, secure NPS access, online NPS service, view NPS holdings."/>

<meta name="robots" content="index,follow">
    <meta name="geo.region" content="IN-TN" />
    <meta name="geo.placename" content="Chennai" />
    <meta name="geo.position" content="13.04850;80.23300" />
    <meta name="ICBM" content="13.04850, 80.23300" />
    <meta name="theme-color" content="#EF7F1B" />
    <meta property="tag type" content="Access CAMS NPS Reports Online - View Your NPS Statements" />
    <meta property="og:title" content="Access CAMS NPS Reports Online - View Your NPS Statements" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Integratedindia" />
    <meta property="og:url" content="https://www.integratedindia.in/cams-nps-reports.aspx" />
    <meta property="og:image" content="https://www.integratedindia.in/assets/images/gallery/integrated-enterprises-india-pvt-ltd.webp" />
    <meta property="og:description" content="Securely access your CAMS NPS reports and transaction statements with Integrated India. View detailed records of your National Pension System contributions and holdings online.">
    <meta name="twitter:card" content="summary">
    <meta name="twitter:site" content="@IntegratedTweet" />
    <meta name="twitter:title" content="Access CAMS NPS Reports Online - View Your NPS Statements" />
    <meta name="twitter:description" content="Securely access your CAMS NPS reports and transaction statements with Integrated India. View detailed records of your National Pension System contributions and holdings online." />
    <meta name="twitter:image" content="https://www.integratedindia.in/assets/images/gallery/integrated-enterprises-india-pvt-ltd.webp" />
    <link rel="canonical" href="https://www.integratedindia.in/cams-nps-reports.aspx" />
     <!-- Google Tag Manager -->
     <meta name="msvalidate.01" content="4D141547917CF9659F69B69759BF1127"   />
     <script>(function (w, d, s, l, i) {
             w[l] = w[l] || []; w[l].push({
                 'gtm.start':
                     new Date().getTime(), event: 'gtm.js'
             }); var f = d.getElementsByTagName(s)[0],
                 j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
                     'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
         })(window, document, 'script', 'dataLayer', 'GTM-PT9GLCS');</script>
     <!-- End Google Tag Manager -->
 <script type="application/ld+json">
    {
        "@context": "http://schema.org",
        "@type": "WebPage",
        "name": "CAMS NPS Reports",
        "url": "https://www.integratedindia.in/cams-nps-reports.aspx",
        "description": "Access and manage CAMS NPS reports and statements.",
        "publisher": {
          "@type": "Organization",
          "name": "Integrated Enterprises (India) Ltd.",
          "url": "https://www.integratedindia.in"
        },
        "mainEntity": {
          "@type": "Service",
          "serviceType": "NPS Reports and Statements",
          "provider": {
            "@type": "Organization",
            "name": "CAMS",
            "url": "https://www.camsnps.com"
          }
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.integratedindia.in/cams-nps-reports.aspx?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
     </script>
    <link rel="shortcut icon" type="image/x-icon" href="assets/images/favicons/fiveicon.ico">
    <meta name="theme-color" content="#ffffff">
    <link href="assets/css/theme.css" rel="stylesheet" />
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="https://code.jquery.com/ui/1.12.0/jquery-ui.js"></script>
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.0/themes/base/jquery-ui.css">
    <style>
        .modal {
            display: none;
            position: fixed;
            z-index: 1;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            background-color: rgb(0, 0, 0);
            background-color: rgba(0, 0, 0, 0.4);
            padding-top: 60px;
        }

        .modal-content {
            background-color: #fefefe;
            margin: 5% auto;
            padding: 20px;
            border: 1px solid #888;
            width: 80%;
            max-width: 500px;
            text-align: center;
        }

        .close {
            color: #aaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
        }

        .close:hover,
        .close:focus {
            color: black;
            text-decoration: none;
            cursor: pointer;
        }

        .error-message {
            color: red;
        }
    </style>
</head>

<body>
    <main>
        <script src="assets/js/header.js"></script>
        <script src="assets/js/footer.js"></script>
        <script src="assets/js/geolocator.js"></script>
        <!-- <script src="assets/js/jquery-3.5.1.js"></script> -->
        <section class="pt-9">
            <div class="container">
                <nav class="opacity-75"
                style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);"
                 aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/">Home</a></li>
                        <li class="breadcrumb-item"><a href="nps-login.html">NPS</a></li>
                        <li class="breadcrumb-item"><a href="cams-nps-service-provider.html">CAMS</a></li>
                        <li class="breadcrumb-item text-g" aria-current="page">Reports</li>
                    </ol>
                </nav>
                <div class="py-5 d-flex justify-content-center">
                    <div class="form-container text-center text-b shadow border col-md-4 col-12 py-3 rounded-3">
                        <h5 class="fw-bold">NPS Statement Of Transaction</h5>
                        <form id="nps-form" class="p-3 ">
                            <div class="form-group">
                                <div class="input-group py-2 m-auto">
                                    <input type="text" id="pran" class="m-auto" name="pran" placeholder="Enter PRAN*"
                                        oninput="this.value = this.value.replace(/[^0-9]/g, '')" maxlength="12"
                                        minlength="12" required>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="well text-center d-flex py-2">
                                    <input type="text" placeholder="From Date*" id="fromdate" name="fromdate"
                                        class="w-100" maxlength="10" required>
                                    <label class="m-y m1 py-xl-1" for="fromdate"><i
                                            class="fa-regular fa-calendar-days"></i></label>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="well text-center d-flex py-2">
                                    <input type="text" maxlength="10" placeholder="To Date*" id="todate" name="todate" required>
                                    <label class="m-y m1 py-xl-1" for="todate"><i
                                            class="fa-regular fa-calendar-days"></i></label>
                                </div>
                            </div>
                            <div class="text-center py-3">
                                <button type="button" class="text-white border-0 bg-b px-xl-5 py-xl-1 rounded-4"
                                    id="getotp">Get OTP</button>

                                <a id="SOTdownloadbtn" style="display: none;"><input type="button" value="Download PDF" class="text-white border-0 bg-b px-xl-5 py-xl-1 rounded-4" /></a>
                            </div>
                        </form>
                        <div id="otpModal" class="modal">
                            <div class="modal-content">
                                <span class="close">&times;</span>
                                <p>NPS Statement Of Transaction</p>
                                <h2>OTP Verification</h2>
                                <p>A One-Time Password has been sent to your Mobile No <span
                                        id="modal-mobile-no"></span></p>
                                <!-- <p>& Email-Id <span id="modal-email-id"></span></p> -->
                                <input type="text" id="otpInput" placeholder="Enter OTP*"  oninput="this.value = this.value.replace(/[^0-9]/g, '')" maxlength="5" required>
                                <br><button id="verifyOTPBtn">Submit OTP</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="ResultContainer"></div>
            <input type="hidden" id="GeoTagHidden" runat="server"/>
            <input type="hidden" id="GeoLattitude" runat="server"/>
            <input type="hidden" id="GeoLongitude" runat="server"/>
            <input type="hidden" id="GeoAccuracy" runat="server"/>
            <input type="hidden" id="GeoAltitude" runat="server"/>
        </section>
    </main>

  <script src="assets/js/jquery-3.5.1.js"></script>
  <script src="vendors/@popperjs/popper.min.js"></script>
  <script src="vendors/bootstrap/bootstrap.min.js"></script>    <script src="assets/js/theme.js"></script>

  <script src="assets/js/chartbot.js"></script>
    <script src="assets/js/ICRModal.js"></script>
    <script>
        $(function () {
            $("#fromdate").datepicker();
            $("#todate").datepicker();
        });
        
        try{ TakeGeoTag("GeoTagHidden"); } catch(e){}
        document.getElementById('getotp').addEventListener('click', function () {
            if (formIsValid()) {
                sendOTPRequest("SOTDOWNLOAD")
                    .then(showOTPModal)
                    .catch(handleError);
            } else {
                // displayValidationErrors();
            }
        });

        document.getElementById('nps-form').addEventListener('submit', function (event) {
            event.preventDefault();
            verifyOTP();
        });
        var Pran ="";
        function sendOTPRequest(RequestType) {
            const pran = document.getElementById('pran').value;
            Pran = pran;
            var GeoTag = $("#GeoTagHidden").val();
            $("#GeoLattitude").val("null");
            $("#GeoLongitude").val("null");
            $("#GeoAccuracy").val("null");
            $("#GeoAltitude").val("null");
            if (GeoTag!="")
            {
                var GTag = $.parseJSON(GeoTag);
                if (GTag.error=="0")
                {
                    $("#GeoLattitude").val("'"+GTag.latitude+"'");
                    $("#GeoLongitude").val("'"+GTag.longitude+"'");
                    $("#GeoAccuracy").val("'"+GTag.accuracy+"'");
                    $("#GeoAltitude").val("'"+GTag.altitude+"'");
                }
            }

            var PostData ="{\"Req\":\"1\",\"PranNo\":\""+Pran+"\"";
            PostData += ",\"GLAT\":\""+$("#GeoLattitude").val()+"\"";
            PostData += ",\"GLNG\":\""+$("#GeoLongitude").val()+"\"";
            PostData += ",\"GACC\":\""+$("#GeoAccuracy").val()+"\"";
            PostData += ",\"GALT\":\""+$("#GeoAltitude").val()+"\"";
            PostData += ",\"NPSTYPE\":\""+RequestType+"\"";
            if (RequestType=="SOTDOWNLOAD")
            {
                PostData += ",\"RODETAILS\":{\"pran\":\""+Pran+"\",\"req_type\":\"TRANSACTION_STATEMENT\",\"from_date\":\""+Reversedate($("#fromdate").val())+"\",\"to_date\":\""+Reversedate($("#todate").val())+"\"}";
            }
            PostData += "}";
            ICRModalLoader("Please wait submission in progress...");
            return fetch('SourceFiles/CAMSNPSRequest.aspx', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: PostData
            })
            .then(response => {
                if (!response.ok) {
                    $("#ICRMessageCloseButton").click();
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.text();
            })
            .then(text => {
                try{
                    const data = JSON.parse(text);
                    if (data.success) {
                        // updateModalContent(data.mobileNo, data.emailId);
                        if(data.Sessionstate=="N"){OTPStatus = false;}
                        else if(data.Sessionstate=="Y"){OTPStatus = true;}
                        if(OTPStatus==true){GetRequestedData(RequestType)}
                        updateModalContent(data.description);
                        $("#ICRMessageCloseButton").click();
                        return Promise.resolve();
                    } else {
                        return Promise.reject(data.description);
                    }
                }catch (error) {
                    $("#ICRMessageCloseButton").click();
                    throw new Error("Invalid JSON response");
                }
            })
            .catch(error => Promise.reject(error));
        }

        function updateModalContent(mobileNo) {
            const modalMobileNoElement = document.getElementById('modal-mobile-no');
            // const modalEmailIdElement = document.getElementById('modal-email-id');

            // const maskedMobileNo = `+91-********${mobileNo.slice(-3)}`;
            // const maskedEmailId = `***@${emailId.slice(-3)}`;

            modalMobileNoElement.textContent = mobileNo;
            // modalEmailIdElement.textContent = maskedEmailId;
        }



        function showOTPModal() {
            $("#ICRMessageCloseButton").click();
            const modal = document.getElementById('otpModal');
            modal.style.display = 'block';

            // Close the modal when the user clicks on <span> (x)
            const span = document.getElementsByClassName('close')[0];
            span.onclick = function () {
                modal.style.display = 'none';
            };

            // Close the modal when the user clicks anywhere outside of the modal
            // window.onclick = function (event) {
            //     if (event.target == modal) {
            //         modal.style.display = 'none';
            //     }
            // };

            // Add event listener to the Verify OTP button
            const verifyOTPBtn = document.getElementById('verifyOTPBtn');
            verifyOTPBtn.addEventListener('click', verifyOTP);
        }

        var OTPStatus = false;
        function verifyOTP() {

            const otpInput = document.getElementById('otpInput').value;
            if(document.getElementById('otpInput').value==""){alert("Enter OTP");return false;}
            
            var PostData = "{\"Req\":\"2\",\"OTPValue\":\""+otpInput+"\"}";
            ICRModalLoader("Please wait submission in progress...");
            fetch('SourceFiles/CAMSNPSRequest.aspx', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: PostData
            })
            .then(response => {
                if (!response.ok) {
                    $("#ICRMessageCloseButton").click();
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.text();
            })
            .then(text => {
                try{
                    const data = JSON.parse(text);
                    if (data.success) {
                        // document.getElementById('nps-form').submit();
                        OTPStatus = true;
                        GetRequestedData("SOTDOWNLOAD");
                        $("#ICRMessageCloseButton").click();
                    } else {
                        handleError(data.description);
                    }
                } catch (error) {
                    $("#ICRMessageCloseButton").click();
                    throw new Error("Invalid JSON response");
                }
            })
            .catch(error => handleError(error));
        }

        function GetRequestedData(RequestType)
        {
            var Url="";
            // if(RequestType=="Holdings")
            // {
            //     Url="SourceFiles/NPSHoldingsDetail.aspx";
            // }
            // else if(RequestType=="Transcation")
            // {
            //     Url="SourceFiles/NPSTranscationDetail.aspx";
            // }
            // else if(RequestType=="SOTDOWNLOAD")
            // {
            //     Url="SourceFiles/NPSSOT.aspx";
            // }
            Url="SourceFiles/NPSCAMSPDFDownload.aspx";
            fetch(Url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: "",
            })
            .then((response) => {
                if (!response.ok) {
                    $("#ICRMessageCloseButton").click();
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.text(); // Use text() instead of json() to handle potential non-JSON responses
            })
            .then((text) => {
                try 
                {
                    $("#ResultContainer").html(text);
                    if(RequestType=="SOTDOWNLOAD")
                    {
                        getotp.style.display = "none";
                        SOTdownloadbtn.style.display = "block";
                        document.getElementById('otpModal').style.display = "none";
                        // myForm1.style.display = "block";
                        $("#ResultContainer").html("");
                        var Responsedata = $.parseJSON(text)
                        $.each(Responsedata, function (index, Obj)
                        {
                            // if(Obj.APIName=="SUBSCRIBERDETAILSVIEW")
                            // {
                            //     var Transcation = $.parseJSON(Obj.Response);
                            //     $("#SOTPran").html(Transcation.pran);
                            //     $("#SOTPranName").html(Transcation.personalDtlsForm.subFName);
                            // }
                            if(Obj.APIName=="SOTDOWNLOAD")
                            {
                                var guid = createGuid();
                                var pdfextract = $.parseJSON(Obj.Response);
                                var filename=pdfextract.response.data.pran+"_"+guid;
                                var atobData = atob(pdfextract.response.pdf_base64);
                                var num = new Array(atobData.length);
                                for (var i = 0; i < atobData.length; i++) {
                                    num[i] = atobData.charCodeAt(i);
                                }
                                var pdfData = new Uint8Array(num);


                                //var blob = new Blob([pdfData], { type: 'text/plain' });
                                blob = new Blob([pdfData], { type: 'application/pdf;base64' });
                                var url = URL.createObjectURL(blob);
                                
                                var a = document.getElementById('SOTdownloadbtn');
                                if( /Android/i.test(navigator.userAgent) )
                                {
                                    a.href = "https://www.integratedindia.in/Sourcefiles/NPSCAMSPDFDownload.aspx?DM=1";
                                    a.target ="_blank";
                                }
                                else if( /iPhone|iPad|iPod/i.test(navigator.userAgent) )
                                {
                                    window.open("https://www.integratedindia.in/Sourcefiles/NPSCAMSPDFDownload.aspx?DM=1");
                                }
                                else
                                {
                                    a.href = url;
                                    a.download = filename+'.pdf';
                                }
                                a.click();
                                // $("#SOTdownloadbtn").bind("click",function(){SOTCLKDWN();});
                            }
                        })
                    }
                    $("#ICRMessageCloseButton").click();
                } catch (error) {
                    $("#ICRMessageCloseButton").click();
                    throw new Error("Invalid JSON response");
                }
            })
            .catch((error) => handleError(error));
        }
        function handleError(error) {
            $("#ICRMessageCloseButton").click();
            console.error(error);
            alert(error);
        }

        function formIsValid() {
            let isValid = true;
            const pranInput = document.getElementById('pran');

            // clearValidationErrors();

            if (pranInput.value.trim().length !== 12) {
                alert("Please enter a valid 12-digit PRAN number");
                pranInput.focus();
                isValid = false;
                // setInputError(pranInput, 'Please enter a valid 12-digit PRAN number');
            }
            else if(document.getElementById('fromdate').value == "")
            {
                alert("Please enter From Date");
                document.getElementById('fromdate').focus();
                isValid = false;
            }
            else if(document.getElementById('todate').value == "")
            {
                alert("Please enter To Date");
                document.getElementById('todate').focus();
                isValid = false;
            }
            return isValid;
        }

        function setInputError(input, errorMessage) {
            const errorElement = document.createElement('div');
            errorElement.classList.add('error-message');
            errorElement.classList.add('text-center'); // Separate class addition
            errorElement.textContent = errorMessage;
            input.parentNode.appendChild(errorElement);
        }

        function clearValidationErrors() {
            const errorMessages = document.querySelectorAll('.error-message');
            errorMessages.forEach(errorMessage => errorMessage.remove());
        }

        function displayValidationErrors() {
            alert('Please fix the validation errors and try again.');
        }

        function Reversedate(date)
        {
            var newdate = date.split("/");
            newdate = newdate[2]+'-'+newdate[0]+'-'+newdate[1];
            return newdate;
        }

        function createGuid(){  
            function S4() {  
                return (((1+Math.random())*0x10000)|0).toString(16).substring(1);  
            }  
            return (S4() + S4() + "-" + S4() + "-4" + S4().substr(0,3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();  
        }

        function SOTCLKDWN()
        {
            if( /Android/i.test(navigator.userAgent) )
            {
                window.open("https://www.integratedindia.in/Sourcefiles/NPSCAMSPDFDownload.aspx?DM=1");
            }
            else if( /iPhone|iPad|iPod/i.test(navigator.userAgent) )
            {
                window.open("https://www.integratedindia.in/Sourcefiles/NPSCAMSPDFDownload.aspx?DM=1");
            }
            else
            {
                window.open("https://www.integratedindia.in/Sourcefiles/NPSCAMSPDFDownload.aspx?DM=1");
            }
        }

    </script>
</body>

</html>