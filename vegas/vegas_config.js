$(document).ready(function() {
	$(".vegas-slideshow").vegas({
	    slides: [
	    	{ src: "media/7.2/72.jpg",
	            video: {
	                src: [
	                    'media/7.2/72.mp4',
	                    'media/7.2/72.webm'
	                ],
	                loop: true,
	                mute: true
	            },
	            delay: 34000 
	        },
	    	{ src: "media/NH/kills/m_trilliax.png" },
	    	{ src: "media/NH/kills/m_chrom.png" },
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
