
window.onscroll = () => { scrollFunction() };
window.onresize = () => { resizeFunction() };

scrollFunction = () => {
    if (window.scrollY > 20) {
        document.getElementById("header").classList.add('scroll');
        document.getElementById('go-top').style.bottom = '30px';
    }
    else {
        document.getElementById("header").classList.remove('scroll');
        document.getElementById('go-top').style.bottom = '-60px';
    }
}

resizeFunction = () => {
    document.getElementById('bg-sidebar').style.display = '';
    document.getElementById('sidebar').classList.remove('active');
}

toggleSidebar = () => {
    document.getElementById('sidebar').classList.toggle('active');
    if (document.getElementById('bg-sidebar').style.display == '')
        document.getElementById('bg-sidebar').style.display = 'block';
    else if (document.getElementById('bg-sidebar').style.display == 'block')
        document.getElementById('bg-sidebar').style.display = '';
}

$(document).click((event) => {
    if (event.target.id === 'bg-sidebar' || event.target.id === 'sidebar') {
        document.getElementById('bg-sidebar').style.display = '';
        document.getElementById('sidebar').classList.remove('active');
    }
})

var intervalId = 0;
goTopFunction = () => {
    scrollToTop(50, 15);
}
scrollToTop = (scrollStepHeight, delay) => {
    intervalId = setInterval(() => {
        scrollStep(scrollStepHeight);
    }, delay);
}
scrollStep = (scrollStepHeight) => {
    if (window.pageYOffset === 0) {
        clearInterval(intervalId);
    }
    window.scrollTo(0, window.pageYOffset - scrollStepHeight);
}