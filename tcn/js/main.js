

 $(document).ready(function (){
            $("button").click(function (){
                $('html, body').animate({
                    scrollTop: $(".second").offset().top
                }, 2000);
            });
        });

 