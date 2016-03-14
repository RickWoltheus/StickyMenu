var scrollen;
var positie = 0;
var nav = $('nav');
var main = $('main');
var hoogte = nav.outerHeight()

function verschuifing() {
    scrollen = $(this).scrollTop();
    
    //scroll detectie
    if(scrollen>positie){
        //haalt de nav weg
        positie = scrollen;
        main.css('margin-left', '0px');
        main.css('margin-right', '0px');
        nav.css('top', -hoogte + 'px')
        nav.css('opacity', '0.3');
    }else{
        // brengt de nav terug
        positie = scrollen;
        main.css('border-style', 'groove')
        main.css('margin-left', '100px');
        main.css('margin-right', '100px');
        nav.css('top', 0);
        nav.css('opacity', '1');
    }
    
    console.log(scrollen);
}

//geeft een waarde als we scrollen
$(window).on('scroll', verschuifing);

