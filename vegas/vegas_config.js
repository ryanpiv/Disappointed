$(document).ready(function() {
	$(".vegas-slideshow").vegas({
	    slides: [
	    	{ src: "media/EN/kills/m_xavius.jpg" },
	        { src: "media/NH/nighthold_placeholder.jpg",
	            video: {
	                src: [
	                    'media/NH/nighthold.mp4',
	                    'media/NH/nighthold.webm'
	                ],
	                loop: true,
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
