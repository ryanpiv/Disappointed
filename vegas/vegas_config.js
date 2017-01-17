$(document).ready(function() {
	$(".vegas-slideshow").vegas({
	    slides: [
	    	{ src: "media/EN/kills/m_xavius.jpg" },
	        { src: "media/nighthold_placeholder.jpg",
	            video: {
	                src: [
	                    'media/nighthold.mp4'
	                ],
	                loop: false,
	                mute: true
	            },
	            delay: 30000 
	        }
	    ],
	    delay: 15000,
    	animation: 'random',
    	animationDuration: 15000
	});
});
