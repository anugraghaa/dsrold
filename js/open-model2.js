
// var modal = document.getElementById('myModal');


// var btn = document.getElementById("myBtn");


// var span = document.getElementsByClassName("close")[0];


// btn.onclick = function() {
  // modal.style.display = "block";
// }


// span.onclick = function() {
  // modal.style.display = "none";
// }


// var modal = document.getElementById('myModal');

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



function openmodel2(modid2) {
	$("#"+modid2).show();
}
function closemodel2(modid2){
	$("#"+modid2).hide();
}

$(window).on('click' , function(event){
	if(event.target == $('#'+modid2)){
		$('#'+modid2).hide();
	}
	
});