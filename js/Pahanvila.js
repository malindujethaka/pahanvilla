var index = 0;
carousel();
function carousel() {
	var i;
	var x = document.getElementsByClassName("slide");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";  
	}
	index++;
	if (index > x.length) {index = 1}    
	x[index-1].style.display = "block";  
	setTimeout(carousel, 5000);
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}



function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");

  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
 
}