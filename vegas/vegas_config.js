$(document).ready(function() {
    Pace.on('done', function() {
        $(".vegas-slideshow").vegas({
            slides: [
                { src: "media/ToS/kills/mistress.jpg" },
                { src: "media/ToS/kills/host.jpg" }, {
                    src: "media/7.3/73.jpg",
                    video: {
                        src: [
                            "media/7.3/73.webm",
                            "media/7.3/73.mp4"
                        ],
                        loop: true,
                        mute: true
                    },
                    delay: 33000
                },
                { src: "media/ToS/kills/sisters.jpg" },
                { src: "media/ToS/kills/demo.jpg" },
                { src: "media/ToS/kills/h_kj.jpg" },
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

        $(document).keydown(function(e) {
            if (e.keyCode == '37') {
                //left
                $(".vegas-slideshow").vegas('previous');
            } else if (e.keyCode == '39') {
                //right
                $(".vegas-slideshow").vegas('next');
            }
        });

        $(document).on("swipeleft", function() {
            $(".vegas-slideshow").vegas('previous');
        });
        $(document).on("swiperight", function() {
            $(".vegas-slideshow").vegas('next');
        });
    });

});
