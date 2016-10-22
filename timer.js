var timers = [];

function addTimer(time){
	timers.push(makeTimer(time);
}

var timer = {
	var time;
	this.timer = function(time){
		this.time=time;
	}
	
	this.initializeClock = function(id){
		var timer = document.getElementById(id);
		updateClock();
		var timeinterval = setInterval(updateClock(deadline), 1000);
	}
	
	this.getTimeRemaining = function(endtime){
		var t = Date.parse(endtime) - Date.parse(new Date());
		var seconds = Math.floor( (t/1000) % 60 );
		var minutes = Math.floor( (t/1000/60) % 60 );
		return {
		'total': t,
		'minutes': minutes,
		'seconds': seconds
		};
	}
	
	this.updateClock = function(deadline){
		var t = getTimeRemaining(deadline);
		clock.innerHTML = 'minutes: ' + t.minutes + '<br>' + 'seconds: ' + t.seconds;
		if(t.total<=0){
		clearInterval(timeinterval);
		}
	}
	
	this.printTo = function(){
		return this.time;
	}
}


