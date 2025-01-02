<footer class="footer" style="margin-top: 5%;">
    <!-- Container Starts -->
    <div><!--class="container" -->
      <!-- Row Starts -->
      <div class="row section">
        <!-- Footer Widget Starts -->
        <div class="footer-widget col-lg-3" style="padding-left: 12%;"><!--footer-widget col-lg-3 col-md-6 col-xs-12 wow fadeIn-->
          <h3 class="small-title" style="font-size: 1.5em;font-family: Abel;">Quick Link</h3>
          <ul class="menu" style="font-family: Abel;">
            <li><a href="https://www.integratedindia.in/AboutUs.aspx">About Us</a></li>
            <li><a href="https://www.integratedindia.in/Policy.aspx">Privacy Policy</a></li>
           <!-- <li><a href="#">Disclosure</a></li>-->
            <li><a rel="nofollow" href="https://www.symantec.com/ssl-certificates">About SSL Certificate</a></li>
            <li><a href="/sitemap.aspx">Sitemap</a></li>
            
            <li><a href="/Disclaimer.aspx" > Disclaimer</a></li>		
            <li><a href="/investorcharter.aspx">Investor Charter</a></li>
            <li><a href="https://smartodr.in" target=_blank>Smart Odr</a></li>
			<li><a href="/Downloads/Termsandconditions.pdf" target=_blank>Terms & Conditions</a></li>
			<li><a href="/Downloads/HL/ListofHolidays.pdf" target=_blank>List of Holidays</a></li>
          </ul>
        </div>
        
        <div class="footer-widget col-lg-3" style="padding-left: 6%;">
          <h3 class="small-title" style="font-size: 1.5em;font-family: Abel;">
            Reach Us
          </h3>
          <p style="font-family: Abel;">
            Toll Free: <a href='tel:180042523456'><font color=#EF7F1B>180042523456</font></a><br/>
            Mon - Fri&nbsp;<font style="color: #EF7F1B;">(9:30AM - 6PM)</font><br/>
            Sat&nbsp;<font style="color: #EF7F1B;">(9:30AM - 1:30PM)</font> 
          </p>
          <p style="font-family: Abel;">
            In case of any queries, feel free to<br/> 
            call or write to us. We will be very<br/> 
            happy to assist you.<br/>
             <a href='mailto:customercare@integratedindia.in'>
                <font style="color: #EF7F1B;font-family: Abel;">customercare@integratedindia.in</font>
                </a>
          </p>
        </div>
        <div class="footer-widget col-lg-3" style="padding-left: 6%;">
          <h3 class="small-title" style="font-size: 1.5em;font-family: Abel;">Registered Office:</h3>
          <p style="font-family: Abel;">
            5A,5th Floor,<br/>
            Kences Towers,<br/>
            1, Ramakrishna Street,<br/>
            T.Nagar,<br/>
            Chennai - 600 017
          </p>
          <p style="color: #EF7F1B;font-family: Abel;">
            Tel No: <a href='tel:04428143045'>
            <font style="color: #EF7F1B;font-family: Abel;">044 - 28143045/46</font></a>
            <br/>
            Fax: 044 - 28144826/28140652
          </p>
        </div>
        <!-- Footer Widget Ends -->

        <!-- Footer Widget Starts -->    
        
        <div class="footer-widget col-lg-3" data-wow-delay=".2s" style="padding-left: 4%;">
          <h3 class="small-title" style="font-size: 1.5em;font-family: Abel;">Admin Office:</h3>
          <p style="font-family: Abel;">
             501-502,<br/> Coral Classic Commercial Complex,<br/>
            Road No. 20,<br/>
            Chembur East,<br/>
            Mumbai - 400 071
          </p>
          <p style="color: #EF7F1B;font-family: Abel;">
            <a href='tel:02240661800'><font style="color: #EF7F1B;font-family: Abel;">022 - 4066 1800</font></a>
            <br>
          </p>
        </div>
        
        <!-- Footer Widget Ends -->
      </div>
      <!-- Row Ends -->
    </div>
    <!-- Container Ends -->

    <!-- Copyright -->
    <div id="copyright">
      <div style="margin: 0% 8% 0% 8%;">
        <div class="row">
          <div class="col-xs-12">
            <p class="copyright-text" style="font-size: 0.9em;font-family: Abel;">Copyright Integrated Enterprises (India) Private Ltd., All rights reserved. Reproduction of any articles, photos, videos or any other content in whole or in part in any form or medium without express written permission of integratedinvestments.in is prohibited.
            
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- Copyright  End-->

  </footer>

  <!-- Go to Top Link -->
  <a href="#" class="back-to-top">
    <i class="fa fa-arrow-up"></i>
  </a>

  <!-- Preloader -->
  <!--<div id="preloader">
    <div class="loader" id="loader-1"><img src="img/Logo_1.gif" style="width: 120px;height: 70px;margin-left: -50px;margin-top: -20px;"/></div>
  </div>-->
  <!-- End Preloader -->
  <script>
  function MetaChange()
  {
    var idetitle = $('title').text();
    var idedesc = $("meta[name='description']").attr("content"); ;    
    $('meta[property="og:title"]').attr('content',idetitle );
    $('meta[property="og:description"]').attr('content',idedesc);
    $('meta[property="og:image"]').attr('content',"https://www.integratedindia.in/img/Logo_1.gif");
    //$('meta[property="og:url"]').attr('content',window.location.href);
    $('meta[property="og:site_name"]').attr('content',"IntegratedEnterprises");
    $('head').append( '<meta property="og:url" content="' +  window.location.href + '">' ); 
    
    $('meta[name="twitter:title"]').attr('content',idetitle );
    $('meta[name="twitter:description"]').attr('content',idedesc);
    $('meta[property="twitter:image"]').attr('content',"https://www.integratedindia.in/img/Logo_1.gif");
    $('meta[name="twitter:site"]').attr('content',"https://twitter.com/IntegratedTweet");
    
    $('link[rel="canonical"]').attr('href', window.location.href);
    //alert(window.location.href)

  }
  MetaChange();
  </script>
  </script>