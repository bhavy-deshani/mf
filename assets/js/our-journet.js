function showDetails(year) {
    var details = document.querySelectorAll('.details');
    details.forEach(function (detail) {
        detail.classList.remove('active');
    });

    var years = document.querySelectorAll('.year');
    years.forEach(function (yearElement) {
        yearElement.classList.remove('active');
    });

    var detail = document.getElementById('details-' + year);
    if (detail) {
        detail.classList.add('active');
    }

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

    var detailsContainer = document.querySelector('.details-container');
    timelineData.forEach(function (item) {
        var detailElement = document.createElement('div');
        detailElement.id = 'details-' + item.year;
        detailElement.className = 'details';
        detailElement.innerHTML = item.details;
        detailsContainer.appendChild(detailElement);
    });

    showDetails(2024);
});