
console.log("loaded!");


var myarray=[500,1000,1500,2000,2500,3000]; 
var analyticsloaded=false;

for (var x=0; x<myarray.length; x++ ) { 
	setTimeout(function() {
		if (document.getElementsByClassName("ReportsPage__container")[0] !== undefined && analyticsloaded == false) {
			document.getElementsByClassName("ReportsPage__container")[0].innerHTML="<iframe src='https://app.periscopedata.com/shared/36debdf7-c612-46ec-833a-94ec92ed8efd' height='1000px' width='100%'></iframe>";
			analyticsloaded = true;
			console.log("analytics loaded");
		};
	}, myarray[x]);
};
