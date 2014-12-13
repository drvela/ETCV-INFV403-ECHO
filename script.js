function currentPage() { 
    var page = document.getElementsByTagName("title")[0].innerHTML;
    if (page.indexOf('Previous Work') >= 0) { // Previous Work
        var navEl = document.getElementById('prev-work');
        navEl.setAttribute('class', 'current');
    } else if (page.indexOf('News') >= 0) { // News
        var navEl = document.getElementById('news');
        navEl.setAttribute('class', 'current');
    } else if (page.indexOf('Pricing') >= 0) { // Pricing
        var navEl = document.getElementById('pricing');
        navEl.setAttribute('class', 'current');
    } else if (page.indexOf('About Us') >= 0) { // About Us
        var navEl = document.getElementById('about-us');
        navEl.setAttribute('class', 'current');
    } else { // Home page
        var navEl = document.getElementById('home');
        navEl.setAttribute('class', 'current');
    }
}
