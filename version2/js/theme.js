function car1_run(){
    $('#car1').animate({ left: "+=100%"},10000,function(){$('#car1').css({'left':0})});
}

function car2_run(){
    $('#car2').animate({ right: "+=100%"},15000,function(){$('#car2').css({'right':0})});
}	

function getRandomSubarray(arr, size) {
    var shuffled = arr.slice(0), i = arr.length, temp, index;
    while (i--) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(0, size);
}

$(document).ready(function(){
	var timerCar1;
	var timerCar2;
	
	car1_run();
	car2_run();
	clearInterval(timerCar1);
	clearInterval(timerCar2);
	timerCar1 = setInterval(car1_run,10200);
	timerCar2 = setInterval(car2_run,15200);

	var rand_position = [
		{ left: '10%', top: 20 },
		{ left: '20%', top: 70 },
		{ left: '30%', top: 210 },
		{ left: '40%', top: 100 },
		{ left: '50%', top: 210 },
		{ left: '60%', top: 140 },
		{ left: '70%', top: 190 },
		{ left: '80%', top: 180 }
	];

	var arr_position = getRandomSubarray(rand_position, 4);

	$('.u-popover').popover();

	$.each($('.u-popover'),function(index,item){
		$(item).css(arr_position[index]);
		
	});

});