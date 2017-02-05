$(document).ready(function() {
	$(".vegas-slideshow").vegas({
	    slides: [
	    	{ src: "media/NH/kills/m_skorp.png" },
	    	{ src: "media/NH/kills/heroic_guldan.png" },
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
	            delay: 31000 
	        }
	    ],
	    delay: 20000,
    	animation: 'random',
    	animationDuration: 15000
	});
});
