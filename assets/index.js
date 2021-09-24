var elem = document.querySelector('.carousel');
var flkty = new Flickity( elem, {
  // options
  autoPlay: false,
  cellAlign: 'left',
  contain: true,
  freeScroll: true,
  wrapAround: true
 //  adaptiveHeight: true,
 //  on: {
	//     ready: function() {
	//     	console.log("Flickity");
	//   	}
	// }
});
flkty.on( 'change', function( index ) {
	var preActiveDiv = flkty.cells[0].element;
	preActiveDiv.classList.remove('testHeight');
	var active = document.querySelector('.demo.is-selected .img-relate');
	var img_relate = document.querySelectorAll('.demo .img-relate');
	img_relate.forEach(function(element, index) {
  		img_relate[index].classList.remove("test");
	});
	active.classList.add('test');
	flkty.reloadCells();

});
