var scrollen;
var positie = 0;
var nav = $('nav');
var hoogte = nav.outerHeight()

function verschuifing() {
    scrollen = $(this).scrollTop();
    
    //scroll detectie
    if(scrollen>positie){
        positie = scrollen;
        nav.css('top', -hoogte + 'px')
    }else{
        positie = scrollen;
        nav.css('top', 0)
    }
    
    console.log(scrollen);
}

//geeft een waarde als we scrollen
$(window).on('scroll', verschuifing);

