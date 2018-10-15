

$( document ).ready(function start() {

	$(".inputElements").on("click",function(){
		var h = $(this).text();
		$("#calculatorInput").append(h);

	});

$(".clear").on("click", function clear() {
	$("#calculatorInput").empty();
});

$(".evaluate").on("click",function (){
	var k = $("#calculatorInput").text();

	try{
		$("#calculatorInput").text(eval(k));

	}
	catch(e){
		$("calculatorInput").text("Invalid Input");
	}

});





});