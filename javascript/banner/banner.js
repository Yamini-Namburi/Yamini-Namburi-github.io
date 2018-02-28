var bannersStatus = 1;
var bannerTimer = 4000;

window.onload = function() {
	bannerLoop();

}

 var startBannerLoop = setInterval(function() {
 	bannerLoop();
 }, bannerTimer);

document.getElementById("main-banner").onmouseenter = function() {
	clearinterval(startBannerLoop);
}

document.getElementById("main-banner").onmouseleave = function() {
	startBannerLoop = setInterval(function() {
		bannerLoop();
	}, bannerTimer);
}

document.getElementById("imgbanbtn-prev").onclick = function() {
if(bannersStatus === 1){
	bannersStatus = 2;
}
else if(bannersStatus === 2){
	bannersStatus = 3;
}
else if(bannersStatus === 3){
	bannersStatus = 1;
}
bannerLoop();
}
document.getElementById("imgbanbtn-next").onclick = function() {
	bannerLoop();

}


function bannerLoop() {
	if (bannersStatus == 1) {
		document.getElementById("imgban2").style.opacity = "0";
		setTimeout(function() {
		document.getElementById("imgban1").style.right = "0px";
		document.getElementById("imgban1").style.ZIndex = "1000";
		document.getElementById("imgban2").style.right = "-1200px";
		document.getElementById("imgban2").style.ZIndex = "1500";
		document.getElementById("imgban3").style.right = "1200px";
		document.getElementById("imgban3").style.ZIndex = "500";
	},500 );
		setTimeout(function(){
					document.getElementById("imgban2").style.opacity = "1";

		}, 1000);
		bannersStatus = 2

		
	}
	else if (bannersStatus == 2) {
		document.getElementById("imgban3").style.opacity = "0";
		setTimeout(function() {
		document.getElementById("imgban2").style.right = "0px";
		document.getElementById("imgban2").style.ZIndex = "1000";
		document.getElementById("imgban3").style.right = "-1200px";
		document.getElementById("imgban3").style.ZIndex = "1500";
		document.getElementById("imgban1").style.right = "1200px";
		document.getElementById("imgban1").style.ZIndex = "500";
	},500 );
		setTimeout(function(){
					document.getElementById("imgban3").style.opacity = "1";

		}, 1000);
		bannersStatus = 3;

		
	}
	else if (bannersStatus == 3) {
		document.getElementById("imgban3").style.opacity = "0";
		setTimeout(function() {
		document.getElementById("imgban3").style.right = "0px";
		document.getElementById("imgban3").style.ZIndex = "1000";
		document.getElementById("imgban1").style.right = "-1200px";
		document.getElementById("imgban1").style.ZIndex = "1500";
		document.getElementById("imgban2").style.right = "1200px";
		document.getElementById("imgban2").style.ZIndex = "500";
	},500 );
		setTimeout(function(){
					document.getElementById("imgban1").style.opacity = "1";

		}, 1000);
		bannersStatus = 3;

		
	}
}