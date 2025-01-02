document.getElementById("init").addEventListener("click", function () {
  // Hide the init element by moving it behind other elements
  document.getElementById("init").style.zIndex = "1";

  // Move the QR code widget behind other elements
  const qrCodeWidget = document.querySelector(".po-fix");
  if (qrCodeWidget) {
    qrCodeWidget.style.zIndex = "1";
  }

  // Show the chatbox and bring it to the front
  const chatbox = document.getElementById("chatbot");
  if (chatbox) {
    chatbox.style.zIndex = "1000"; // Adjust as needed
  }
});

// Event listener for the close button on the chatbox
document.getElementById("close-chatbot").addEventListener("click", function () {
  // Bring the init element back to the front
  document.getElementById("init").style.zIndex = "1000"; // Adjust as needed

  // Bring the QR code widget back to the front
  const qrCodeWidget = document.querySelector(".po-fix");
  if (qrCodeWidget) {
    qrCodeWidget.style.zIndex = "1001"; // Ensure it's on top
  }

  // Move the chatbox behind other elements
  const chatbox = document.getElementById("chatbot");
  if (chatbox) {
    chatbox.style.zIndex = "1";
  } 
});

("use strict");

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key)
        );
      });
    }
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

/* -------------------------------------------------------------------------- */

/*                                    Utils                                   */

/* -------------------------------------------------------------------------- */
var docReady = function docReady(fn) {
  // see if DOM is already available
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", fn);
  } else {
    setTimeout(fn, 1);
  }
};

var resize = function resize(fn) {
  return window.addEventListener("resize", fn);
};

var isIterableArray = function isIterableArray(array) {
  return Array.isArray(array) && !!array.length;
};

var camelize = function camelize(str) {
  var text = str.replace(/[-_\s.]+(.)?/g, function (_, c) {
    return c ? c.toUpperCase() : "";
  });
  return "".concat(text.substr(0, 1).toLowerCase()).concat(text.substr(1));
};

var getData = function getData(el, data) {
  try {
    return JSON.parse(el.dataset[camelize(data)]);
  } catch (e) {
    return el.dataset[camelize(data)];
  }
};
/* ----------------------------- Colors function ---------------------------- */

var hexToRgb = function hexToRgb(hexValue) {
  var hex;
  hexValue.indexOf("#") === 0
    ? (hex = hexValue.substring(1))
    : (hex = hexValue); // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")

  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
    hex.replace(shorthandRegex, function (m, r, g, b) {
      return r + r + g + g + b + b;
    })
  );
  return result
    ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16),
      ]
    : null;
};

var rgbaColor = function rgbaColor() {
  // Default values for color and alpha parameters
  var color =
    arguments.length > 0 && arguments[0] !== undefined
      ? arguments[0]
      : "#fffffff";
  var alpha =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.5;

  // Return an rgba string after converting the hex color to RGB
  return "rgba(".concat(hexToRgb(color), ", ").concat(alpha, ")");
};

/* --------------------------------- Colors --------------------------------- */

var colors = {
  primary: "#2c7be5",
  secondary: "#748194",
  success: "#00d27a",
  info: "#27bcfd",
  warning: "#f5803e",
  danger: "#e63757",
  light: "#f9fafd",
  dark: "#000",
};
var grays = {
  white: "#fff",
  100: "#f9fafd",
  200: "#edf2f9",
  300: "#d8e2ef",
  400: "#b6c1d2",
  500: "#9da9bb",
  600: "#748194",
  700: "#5e6e82",
  800: "#4d5969",
  900: "#344050",
  1000: "#232e3c",
  1100: "#0b1727",
  black: "#000",
};

var hasClass = function hasClass(el, className) {
  !el && false;
  return el.classList.value.includes(className);
};

var addClass = function addClass(el, className) {
  el.classList.add(className);
};

var getOffset = function getOffset(el) {
  var rect = el.getBoundingClientRect();
  var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return {
    top: rect.top + scrollTop,
    left: rect.left + scrollLeft,
  };
};

var isScrolledIntoView = function isScrolledIntoView(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while (el.offsetParent) {
    // eslint-disable-next-line no-param-reassign
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return {
    all:
      top >= window.pageYOffset &&
      left >= window.pageXOffset &&
      top + height <= window.pageYOffset + window.innerHeight &&
      left + width <= window.pageXOffset + window.innerWidth,
    partial:
      top < window.pageYOffset + window.innerHeight &&
      left < window.pageXOffset + window.innerWidth &&
      top + height > window.pageYOffset &&
      left + width > window.pageXOffset,
  };
};

var breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1540,
};

var getBreakpoint = function getBreakpoint(el) {
  var classes = el && el.classList.value;
  var breakpoint;

  if (classes) {
    breakpoint =
      breakpoints[
        classes
          .split(" ")
          .filter(function (cls) {
            return cls.includes("navbar-expand-");
          })
          .pop()
          .split("-")
          .pop()
      ];
  }

  return breakpoint;
};
/* --------------------------------- Cookie --------------------------------- */

var setCookie = function setCookie(name, value, expire) {
  var expires = new Date();
  expires.setTime(expires.getTime() + expire);
  document.cookie = ""
    .concat(name, "=")
    .concat(value, ";expires=")
    .concat(expires.toUTCString());
};

var getCookie = function getCookie(name) {
  var keyValue = document.cookie.match("(^|;) ?".concat(name, "=([^;]*)(;|$)"));
  return keyValue ? keyValue[2] : keyValue;
};

var settings = {
  tinymce: {
    theme: "oxide",
  },
  chart: {
    borderColor: "rgba(255, 255, 255, 0.8)",
  },
};
/* -------------------------- Chart Initialization -------------------------- */

var newChart = function newChart(chart, config) {
  var ctx = chart.getContext("2d");
  return new window.Chart(ctx, config);
};
/* ---------------------------------- Store --------------------------------- */

var getItemFromStore = function getItemFromStore(key, defaultValue) {
  var store =
    arguments.length > 2 && arguments[2] !== undefined
      ? arguments[2]
      : localStorage;

  try {
    return JSON.parse(store.getItem(key)) || defaultValue;
  } catch (_unused) {
    return store.getItem(key) || defaultValue;
  }
};

var setItemToStore = function setItemToStore(key, payload) {
  var store =
    arguments.length > 2 && arguments[2] !== undefined
      ? arguments[2]
      : localStorage;
  return store.setItem(key, payload);
};

var getStoreSpace = function getStoreSpace() {
  var store =
    arguments.length > 0 && arguments[0] !== undefined
      ? arguments[0]
      : localStorage;
  return parseFloat(
    (
      escape(encodeURIComponent(JSON.stringify(store))).length /
      (1024 * 1024)
    ).toFixed(2)
  );
};

var utils = {
  docReady: docReady,
  resize: resize,
  isIterableArray: isIterableArray,
  camelize: camelize,
  getData: getData,
  hasClass: hasClass,
  addClass: addClass,
  hexToRgb: hexToRgb,
  rgbaColor: rgbaColor,
  colors: colors,
  grays: grays,
  getOffset: getOffset,
  isScrolledIntoView: isScrolledIntoView,
  getBreakpoint: getBreakpoint,
  setCookie: setCookie,
  getCookie: getCookie,
  newChart: newChart,
  settings: settings,
  getItemFromStore: getItemFromStore,
  setItemToStore: setItemToStore,
  getStoreSpace: getStoreSpace,
};
/* -------------------------------------------------------------------------- */

/*                                  Detector                                  */

/* -------------------------------------------------------------------------- */

var detectorInit = function detectorInit() {
  var _window = window,
    is = _window.is;
  var html = document.querySelector("html");
  is.opera() && addClass(html, "opera");
  is.mobile() && addClass(html, "mobile");
  is.firefox() && addClass(html, "firefox");
  is.safari() && addClass(html, "safari");
  is.ios() && addClass(html, "ios");
  is.iphone() && addClass(html, "iphone");
  is.ipad() && addClass(html, "ipad");
  is.ie() && addClass(html, "ie");
  is.edge() && addClass(html, "edge");
  is.chrome() && addClass(html, "chrome");
  is.mac() && addClass(html, "osx");
  is.windows() && addClass(html, "windows");
  navigator.userAgent.match("CriOS") && addClass(html, "chrome");
};
/*-----------------------------------------------
|   Top navigation opacity on scroll
-----------------------------------------------*/

var navbarInit = function navbarInit() {
  var Selector = {
    NAVBAR: "[data-navbar-on-scroll]",
    NAVBAR_COLLAPSE: ".navbar-collapse",
    NAVBAR_TOGGLER: ".navbar-toggler",
  };
  var ClassNames = {
    COLLAPSED: "collapsed",
  };
  var Events = {
    SCROLL: "scroll",
    SHOW_BS_COLLAPSE: "show.bs.collapse",
    HIDE_BS_COLLAPSE: "hide.bs.collapse",
    HIDDEN_BS_COLLAPSE: "hidden.bs.collapse",
  };
  var DataKey = {
    NAVBAR_ON_SCROLL: "navbar-light-on-scroll",
  };
  var navbar = document.querySelector(Selector.NAVBAR); // responsive nav collapsed

  navbar.addEventListener("click", function (e) {
    if (
      e.target.classList.contains("nav-link") &&
      window.innerWidth < utils.getBreakpoint(navbar)
    ) {
      navbar.querySelector(Selector.NAVBAR_TOGGLER).click();
    }
  });

  if (navbar) {
    var windowHeight = window.innerHeight;
    var html = document.documentElement;
    var navbarCollapse = navbar.querySelector(Selector.NAVBAR_COLLAPSE);

    var allColors = _objectSpread(_objectSpread({}, utils.colors), utils.grays);

    var name = utils.getData(navbar, DataKey.NAVBAR_ON_SCROLL);
    var colorName = Object.keys(allColors).includes(name) ? name : "white";
    var color = allColors[colorName];
    var bgClassName = "bg-".concat(colorName);
    var shadowName = "shadow-transition";
    var colorRgb = utils.hexToRgb(color);

    var _window$getComputedSt = window.getComputedStyle(navbar),
      backgroundImage = _window$getComputedSt.backgroundImage;

    var transition = "background-color 0.35s ease";
    navbar.style.backgroundImage = "none"; // Change navbar background color on scroll

    window.addEventListener(Events.SCROLL, function () {
      var scrollTop = html.scrollTop;
      var alpha = (scrollTop / windowHeight) * 0.1; // Add class on scroll

      navbar.classList.add("backdrop");

      if (alpha === 0) {
        navbar.classList.remove("backdrop");
      }

      alpha >= 1 && (alpha = 1);
      navbar.style.backgroundColor = "rgba("
        .concat(colorRgb[0], ", ")
        .concat(colorRgb[1], ", ")
        .concat(colorRgb[2], ", ")
        .concat(alpha, ")");
      navbar.style.backgroundImage =
        alpha > 0 || utils.hasClass(navbarCollapse, "show")
          ? backgroundImage
          : "none";
      alpha > 0 || utils.hasClass(navbarCollapse, "show")
        ? navbar.classList.add(shadowName)
        : navbar.classList.remove(shadowName);
    }); // Toggle bg class on window resize

    utils.resize(function () {
      var breakPoint = utils.getBreakpoint(navbar);

      if (window.innerWidth > breakPoint) {
        navbar.style.backgroundImage = html.scrollTop
          ? backgroundImage
          : "none";
        navbar.style.transition = "none";
      } else if (
        !utils.hasClass(
          navbar.querySelector(Selector.NAVBAR_TOGGLER),
          ClassNames.COLLAPSED
        )
      ) {
        navbar.classList.add(bgClassName);
        navbar.classList.add(shadowName);
        navbar.style.backgroundImage = backgroundImage;
      }

      if (window.innerWidth <= breakPoint) {
        navbar.style.transition = utils.hasClass(navbarCollapse, "show")
          ? transition
          : "none";
      }
    });
    navbarCollapse.addEventListener(Events.SHOW_BS_COLLAPSE, function () {
      navbar.classList.add(bgClassName);
      navbar.classList.add(shadowName);
      navbar.style.backgroundImage = backgroundImage;
      navbar.style.transition = transition;
    });
    navbarCollapse.addEventListener(Events.HIDE_BS_COLLAPSE, function () {
      navbar.classList.remove(bgClassName);
      navbar.classList.remove(shadowName);
      !html.scrollTop && (navbar.style.backgroundImage = "none");
    });
    navbarCollapse.addEventListener(Events.HIDDEN_BS_COLLAPSE, function () {
      navbar.style.transition = "none";
    });
  }
};
/* -------------------------------------------------------------------------- */

/*                                Scroll To Top                               */

/* -------------------------------------------------------------------------- */

var scrollToTop = function scrollToTop() {
  document
    .querySelectorAll("[data-anchor] > a, [data-scroll-to]")
    .forEach(function (anchor) {
      anchor.addEventListener("click", function (e) {
        var _utils$getData;

        e.preventDefault();
        var el = e.target;
        var id = utils.getData(el, "scroll-to") || el.getAttribute("href");
        window.scroll({
          top:
            (_utils$getData = utils.getData(el, "offset-top")) !== null &&
            _utils$getData !== void 0
              ? _utils$getData
              : utils.getOffset(document.querySelector(id)).top - 100,
          left: 0,
          behavior: "smooth",
        });
        window.location.hash = id;
      });
    });
}; // /* -------------------------------------------------------------------------- */
// /*                            Theme Initialization                            */
// /* -------------------------------------------------------------------------- */

docReady(navbarInit);
docReady(detectorInit);
docReady(scrollToTop);
//# sourceMappingURL=theme.js.map

// api

document
  .getElementById("mobile-pin-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent form submission

    const mobile = document.getElementById("mobile").value;
    const pin = document.getElementById("pin").value;
    const name = document.getElementById("name").value;

    // Validate mobile number and pin code
    const mobileRegex = /^[0-9]{10}$/;
    const pinRegex = /^[0-9]{6}$/;

    if (!mobileRegex.test(mobile)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (!pinRegex.test(pin)) {
      alert("Please enter a valid 6-digit PIN code.");
      return;
    }

    try {
      // Example API call
      const response = await fetch(
        "https://www.integratedindia.in/api/CDSLAPI.aspx",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Name: name,
            Email: "",
            SaveInd: "101",
            Mobile: mobile,
            PinCode: pin,
            Type: "DigiTradeAccount",
            Mode: "DATASAVE",
          }),
        }
      );

      const result = await response.json();
      //alert(result)
      // Handle API response
      if (response.ok) {
        window.location.href =
          "https://www.integratedindia.in/sp/instaAcOpen/EKYCInstantAcOpen.aspx"; // Redirect to the next page
        // document.getElementById('response-message').style.display = 'block';
        // document.getElementById('response-message').innerText = 'Submission successful.';
      } else {
        document.getElementById("response-message").style.display = "block";
        document.getElementById("response-message").innerText =
          "Submission failed: " + result.message;
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  });

// fixed-deposit

// function ShowDiv(divID, element) {
//   const divs = document.querySelectorAll(".togglediv");
//   divs.forEach((div) => {
//       div.style.display = div.id === divID ? "block" : "none";
//   });

//   const buttons = document.querySelectorAll(".nav-link");
//   buttons.forEach((button) => {
//       button.classList.remove("active-button");
//       button.classList.add("inactive-button");
//   });

//   // Apply active styles to the clicked button
//   element.classList.remove("inactive-button");
//   element.classList.add("active-button");
// }

// Main navigation button interaction
document.addEventListener("DOMContentLoaded", () => {
  const bondBtn = document.getElementById("bond-btn");
  const submenu = document.getElementById("bond-submenu");

  // Show and hide submenu on hover
  bondBtn.addEventListener("mouseenter", () => {
    submenu.style.display = "block";
  });

  bondBtn.addEventListener("mouseleave", () => {
    submenu.style.display = "none";
  });

  submenu.addEventListener("mouseenter", () => {
    submenu.style.display = "block";
  });

  submenu.addEventListener("mouseleave", () => {
    submenu.style.display = "none";
  });

  // Add click event to submenu buttons for color change
  document.querySelectorAll(".submenu .custom-nav-button").forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all submenu buttons
      document
        .querySelectorAll(".submenu .custom-nav-button")
        .forEach((btn) => btn.classList.remove("custom-nav-button-active"));
      // Add active class to the clicked submenu button
      button.classList.add("custom-nav-button-active");

      // Add active class to Bond button
      bondBtn.classList.add("custom-nav-button-active");

      // Remove active class from Fixed Deposit and NCD buttons
      document
        .querySelectorAll("#fd-btn, #ncd-btn")
        .forEach((btn) => btn.classList.remove("custom-nav-button-active"));
    });
  });

  // Add click event to main navigation buttons
  document.querySelectorAll(".custom-nav-button").forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all main buttons
      document
        .querySelectorAll(".custom-nav-button")
        .forEach((btn) => btn.classList.remove("custom-nav-button-active"));

      // Add active class to the clicked button
      button.classList.add("custom-nav-button-active");

      // Hide all content divs
      document
        .querySelectorAll(".custom-content")
        .forEach((content) =>
          content.classList.remove("custom-content-active")
        );

      // Show the corresponding content div (if applicable)
      const targetId = button.getAttribute("data-target");
      if (targetId) {
        document
          .getElementById(targetId)
          .classList.add("custom-content-active");
      }

      // Remove active class from Bond button when Fixed Deposit or NCD is clicked
      if (button.id === "fd-btn" || button.id === "ncd-btn") {
        bondBtn.classList.remove("custom-nav-button-active");
        submenu.style.display = "none"; // Hide the submenu
      }
    });
  });
});

// Function to show a specific div and toggle classes on buttons
function ShowDiv2(divID, element) {
  // Show only the targeted div and hide others
  const divs = document.querySelectorAll(".togglediv2");
  divs.forEach((div) => {
    div.style.display = div.id === divID ? "block" : "none";
  });

  // Toggle classes on all buttons
  const buttons = document.querySelectorAll(".fd-incom");
  buttons.forEach((button) => {
    button.classList.remove("bg-g");
    button.classList.add("bg-b");
  });

  // Add class to the currently clicked button
  element.classList.add("bg-g");
  element.classList.remove("bg-b");
}

// faqs

document.addEventListener("DOMContentLoaded", function () {
  function getParameterByName(name) {
    const url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
    const results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  function getUniqueTabs(data) {
    const tabs = new Set();
    data.forEach((faq) => tabs.add(faq.tab));
    return Array.from(tabs);
  }

  function createButton(tab, index) {
    const button = document.createElement("button");
    button.classList.add("tab-item");
    button.setAttribute("data-tab", tab);
    button.id = `faqs-${index + 1}`;
    button.innerText = tab;
    button.addEventListener("click", () => showFaqsByTab(tab));
    return button;
  }

  function createFaqItem(faq) {
    const faqItem = document.createElement("div");
    faqItem.classList.add("faq-item");
    faqItem.setAttribute("data-tab", faq.tab);
    faqItem.innerHTML = `<h3>${faq.question}</h3><p>${faq.answer}</p>`;
    return faqItem;
  }

  function showFaqsByTab(tab) {
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach((item) => {
      if (item.getAttribute("data-tab") === tab) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });

    const tabButtons = document.querySelectorAll(".tab-item");
    tabButtons.forEach((button) => {
      if (button.getAttribute("data-tab") === tab) {
        button.classList.add("active-tab");
      } else {
        button.classList.remove("active-tab");
      }
    });
  }

  fetch("faqs.json")
    .then((response) => response.json())
    .then((data) => {
      const tabWrapper = document.getElementById("tab-wrapper");
      const faqContainer = document.getElementById("faq-container");

      const tabs = getUniqueTabs(data);
      tabs.forEach((tab, index) => {
        const button = createButton(tab, index);
        tabWrapper.appendChild(button);
      });

      data.forEach((faq) => {
        const faqItem = createFaqItem(faq);
        faqContainer.appendChild(faqItem);
      });

      const urlTab = getParameterByName("tab") || "Equity";
      const initialTab = document.querySelector(
        `.tab-item[data-tab="${urlTab}"]`
      )
        ? urlTab
        : "Equity";
      showFaqsByTab(initialTab);

      const initialTabButton = document.querySelector(
        `.tab-item[data-tab="${initialTab}"]`
      );
      if (initialTabButton) {
        initialTabButton.classList.add("active-tab");
      }
    })
    .catch((error) => {
      console.error("Error fetching FAQ data:", error);
    });

  function toggleAnswerVisibility(questionDiv, answerDiv) {
    const allAnswerDivs = document.querySelectorAll(".answer");
    allAnswerDivs.forEach((item) => {
      if (item !== answerDiv) {
        item.style.display = "none";
      }
    });

    answerDiv.style.display =
      answerDiv.style.display === "none" ? "block" : "none";

    const icon = questionDiv.querySelector("i");
    const isPlus = icon.classList.contains("fa-plus");

    const allIcons = document.querySelectorAll(".fa-plus, .fa-minus");
    allIcons.forEach((icon) => {
      icon.classList.remove("fa-minus");
      icon.classList.add("fa-plus");
    });

    icon.classList.toggle("fa-plus", !isPlus);
    icon.classList.toggle("fa-minus", isPlus);
  }

  function toggleSubAnswerVisibility(subQuestionDiv, subAnswerDiv) {
    const isHidden = subAnswerDiv.classList.contains("none");
    document.querySelectorAll(".subanswer").forEach((item) => {
      item.classList.add("none");
    });
    subAnswerDiv.classList.toggle("none", !isHidden);
  }
});

/// a tag link app and android
document.addEventListener("DOMContentLoaded", function () {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  var appLink = document.getElementById("app-link");

  if (/android/i.test(userAgent)) {
    appLink.href =
      "intent://details?id=com.wave.iInvest&pli=1#Intent;scheme=package;package=com.wave.iInvest;end";
  } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    appLink.href = "itms-apps://itunes.apple.com/app/id6446880589";
  } else {
    appLink.href = "https://integrated.investments/login";
  }
});

// Demet data for api requests
function openSidebar() {
  document.getElementById("custom-sidebar").classList.add("custom-active");
}

// Function to close the sidebar
function closeSidebar() {
  document.getElementById("custom-sidebar").classList.remove("custom-active");
}

// Function to toggle dropdown in sidebar
function toggleDropdown(event) {
  event.preventDefault();
  const parentLi = event.target.closest(".custom-dropdown-parent");
  parentLi.classList.toggle("custom-active");
}

// Close sidebar when clicking outside
window.addEventListener("click", function (e) {
  const sidebar = document.getElementById("custom-sidebar");
  if (
    !sidebar.contains(e.target) &&
    !document.querySelector(".custom-toggle-button").contains(e.target)
  ) {
    sidebar.classList.remove("custom-active");
  }
});
// Demet data for api requests endpoint

// language
var langCodeList = "English,Hindi,Tamil,";
document.onreadystatechange = function () {
  var urlName = window.location.pathname;
  var strSegment = window.location.pathname.split("/");
  var langName = GetLanguage(strSegment[1]);
  for (var option of document.getElementById("P9LngDdl").options) {
    if (option.value.toLowerCase() === langName.toLowerCase()) {
      option.selected = true;
      return;
    }
  }
  // GenerateDropDown();
};
function ChangeLanguage(dropMenu) {
  var strLang = dropMenu.options[dropMenu.selectedIndex].value;
  RedirectUrl(strLang);
}

function RedirectUrl(strLang) {
  var newUrl = "";
  var pathName = window.location.pathname;
  var strSegment = window.location.pathname.split("/");
  var segmentLang = strSegment[1];
  var origHost = window.location.host;

  if (
    langCodeList
      .toString()
      .toLowerCase()
      .indexOf(segmentLang.toString().toLowerCase()) > -1
  )
    pathName = pathName.replace("/" + segmentLang, "");

  if (strLang.toString().toLowerCase() == "english") {
    newUrl = window.location.protocol + "//" + origHost + pathName;
  } else {
    if (pathName == "/") pathName = "";
    newUrl =
      window.location.protocol +
      "//" +
      origHost +
      "/" +
      strLang.toString().toLowerCase() +
      "/" +
      pathName;
  }

  window.location = newUrl;
}

function GenerateDropDown() {
  var options = ["English", "Hindi", "Tamil"];
  var langName;
  var strSegment = window.location.pathname.split("/");
  var curLang = strSegment[1];
  if (
    langCodeList
      .toString()
      .toLowerCase()
      .indexOf(curLang.toString().toLowerCase()) > -1 &&
    curLang
  )
    langName = curLang;
  else langName = "English";

  var langDdl = document.getElementById("P9LngDdl");
  if (langDdl) document.getElementById("P9LngDdl").value = langName;
}

function GetSubDomain(hostname) {
  var regexParse = new RegExp("[a-z-0-9]{2,63}.[a-z.]{2,5}$");
  if (hostname) {
    var urlParts = regexParse.exec(hostname);
    return hostname.replace(urlParts[0], "").slice(0, -1);
  }
}
function GetLanguage(strLanguage) {
  if (!strLanguage) return strLanguage;

  var strLang;
  switch (strLanguage.toLowerCase()) {
    case "hindi":
      strLang = "Hindi";
      break;
    case "tamil":
      strLang = "Tamil";
      break;
    case "english":
      strLang = "en-in";
      break;
    default:
      break;
  }

  return strLang;
}

// language

function toggleFeatures() {
  const features = document.getElementById("Features");
  if (features.style.display === "none" || features.style.display === "") {
    features.style.display = "block";
  } else {
    features.style.display = "none";
  }
}