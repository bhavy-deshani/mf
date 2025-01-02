var _geostagid="";
var _geotagid="";
/* For Static Coordinates */
function GetGeoLocation(){return new Promise(function (resolve, reject){if (navigator.geolocation) {navigator.geolocation.getCurrentPosition((position) => resolve(position),(error) => reject(error));}});};
function TakeGeoTag(gtag)
{
		GetGeoLocation().then((res)=>{
		const { coords } = res;
		var geotag="{\"error\":\"0\",\"accuracy\":\""+coords.accuracy+"\",\"altitude\":\""+coords.altitude+"\",\"altitudeAccuracy\":\""+coords.altitudeAccuracy+"\",\"heading\":\""+coords.heading+"\",\"latitude\":\""+coords.latitude+"\",\"longitude\":\""+coords.longitude+"\",\"speed\":\""+coords.speed+"\"}";
		document.getElementById(gtag).value= geotag;
		//alert(geotag);
		return geotag;
		}).catch((error) => {var geotag="{\"error\":\""+error.code+"\",\"message\":\""+GetDetailedError(error.code)+"\"}"; 
		//alert(geotag);
		document.getElementById(gtag).value= geotag;
		return geotag});
}

function GetDetailedError(Code)
{
	if (Code=="1"){return "PERMISSION_DENIED";}
	else if (Code=="2"){return "POSITION_UNAVAILABLE";}
	else if (Code=="3"){return "TIMEOUT";}
}

/* For Continous Track */
function GeoLocator() { this._options = { enableHighAccuracy:true,maximumAge:10000,timeout:7000 } };
GeoLocator.prototype =
{
	get watchID() { return this._watchID; },
	set watchID(watchID) { this._watchID = watchID; },
	get options() { return this._options; },
	_promise: function(promise, cb){
	var geolocation = this;
	return new Promise(function(ok, err){
	if (promise == "getPosition") navigator.geolocation.getCurrentPosition(cb, cb,geolocation.options);
	else if (promise == "watchPosition") geolocation.watchID = navigator.geolocation.watchPosition(cb, cb, geolocation.options);});},
	getPosition: function(cb){return this._promise("getPosition", cb); },
	watchPosition: function(cb){this.clearWatch();return this._promise("watchPosition", cb);}
	,clearWatch: function(){if (!this.watchID) return; navigator.geolocation.clearWatch(this.watchID);this.watchID = null;}
};
function log(Data) { console.log(Data); if (_geotagid!=""){document.getElementById(_geotagid).value=Data;} return Data; };
function GeoSuccess({coords: {accuracy:accuracy,altitude:altitude,altitudeAccuracy:altitudeAccuracy,heading:heading,latitude: latitude, longitude: longitude,speed:speed}}) 
{ var geotag="{\"error\":\"0\",\"accuracy\":\""+accuracy+",\"altitude\":\""+altitude+"\",\"altitudeAccuracy\":\""+altitudeAccuracy+",\"heading\":\""+heading+",\"latitude\":\""+latitude+",\"longitude\":\""+longitude+",\"speed\":\""+speed+"\"}"; log(geotag); };
function GeoError({code: code, message: message}) { var geotag="{\"error\":\""+code+"\",\"message\":\""+message+"\"}"; log(geotag); };
function notifyPosition(event) { return new Promise(function(ok, err) { event.coords ? ok(event) : err(event); }).then(GeoSuccess).catch(GeoError); };
function TrackGeoTag(geotagid) 
{ 
_geotagid=geotagid; 
var geolocation = new GeoLocator(); 
geolocation.watchPosition(notifyPosition);
}
//TrackGeoTag("");
//TakeGeoTag();