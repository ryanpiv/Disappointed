$(document).ready(function() {
	$(".vegas-slideshow").vegas({
	    slides: [
	    	{ src: "media/NH/kills/m_bot.jpg" },
	    	{ src: "media/NH/kills/m_tich.jpg" },
	    	{ src: "media/NH/kills/m_spellblade.jpg" },
	    	{ src: "media/NH/kills/m_krosus.jpg" },
	    	{ src: "media/NH/kills/m_trilliax.jpg" },
	    	{ src: "media/NH/kills/m_chrom.jpg" },
	    	{ src: "media/NH/kills/m_skorp.jpg" },
	    	{ src: "media/NH/kills/heroic_guldan.jpg" },
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
