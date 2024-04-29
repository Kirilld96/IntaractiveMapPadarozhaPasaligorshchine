function appearMap (display) 
{
    document.querySelector('.karta').style.display = display
};

function appearLegend (display) 
{
    document.querySelector('.legend-lists-container').style.display = display
};

window.addEventListener('scroll', function() {
    let stickyElement = document.getElementById('navPanel');
    let scrollPosition = window.scrollY;
    let navPanelhide = document.getElementById('navSvg');
     if (scrollPosition => 200) { 
     stickyElement.style.display = 'none'; 
     navPanelhide.style.display='block';
    } 
     else{
        stickyElement.style.display='block';
     } 
    }
);