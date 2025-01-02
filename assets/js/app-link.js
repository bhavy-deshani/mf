document.addEventListener("DOMContentLoaded", function () {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  var appLink = document.getElementById("app-link");
  appLink.target = "_blank";

  if (/android/i.test(userAgent)) {
    appLink.href =
      "intent://details?id=com.wave.iInvest&pli=1#Intent;scheme=package;package=com.wave.iInvest;end";
  } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    appLink.href = "itms-apps://itunes.apple.com/app/id6446880589";
  } else {
    appLink.href = "https://integrated.investments/login";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  const appLink2 = document.getElementById("app-link2");

  // Set the target to open in a new tab
  appLink2.target = "_blank";

  // Check if the device is Android
  if (/android/i.test(userAgent)) {
    appLink2.href =
      "https://play.google.com/store/apps/details?id=com.wave.iInvest&pli=1";
  }
  // Check if the device is an iPad, iPhone, or iPod
  else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    appLink2.href =
      "https://apps.apple.com/in/app/iinvest-by-integrated/id6446880589";
  }
  // For any other device, set the href to a web login link
  else {
    appLink2.href = "https://integrated.investments/login";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const currentPath = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  navLinks.forEach((link) => {
    const linkPath = link.getAttribute("href").split("/").pop();
    if (linkPath === currentPath) {
      link.classList.add("active");
    }
  });
});
$(document).ready(function () {
  $(".moreless-button").click(function () {
    // Target the previous '.moretext' element
    var moreText = $(this).prev(".moretext");
    moreText.slideToggle(); // Toggle visibility of the text

    // Change the button text based on its current value
    if ($(this).text().trim() == "Read less") {
      $(this).text("Read more");
    } else {
      $(this).text("Read less");
    }
  });
});
function openDropdown() {
  const selectElement = document.getElementById("P9LngDdl");
  selectElement.click(); // This simulates a click on the select element
}
// window.onload = function() {
//   setTimeout(function() {
//     var popupModal = new bootstrap.Modal(document.getElementById('autoPopup'));
//     popupModal.show();
//   }, 2000); // 2 seconds
// };

// Check if the URL ends with ".html"
function openQrModal() {
  document.getElementById("qrModal").style.display = "block";
  // document.body.style.overflow = "hidden"; // Disable background scroll
}

function closeQrModal() {
  document.getElementById("qrModal").style.display = "none";
  // document.body.style.overflow = "auto"; // Re-enable background scroll
}
// Fetch bond data and display bond cards
// fetch("Bonds.json")
//   .then((response) => response.json())
//   .then((data) => {
//     // Check if data is a single bond object or an array
//     const bondsArray = Array.isArray(data) ? data : [data]; // Wrap single object in an array if necessary

//     if (bondsArray.length > 0) {
//       bondData = bondsArray; // Store the fetched data
//       const container = document.getElementById("bonds-container");

//       bondsArray.forEach((bond) => {
//         // Create the main bond display card
//         const bondCard = document.createElement("div");
//         bondCard.classList.add(
//           "bond-card",
//           "row",
//           "justify-center-between",
//           "gap-1"
//         );

//         bondCard.innerHTML = `
// <div class="card card-hover mb-3 col-12 col-lg-4 py-2 ">
// <div class="card-header d-flex flex-wrap p-0">
// <div class="bond-image">
//          <img loading="lazy" src="${bond.img}" alt="">
//      </div>
// <h4 class="card-title lh-base m-0">${bond.nameOfIssuer}</h4>
// <p class="card-subtitle fs--14">${bond.flags}</p>
// </div>
// <div class="card-body p-0">
// <p class="lh-base m-0"><strong>Coupon:</strong> <span class="float-end"> ${
//           bond.body.Coupon
//         }</span></p>
// <p class="lh-base m-0"><strong>Interest Payment:</strong><span class="float-end"> ${
//           bond.body["Interest Payment"]
//         }</span></p>
// <p class="lh-base m-0"><strong>Industry:</strong><span class="float-end"> ${
//           bond.body.Industry
//         }</span></p>
// <p class="lh-base m-0"><strong>Maturity Date:</strong> <span class="float-end"> ${
//           bond.body["Maturity Date"]
//         }</span></p>
// <p class="lh-base m-0"><strong>Face Value:</strong><span class="float-end">  ₹${
//           bond.faceValue?.toLocaleString() ?? "N/A"
//         }</span></p>
// </div>
// <div class="card-footer d-flex justify-content-between align-items-center p-0 pt-2">
// <p class="lh-base m-0"><strong>Yield to Maturity:</strong> ${
//           bond.offers[0]?.ytm ?? "N/A"
//         }</p>
// <button class="btn-primary invest-button border-0 rounded-2" onclick="window.location.href='bond-details.html?isin=${
//           bond.body.ISIN
//         }'">Invest Now</button>
// </div>
// </div>

// `;

//         container.appendChild(bondCard);
//       });
//     } else {
//       console.error("Data format is not valid or bonds array is empty:", data);
//       document.getElementById("bonds-container").innerHTML =
//         "<p>Error: No bond data found.</p>";
//     }
//   })
//   .catch((error) => console.error("Error fetching bond data:", error));

// Fetch the bond details using the ISIN from the URL
// $(document).ready(function () {
//   const params = new URLSearchParams(window.location.search);
//   const isin = params.get("isin");

//   // Fetch bond data from API
//   $.getJSON("Bonds.json", function (data) {
//     const bond = Array.isArray(data)
//       ? data.find((b) => b.body.ISIN === isin)
//       : data.body?.ISIN === isin
//       ? data
//       : null;

//     if (bond) {
//       $("#bond-details").html(`
//         <div class="row">
//                     <div class="row pb-3">
//                         <div class="col-12 col-md-3">
//                             <img src="${bond.img}" class="img-fluid" alt="">
//                         </div>
//                         <div class="col-12 col-md-8">
//                             <h2 class="fw-bold lh-base">${
//                               bond.nameOfIssuer
//                             }</h2>
//                             <p class="card-subtitle lh-base text-b">${
//                               bond.flags
//                             }</p>
//                         </div>
//                         </div>
//                         <div class="col-lg-7 ">
//                         <div class="bg-white border shadow rounded-2 p-3">
//                         <p class="text-b py-3">${bond.description}</p>
//                         <div class="row row-cols-1 row-cols-md-2">
//                         <div class="col">
//                                 <div>
//                                     <p class="lh-base m-0">Coupon</p>
//                                     <p class="lh-1 fw-bold">${
//                                       bond.body.Coupon
//                                     }</p>
//                                 </div>
//                                 <div>
//                                     <p class="lh-base m-0">Interest Payment</p>
//                                     <p class="lh-1 fw-bold">${
//                                       bond.body["Interest Payment"]
//                                     }</p>
//                                 </div>
//                                 <div>
//                                     <p class="lh-base m-0">Rating</p>
//                                     <p class="lh-1 fw-bold">${
//                                       bond.body.Rating ?? "N/A"
//                                     }</p>
//                                 </div>
//                                 <div>
//                                     <p class="lh-base m-0">Issue Date</p>
//                                     <p class="lh-1 fw-bold">${
//                                       bond.body["Issue Date"] ?? "N/A"
//                                     }</p>
//                                 </div>
//                             </div>
//                             <div class="col">
//                                 <div>
//                                     <p class="lh-base m-0">Name Of Debenture Trustee</p>
//                                     <p class="lh-1 fw-bold">${
//                                       bond.body["Name of Debenture Trustee"] ??
//                                       "N/A"
//                                     }</p>
//                                 </div>
//                                 <div>
//                                     <p class="lh-base m-0">ISIN</p>
//                                     <p class="lh-1 fw-bold">${
//                                       bond.body.ISIN
//                                     }</p>
//                                 </div>
//                                 <div>
//                                     <p class="lh-base m-0">Industry</p>
//                                     <p class="lh-1 fw-bold">${
//                                       bond.body.Industry
//                                     }</p>
//                                 </div>
//                                 <div>
//                                     <p class="lh-base m-0">Maturity Date</p>
//                                     <p class="lh-1 fw-bold">${
//                                       bond.body["Maturity Date"]
//                                     }</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="py-3">
//                             <a href="${
//                               bond.IM
//                             }" target="_blank" class="info-button">View Information Memorandum</a>
//                             <a href="${
//                               bond.ratingRational
//                             }" target="_blank" class="info-button">View Rating
//                                 Rationale</a>
//                         </div>
//                         <h4 class="fw-bold">Last Trade Information</h4>
//                         <div class="row row-cols-1 row-cols-md-2">
//                             <div class="col">
//                                 <div>
//                                     <p class="lh-base m-0">Last Trade Volume</p>
//                                     <p class="lh-1 fw-bold">${
//                                       bond.tradeInfo["Last Trade Volume"] ??
//                                       "N/A"
//                                     }</p>
//                                 </div>
//                                 <div>
//                                     <p class="lh-base m-0">Last Trade Yield</p>
//                                     <p class="lh-1 fw-bold">${
//                                       bond.tradeInfo["Last Trade Yield"] ??
//                                       "N/A"
//                                     }</p>
//                                 </div>
//                             </div>
//                             <div class="col">
//                                 <div>
//                                     <p class="lh-base m-0">Last Trade Date</p>
//                                     <p class="lh-1 fw-bold">${
//                                       bond.tradeInfo["Last Trade Date"] ?? "N/A"
//                                     }</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     </div>
//                     <div class="col-lg-5 ">
//                         <div class="bg-white border shadow rounded-2 h-100">
//                             <h5 class="text-center mt-4">Choose Number of Bonds You Want to Buy</h5>
//                             <div class="quantity-controls my-3">
//                                 <button id="decrement" class="btn btn-light">-</button>
//                                 <input type="text" id="bond-quantity" class="quantity-input form-control mx-2"
//                                     value="10" readonly>
//                                 <button id="increment" class="btn btn-light">+</button>
//                             </div>
//                             <p class="text-center text-muted">Minimum Quantity: <span
//                                     id="min-quantity">${
//                                       bond.offers[0]?.quantity ?? 10
//                                     }</span></p>

//                             <div class="card shadow p-3">
//                                 <div class="card-body">
//                                     <p class="lh-base ">Face Value: <span class="float-end">₹ <span
//                                                 id="face-value">${
//                                                   bond.faceValue?.toLocaleString() ??
//                                                   "0.00"
//                                                 }</span></span></p>
//                                     <p class="lh-base">Minimum Investment: <span class="float-end">₹ <span
//                                                 id="min-investment">${
//                                                   bond.offers[0]?.quantity *
//                                                     bond.faceValue ?? "0.00"
//                                                 }</span></span></p>
//                                     <p class="lh-base">Yield to Maturity: <span class="float-end"><strong id="ytm">${
//                                       bond.offers[0]?.ytm ?? "0.0%"
//                                     }</strong></span></p>

//                                     <div class="bg-light  rounded mb-3 p-2">
//                                         <p class="lh-base m-0 ">Principal Amount <span class="float-end">₹ <span
//                                                     id="principal-amount">0.00</span></span></p>
//                                         <small class="text-muted lh-base">Market Value for <span id="bond-count">10</span>
//                                             bond(s)</small>
//                                     </div>

//                                     <div class="bg-light p-2 rounded mb-3">
//                                         <p class="lh-base m-0">Accrued Interest Upto <strong id="accrued-date">--</strong> <span
//                                                 class="float-end">₹ <span id="accrued-interest">0.00</span></span></p>
//                                         <small class="text-muted lh-base">Interest Earned on the Bond This Year</small>
//                                     </div>

//                                     <p class="lh-base m-0">Stamp Duty: <span class="float-end">₹ <span id="stamp-duty">0.00</span></span>
//                                     </p>
//                                     <p class=" mt-3">Total Investment <span class="float-end">₹ <span
//                                                 id="total-investment">0.00</span></span></p>

//                                     <button class="btn request-button w-100 mt-3" id="request-bond">Request This
//                                         Bond</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//       `);

//       // Variables for quantity and calculations
//       let quantity = 10;
//       const faceValue = bond.faceValue ?? 0;
//       const minQuantity = bond.offers[0]?.quantity ?? 10;

//       // Function to update investment details
//       function updateInvestmentDetails() {
//         $("#bond-quantity").val(quantity);
//         $("#bond-count").text(quantity);
//         $("#principal-amount").text((quantity * faceValue).toLocaleString());
//         $("#total-investment").text((quantity * faceValue).toLocaleString());
//       }

//       // Increment and Decrement button click events
//       $(document).on("click", "#decrement", function () {
//         if (quantity > minQuantity) {
//           quantity--;
//           updateInvestmentDetails();
//         }
//       });

//       $(document).on("click", "#increment", function () {
//         quantity++;
//         updateInvestmentDetails();
//       });

//       // Initial investment details update
//       updateInvestmentDetails();
//     } else {
//       $("#bond-details").html("<p>Bond details not found.</p>");
//     }
//   }).fail(function (error) {
//     console.error("Error fetching bond data:", error);
//   });
// });

// $(document).ready(function () {
//   const params = new URLSearchParams(window.location.search);
//   const isin = params.get("isin");

//   // Fetch bond data from API
//   $.getJSON("Bonds.json", function (data) {
//     const bond = Array.isArray(data)
//       ? data.find((b) => b.body.ISIN === isin)
//       : data.body?.ISIN === isin
//       ? data
//       : null;

//     if (bond) {
//       $("#bond-details").html(`
//         <div class="row">
//           <div class="row py-3">
//             <div class="col-12 col-md-3">
//               <img src="${bond.img}" class="img-fluid" alt="">
//             </div>
//             <div class="col-12 col-md-8">
//               <h2 class="fw-bold lh-base">${bond.nameOfIssuer}</h2>
//               <p class="card-subtitle lh-base text-b">${bond.flags}</p>
//             </div>
//           </div>
//          <div class="col-lg-7 ">
//                         <div class="bg-white border shadow rounded-2 p-3 h-100">
//                         <p class="text-b py-3">${bond.description}</p>
//                         <div class="row row-cols-1 row-cols-md-2">
//                         <div class="col">
//                                 <div>
//                                     <p class="lh-base m-0">Coupon</p>
//                                     <p class="lh-1 fw-bold">${
//                                       bond.body.Coupon
//                                     }</p>
//                                 </div>
//                                 <div>
//                                     <p class="lh-base m-0">Interest Payment</p>
//                                     <p class="lh-1 fw-bold">${
//                                       bond.body["Interest Payment"]
//                                     }</p>
//                                 </div>
//                                 <div>
//                                     <p class="lh-base m-0">Rating</p>
//                                     <p class="lh-1 fw-bold">${
//                                       bond.body.Rating ?? "N/A"
//                                     }</p>
//                                 </div>
//                                 <div>
//                                     <p class="lh-base m-0">Issue Date</p>
//                                     <p class="lh-1 fw-bold">${
//                                       bond.body["Issue Date"] ?? "N/A"
//                                     }</p>
//                                 </div>
//                             </div>
//                             <div class="col">
//                                 <div>
//                                     <p class="lh-base m-0">Name Of Debenture Trustee</p>
//                                     <p class="lh-1 fw-bold">${
//                                       bond.body["Name of Debenture Trustee"] ??
//                                       "N/A"
//                                     }</p>
//                                 </div>
//                                 <div>
//                                     <p class="lh-base m-0">ISIN</p>
//                                     <p class="lh-1 fw-bold">${
//                                       bond.body.ISIN
//                                     }</p>
//                                 </div>
//                                 <div>
//                                     <p class="lh-base m-0">Industry</p>
//                                     <p class="lh-1 fw-bold">${
//                                       bond.body.Industry
//                                     }</p>
//                                 </div>
//                                 <div>
//                                     <p class="lh-base m-0">Maturity Date</p>
//                                     <p class="lh-1 fw-bold">${
//                                       bond.body["Maturity Date"]
//                                     }</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="py-3 d-flex flex-wrap">
//                         <div class="col-12 col-lg-6 p-1">
//                         <button class="bg-b rounded-2 border w-100">
//                         <a href="${
//                           bond.IM
//                         }" target="_blank" class="text-white">View Information Memorandum</a>
//                         </button>
//                         </div>
//                         <div class="col-12 col-lg-6 p-1">
//                         <button class="bg-b rounded-2 border w-100">
//                         <a href="${
//                           bond.ratingRational
//                         }" target="_blank" class="text-white" >View Rating
//                             Rationale</a>
//                             </button>
//                         </div>
//                         </div>
//                         <h4 class="fw-bold">Last Trade Information</h4>
//                         <div class="row row-cols-1 row-cols-md-2">
//                             <div class="col">
//                                 <div>
//                                     <p class="lh-base m-0">Last Trade Volume</p>
//                                     <p class="lh-1 fw-bold">${
//                                       bond.tradeInfo["Last Trade Volume"] ??
//                                       "N/A"
//                                     }</p>
//                                 </div>
//                                 <div>
//                                     <p class="lh-base m-0">Last Trade Yield</p>
//                                     <p class="lh-1 fw-bold">${
//                                       bond.tradeInfo["Last Trade Yield"] ??
//                                       "N/A"
//                                     }</p>
//                                 </div>
//                             </div>
//                             <div class="col">
//                                 <div>
//                                     <p class="lh-base m-0">Last Trade Date</p>
//                                     <p class="lh-1 fw-bold">${
//                                       bond.tradeInfo["Last Trade Date"] ?? "N/A"
//                                     }</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     </div>
//           <div class="col-lg-5">
//            <div class="bg-white border shadow rounded-2 p-3 h-100">
//               <h5 class="text-center ">Choose Number of Bonds You Want to Buy</h5>
//               <div class="quantity-controls ">
//                 <button id="decrement" class="btn btn-light">-</button>
//                 <input type="text" id="bond-quantity" class="quantity-input form-control mx-2" value="10" readonly>
//                 <button id="increment" class="btn btn-light">+</button>
//               </div>
//               <p class="text-center text-muted">Minimum Quantity: <span id="min-quantity">${
//                 bond.offers[0]?.quantity ?? 10
//               }</span></p>

//               <div class="card shadow p-3">
//                 <div class="card-body p-0">
//                   <p>Face Value: <span class="float-end">₹ <span id="face-value">${(
//                     bond.faceValue ?? 0
//                   ).toLocaleString("en-IN", {
//                     minimumFractionDigits: 2,
//                     maximumFractionDigits: 2,
//                   })}</span></span></p>
//                   <p>Minimum Investment: <span class="float-end">₹ <span id="min-investment">${(
//                     bond.offers[0]?.quantity * bond.faceValue ?? 0
//                   ).toLocaleString("en-IN", {
//                     minimumFractionDigits: 2,
//                     maximumFractionDigits: 2,
//                   })}</span></span></p>
//                   <p>Yield to Maturity: <span class="float-end"><strong id="ytm">${
//                     bond.offers[0]?.ytm ?? "0.0%"
//                   }</strong></span></p>

//                   <div class="bg-light p-2 rounded mb-3">
//                     <p class="lh-base m-0">Principal Amount <span class="float-end">₹ <span id="principal-amount">0.00</span></span></p>
//                     <small class="text-muted lh-base">Market Value for <span id="bond-count">10</span> bond(s)</small>
//                   </div>

//                   <div class="bg-light p-2 rounded mb-3">
//                     <p class="lh-base m-0">Accrued Interest Upto <strong id="accrued-date">--</strong> <span class="float-end">₹ <span id="accrued-interest">0.00</span></span></p>
//                     <small class="text-muted lh-base">Interest Earned on the Bond This Year</small>
//                   </div>

//                   <p class="lh-base m-0">Stamp Duty: <span class="float-end lh-base">₹ <span id="stamp-duty">0.00</span></span></p>
//                   <p class="lh-base mt-3">Total Investment <span class="float-end lh-base">₹ <span id="total-investment">0.00</span></span></p>

//                   <button class="btn request-button w-100 mt-3" id="request-bond">Request This Bond</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       `);

//       // Variables for quantity and calculations
//       let quantity = 10;
//       const faceValue = bond.faceValue ?? 0;
//       const minQuantity = bond.offers[0]?.quantity ?? 10;

//       // Function to update investment details
//       function updateInvestmentDetails() {
//         $("#bond-quantity").val(quantity);
//         $("#bond-count").text(quantity);
//         const principalAmount = quantity * faceValue;
//         $("#principal-amount").text(
//           principalAmount.toLocaleString("en-IN", {
//             minimumFractionDigits: 2,
//             maximumFractionDigits: 2,
//           })
//         );
//         $("#total-investment").text(
//           principalAmount.toLocaleString("en-IN", {
//             minimumFractionDigits: 2,
//             maximumFractionDigits: 2,
//           })
//         );
//       }

//       // Increment and Decrement button click events
//       $(document).on("click", "#decrement", function () {
//         if (quantity > minQuantity) {
//           quantity--;
//           updateInvestmentDetails();
//         }
//       });

//       $(document).on("click", "#increment", function () {
//         quantity++;
//         updateInvestmentDetails();
//       });

//       // Initial investment details update
//       updateInvestmentDetails();
//     } else {
//       $("#bond-details").html("<p>Bond details not found.</p>");
//     }
//   }).fail(function (error) {
//     console.error("Error fetching bond data:", error);
//   });
// });
