$(document).ready(function() {
	$(".vegas-slideshow").vegas({
	    slides: [
	    	{ src: "media/ToV/kills/m_helya.jpg" },
	    	{ src: "media/7.2.5/725.jpg",
	            video: {
	                src: [
	                    'media/7.2.5/725.mp4',
	                    'media/7.2.5/725.webm'
	                ],
	                loop: true,
	                mute: true
	            },
	            delay: 27000 
	        },
	    	{ src: "media/NH/kills/m_auger.jpg" },
	    	{ src: "media/NH/kills/m_bot.jpg" },
	    	{ src: "media/NH/kills/m_tich.jpg" },
	    	{ src: "media/NH/kills/m_spellblade.jpg" },
	    	{ src: "media/NH/kills/m_krosus.jpg" },
	    	{ src: "media/NH/kills/m_trilliax.jpg" },
	    	{ src: "media/NH/kills/m_chrom.jpg" },
	    	{ src: "media/NH/kills/m_skorp.jpg" },
	    	{ src: "media/NH/kills/heroic_guldan.jpg" },
	    	{ src: "media/EN/kills/m_xavius.jpg" }
	    ],
	    delay: 20000,
    	animation: 'random',
    	animationDuration: 15000
	});
});
