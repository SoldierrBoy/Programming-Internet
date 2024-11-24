$(document).ready(function() {
    // Початкові значення для логотипу
    const initialStyles = {
        width: "100px",
        height: "100px",
        opacity: 1,
        left: "0px"
    };

    // Функція для запуску анімації логотипу
    function animateLogo() {
        $("#logo").animate({
            width: "150px",
            height: "150px",
            opacity: 0.7,
            left: "+=100px"
        }, {
            duration: 1000,
            easing: "swing",
            complete: function() {
                console.log("Анімація завершена!");
            },
            step: function(now, fx) {
                if (fx.prop === "width") {
                    console.log("Поточна ширина: " + now);
                }
            },
            queue: false
        });
    }

    // Функція для скидання логотипу до початкових значень
    function resetLogo() {
        $("#logo").animate(initialStyles, {
            duration: 500,
            easing: "swing",
            complete: function() {
                console.log("Логотип повернено до початкового стану");
            }
        });
    }

    // Обробники подій для кнопок
    $("#startAnimation").on("click", animateLogo);
    $("#stopAnimation").on("click", function() {
        $("#logo").stop();
    });
    $("#resetAnimation").on("click", resetLogo);
});
