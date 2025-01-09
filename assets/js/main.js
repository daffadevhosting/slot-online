function pull_jackpot() {
	var total = inittotal;
	inittotal += 199;
	if (jackpot == 0) jackpot = parseInt(total - 100000);
	var amount = 1
	timer = setInterval(function () { jackpot = set_jackpot(jackpot, total, amount); }, 240);
}
function set_jackpot(jackpot, nominal, amount) {
	var jackpot = jackpot + amount;
	if (jackpot >= nominal) {
		clearInterval(timer);
		pull_jackpot();
	} else {
		var result = addCommas(parseInt(jackpot));
		$('.count-jack').html(result);
	}
	return jackpot;
}
function addCommas(nStr) {
	nStr += '';
	x = nStr.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}
$(function(){
     $("#Slides589").carousel({
          pause: false
     });
});
$(function(){
     $("#Slides587").carousel({
          pause: false
     });
});
if ( $(window).width() <= 448) { 
	$('.button-login').click(function(){
		$('.login-former').toggle('slow');
	});
}