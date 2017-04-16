$(document).ready(function() {
	$(".vegas-slideshow").vegas({
	    slides: [
	    	{ src: "media/NH/kills/m_spellblade.jpg" },
	    	{ src: "media/NH/kills/m_krosus.jpg" },
	    	{ src: "media/NH/kills/m_trilliax.png" },
	    	{ src: "media/NH/kills/m_chrom.png" },
	    	{ src: "media/NH/kills/m_skorp.png" },
	    	{ src: "media/NH/kills/heroic_guldan.png" },
	    	{ src: "media/EN/kills/m_xavius.jpg" },
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
	        }
	    ],
	    delay: 20000,
    	animation: 'random',
    	animationDuration: 15000
	});
});
