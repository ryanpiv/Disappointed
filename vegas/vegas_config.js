$(document).ready(function() {
    Pace.on('done', function() {
        $(".vegas-slideshow").vegas({
            slides: [
                { src: "media/ToS/tomb.jpg",
                    video: {
                        src: [
                            'media/ToS/ToS.mp4',
                            'media/ToS/ToS.webm'
                        ],
                        loop: true,
                        mute: true
                    },
                    delay: 27000
                },
                { src: "media/ToV/kills/m_helya.jpg" },
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
    })

});
