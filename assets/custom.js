$(document).ready(function(){

//Initiate Magnific Popup
//Use documentation to modify if needed: http://dimsemenov.com/plugins/magnific-popup/documentation.html#initializing-popup
  
  	$('.popup-video, .popup-gmaps').magnificPopup({
      //uncomment 'disableOn' to redirect to href when on mobile
      //disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
  
// ***Example of popup-image you can copy and change***
  
//    <a class="popup-video text-center" href="https://www.youtube.com/watch?v=U3FwI_Rp7lI">
//    <h3><i class="fa fa-play-circle video-play-btn"></i> Watch Our Video</h3>
//      </a>
  
	$('.popup-image').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});
  

// ***Example of popup-image you can copy and change***
  
//<a class="popup-image" href="http://farm4.staticflickr.com/3721/9207329484_ba28755ec4_o.jpg">
//	<img src="http://farm4.staticflickr.com/3721/9207329484_ba28755ec4_o.jpg" width="107" height="75">
//</a>

  
	$('.popup-modal').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#username',
		modal: true
	});
	$(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});

// ***Example HTML for building a modal you can copy and change***
  
//  <a class="popup-modal" href="#test-modal">Open modal</a>
//
//<div id="test-modal" class="white-popup-block mfp-hide">
//	<h1>Modal dialog</h1>
//	<p>You won't be able to dismiss this by usual means (escape or
//		click button), but you can close it programatically based on
//		user choices or actions.</p>
//	<p><a class="popup-modal-dismiss" href="#">Dismiss</a></p>
//</div>
  
  //end pop-up

});