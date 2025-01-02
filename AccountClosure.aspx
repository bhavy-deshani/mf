<!DOCTYPE html>
<html lang="en">

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
    <link rel="shortcut icon" type="image/x-icon" href="assets/images/favicons/fiveicon.ico">
    <meta name="msapplication-TileImage" content="assets/images/favicons/fiveicon.ico">
    <meta name="theme-color" content="#ffffff">
    <!-- <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"> -->
    <!-- ===============================================-->
    <!--    Stylesheets-->
    <!-- ===============================================-->
    <link href="assets/css/theme.css" rel="stylesheet" />
    <link href="assets/css/swiper-bundle-min.css" rel="stylesheet" />

    <!-- <script src="vendors/fontawesome/all.min.js"></script>/ -->
</head>

<body>
    <main>

        <script src="assets/js/header.js"></script>

        <section class="pt-10 text-b">
            <div class="container">
                <div class="row justify-content-between">
                     
                  <div>
        <h4>Steps investors should take for closure of their account</h4>
    </div>
    <div class="ClosurContent">
        Investors are requested to download the account closing form, fill up the same and submit it to
        any of our offices, for closing the ccount.  &nbsp;
        Please use Form-34 (Annexure-Q) which can be downloaded from the following link.
    </div>
    
	  <div class="bg-g   my-4 py-2  w-75 text-center rounded-pill fw-bold m-auto">
                    
					<a target="_blank" href="https://www.integratedindia.in/downloads/demat/annexure-q.pdf">
					<h4 class="text-white m-0">
					Account Closure</h4>
					</a>
					
                </div>
	<div> 
        
    </div>
            </div>
			
            </div>
        </section>
        <script src="assets/js/footer.js"></script>
        <div>

    </main>
    <!-- <header></header> -->


    <script src="assets/js/swiper-bundle-min.js"></script>
  <script src="assets/js/jquery-3.5.1.js"></script>
  <script src="vendors/@popperjs/popper.min.js"></script>
  <script src="vendors/bootstrap/bootstrap.min.js"></script>    <script src="assets/js/theme.js"></script>

  <script src="assets/js/chartbot.js"></script>

    <script>
        const swiper = new Swiper('.about-swiper', {
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 1,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 1,
                    spaceBetween: 50,
                },
            },
        });
        // JavaScript to handle toggling of collapse elements
        function toggleSection(id) {
            var section = document.getElementById(id);
            if (section.style.display === 'block') {
                section.style.display = 'none';
            } else {
                section.style.display = 'block';
            }
        }

        function hideSection(id) {
            var section = document.getElementById(id);
            section.style.display = 'none';
        }
        function showDetails(year) {
            // Hide all details initially
            var details = document.querySelectorAll('.details');
            details.forEach(function (detail) {
                detail.classList.remove('active');
            });

            // Remove active class from all years
            var years = document.querySelectorAll('.year');
            years.forEach(function (yearElement) {
                yearElement.classList.remove('active');
            });

            // Show the selected year's details
            var detail = document.getElementById('details-' + year);
            if (detail) {
                detail.classList.add('active');
            }

            // Add active class to the selected year
            var yearElement = document.getElementById('year-' + year);
            if (yearElement) {
                yearElement.classList.add('active');
            }
        }

        var timelineData = [
            {
                year: 2024, details: `
            <div class='d-flex justify-content-lg-center gap-3 flex-wrap'>
                <div class="d-flex  pb-3">
                    <div class="">
                         <button class="border-0 bg-g text-white rounded-2 px-3">
                            2024
                         </button>
                    </div>
                    <div>
                        <ul class="m-y d-flex gap-4 flex-wrap">
                            <li>Golden Jubilee Year Celebrations</li>
                            <li>Margin Trading Funding (MTF)</li>
                        </ul>
                    </div>
                </div>
                <div class="d-flex">
                    <div>
                        <button class="border-0 bg-g text-white rounded-2 px-3">
                            2023
                        </button>
                        </div>
                    <div>
                        <ul class="m-y">
                            <li>MCX Commodity Trading</li>
                        </ul>
                    </div>
                </div>
            </div>`
            },
            {
                year: 2020, details: `
            <div class='d-flex justify-content-lg-center gap-3 flex-wrap'>
                <div class="d-flex ">
                    <div class="">
                        <button class="border-0 bg-g text-white rounded-2 px-3">
                            2015
                        </button>
                    </div>
                    <div>
                        <ul class="m-y d-flex gap-4 flex-wrap">
                            <li>Secretarial Services-SME</li>
                            <li class="text-start" >XBRL Services-Large Corporates</li>
                        </ul>
                    </div>
                </div>
                <div class="d-flex pb-3">
                    <div>
                        <button class="border-0 bg-g text-white rounded-2 px-3">
                            2013
                        </button>
                        </div>
                    <div>
                        <ul class="m-y">
                            <li>Authorised Person-Insurance Repository</li>
                        </ul>
                    </div>
                </div>
                <div class="d-flex ">
                    <div>
                        <button class="border-0 bg-g text-white rounded-2 px-3">
                            2012
                        </button>
                        </div>
                    <div>
                        <ul class="m-y">
                            <li>e-Return intermediary</li>
                        </ul>
                    </div>
                </div>
            </div>`
            },
            {
                year: 2010, details: `
                                                <div class='d-flex justify-content-lg-center gap-3 flex-wrap'>

                <div class="d-flex  pb-3">
                    <div class="">
                        <button class="border-0 bg-g text-white rounded-2 px-3">
                            2010
                        </button>
                    </div>
                    <div>
                        <ul class="m-y d-flex gap-4 flex-wrap">
                            <li>BSE Membership</li>
                            <li>POP for NPS</li>
                        </ul>
                    </div>
                </div>
                </div>
                ` },
            {
                year: 2000, details: `
                                <div class='d-flex justify-content-lg-center gap-3 flex-wrap'>

                <div class="d-flex  pb-3">
                <div class="">
                    <button class="border-0 bg-g text-white rounded-2 px-3">
                        2006
                    </button>
                </div>
                <div>
                    <ul class="m-y d-flex gap-4 flex-wrap">
                        <li>Insurance Broking</li>
                        <li>NSE Membership</li>
                    </ul>
                </div>
            </div>
            <div class="d-flex pb-3">
                <div> 
                    <button class="border-0 bg-g text-white rounded-2 px-3">
                        2004
                    </button>

                    </div>
                <div>
                    <ul class="m-y">
                        <li>TINFC Services</li>
                    </ul>
                </div>
            </div>
            <div class="d-flex">
                <div> 
                    <button class="border-0 bg-g text-white rounded-2 px-3">
                        2003
                        </button>
                    </div>
                <div>
                    <ul class="m-y">
                        <li>Started Mutual Fund Distribution in National Level</li>
                    </ul>
                </div>
            </div>
            </div>
            
            ` },
            {
                year: 1990, details: `  
                
                <div class='d-flex justify-content-lg-center gap-3 flex-wrap'>
                <div class="d-flex  pb-3">
                <div class="">
                    <button class="border-0 bg-g text-white rounded-2 px-3">
                        1999
                    </button>
                </div>
                <div>
                    <ul class="m-y">
                        <li>Silver Jubilee Year Celebrations</li>
                    </ul>
                </div>
            </div>
                <div class="d-flex  pb-3">
                <div class="">
                    <button class="border-0 bg-g text-white rounded-2 px-3">
                        1998
                    </button>
                </div>
                <div>
                    <ul class="m-y">
                        <li>Depository Services with NSDL</li>
                    </ul>
                </div>
            </div>
            <div class="d-flex pb-3">
                <div>
                    <button class="border-0 bg-g text-white rounded-2 px-3">
                        1994
                    </button>
                    </div>
                <div>
                    <ul class="m-y">
                        <li>Category I Registrar & Transfer Agents</li>
                    </ul>
                </div>
            </div>
            <div class="d-flex ">
                <div>
                    <button class="border-0 bg-g text-white rounded-2 px-3">
                        1993
                        </button>
                        </div>
                <div>
                    <ul class="m-y">
                        <li>Merchant Banking Services</li>
                    </ul>
                </div>
            </div>
            </div>                    
            ` },
            {
                year: 1980, details: `
                                <div class='d-flex justify-content-lg-center gap-3 flex-wrap'>
                <div class="d-flex">
                <button class="border-0 bg-g text-white rounded-2 px-3">
                    1984
                </button>
                <div>
                    <ul class="m-y">
                        <li>Branch Expansion</li>
                    </ul>
                </div>
            </div>
            </div>
                ` },
            {
                year: 1970, details: `
                                <div class='d-flex justify-content-lg-center gap-3 flex-wrap'>
                <div class="d-flex">
                <button class="border-0 bg-g text-white rounded-2 px-3">
                    1974
                </button>
                <div>
                    <ul class="m-y">
                        <li>Commenced Operations</li>
                    </ul>
                </div>
            </div>
            </div>
                ` }
        ];

        document.addEventListener('DOMContentLoaded', function () {
            // Populate the timeline
            var timelineContainer = document.querySelector('.timeline');
            timelineData.forEach(function (item) {
                var yearElement = document.createElement('div');
                yearElement.id = 'year-' + item.year;
                yearElement.className = 'year';
                yearElement.textContent = item.year;
                yearElement.onclick = function () {
                    showDetails(item.year);
                };
                timelineContainer.appendChild(yearElement);
            });

            // Populate the details
            var detailsContainer = document.querySelector('.details-container');
            timelineData.forEach(function (item) {
                var detailElement = document.createElement('div');
                detailElement.id = 'details-' + item.year;
                detailElement.className = 'details';
                detailElement.innerHTML = item.details;
                detailsContainer.appendChild(detailElement);
            });

            // Show 2025 details by default
            showDetails(2024);
        });
    </script>
</body>

</html>