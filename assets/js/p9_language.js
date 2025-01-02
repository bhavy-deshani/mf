var langCodeList ="Hindi,Marathi,Gujarati,Bengali,Tamil,Telugu,Kannada,Malayalam,Oriya";
document.onreadystatechange = function () {
  var urlName = window.location.pathname;
  var strSegment = window.location.pathname.split("/");
  var langName = GetLanguage(strSegment[1]);

  //GenerateDropDown();
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
  var options = [
    "English",
    "Hindi",
    "Marathi",
    "Bengali",
    "Kannada",
    "Tamil",
    "Telugu",
  ];
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
    case "kannada":
      strLang = "Kannada";
      break;
    case "marathi":
      strLang = "Marathi";
      break;
    case "punjabi":
      strLang = "Punjabi";
      break;
    case "telugu":
      strLang = "Telugu";
      break;
    case "tamil":
      strLang = "Tamil";
      break;
    case "malayalam":
      strLang = "Malayalam";
      break;
    case "bengali":
      strLang = "Bengali";
      break;
    case "bangla":
      strLang = "Bangla";
      break;
    case "gujarati":
      strLang = "Gujarati";
      break;
    case "arabic":
      strLang = "Arabic";
      break;
    case "bhojpuri":
      strLang = "Bhojpuri";
      break;
    case "odia":
      strLang = "Odia";
      break;
    case "oriya":
      strLang = "Oriya";
      break;
    case "rajasthani":
      strLang = "Rajasthani";
      break;
    case "assamese":
      strLang = "Assamese";
      break;
    case "english":
      strLang = "en-in";
      break;

    default:
      break;
  }

  return strLang;
}
