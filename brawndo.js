console.log("cleanup fired");
var analyticsLoaded=false;

for (var x=0; x<50; x++ ) { 
	setTimeout(function() {
		if (document.getElementsByClassName("ReportsPage__container")[0] !== undefined && analyticsLoaded == false) {
			document.getElementsByClassName("ReportsPage__container")[0].innerHTML="<iframe src='https://app.periscopedata.com/shared/878c40b8-3fea-48ff-8e5b-9191b971fb76' height='1000px' width='100%'></iframe>";
			analyticsLoaded = true;
			console.log("cleanup completed");
		};
	}, x*100);
};
