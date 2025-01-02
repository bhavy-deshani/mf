<%@ Page Language="C#" Inherits="IEILShell.NPS" Debug="true" CodeFile="Businesslogic/NSDLNPSReports.aspx.cs" %>
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="assets/css/theme.css" rel="stylesheet" />
        <title>NSDL NPS Report - Access Your NPS Statements and Holdings</title>
        <meta name="description"
            content="Get detailed reports of your NPS transactions, holdings, and recent contributions with Integrated India's NSDL NPS Report service. Access your financial information securely online." />
        <meta name="keywords"
            content="NSDL NPS report, NPS statements, NPS holdings, NPS contributions, Integrated India NPS, NPS transaction report, secure NPS access, online NPS service." />
        <meta name="robots" content="index,follow">
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Chennai" />
        <meta name="geo.position" content="13.04850;80.23300" />
        <meta name="ICBM" content="13.04850, 80.23300" />
        <meta name="theme-color" content="#EF7F1B" />
        <meta property="tag type" content="NSDL NPS Report - Access Your NPS Statements and Holdings" />
        <meta property="og:title" content="NSDL NPS Report - Access Your NPS Statements and Holdings" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Integratedindia" />
        <meta property="og:url" content="https://www.integratedindia.in/nsdl-nps-report.aspx" />
        <meta property="og:image"
            content="https://www.integratedindia.in/assets/images/gallery/integrated-enterprises-india-pvt-ltd.webp" />
        <meta property="og:description"
            content="Get detailed reports of your NPS transactions, holdings, and recent contributions with Integrated India's NSDL NPS Report service. Access your financial information securely online.">
        <meta name="twitter:card" content="summary">
        <meta name="twitter:site" content="@IntegratedTweet" />
        <meta name="twitter:title" content="NSDL NPS Report - Access Your NPS Statements and Holding" />
        <meta name="twitter:description"
            content="Get detailed reports of your NPS transactions, holdings, and recent contributions with Integrated India's NSDL NPS Report service. Access your financial information securely online." />
        <meta name="twitter:image"
            content="https://www.integratedindia.in/assets/images/gallery/integrated-enterprises-india-pvt-ltd.webp" />
        <link rel="canonical" href="https://www.integratedindia.in/nsdl-nps-report.aspx" />

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
        "name": "NSDL NPS Report",
        "url": "https://www.integratedindia.in/nsdl-nps-report.aspx",
        "description": "Access and manage NSDL NPS reports and statements through Integrated Enterprises (India) Ltd.",
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
            "name": "NSDL",
            "url": "https://www.nsdl.co.in"
          }
        },
       }
 </script>

        <script src="assets/js/geolocator.js"></script>
        <style>
            .custom-date-input {
                position: relative;
                z-index: 1;
                opacity: 0;
            }

            .custom-icon {
                position: absolute;
                top: 50%;
                right: 10px;
                transform: translateY(-50%);
                z-index: 99;
            }

            .placeholder {
                position: absolute;
                top: 50%;
                left: 10px;
                transform: translateY(-50%);
                z-index: 1;
                pointer-events: none;
                transition: 0.3s ease-out;
            }

            .custom-date-input:focus+.custom-icon,
            .custom-date-input:not(:placeholder-shown)+.placeholder {
                opacity: 0;
            }

            button {
                margin: 5px;
                padding: 10px;
                cursor: pointer;
            }

            .form {
                display: none;
                margin: 10px 0;
                padding: 10px;
                border: 1px solid #ccc;
                border-radius: 5px;
            }

            #form1 {
                display: block;
            }

            #form2,
            #form3 {
                display: none;
            }

            .dots-container {
                text-align: center;
                margin: 20px 0;
            }

            .SOTFields {
                width: 22% !important;
            }

            @media (min-width: 768px) {
                .dots-container img {
                    width: 50%;
                }
            }

            @media (max-width: 767px) {
                .dots-container img {
                    width: 100%;
                }

                .SOTFields {
                    width: 100% !important;
                }
            }
        </style>
    </head>

    <body>
        <!-- Google Tag Manager (noscript) -->
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PT9GLCS" height="0" width="0"
                style="display:none;visibility:hidden"></iframe></noscript>
        <!-- End Google Tag Manager (noscript) -->
        <main>
            <script src="assets/js/header.js"></script>
            <script src="assets/js/footer.js"></script>
            <script src="assets/js/jquery-3.5.1.js"></script>

            <section class="pt-9">

                <div class="container text-b">
                    <nav class="opacity-75"
                        style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);"
                        aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/">Home</a></li>
                            <li class="breadcrumb-item"><a href="nsdl-nps-service-provider.html">NSDL</a></li>
                            <li class="breadcrumb-item  text-g" aria-current="page">Reports</li>
                        </ol>
                    </nav>
                    <div class="d-flex gap-3 mb-xl-3">
                        <div class="m-y">
                            <h2 class="m-y">&#11166;<span class="text-g"> NPS SERVICE PROVIDER</span></h2>
                        </div>
                        <div>
                            <img loading="lazy" src="./img/Group 21381.png" alt="">
                        </div>
                    </div>
                    <div class="mb-4">
                        <button class="bg-p col-xl-3 py--2 border-0 rounded-4" id="button1"
                            style="background-color: #50AE30; color: white;">My Statement Of Transaction</button>

                        <button class="bg-p col-xl-3 py--2 border-0 rounded-4 nsdl-hover1" id="button2">My
                            Holdings</button>
                        <button class="bg-p col-xl-3 py-2 border-0 rounded-4 nsdl-hover1" id="button3">My Recent
                            Contributions</button>
                    </div>
                </div>
                <div class=" py-xl-5">
                    <div class="m-auto text-center text-b shadow border col-10 bg-white rounded-3 py-3" id="form1">
                        <p class=" fw-bold text-b">NPS Statement Of Transaction</p>
                        <form id="myForm1" action="#" method="post" class="col-11 m-auto">
                            <div class="mb-4">
                                <input id="pran1" class="w-100 py-xl-2 rounded-4 border border-secondary"
                                    oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');"
                                    maxlength="12" minlength="12" placeholder="Enter PRAN*" type="text" required>
                            </div>
                            <div class="d-flex flex-wrap mb-4 justify-content-between">
                                <div class="col-12 col-md-3 pb-3 SOTFields">
                                    <select id="financialYear1" class="form-select py-2 rounded-4" required>
                                        <option selected disabled value="">Financial Year*</option>
                                        <option value="2021-2022">2021-2022</option>
                                        <option value="2022-2023">2022-2023</option>
                                        <option value="2023-2024">2023-2024</option>
                                        <option value="2024-2025" selected>2024-2025</option>
                                    </select>
                                </div>
                                <div class="col-12 col-md-3 pb-3 SOTFields">
                                    <select id="quarter1" class="form-select py-2 rounded-4" required>
                                        <option selected disabled value="">Quarter*</option>
                                        <option value="Q1">Quarter 1</option>
                                        <option value="Q2">Quarter 2</option>
                                        <option value="Q3">Quarter 3</option>
                                        <option value="Q4">Quarter 4</option>
                                        <option value="ALL" selected>ALL</option>
                                    </select>
                                </div>
                                <div class="col-12 col-md-3 pb-3 SOTFields">
                                    <select id="tierType1" class="form-select py-2 rounded-4" required>
                                        <option selected disabled value="">Tier Type*</option>
                                        <option value="T1" selected>Tier-1</option>
                                        <option value="T2">Tier-2</option>
                                    </select>
                                </div>
                                <div class="col-12 col-md-3 pb-3 SOTFields">
                                    <select id="language1" class="form-select py-2 rounded-4" required>
                                        <option selected disabled value="">Language*</option>
                                        <option value="en" selected>English</option>
                                        <option value="hi">Hindi</option>
                                        <option value="kn">Kannada</option>
                                        <option value="ma">Marathi</option>
                                        <option value="gj">Gujarati</option>
                                        <option value="pb">Punjabi</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <button id="SOTbtn" name="BtnText" type="submit"
                                    class="bg-b text-white px-xl-5 border-0 py-xl-2 rounded-2">Get
                                    OTP</button>

                                <a id="SOTdownloadbtn" style="display: none;"><input type="button" value="Download PDF"
                                        class="bg-b text-white px-5 border-0 py-2  rounded-2" /></a>
                            </div>
                        </form>
                    </div>
                    <div id="form2"
                        class="m-auto text-center text-b shadow border col-10 col-md-3 bg-white rounded-3 py-3 p-3">
                        <p class=" fw-bold text-b">NPS Holdings Details</p>
                        <form id="myForm2" action="#" method="post" class="col-xl-11 m-auto">
                            <div class="mb-4">
                                <input id="pran2" class="w-100 py-xl-2 rounded-4 border border-secondary"
                                    oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');"
                                    maxlength="12" minlength="12" placeholder="Enter PRAN*" type="text" required>
                            </div>
                            <div>
                                <button type="submit" name="BtnText"
                                    class="bg-b text-white px-5 border-0 py-2 rounded-2">Get
                                    OTP</button>
                            </div>
                        </form>
                    </div>
                    <div id="form3"
                        class="m-auto text-center text-b shadow border col-10 col-md-3 bg-white rounded-3 py-3 p-3">
                        <p class=" fw-bold text-b">NPS Recent Contribution</p>
                        <form id="myForm3" action="#" method="post" class="col-xl-11 m-auto">
                            <div class="mb-4">
                                <input id="pran3" class="w-100 py-xl-2 rounded-4 border border-secondary"
                                    oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');"
                                    maxlength="12" minlength="12" placeholder="Enter PRAN*" type="tel" required>
                            </div>
                            <div>
                                <button type="submit" name="BtnText"
                                    class="bg-b text-white px-5 border-0 py-xl-2 rounded-2">Get
                                    OTP</button>
                            </div>
                        </form>
                    </div>
                    <center>
                        <div id="otpContainer" class="otp-container" style="display: none;">
                            <p>A One-Time Password has been sent to your Mobile No <span id="displayMobile"></span>
                                <!-- & Email-Id <span id="displayEmail"></span> -->
                            </p>
                            <input type="text" id="otpInput" placeholder="Enter OTP" class="py-xl-2"
                                oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');"
                                maxlength="6" minlength="4" required>
                            &emsp;<button id="verifyOTPBtn"
                                class="bg-b text-white px-xl-5 border-0 py-xl-2  rounded-2">Submit</button>
                        </div>
                    </center>
                    <div id="ResultContainer"></div>
                </div>
                <input type="hidden" id="GeoTagHidden" runat="server" />
                <input type="hidden" id="GeoLattitude" runat="server" />
                <input type="hidden" id="GeoLongitude" runat="server" />
                <input type="hidden" id="GeoAccuracy" runat="server" />
                <input type="hidden" id="GeoAltitude" runat="server" />
            </section>
        </main>

        <script src="assets/js/jquery-3.5.1.js"></script>
        <script src="vendors/@popperjs/popper.min.js"></script>
        <script src="vendors/bootstrap/bootstrap.min.js"></script>
        <script src="assets/js/theme.js"></script>

        <script src="assets/js/chartbot.js"></script>
        <script src="assets/js/customutilities.js"></script>
        <script src="assets/js/ICRModal.js"></script>
        <script>

            try { TakeGeoTag("GeoTagHidden"); } catch (e) { }

            // JavaScript code for handling button clicks and form display
            const button1 = document.getElementById("button1");
            const button2 = document.getElementById("button2");
            const button3 = document.getElementById("button3");
            const form1 = document.getElementById("form1");
            const form2 = document.getElementById("form2");
            const form3 = document.getElementById("form3");

            button1.addEventListener("click", () => {
                resetButtonStyles(1);
                button1.style.backgroundColor = "#50AE30";
                button1.style.color = "white";
                form1.style.display = "block";
                form2.style.display = "none";
                form3.style.display = "none";
            });

            button2.addEventListener("click", () => {
                resetButtonStyles(2);
                button2.style.backgroundColor = "#50AE30";
                button2.style.color = "white";
                form1.style.display = "none";
                form2.style.display = "block";
                form3.style.display = "none";
            });

            button3.addEventListener("click", () => {
                resetButtonStyles(3);
                button3.style.backgroundColor = "#50AE30";
                button3.style.color = "white";
                form1.style.display = "none";
                form2.style.display = "none";
                form3.style.display = "block";
            });

            function resetButtonStyles(FormNo) {
                $("#ResultContainer").html("");
                otpContainer.style.display = "none";
                document.getElementById(`myForm${FormNo}`).style.display = "block";
                document.getElementById(`pran${FormNo}`).value = Pran;
                if (OTPStatus == true) {
                    const myInput = document.getElementById(`myForm${FormNo}`).elements["BtnText"];
                    myInput.innerHTML = "Submit";
                }
                else {
                    const myInput = document.getElementById(`myForm${FormNo}`).elements["BtnText"];
                    myInput.innerHTML = "Get OTP";
                }
                const buttons = document.querySelectorAll("button");
                buttons.forEach(button => {
                    button.style.backgroundColor = "";
                    button.style.color = "";
                });
            }

            document.getElementById("myForm1").addEventListener("submit", function (event) {
                handleFormSubmit(event, 1, "SOTDOWNLOAD");
                // setGeoTag('geotag1', () => {
                //     this.submit();
                // });
            });

            document.getElementById("myForm2").addEventListener("submit", function (event) {
                handleFormSubmit(event, 2, "Holdings");
                // setGeoTag('geotag1', () => {
                //     this.submit();
                // });
            });

            document.getElementById("myForm3").addEventListener("submit", function (event) {
                handleFormSubmit(event, 3, "Transcation");
                // setGeoTag('geotag1', () => {
                //     this.submit();
                // });
            });

            function handleFormSubmit(event, formNumber, RequestType) {
                event.preventDefault(); // Prevent the default form submission

                // Perform form validation
                if (formIsValid(formNumber, RequestType)) {
                    // Send a request to the server to generate and send the OTP
                    sendOTPRequest(formNumber, RequestType).then(() => showOTPModal(formNumber, RequestType)).catch(handleError);
                } else {
                    // Display validation errors
                    displayValidationErrors();
                }
            }

            var Pran = "";
            function sendOTPRequest(formNumber, RequestType) {
                const pranInput = document.getElementById(`pran${formNumber}`);
                Pran = pranInput.value;
                const email = document.querySelector(`form#myForm${formNumber} input[placeholder="Email"]`)?.value || '';

                var GeoTag = $("#GeoTagHidden").val();
                $("#GeoLattitude").val("null");
                $("#GeoLongitude").val("null");
                $("#GeoAccuracy").val("null");
                $("#GeoAltitude").val("null");
                if (GeoTag != "") {
                    var GTag = $.parseJSON(GeoTag);
                    if (GTag.error == "0") {
                        $("#GeoLattitude").val("'" + GTag.latitude + "'");
                        $("#GeoLongitude").val("'" + GTag.longitude + "'");
                        $("#GeoAccuracy").val("'" + GTag.accuracy + "'");
                        $("#GeoAltitude").val("'" + GTag.altitude + "'");
                    }
                }

                var PostData = "{\"Req\":\"1\",\"PranNo\":\"" + Pran + "\"";
                PostData += ",\"GLAT\":\"" + $("#GeoLattitude").val() + "\"";
                PostData += ",\"GLNG\":\"" + $("#GeoLongitude").val() + "\"";
                PostData += ",\"GACC\":\"" + $("#GeoAccuracy").val() + "\"";
                PostData += ",\"GALT\":\"" + $("#GeoAltitude").val() + "\"";
                PostData += ",\"NPSTYPE\":\"" + RequestType + "\"";
                if (RequestType == "SOTDOWNLOAD") {
                    PostData += ",\"RODETAILS\":{\"financialYear\":\"" + $("#financialYear1").val() + "\",\"quarter\":\"" + $("#quarter1").val() + "\",\"tierType\":\"" + $("#tierType1").val() + "\",\"language\":\"" + $("#language1").val() + "\"}";
                }
                PostData += "}";
                ICRModalLoader("Please wait submission in progress...");
                return fetch("SourceFiles/NSDLNPSRequest.aspx", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: PostData,
                })
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error(`HTTP error! Status: ${response.status}`);
                        }
                        return response.text(); // Use text() instead of json() to handle potential non-JSON responses
                    })
                    .then((text) => {
                        try {
                            const data = JSON.parse(text);
                            if (data.success) {
                                if (data.Sessionstate == "N") { OTPStatus = false; }
                                else if (data.Sessionstate == "Y") { OTPStatus = true; }
                                if (OTPStatus == true) { GetRequestedData(RequestType) }
                                $("#displayMobile").html(data.description);
                                $("#ICRMessageCloseButton").click();
                                return Promise.resolve();
                            } else {
                                $("#ICRMessageCloseButton").click();
                                return Promise.reject(data.description);
                            }
                        } catch (error) {
                            $("#ICRMessageCloseButton").click();
                            throw new Error("Invalid JSON response");
                        }
                    })
                    .catch((error) => {
                        $("#ICRMessageCloseButton").click();
                        console.error("Error during fetch:", error);
                        return Promise.reject(error);
                    });
            }

            function showOTPModal(formNumber, RequestType) {
                // Hide all forms
                if (OTPStatus == true) { return false; }
                document.querySelectorAll("form").forEach(form => form.style.display = "none");

                // Display the OTP container
                const pranInput = document.getElementById(`pran${formNumber}`);
                document.getElementById(`otpContainer`).style.display = "block";
                // document.getElementById(`displayMobile`).textContent = `+9********${pranInput.value.slice(-4)}`;
                // document.getElementById(`displayEmail`).textContent = document.querySelector(`form#myForm${formNumber} input[placeholder="Email"]`)?.value.replace(/^(.{2})(.*)(.@.*)$/, '$1***$3') || '';

                // Add event listener to the Verify OTP button
                const verifyOTPBtn = document.getElementById(`verifyOTPBtn`);
                verifyOTPBtn.onclick = function () {
                    verifyOTP(formNumber, RequestType);
                };
            }

            var OTPStatus = false;
            function verifyOTP(formNumber, RequestType) {

                const otpInput = document.getElementById('otpInput').value;
                if (document.getElementById('otpInput').value == "") { alert("Enter OTP"); return false; }

                var PostData = "{\"Req\":\"2\",\"OTPValue\":\"" + otpInput + "\"}";
                ICRModalLoader("Please wait submission in progress...");
                fetch("SourceFiles/NSDLNPSRequest.aspx", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: PostData,
                })
                    .then((response) => {
                        if (!response.ok) {
                            $("#ICRMessageCloseButton").click();
                            throw new Error(`HTTP error! Status: ${response.status}`);
                        }
                        return response.text(); // Use text() instead of json() to handle potential non-JSON responses
                    })
                    .then((text) => {
                        try {
                            const data = JSON.parse(text);
                            if (data.success) {
                                // OTP verification successful, proceed with form submission
                                OTPStatus = true;
                                GetRequestedData(RequestType);
                                $("#ICRMessageCloseButton").click();
                                // document.getElementById(`myForm${formNumber}`).submit();
                            } else {
                                // OTP verification failed, display an error message
                                handleError(data.description);
                            }
                        } catch (error) {
                            $("#ICRMessageCloseButton").click();
                            throw new Error("Invalid JSON response");
                        }
                    })
                    .catch((error) => handleError(error));
            }

            function GetRequestedData(RequestType) {
                otpContainer.style.display = "none";
                document.querySelectorAll("form").forEach(form => form.style.display = "none");
                $("#ResultContainer").html("");
                var Url = "";
                if (RequestType == "Holdings") {
                    Url = "SourceFiles/NPSHoldingsDetail.aspx";
                }
                else if (RequestType == "Transcation") {
                    Url = "SourceFiles/NPSTranscationDetail.aspx";
                }
                else if (RequestType == "SOTDOWNLOAD") {
                    Url = "SourceFiles/NPSSOT.aspx";
                }
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
                        try {
                            $("#ResultContainer").html(text);
                            if (RequestType == "SOTDOWNLOAD") {
                                SOTbtn.style.display = "none";
                                SOTdownloadbtn.style.display = "block";
                                myForm1.style.display = "block";
                                $("#ResultContainer").html("");
                                var response = $.parseJSON(text)
                                $.each(response, function (index, Obj) {
                                    // if(Obj.APIName=="SUBSCRIBERDETAILSVIEW")
                                    // {
                                    //     var Transcation = $.parseJSON(Obj.Response);
                                    //     $("#SOTPran").html(Transcation.pran);
                                    //     $("#SOTPranName").html(Transcation.personalDtlsForm.subFName);
                                    // }
                                    if (Obj.APIName == "SOTDOWNLOAD") {
                                        var guid = createGuid();
                                        var pdfextract = $.parseJSON(Obj.Response);
                                        var filename = pdfextract.pran + "_" + guid;
                                        var atobData = atob(pdfextract.pdfbuffer);
                                        var num = new Array(atobData.length);
                                        for (var i = 0; i < atobData.length; i++) {
                                            num[i] = atobData.charCodeAt(i);
                                        }
                                        var pdfData = new Uint8Array(num);

                                        //var blob = new Blob([pdfData], { type: 'text/plain' });
                                        blob = new Blob([pdfData], { type: 'application/pdf;base64' });
                                        var url = URL.createObjectURL(blob);

                                        var a = document.getElementById('SOTdownloadbtn');
                                        if (/Android/i.test(navigator.userAgent)) {
                                            a.href = "https://www.integratedindia.in/Sourcefiles/NPSSOT.aspx?DM=1";
                                            a.target = "_blank";
                                        }
                                        else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
                                            window.open("https://www.integratedindia.in/Sourcefiles/NPSSOT.aspx?DM=1");
                                        }
                                        else {
                                            a.href = url;
                                            a.download = filename + '.pdf';
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
                // Display the error message to the user
                $("#ICRMessageCloseButton").click();
                console.error(error);
                alert(error.message || error);
            }

            function formIsValid(formNumber, RequestType) {
                let isValid = true;
                const pranInput = document.getElementById(`pran${formNumber}`);
                const emailInput = document.querySelector(`form#myForm${formNumber} input[placeholder="Email"]`);

                // Clear previous validation errors
                clearValidationErrors();

                // Validate PRAN
                const pranRegex = /^\d{12}$/;
                if (!pranRegex.test(pranInput.value.trim())) {
                    isValid = false;
                    setInputError(pranInput, "Please enter a valid 12-digit PRAN number");
                }

                // Validate email (optional)
                if (emailInput) {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (emailInput.value.trim() !== "" && !emailRegex.test(emailInput.value.trim())) {
                        isValid = false;
                        setInputError(emailInput, "Please enter a valid email address");
                    }
                }

                return isValid;
            }

            function setInputError(input, errorMessage) {
                const errorElement = document.createElement("div");
                errorElement.classList.add("error-message");
                errorElement.textContent = errorMessage;
                input.parentNode.appendChild(errorElement);
            }

            function clearValidationErrors() {
                const errorMessages = document.querySelectorAll(".error-message");
                errorMessages.forEach((errorMessage) => errorMessage.remove());
            }

            function displayValidationErrors() {
                // Add code to display validation errors to the user
                // You can create a separate container or use alert messages
                alert("Please fix the validation errors and try again.");
            }

            function createGuid() {
                function S4() {
                    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
                }
                return (S4() + S4() + "-" + S4() + "-4" + S4().substr(0, 3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();
            }

            function SOTCLKDWN() {
                if (/Android/i.test(navigator.userAgent)) {
                    window.open("https:/www.integratedindia.in/Sourcefiles/NPSSOT.aspx?DM=1");
                }
                else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
                    window.open("https://www.integratedindia.in/Sourcefiles/NPSSOT.aspx?DM=1");
                }
                else {
                    window.open("https://www.integratedindia.in/Sourcefiles/NPSSOT.aspx?DM=1");
                }
            }
        </script>
    </body>

    </html>