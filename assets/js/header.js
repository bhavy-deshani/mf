class Header {
  constructor() {
    this.element = document.createElement("div");
    this.element.className = " w-100 position-relative";
    this.element.style.zIndex = "1049"; // Ensure a high z-index
    // this.element.style.position = "fixed"; // Ensure it is fixed
    this.element.innerHTML = `
        <main class="main">
    <header class="fixed-top bg-white" id="top">
        <div class="custom-header-container">
            <div class="custom-logo-container">
                <a href="/">
                    <img src="assets/images/gallery/integrated-enterprises-india-pvt-ltd.webp" alt="Integrated Logo"
                        class="custom-logo">
                </a>
            </div>
            <div class="custom-toggle-button" onclick="openSidebar()">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <nav class="custom-navbar">
                <ul class="p-0 m-0">
                    <li>
                        <a href="#" class="fs--14 fw-medium">Products <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                viewBox="0 -960 960 960" width="24px" fill="#1C355E">
                                <path d="M480-360 280-560h400L480-360Z" />
                            </svg> </a>
                        <!-- Dropdown for Products -->
                        <ul class="custom-dropdown custom-dropdown-w1 ">
                            <div class="row row-cols-3 bg-white shadow-b border rounded-2 p-3 mt-3">
                                <div class="col py-2">
                                    <a href="equity-derivatives-investment-option.html" class="m-0 p-0 text-b">
                                        <li class="d-flex gap-2 hover-effect mb-3 ">
                                            <div class="m-y">
                                                <img src="assets/images/illustrations/equity-icon.png" alt="">
                                            </div>
                                            <div class="lh-1">
                                                <p class="lh-1 m-0 fs--14 p-0 fw-bold">Equity & Derivatives</p>
                                                <small class="lh-1 fw-medium">Engage in stock market trading</small>
                                            </div>
                                            <div class="ani"></div> <!-- Background bar -->
                                        </li>
                                    </a>
                                </div>
                                <div class="col py-2">
                                    <a href="Commodity-trading.html" class="m-0 p-0 text-b">
                                        <li class="d-flex gap-2 hover-effect mb-3 ">
                                            <div class="m-y">
                                                <img src="assets/images/illustrations/Commodity-icon.png" alt="">
                                            </div>
                                            <div class="lh-1">
                                                <p class="lh-1 m-0 fs--14 fw-bold p-0">Commodity</p>
                                                <small class="lh-1 fw-medium">Invest in tangible assets</small>
                                            </div>
                                            <div class="ani"></div> <!-- Background bar -->
                                        </li>
                                    </a>
                                </div>
                                <div class="col py-2">
                                    <a href="currency-trading.html" class="m-0 p-0 text-b">
                                        <li class="d-flex gap-2 hover-effect mb-3 ">
                                            <div class="m-y">
                                                <img src="assets/images/illustrations/Currency-icon.png" alt="">
                                            </div>
                                            <div class="lh-1">
                                                <p class="lh-1 m-0 fs--14 fw-bold p-0">Currency</p>
                                                <small class="lh-1 fw-medium">Explore opportunities in forex markets</small>
                                            </div>
                                            <div class="ani"></div> <!-- Background bar -->
                                        </li>
                                    </a>
                                </div>
                                <div class="col py-2">
                                    <a href="best-mutual-funds-investment.html" class="m-0 p-0 text-b">
                                        <li class="d-flex gap-2 hover-effect mb-3">
                                            <div class="m-y">
                                                <img src="assets/images/illustrations/mutu-icon.png" alt="">
                                            </div>
                                            <div class="lh-1">
                                                <p class="lh-1 m-0 fs--14 fw-bold p-0">Mutual Fund</p>
                                                <small class="lh-1 fw-medium">Invest collectively for diversified growth</small>
                                            </div>
                                            <div class="ani"></div> <!-- Background bar -->
                                        </li>
                                    </a>
                                </div>

                                <div class="col py-2">
                                    <a href="fixed-deposit-income-option.html" class="m-0 p-0 text-b">
                                        <li class="d-flex gap-2 hover-effect mb-3">
                                            <div class="m-y">
                                                <img src="assets/images/illustrations/fixed-icon.png" alt="">
                                            </div>
                                            <div class="lh-1">
                                                <p class="lh-1 m-0 fs--14 fw-bold p-0">Fixed Income</p>
                                                <small class="lh-1 fw-medium">Earn regular income from investments</small>
                                            </div>
                                            <div class="ani"></div> <!-- Background bar -->
                                        </li>
                                    </a>
                                </div>
                                <div class="col py-2">
                                    <a href="demat-stock-trading-account.html" class="m-0 p-0 text-b">
                                        <li class="d-flex gap-2 hover-effect mb-3">
                                            <div class="m-y">
                                                <img src="assets/images/illustrations/demao-icon.png" alt="">
                                            </div>
                                            <div class="lh-1">
                                                <p class="lh-1 m-0 fs--14 fw-bold p-0">Demat Account</p>
                                                <small class="lh-1 fw-medium">Hold securities without physical risks</small>
                                            </div>
                                            <div class="ani"></div> <!-- Background bar -->
                                        </li>
                                    </a>
                                </div>
                                <div class="col py-2">
                                    <a href="health-life-insurance-providers.html" class="m-0 p-0 text-b">
                                        <li class="d-flex gap-2 hover-effect mb-3">
                                            <div class="m-y">
                                                <img src="assets/images/illustrations/insurance-icon.png" alt="">
                                            </div>
                                            <div class="lh-1">
                                                <p class="lh-1 m-0 fs--14 fw-bold p-0">Life & Health Insurance</p>
                                                <small class="lh-1 fw-medium">Secure your family's financial future</small>
                                            </div>
                                            <div class="ani"></div> <!-- Background bar -->
                                        </li>
                                    </a>
                                </div>
                                <div class="col py-2">
                                    <a href="nps-national-pension-system.html" class="m-0 p-0 text-b">

                                        <li class="d-flex gap-2 hover-effect mb-3">
                                            <div class="m-y">
                                                <img src="assets/images/illustrations/nps-icon.png" alt="">
                                            </div>
                                            <div class="lh-1">
                                                <p class="lh-1 m-0 fs--14 fw-bold p-0">NPS</p>
                                                <small class="lh-1 fw-medium">Build a robust retirement fund</small>
                                            </div>
                                            <div class="ani"></div> <!-- Background bar -->
                                        </li>
                                    </a>
                                </div>
                                <div class="col py-2">
                                    <a href="pan-card-tan-tds-services.html" class="m-0 p-0 text-b">

                                        <li class="d-flex gap-2 hover-effect mb-3">
                                            <div class="m-y">
                                                <img src="assets/images/illustrations/pan-tan-icon.png" alt="">
                                            </div>
                                            <div class="lh-1">
                                                <p class="lh-1 m-0 fs--14 fw-bold p-0">PAN/TAX Services</p>
                                                <small class="lh-1 fw-medium">Effortless tax management solutions</small>
                                            </div>
                                            <div class="ani"></div> <!-- Background bar -->
                                        </li>
                                    </a>
                                </div>
                                <div class="col py-2">
                                    <a href="upcoming-latest-ipo-news.html" class="m-0 p-0 text-b">

                                        <li class="d-flex gap-2 hover-effect mb-3">
                                            <div class="m-y">
                                                <img src="assets/images/illustrations/ipo-icon.png" alt="">
                                            </div>
                                            <div class="lh-1">
                                                <p class="lh-1 m-0 fs--14 fw-bold p-0">IPO</p>
                                                <small class="lh-1 fw-medium">Get early access to stocks</small>
                                            </div>
                                            <div class="ani"></div> <!-- Background bar -->
                                        </li>
                                    </a>
                                </div>
                                <div class="col py-2">
                                    <a href="secretarial-services.html" class="m-0 p-0 text-b">

                                        <li class="d-flex gap-2 hover-effect mb-3">
                                            <div class="m-y">
                                                <img src="assets/images/illustrations/secretarial-icon.png" alt="">
                                            </div>
                                            <div class="lh-1">
                                                <p class="lh-1 m-0 fs--14 fw-bold p-0">Secretarial Services</p>
                                                <small class="lh-1 fw-medium">Professional support for regulatory
                                                    compliance</small>
                                            </div>
                                            <div class="ani"></div> <!-- Background bar -->
                                        </li>
                                    </a>
                                </div>
                                <div class="col py-2">
                                    <a href="registry-services.html" class="m-0 p-0 text-b">

                                        <li class="d-flex gap-2 hover-effect mb-3">
                                            <div class="m-y">
                                                <img src="assets/images/illustrations/Registry-icon.png" alt="">
                                            </div>
                                            <div class="lh-1">
                                                <p class="lh-1 m-0 fs--14 fw-bold p-0">Registry Services</p>
                                                <small class="lh-1 fw-medium">Streamline your investment processes</small>
                                            </div>
                                            <div class="ani"></div> <!-- Background bar -->
                                        </li>
                                    </a>
                                </div>
                                <div class="col py-2">
                                    <a href="Gold-ETF-and-Sovereign-Gold-Bond.html" class="m-0 p-0 text-b">

                                        <li class="d-flex gap-2 hover-effect mb-3">
                                            <div class="m-y">
                                                <img src="assets/images/illustrations/gold-icon.png" alt="">
                                            </div>
                                            <div class="lh-1">
                                                <p class="lh-1 m-0 fs--14 fw-bold p-0">Gold</p>
                                                <small class="lh-1 fw-medium">Invest in Gold ETFs for easy gold exposure!</small>
                                            </div>
                                            <div class="ani"></div> <!-- Background bar -->
                                        </li>
                                    </a>
                                </div>
                            </div>
                        </ul>
                    </li>
                    <li><a href="about-us.html" class="fs--14 fw-medium">About Us</a></li>
                    <li><a href="#" class="fs--14 fw-medium">Knowledge Center <svg xmlns="http://www.w3.org/2000/svg"
                                height="24px" viewBox="0 -960 960 960" width="24px" fill="#1C355E">
                                <path d="M480-360 280-560h400L480-360Z" />
                            </svg></a>
                        <ul class="custom-dropdown  custom-dropdown-w2  ">
                            <div class="row row-cols-1 bg-white shadow-b border rounded-2 p-3 mt-3">
                                <div class="col py-2">
                                    <a href="financial-calculators.html" class="p-0 m-0 text-b">
                                        <li class="d-flex gap-2 hover-effect mb-3 hover-effect">
                                            <div class="m-y">
                                                <img src="assets/images/illustrations/Calculators-con.png" alt="">
                                            </div>
                                            <div class="lh-1">
                                                <p class="lh-1 m-0 fs--14 p-0 fw-bold">Calculators</p>
                                                <small class="lh-1 fw-medium">Estimate your investment growth easily</small>
                                            </div>
                                            <div class="ani"></div> <!-- Background bar -->
                                        </li>
                                    </a>
                                </div>
                                <div class="col py-2">
                                    <a href="blogs.html" class="p-0 m-0 text-b">
                                        <li class="d-flex gap-2 hover-effect mb-3 hover-effect">
                                            <div class="m-y">
                                                <img src="assets/images/illustrations/blogs-icon.png" alt="">
                                            </div>
                                            <div class="lh-1">
                                                <p class="lh-1 m-0 fs--14 p-0 fw-bold">Blogs</p>
                                                <small class="lh-1 fw-medium">Stay informed with expert articles</small>
                                            </div>
                                            <div class="ani"></div> <!-- Background bar -->
                                        </li>
                                    </a>
                                </div>
                                <div class="col py-2">
                                    <a href="faqs-frequently-asked-questions.html" class="p-0 m-0 text-b">
                                        <li class="d-flex gap-2 hover-effect mb-3 hover-effect">
                                            <div class="m-y">
                                                <img src="assets/images/illustrations/faqs-icon.png" alt="">
                                            </div>
                                            <div class="lh-1">
                                                <p class="lh-1 m-0 fs--14 p-0 fw-bold">FAQs</p>
                                                <small class="lh-1 fw-medium">Find quick answers to inquiries</small>
                                            </div>
                                            <div class="ani"></div> <!-- Background bar -->
                                        </li>
                                    </a>
                                </div>
                                 <div class="col py-2">
                                    <a href="gallery.html" class="p-0 m-0 text-b">
                                        <li class="d-flex gap-2 hover-effect mb-3 hover-effect">
                                            <div class="m-y">
                                                <img src="assets/images/illustrations/gallery.svg" alt="">
                                            </div>
                                            <div class="lh-1">
                                                <p class="lh-1 m-0 fs--14 p-0 fw-bold">Gallery</p>
                                                <!--<small class="lh-1 fw-medium">Find quick answers to inquiries</small> -->
                                            </div>
                                            <div class="ani"></div> <!-- Background bar -->
                                        </li>
                                    </a>
                                </div>
                            </div>
                        </ul>
                    </li>
                    <li>
                        <a href="#" class="fs--14 fw-medium">Research <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                viewBox="0 -960 960 960" width="24px" fill="#1C355E">
                                <path d="M480-360 280-560h400L480-360Z" />
                            </svg> </a>

                        <ul class="custom-dropdown custom-dropdown-w3 ">
                            <div class="row row-cols-3 bg-white shadow-b border rounded-2 p-3 mt-3">
                                <div class="col py-2">
                                    <a href="daily-market-insights.html" class="m-0 p-0 text-b">
                                        <li class="d-flex gap-2 hover-effect mb-3 ">
                                            <div class="m-y">
                                                <img src="assets/images/gallery/daily-market-insight.webp" alt="">
                                            </div>
                                            <div class="lh-1">
                                                <p class="lh-1 m-0 fs--14 p-0 fw-bold">Daily Market Insights</p>
                                                <small class="lh-1 fw-medium">Explore trends, insights, and analysis.</small>
                                            </div>
                                            <div class="ani"></div> <!-- Background bar -->
                                        </li>
                                    </a>
                                </div>
                                <div class="col py-2">
                                    <a href="equity-fo.html" class="m-0 p-0 text-b">
                                        <li class="d-flex gap-2 hover-effect mb-3 ">
                                            <div class="m-y">
                                                <img src="assets/images/gallery/equity-f-o.webp" alt="">
                                            </div>
                                            <div class="lh-1">
                                                <p class="lh-1 m-0 fs--14 fw-bold p-0">Equity/F&O</p>
                                                <small class="lh-1 fw-medium"> Stock recommendations: Buy, Short, Gains</small>
                                            </div>
                                            <div class="ani"></div> <!-- Background bar -->
                                        </li>
                                    </a>
                                </div>
                                <div class="col py-2">
                                    <a href="trading-stratergy.html" class="m-0 p-0 text-b">
                                        <li class="d-flex gap-2 hover-effect mb-3 ">
                                            <div class="m-y">
                                                <img src="assets/images/gallery/trading-strategy.webp" alt="">
                                            </div>
                                            <div class="lh-1">
                                                <p class="lh-1 m-0 fs--14 fw-bold p-0">Trading Stratergy</p>
                                                <small class="lh-1 fw-medium">Proven Trading Strategies for Success</small>
                                            </div>
                                            <div class="ani"></div> <!-- Background bar -->
                                        </li>
                                    </a>
                                </div>
                                <div class="col py-2">
                                    <a href="stellar-picks.html" class="m-0 p-0 text-b">
                                        <li class="d-flex gap-2 hover-effect mb-3">
                                            <div class="m-y">
                                                <img src="assets/images/gallery/stellar-picks.webp" alt="">
                                            </div>
                                            <div class="lh-1">
                                                <p class="lh-1 m-0 fs--14 fw-bold p-0">Stellar Picks</p>
                                                <small class="lh-1 fw-medium">Tailored momentum picks</small>
                                            </div>
                                            <div class="ani"></div> <!-- Background bar -->
                                        </li>
                                    </a>
                                </div>
                                <div class="col py-2">
                                    <a href="technical-report.html" class="m-0 p-0 text-b">
                                        <li class="d-flex gap-2 hover-effect mb-3">
                                            <div class="m-y">
                                                <img src="assets/images/gallery/technical-report.webp" alt="">
                                            </div>
                                            <div class="lh-1">
                                                <p class="lh-1 m-0 fs--14 fw-bold p-0">Technical Reports</p>
                                                <small class="lh-1 fw-medium">Stock Recommendations via Technical Analysis</small>
                                            </div>
                                            <div class="ani"></div> <!-- Background bar -->
                                        </li>
                                    </a>
                                </div>
                                <div class="col py-2">
                                    <a href="special-reports.html" class="m-0 p-0 text-b">
                                        <li class="d-flex gap-2 hover-effect mb-3">
                                            <div class="m-y">
                                                <img src="assets/images/gallery/special-reports.webp" alt="">
                                            </div>
                                            <div class="lh-1">
                                                <p class="lh-1 m-0 fs--14 fw-bold p-0">Special Reports</p>
                                                <small class="lh-1 fw-medium"> Exclusive Insights and Special Reports</small>
                                            </div>
                                            <div class="ani"></div> <!-- Background bar -->
                                        </li>
                                    </a>
                                </div>
                                <div class="col py-2">
                                    <a href="under-constructions.html" class="m-0 p-0 text-b">

                                        <li class="d-flex gap-2 hover-effect mb-3">
                                            <div class="m-y">
                                                <img src="assets/images/gallery/basket.webp" alt="">
                                            </div>
                                            <div class="lh-1">
                                                <p class="lh-1 m-0 fs--14 fw-bold p-0">Basket</p>
                                                <small class="lh-1 fw-medium">Curated Basket for Long-Term Growth</small>
                                            </div>
                                            <div class="ani"></div> <!-- Background bar -->
                                        </li>
                                    </a>
                                </div>
                                </div>
                        </ul>
                    </li>
                      <li>
                            <a href="#" class="fs--14 fw-medium">Event <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                    viewBox="0 -960 960 960" width="24px" fill="#1C355E">
                                    <path d="M480-360 280-560h400L480-360Z" />
                                </svg> </a>
    
                            <ul class="custom-dropdown custom-dropdown-w2 ">
                                <div class="row row-cols-1 bg-white shadow-b border rounded-2 p-3 mt-3">
                                    <div class="col py-2">
                                        <a href="gallery.html" class="p-0 m-0 text-b">
                                            <li class="d-flex gap-2 hover-effect mb-3 hover-effect">
                                                <div class="m-y">
                                                    <img src="assets/images/illustrations/gallery.svg" alt="">
                                                </div>
                                                <div class="lh-1">
                                                    <p class="lh-1 m-0 fs--14 p-0 fw-bold">Austin, texas</p>
                                                </div>
                                                <div class="ani"></div> <!-- Background bar -->
                                            </li>
                                        </a>
                                    </div>
                                </div>
                            </ul>
                        </li>
                    <li><a href="nri-investments.html" class="fs--14 fw-medium">NRI</a></li>
                    <li><a href="KYC.html" class="fs--14 fw-medium">KYC</a></li>
                    <li><a href="#" class="fs--14 fw-medium">Login/Register <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                viewBox="0 -960 960 960" width="24px" fill="#1C355E">
                                <path d="M480-360 280-560h400L480-360Z" />
                            </svg></a>
                        <ul class="custom-dropdown  custom-dropdown-w2 ">
                            <div class="row row-cols-1 bg-white shadow-b border rounded-2 p-3 mt-3">
                                <div class="col">
                                    <a href="" id="app-link2" class="p-0 m-0 text-b">
                                        <li class="d-flex gap-2 hover-effect mb-3 hover-effect">
                                            <div class="m-y">
                                                <img src="assets/images/illustrations/Equity.png" alt="">
                                            </div>
                                            <div class="lh-1">
                                                <p class="lh-1 m-0 fs--14 p-0 fw-bold">Equity</p>
                                                <small class="lh-1 fw-medium">Secure login to equity trading</small>

                                            </div>
                                            <div class="ani"></div> <!-- Background bar -->
                                        </li>
                                    </a>
                                </div>
                                <div class="col">
                                    <a href="mf-dp.html" class="p-0 m-0 text-b">
                                        <li class="d-flex gap-2 hover-effect mb-3 hover-effect">
                                            <div class="m-y">
                                                <img src="assets/images/illustrations/mf-dp.png" alt="">
                                            </div>
                                            <div class="lh-1">
                                                <p class="lh-1 m-0 fs--14 p-0 fw-bold">MF & DP</p>
                                                <small class="lh-1 fw-medium">Seamless Mutual Funds and Demat services</small>
                                            </div>
                                            <div class="ani"></div> <!-- Background bar -->
                                        </li>
                                    </a>
                                </div>
                                <div class="col">
                                    <a href="nps-login.html" class="p-0 m-0 text-b">
                                        <li class="d-flex gap-2 hover-effect mb-3 hover-effect">
                                            <div class="m-y">
                                                <img src="assets/images/illustrations/nps-login.png" alt="">
                                            </div>
                                            <div class="lh-1">
                                                <p class="lh-1 m-0 fs--14 p-0 fw-bold">NPS</p>
                                                <small class="lh-1 fw-medium">Access your NPS account here</small>
                                            </div>
                                            <div class="ani"></div> <!-- Background bar -->
                                        </li>
                                    </a>
                                </div>
                                <div class="col">
                                    <a href="/sp/businesspartner/FRLogin/Login.aspx" target="_blank"
                                        class="p-0 m-0 text-b">
                                        <li class="d-flex gap-2 hover-effect mb-3 hover-effect">
                                            <div class="m-y">
                                                <img src="assets/images/illustrations/franchisee.png" alt="">
                                            </div>
                                            <div class="lh-1">
                                                <p class="lh-1 m-0 fs--14 p-0 fw-bold">Franchisee</p>
                                                <small class="lh-1 fw-medium">Login to your franchisee account</small>

                                            </div>
                                            <div class="ani"></div> <!-- Background bar -->
                                        </li>
                                    </a>
                                </div>
                                <div class="col">
                                    <a href="https://bo.integrated.investments/boldclientlevelH/#Login" target="_blank"
                                        class="p-0 m-0 text-b">
                                        <li class="d-flex gap-2 hover-effect mb-3 hover-effect">
                                            <div class="m-y">
                                                <img src="assets/images/illustrations/ld-back-office.png" alt="">
                                            </div>
                                            <div class="lh-1">
                                                <p class="lh-1 m-0 fs--14 p-0 fw-bold">LD Back Office</p>
                                                <small class="lh-1 fw-medium">Login to access your trading details</small>
                                            </div>
                                            <div class="ani"></div> <!-- Background bar -->
                                        </li>
                                    </a>
                                </div>
                            </div>
                        </ul>

                    </li>
                    <li class="btn-11"><a href="instant-open-free-trading-demat-account-online.html"
                            class=" text-white fs--14">Open DigiTrade A/C</a></li>
                    <li>
                        <!--  <li>
              <div id="p9divmenu" class="fs--14 fw-medium">
        <label for="P9LngDdl" class="m-0" id="languageLabel">
        <img 
            src="assets/images/gallery/language.png" 
            alt="Language Icon" 
            class="img-fluid m-y" 
            onclick="openDropdown()"
        />
        </label>
        <select class="text-b cursor-p"
        id="P9LngDdl" 
        onchange="RedirectUrl(this.value)">
        <option class="fs--14 text-b " value="English">English</option>
        <option class="fs--14 text-b " value="hindi">Hindi</option>
        <option class="fs--14 text-b " value="tamil">Tamil</option>
        </select>
    </div>
            </li>-->
                </ul>
            </nav>
        </div>
    </header>   
    <!-- Mobile Sidebar -->
    <nav class="custom-sidebar" id="custom-sidebar">
        <span class="custom-close-btn" onclick="closeSidebar()">&times;</span>
        <ul>
            <li class="custom-dropdown-parent">
                <a href="#" onclick="toggleDropdown(event)">Products <svg xmlns="http://www.w3.org/2000/svg"
                        height="24px" viewBox="0 -960 960 960" width="24px" fill="#1C355E">
                        <path d="M480-360 280-560h400L480-360Z" />
                    </svg></a>
                <ul class="custom-dropdown-sidebar">
                    <li><a href="equity-derivatives-investment-option.html">Equity & Derivatives</a></li>
                    <li><a href="Commodity-trading.html">Commodities</a></li>
                    <li><a href="currency-trading.html">Currency</a></li>
                    <li><a href="best-mutual-funds-investment.html">Mutual Fund</a></li>
                    <li><a href="demat-stock-trading-account.html">Demat Account</a></li>
                    <li><a href="fixed-deposit-income-option.html">Fixed Income</a></li>
                    <li><a href="health-life-insurance-providers.html">Life & Health Insurance</a></li>
                    <li><a href="nps-national-pension-system.html">NPS</a></li>
                    <li><a href="pan-card-tan-tds-services.html">PAN/Tax Services</a></li>
                    <li><a href="upcoming-latest-ipo-news.html">IPO</a></li>
                    <li><a href="registry-services.html">Registry Services</a></li>
                    <li><a href="secretarial-services.html">Secretarial Services</a></li>
                    <li><a href="Gold-ETF-and-Sovereign-Gold-Bond.html">Gold</a></li>
                </ul>
            </li>
            <li><a href="about-us.html">About Us</a></li>
            <li class="custom-dropdown-parent">
                <a href="#" onclick="toggleDropdown(event)">Knowledge Center <svg xmlns="http://www.w3.org/2000/svg"
                        height="24px" viewBox="0 -960 960 960" width="24px" fill="#1C355E">
                        <path d="M480-360 280-560h400L480-360Z" />
                    </svg></a>
                <ul class="custom-dropdown-sidebar">
                    <li><a href="financial-calculators.html">Calculators</a></li>
                    <li><a href="blogs.html">Blogs</a></li>
                    <li><a href="faqs-frequently-asked-questions.html">FAQ’s</a></li>
                </ul>
            </li>
            <li class="custom-dropdown-parent"><a href="#" onclick="toggleDropdown(event)">Research <svg xmlns="http://www.w3.org/2000/svg"
                        height="24px" viewBox="0 -960 960 960" width="24px" fill="#1C355E">
                        <path d="M480-360 280-560h400L480-360Z" />
                    </svg></a>
            <ul class="custom-dropdown-sidebar">
                    <li><a href="daily-market-insights.html">Daily Market Insights</a></li>
                    <li><a href="equity-fo.html">Equity/F&O</a></li>
                    <li><a href="trading-stratergy.html">Trading Strategy</a></li>
                    <li><a href="stellar-picks.html">Stellar Picks</a></li>
                    <li><a href="technical-report.html">Technical Reports</a></li>
                    <li><a href="special-reports.html">Special Reports</a></li>
                    <li><a href="under-constructions.html">Basket</a></li>
                </ul>
            </li>
            <li><a href="nri-investments.html">NRI</a></li>
            <li><a href="KYC.html">KYC</a></li>
            <li class="custom-dropdown-parent">
                <a href="#" onclick="toggleDropdown(event)">Login/Register <svg xmlns="http://www.w3.org/2000/svg"
                        height="24px" viewBox="0 -960 960 960" width="24px" fill="#1C355E">
                        <path d="M480-360 280-560h400L480-360Z" />
                    </svg></a>
                <ul class="custom-dropdown-sidebar">
                    <li><a class="m-0 p-0 d-md-none " href="https://bo.integrated.investments/iinvest.asp" >Equity</a></li>
                    <li><a class="m-0 p-0 d-none d-md-block " href="https://bo.integrated.investments/iinvest.asp" >Equity</a></li>
                    <li><a class="m-0 p-0" href="mf-dp.html">MF & DP</a></li>
                    <li><a class="m-0 p-0" href="nps-login.html">NPS</a></li>
                    <li><a class="m-0 p-0" href="/sp/businesspartner/FRLogin/Login.aspx" target="_blank">Franchisee</a>
                    </li>
                    <li><a class="m-0 p-0" href="https://bo.integrated.investments/boldclientlevelH/#Login"
                            target="_blank">LD
                            Back Office</a></li>
                </ul>
            </li>
            <li class=""><a href="instant-open-free-trading-demat-account-online.html">Open DigiTrade A/C</a></li>
            <!-- <li>
          <div id="p9divmenu" class="">
            <label for="P9LngDdl" class="m-0" id="languageLabel">
              <img src="assets/images/gallery/language.png" alt="Language Icon" class="img-fluid m-y"
                onclick="openDropdown()" />
            </label>
            <select class="text-b cursor-p" id="P9LngDdl" onchange="RedirectUrl(this.value)">
              <option class="fs--14 text-b " value="English">English</option>
              <option class="fs--14 text-b " value="hindi">Hindi</option>
              <option class="fs--14 text-b " value="tamil">Tamil</option>
            </select>
          </div>
        </li> -->
        </ul>
    </nav>
</main>
<div class="position-fixed bottom-0 end-0 pb-md-2  z-9 col-4 col-sm-2 col-md-3 col-lg-2 col-xl-1">
    <!-- QR Code Floating Widget -->
    <div class="col-8 m-auto">
        <div class="qr-code" onclick="openQrModal()">
            <div class="col-10 m-auto">
                <img src="assets/images/gallery/qr-gif.gif" class="img-fluid" alt="QR Code">
            </div>
        </div>
        <p class="lh-1 text-center text-white bg-b fs--2 fw-bold p-1 rounded-2">Click Here</p>
    </div>
    <div class="">
         <div id="init" class="col-12 pb-md-2 ">
              <div class="col-12 m-auto">
                  <div class="col-md-8 m-auto">
                      <img src="assets/images/gallery/chanakya-removebg-preview.png" class="img-fluid" alt="">
                  </div>
                  <div class="text-center me-2">
                  <div class="bg-b fs--2  p-1 px-1 text-white text-b  rounded-2 w-100">
                  <span class="fw-bold">Hi, I am Chanakya</span>
                  </div>
                  </div>
              </div>
          </div>
        <div id="test" class="open">
            <div class="bg-white col-12 col-sm- col-md-3 rounded-3 float-end" id="chatbot">
                <div class="row justify-content-between px-3">
                    <div class="col-4 col-md-4">
                        <div class="row gap-1">
                            <div class="col-5 p-0">
                                <div class="col-12 p-0 bg-body-secondary rounded-3">
                                    <img src="assets/images/gallery/chanakya-removebg-preview.png"
                                        class="img-fluid chanakya" alt="Chanakya">
                                </div>
                            </div>
                            <div class="col-5 m-y p-0">
                                <span class="name fw-bold text-b fs--1">CHANAKYA</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-4 col-md-5 m-y">
                        <div class="m-auto col-12 float-end">
                            <img src="assets/images/gallery/integrated.jpg" class="img-fluid"
                                alt="Integrated Enterprises">
                        </div>
                    </div>
                    <div class="col-4 col-md-3 m-y d-flex justify-content-end">
                        <button class="bg-transparent border-0" id="minimize-chatbot">
                            <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="15.000000pt"
                                height="15.000000pt" viewBox="0 0 32.000000 32.000000"
                                preserveAspectRatio="xMidYMid meet">
                                <g transform="translate(0.000000,32.000000) scale(0.100000,-0.100000)" fill="#000000"
                                    stroke="none">
                                    <path
                                        d="M50 212 c0 -4 25 -32 55 -62 l55 -55 57 57 c31 32 54 61 50 65 -4 4 -30 -15 -57 -42 l-50 -49 -48 47 c-46 46 -62 56 -62 39z" />
                                </g>
                            </svg>
                        </button>
                        <button class="bg-transparent border-0">
                            <span class="text-b" id="close-chatbot" aria-label="Close chat">X</span>
                        </button>
                    </div>
                </div>
                <div id="chat-box" class="overflow-x-hidden"></div>
                <div class="d-flex">
                    <button id="back-button" class="ms-1 my-1 fs--1 text-white bg-b border-0 rounded-2"
                        style="display:none;">Back</button>
                    <button id="main-menu" class="ms-1 my-1 fs--1 text-white bg-b border-0 rounded-2"
                        style="display:none;">Main
                        Menu</button>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="qr-modal-overlay" id="qrModal">
    <div class="qr-modal-content">
        <button class="qr-modal-close-btn" onclick="closeQrModal()">×</button>
        <div class="qr-modal-content-wrapper">
            <h2>Secure Your Financial Future</h2>
            <p class="text-g">“The best time to invest was yesterday. The next best time is now.”</p>
            <div class="qr-modal-body">
                <div class="row align-items-center">
                    <div class="col-md-3 qr-section">
                        <p class="m-0 text-center">Scan code to download</p>
                        <div class="text-center">
                            <div class="col-6 m-auto">
                                <img src="assets/images/gallery/Image-qrcod.png" alt="QR Code" class="img-fluid">
                            </div>
                            <div class="mt-2">
                                <a href="https://play.google.com/store/apps/details?id=com.wave.iInvest&pli=1"
                                    target="_blank" rel="noopener noreferrer">
                                    <img src="assets/images/gallery/play-stor.png" alt="Google Play" width="40">
                                </a>
                                <a href="https://apps.apple.com/in/app/iinvest-from-integrated/id6446880589"
                                    target="_blank" rel="noopener noreferrer">
                                    <img src="assets/images/gallery/apple-stor.png" alt="App Store" width="40">
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 input-section">
                        <form id="qrcode">
                            <p>Open Free Demet Account</p>
                            <div class="pb-2">
                                <input type="text" class="form-control p-1 rounded-2 " maxlength="10" id="mobileqr"
                                    placeholder="+91 0000000000">
                            </div>
                            <div class="">
                                <input type="text" class="form-control p-1 rounded-2 " name="pin" id="pinqr" maxlength="6"
                                    placeholder="PIN Code">
                            </div>
                            <div>
                                <button class="bg-b mt-3 text-white border-0 px-3 rounded-2">Start Now</button>
                            </div>
                        </form>
                    </div>
                    <div class="col-md-4 py-3">
                        <div>
                            <img src="assets/images/gallery/Financial-Future.png" class="img-fluid" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    `;
  }

  render() {
    document.body.prepend(this.element);
  }
}

const header = new Header();
header.render();
