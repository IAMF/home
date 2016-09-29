/* Standard page header JavaScript */

const IAMHEADER = [
    {
	'link': './index.html',
        'title': 'Home',
        'item': '1'
    },

    {
	'link': './about.html',
        'title': 'About Us',
        'item': '2'
    },

    {
	'link': './events.html',
        'title': 'Upcoming Events',
        'item': '3'
    },

    {
	'link': './contact.html',
        'title': 'Contact Us',
        'item': '4'
    },
];


var header = {
    pageHeader: function() {
        var headerElement = document.getElementById('header');
        var content = '<div class="content">';
        content += '<div class="float-left header-logo">';
	content += '<a id="logo-menu" href="./index.html" class="hover">';
	content += '<img width="49" height="49" class="unveil" src="./images/logo-menu.png" data-src="./images/logo-menu.png" data-pin-nopin="true" style="opacity: 1;">';
	content += '</a>';
	content += '</div>';
        content += '<div class="hamburger float-right no-desktop">';
        content += '<span></span>';
        content += '<span></span>';
        content += '<span></span>';
        content += '</div>';

        // I AM
	content += '<ul class="float-right">';

        for (var i = 0; i < IAMHEADER.length; i++) {
            // title is the only required field
            if ('title' in IAMHEADER[i]) {
                if ('item' in IAMHEADER[i]) {
                    var item = IAMHEADER[i]['item'];
		} else {
                    var item = '404';
                }

		content += '<li id="menu-item-' + item + '" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-' + item + '"> ';
		if ('link' in IAMHEADER[i]) {
		    content += '<a href="';
                    content += IAMHEADER[i]['link'];
                    content += '">';
		}

                content += IAMHEADER[i]['title'];
		if ('link' in IAMHEADER[i]) {
		    content += '</a>';
		}
                content += '</li>';
	    }
	}

        content += '</ul>';
	content += '</div>';

        headerElement.innerHTML = content;
    },

}
