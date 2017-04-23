var clock = document.getElementById("countdown-holder")
	, targetDate = new Date(2050, 00, 01);

clock.innerHTML = countdown(targetDate).toString();
setInterval(function(){
	clock.innerHTML = countdown(targetDate).toString();
}, 1000);
