/* Standard page footer JavaScript */

const IAMCONNECTED = [
    {
	'link': 'https://twitter.com/search?q=IAM%20Design%20Method',
        'class': 'fa fa-twitter'
    },

    {
	'link': 'https://www.facebook.com/IndustrialArtsMethod/',
	'class': 'fa fa-facebook'
    },

    {
	'link': 'https://github.com/IAMF',
	'class': 'fa fa-github'
    },
    
    {
//	'link': 'https://www.google.com',
//	'class': 'fa fa-google-plus'
    },
    
    {
//	'link': 'https://youtube.com',
//	'class': 'fa fa-youtube-play'
    },
    
    {
//	'link': 'https://instagram.com',
//	'class': 'fa fa-instagram'
    },
];

const IAMABOUT = [
    {
	'link': './about.html#page',
        'title': 'Our Methodology',
        'item': '1'
    },

    {
	'link': './about.html#team',
        'title': 'Our Team',
        'item': '2'
    },

    {
	'link': './about.html#advisors',
        'title': 'Our Advisors',
        'item': '3'
    },

    {
//	'link': './partners.html',
//      'title': 'Our Partners',
//      'item': '4'
    },
];

const IAMINVOLVED = [
    {
	'link': './events.html',
        'title': 'Upcoming Events',
        'item': '5'
    },

    {
//      'link': './host-an-event.html',
//      'title': 'Host an Event',
//      'item': '6'
    },

    {
//      'link': './latest-news.html',
//      'title': 'Latest News',
//      'item': '7'
    },

    {
	'link': './contact.html',
        'title': 'Contact Us',
        'item': '8'
    },
];


var footer = {
    pageFooter: function() {
        var footerElement = document.getElementById('footer');
        var content = '<footer>';
        content += '<div class="grid-12 content">';
	content += '<div class="grid-12-2">';
	content += '<p><a class="logo hover" href="./index.html"><img width="120" height="120" class="unveil" src="./images/placeholder.png" data-src="./images/logo-footer.png"></a>';
	content += '</p>';
	content += '</div>';
        content += '<div class="grid-12-10">';
	content += '<div class="menu">';

        // I AM CONNECTED
	content += '<div><h4 class="uppercase color-white">I AM CONNECTED</h4>';
	content += '<p class="social font-0">';

        for (var i = 0; i < IAMCONNECTED.length; i++) {
            // class is the only required field
            if ('class' in IAMCONNECTED[i]) {
		if ('link' in IAMCONNECTED[i]) {
		    content += '<a target="_blank" ';
		    content += 'href="';
                    content += IAMCONNECTED[i]['link'];
                    content += '">';
		}

		content += '<i class="';
                content += IAMCONNECTED[i]['class'];
		content += '"></i>';
		if ('link' in IAMCONNECTED[i]) {
		    content += '</a>';
		}
	    }
	}

        content += '</p>'
	content += '</div>';

        // I AM
        content += '<div><h4 class="uppercase color-white">I AM</h4>';
        content += '<div class="menu-i-am-container">';
	content += '<ul id="footer-column-3" class="footer-menu">';

        for (var i = 0; i < IAMABOUT.length; i++) {
            // title is the only required field
            if ('title' in IAMABOUT[i]) {
                if ('item' in IAMABOUT[i]) {
                    var item = IAMABOUT[i]['item'];
		} else {
                    var item = '404';
                }

		content += '<li id="menu-item-' + item + '" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-' + item + '"> ';
		if ('link' in IAMABOUT[i]) {
		    content += '<a href="';
                    content += IAMABOUT[i]['link'];
                    content += '">';
		}

                content += IAMABOUT[i]['title'];
		if ('link' in IAMABOUT[i]) {
		    content += '</a>';
		}
                content += '</li>';
	    }
	}

        content += '</ul>';
	content += '</div>';
	content += '</div>';

        // I AM INVOLVED
        content += '<div><h4 class="uppercase color-white">I AM INVOLVED</h4>';
        content += '<div class="menu-i-am-involved-container">';
	content += '<ul id="footer-column-2" class="footer-menu">';

        for (var i = 0; i < IAMINVOLVED.length; i++) {
            // title is the only required field
            if ('title' in IAMINVOLVED[i]) {
                if ('item' in IAMINVOLVED[i]) {
                    var item = IAMINVOLVED[i]['item'];
		} else {
                    var item = '404';
                }

		content += '<li id="menu-item-' + item + '" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-' + item + '"> ';
		if ('link' in IAMINVOLVED[i]) {
		    content += '<a href="';
                    content += IAMINVOLVED[i]['link'];
                    content += '">';
		}

                content += IAMINVOLVED[i]['title'];
		if ('link' in IAMINVOLVED[i]) {
		    content += '</a>';
		}
                content += '</li>';
	    }
	}

        content += '</ul>';
	content += '</div>';
	content += '</div>';

        // Close footer divs
	content += '</div>';
	content += '</div>';
	content += '</div>';

        // Copyright
	content += '<div class="content copyright color-white">';
        content += '<p class="float-left"><b><span>© 2016 IAM Foundation</span></b></p>';
        content += '<p class="float-right"><b><span><i class="fa fa-phone"></i> &nbsp; <a href="tel:+1 (800) 848-0398">+1 (800) 848-0398</a></span><span class="no-mobile no-tablet"> &nbsp; &nbsp; &nbsp; </span><span><i class="fa fa-envelope"></i> &nbsp; <a href="mailto:info@iamdesignfoundation.org">info@iamdesignfoundation.org</a></span></b></p>';
	content += '</div>';

	content += '</footer>';

        footerElement.innerHTML = content;
    },

}
