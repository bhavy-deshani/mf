    <!-- Bootstrap CSS -->
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" >
    <!-- Font -->
    <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css">
    <!-- Slicknav -->
    <link rel="stylesheet" type="text/css" href="css/slicknav.css?v=2">
    <!-- Owl carousel -->
    <link rel="stylesheet" type="text/css" href="css/owl.carousel.css">
    <link rel="stylesheet" type="text/css" href="css/owl.theme.css">
    <link rel="stylesheet" type="text/css" href="css/main.css?version=2.5">
    <!-- Extras Style -->
    <link rel="stylesheet" type="text/css" href="css/extras.css?version=1.11">
    <!-- Responsive Style -->
    <link rel="stylesheet" type="text/css" href="css/responsive.css?V=1.7">
    <!--Mobile Responsive-->
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Abel" />
    <link rel="stylesheet" type="text/css" href="css/TimeLine.css" />
    <link href="css/NewIIndiaWidget.css" rel="Stylesheet" />
	  <link rel="stylesheet" type="text/css" href="css/IEP_Common.css?v=1" />
    <link rel="stylesheet" type="text/css" href="css/MobileResponsive.css?V=1.8">
<script type="text/javascript" src="Scripts/jquery-3.1.1.js"></script>
<script language="javascript" src="scripts/Mobile.js"></script> 
<script async src="https://www.googletagmanager.com/gtag/js?id=G-VG8P0BYFBK"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-VG8P0BYFBK');

    $(document).ready(function()
      {
        $("#MobIndexLogoImg").click(function(){
        window.location = "/";
      });
      });
</script>  
<style>
  #IndexLogoDiv{display: block !important;}
  #MobIndexLogoImg{ display: none !important;}
  @media only screen and (max-width: 799px) {
    #MobIndexLogoImg{ display: flex !important;}
      #IndexLogoDiv{display: none !important;}
  }
</style>
<header id="header-wrap">
  <!-- Navbar Start -->
  <nav class="navbar navbar-expand-lg fixed-top indigo top-nav-collapse" id="HeaderNavBar">
    <!--navbar navbar-expand-lg fixed-top scrolling-navbar indigo top-nav-collapse-->
    <div style="height: 90%;width: 30%;display: flex;flex-wrap: nowrap;flex-direction: row;" id="IndexLogoDiv">
      <a href="https://www.integratedindia.in/" style="height: 100%;display: none;margin-left: 1%;margin-top: 0%;display:block">
        <img src="/images/logo.gif" style="height: 100%;width: 65%;" id="IndexLogoImg">
        <img src="/images/50thyear.gif" style="height: 100%;width: 33%;">
      </a>
    </div>
    <div style="height: 90%;width: 80%;display: flex;flex-wrap: nowrap;flex-direction: row;position: absolute;" id="MobIndexLogoImg">
      <a href="https://www.integratedindia.in/" style="height: 100%;display: none;margin-left: 1%;margin-top: 0%;display:flex">
        <img src="/images/logo.gif" style="height: 100%;width: 50%;">
        <img src="/images/50thyear.gif" style="height: 100%;width: 25%;">
        <img src="/images/Certification Badge Sep 2023-2024.jpg" style="height: 100%;width: 20%;" class="GreatPalceMenuMobLogo">
      </a>
    </div>
    <!-- <img src="/iindia/images/IepLoagoWith50YearCelbImg.png" style="height: 90%;width: 60%;position: absolute;" id="MobIndexLogoImg">
    <img src="/iindia/images/Certification Badge Sep 2023-2024.jpg" style="height: 90%;width: 20%;" class="GreatPalceMenuMobLogo"> -->
    <div class="container" id="MobilHamburgDiv"  >
      <div class="navbar-header">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          <span class="icon-menu"></span>
          <span class="icon-menu"></span>
          <span class="icon-menu"></span>
        </button>
      </div>
    <div class="collapse navbar-collapse" id="main-navbar" style="border: 0px solid #FFFFFF;">
      <ul class="navbar-nav mr-auto w-100 justify-content-end clearfix">
          <li class="nav-item" id="IndexNav">
            <a class="nav-link" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/AboutUs.aspx">About Us</a>
          </li>
          <li class="nav-item" id="PartnerNav">
            <a class="nav-link" href="https://www.integratedindia.in/index.aspx#ProductOverView">Products</a>
          </li>
          <!-- <li class="nav-item" id="PartnerNav">
              <a class="nav-link" href="/index.aspx#Partners">Our Regulators</a>
          </li> -->
          <li class="nav-item">
              <a class="nav-link" href="https://www.integratedindia.in/blog.aspx">Knowledge Center</a>
          </li>
          <li class="nav-item" id="ContactUsNav">
            <a class="nav-link" href="https://www.integratedindia.in/ContactUs.aspx">Contact Us</a>
          </li>
          <!--<li class="nav-item" id="DoorStepNav">
            <button style="font-size:12px;padding:13px" class="CTAbutton1" onclick="DoorStep()">Door Step Services</button>
          </li>-->
          <li class="nav-item" id="DoorStepNav">
            <a class="nav-link" style="color: #ffffff;" href="#" onclick="DoorStep('DOOR')" >Door Step Services</a>
              <!-- <button style="font-size:12px;padding:3px ;right:9px" class="CTAbuttonImg" onclick="DoorStep()"><img src="/images/Manimg.png" height="42" width="23">Click here <br>to avail free<br> Door Step Services</button> -->
          </li>         
          <li class="nav-item" id="DoorStepNav">
            <a class="nav-link" href="#" style="color: #ffffff;" onclick="DoorStep('WCF')">Whatsapp/email Consent</a>
          </li>
         <!-- <li class="nav-item" id="ContactUsNav">
            <a class="nav-link" href="https://www.integratedindia.in/open-free-online-trading-demat-account/index.aspx?status=w">Webinar</a>
          </li> -->
          <li class="nav-item" id="DoorStepNav">
            <a class="nav-link" href="/Career.aspx" style="color: #ffffff;" >Career</a>
          </li>
          <div style="width:47px;">
            <img src="/images/Certification Badge Sep 2023-2024.jpg" class="GreatPalceMenuLogo">
          </div>
      </ul>
        <!-- <div class="dropdown" id="LoginList1" style="border: 0px solid #FFFFFF;font-size:5px;width:24%;">
			<nav>	        
				  <ul class="navdropdown"> 
				    <li><button class="dropbtn " style="white-space:nowrap;width:160px">Group Companies&nbsp;&nbsp;<i class="fa fa-caret-down"></i></button>
				      <ul>
				      <div class="dropdown-content" style="width:187px">				        
				        <li><a style="color:#FFF;white-space:nowrap" href="https://integrated.investments" target="_blank">Stock Broking</a></li>
				        <li><a style="color:#FFF;white-space:nowrap" href="https://www.ifea.in" target="_blank">Financial Education</a></li>
				        <li><a style="color:#FFF;white-space:nowrap" href="https://www.integratedinsurance.in" target="_blank">Insurance Broking</a></li>				    
				      </div>
				      </ul>
				    </li>
				  </ul>
			</nav>
		</div> -->
    <div class="dropdown" id="LoginList2" style="border: 0px solid #FFFFFF;font-size:5px;">
			<nav>
				  <ul class="navdropdown"> 
				    <li><button class="dropbtn">Login &nbsp;&nbsp;<i class="fa fa-caret-down"></i></button>
				      <ul>
				      <div class="dropdown-content"EF7F1B>
				        <a class="page-scroll" href="https://integrated.investments" >Equity</a>
				        <li><a href="/caoportfolio/nv2/login.aspx" target="_blank">MF & DP</a></li>
				        <li><a href="https://www.integratedindia.in/NPS-Container.aspx?Open">NPS</a></li>
				        <li><a href="#">Registrar / Corporate Services</a>
				          <ul>
				            <li><a href="https://www.integratedindia.in/registryportfolio/login.aspx" target="_blank">Listed Companies</a></li>
				            <li><a href="https://www.integratedindia.in/UnlistedPvtCompanies.aspx" target="_blank">Unlisted / Private Cos.</a></li>
				          </ul>
				        </li>
				        <!--<li><a style="color:#FFF;cursor: pointer;" onclick="OpenNewCustomer()">New Customer</a></li>-->
				        <li><a href="https://www.integratedindia.in/sp/rec/frlogin/login.aspx">Business Partner</a></li>
				      </div>
				      </ul>
				    </li>
				  </ul>
			</nav>
		</div>
        <!--
        <div class="dropdown" id="LoginList" style="margin-top: 0%;">
          <button class="dropbtn">Login&nbsp;&nbsp;<i class="fa fa-caret-down"></i></button>
          <div class="dropdown-content">            
            <a style="color:#FFF;cursor: pointer;" href="index.aspx?iInvest">All-in-one/iInvest</a>
            <a href="https://www.integratedindia.in/sp/instaAcOpen" target="_blank">Digitrade Account</a>                   
            <a href="https://www.integratedindia.in/registryportfolio/login.aspx" target="_blank">Registrar</a>            
            <a style="color:#FFF;cursor: pointer;" href="https://www.integratedindia.in/NPS_Container.aspx?Open">NPS Online</a>
            <a style="color:#FFF;cursor: pointer;" href="/index.aspx?ONC">New Customer</a>        
          </div>
        </div>
        -->
      </div>
    </div>
    <!--<div  class="slicknav_menu" id="MobileLogo" style="position: absolute;">
      <a href="/" style="height: 100%;margin-left: 10%;">
        <img src="img/Logo_1.gif" alt="" style="height: 50px;margin-top: -10px;width: 100%;">
      </a>
    </div>-->
    <!-- Mobile Menu Start -->
    <ul class="mobile-menu navbar-nav MenuPosition" >
      <li>
        <a class="page-scroll"  style="background: #24A83F;color: #fff;" href="/"><label class="MobMenuHeader">Home</label></a>
        <input type="button" value="X" onclick="MenuCloseButn()" class="MenuCLoseButn">  
      </li>
      <li>
        <a class="page-scroll" href="/AboutUs.aspx">About Us</a>
      </li>
      <!--<li>
          <a class="page-scroll" href="https://isltrade.net/">Start Investing</a>
      </li>
      <li>
        <a class="page-scroll" href="#Partners">Our Regulators</a>
      </li>-->
      <li>
        <a class="page-scroll" href="/blog.aspx">Knowledge Center</a>
      </li>
      <li>
        <a class="page-scroll" href="/ContactUs.aspx">Contact Us</a>
      </li>
      <li>
        <a class="page-scroll" href="/ContactUs.aspx?DOOR">Door Step Services</a>
      </li>
      <li>
        <a class="page-scroll" href="/ContactUs.aspx?WCF">Whatsapp/email Consent</a>
      </li>
    <!--  <li>
        <a class="page-scroll" href="https://www.integratedindia.in/open-free-online-trading-demat-account/index.aspx?status=w" >Webinar</a>
      </li> -->
      <li>
        <a class="page-scroll" href="/Career.aspx">Career</a>
      </li>
          
      <li>
            <a class="page-scroll" href="/Corporate-Container.aspx?CPI">IPO Allotment Status</a>
          </li>
      <div class="LoginMenuDiv">
      <ul style="margin: 0;">
        <li>
          <a class="page-scroll" style="background: #24A83F;color: #fff;" href="/"><label class="MobMenuHeader">Login</label></a>
        </li>
        <li>
          <a class="page-scroll" href="https://integrated.investments">Equity</a>
        </li>
        <li>
        <a class="page-scroll" href="/caoportfolio/nv2/login.aspx">MF & DP</a>
        </li>
        <li>
          <a class="page-scroll" href="https://www.integratedindia.in/nps-container.aspx?Open">NPS</a>
        </li>
        <!-- <li>
          <a class="page-scroll" href="https://www.integratedindia.in/registryportfolio/login.aspx">Registrar</a>
        </li>-->
        <li class="RegSubMenu">Registrar
          <ul>
            <li><a class="page-scroll" style="width:100%;" href="https://www.integratedindia.in/registryportfolio/login.aspx">Listed Companies</a></li>
            <li><a class="page-scroll" style="width:100%;" href="https://www.integratedindia.in/UnlistedPvtCompanies.aspx">Unlisted / Private Cos.</a></li>
          </ul>
        </li>
        <li>
          <a class="page-scroll" href="https://www.integratedindia.in/sp/rec/frlogin/login.aspx">Business Partner</a>
        </li>
        <!--<li>
          <a class="page-scroll" href="#" onclick="OpenNewCustomer()">New Customer</a>
        </li>-->
      </ul>
    </div>
  </ul>
    <!-- Mobile Menu End -->
  </nav>
  <!-- Navbar End -->
</header>
<script>
  function MenuCloseButn()
  {
    $(".slicknav_nav").addClass("slicknav_nav slicknav_hidden");
    $(".slicknav_btn").addClass("slicknav_btn slicknav_collapsed");
    $(".slicknav_nav").css({"display":"none"});
    $(".slicknav_nav").attr("aria-hidden",true);
    //$(".slicknav_btn").removeClass("slicknav_hidden");
    //$(".slicknav_nav").toggle();
  }
  function WinPageOpen(PageName)
  {
    window.open(PageName, '_blank');
  }
  function DoorStep(Type)
  {
    if(Type.toUpperCase() == "DOOR")
    {
      window.open("https://www.integratedindia.in/contactus.aspx?DOOR","_self");
    }
    else
    {
      window.open("https://www.integratedindia.in/contactus.aspx?WCF","_self");
      return false;
    }
    return false;
  }
  if(screen.width > 350 && screen.width < 767)
  {
    $("#IndexLogo_Main").hide();
    $("#MobileLogo").hide();   
  }
  $(window).on('scroll', function()
  {
    if(screen.width>350 && screen.width<767)
    {
      $("#IndexLogo_Main").hide();
      $("#MobileLogo").hide();
    }
    else if ($(window).scrollTop() > 50)
    {
      $("#IndexLogo_Main").show();
      $("#MobileLogo").hide();
    }
  });
</script>
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="js/jquery-min.js"></script>
<script src="js/popper.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/owl.carousel.min.js"></script>
<script src="js/jquery.mixitup.js"></script>
<script src="js/jquery.countTo.js"></script>
<script src="js/jquery.slicknav.js"></script>
<script src="js/AboutUs.js?V=1.7"></script>