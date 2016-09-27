/* General Website JavaScript */

const futureEventsList = [

    {
	'title': 'Libre Learn Lab',
	'link': 'https://librelearnlab.org',
	'image': 'lll_0.png',
	'date': 'October 8th-9th, 2016 at the Sloan School of Management at MIT in Cambridge, Massachusetts',
	'description': 'Libre Learn Lab is a two-day summit  for people who create, use and implement freely licensed resources for K-12 education, bringing together educators, policy experts, software developers, hardware hackers, and activists to share best practices and address the challenges of widespread adoption of these resources in education.'
    },

    {
	'title': 'Singularity Univiersity Miami Salons',
	'link': 'http://nata957.wixsite.com/sumiamisalontest2',
	'image': 'singularity.png',
	'date': 'October 19th, 2016, 7:00PM<br>MIAMI THEATRE CENTER<br>9806 NE 2nd Ave., Miami Shores, FL 33138<br><br><em>THE UNIVERSITY</em>,a documentary by Matt Rutherford',
	'description': 'Come join us as we celebrate the launch of our Salons with a special treat: the only private preview screening in the United States of <em>The University</em>, a feature documentary about Singularity University by film director Matt Rutherford, who will be there with us that night.'
    },

    {
	'title': 'Creativity Society Event',
	'link': 'https://eventos.paraguay.gov.py/sociedaddelacreatividad/',
	'image': 'paraguay.png',
	'date': 'October 20th-22th, 2016 in Asunción and Caacupé, Paraguay',
	'description': 'eduJAM-Uruguay and Paraguay Educa are organizing an International Summit of Information Technology and Communication and the Future of Education with support from the National Secretariat of Information Technology and communication (SENATICs). The event consists of four days of activities, two lectures, educational workshops with environment activities using Sugar Sugar Labs and international Turtle Art Day.'
    },

    {
	'title': 'Evento Sociedad de la Creatividad',
	'link': 'https://eventos.paraguay.gov.py/sociedaddelacreatividad/',
	'image': 'paraguay.png',
	'description': 'En el mes de octubre del año 2013 el grupo EduJam-Uruguay junto con la Asociación Paraguay Educa, han organizado la Cumbre Internacional de Tecnologías de la Información y Comunicación y el Futuro de la Educación con apoyo de la Secretaría Nacional de Tecnologías de la Información y Comunicación (SENATICs). El evento consistió en 4 días de actividades, dos conferencias magistrales, talleres educativos con uso de actividades del Entorno Sugar de Sugar Labs y el día internacional de TortugArte.'
    },

];

const pastEventsList = [

    {'title': 'Jurnid Sessions// Digiartefacto',
     'link': 'https://www.eventbrite.com/e/jurnid-sessions-digiartefacto-tickets-26914911224',
     'image': 'Digiartefacto.png',
     'date': 'Miami Center for Architecture &amp; Design<br>100 NE 1st Ave, Miami, FL 33132<br>Wednesday, August 31, 2016&nbsp;6:00 PM to 8:00 PM',
     'description': 'Digiartefacto:&nbsp;Intersections of Technology, Art, and Architecture<br>Join us at&nbsp;Miami Center for Architecture &amp; Design.'
    },

];

var eventPage = {
    futureEvents: function() {
	console.log('Future');
        var content = "<div class='grid-12 content'><p>&nbsp;<br>&nbsp;<br>&nbsp;</p></div>"
        var future = document.getElementById('future');
        for (var i = 0; i < futureEventsList.length; i++) {

            content += "<div class='grid-12 content'><div class='grid-12-6'>";
            // Title is the only required field
	    content += "<h2 class='uppercase'>";
            content += futureEventsList[i]['title'];
            content += '</h2><p>';

            if ('link' in futureEventsList[i]) {
                content += '<a href="';
                content += futureEventsList[i]['link'];
                content += '">';
	    }

            if ('image' in futureEventsList[i]) {
                content += '<img src="./images/';
                content += futureEventsList[i]['image'];
                content += '" data-src="./images/';
                content += futureEventsList[i]['image'];
		content += ' class="unveil block" width="386">'
	    }

            if ('link' in futureEventsList[i]) {
                content += '</a></p><p>';
            } else {
                content += '</p><p>';
	    }

            if ('date' in futureEventsList[i]) {
                content += futureEventsList[i]['date'];
                content += '<br><br>';
	    }

            if ('description' in futureEventsList[i]) {
                content += futureEventsList[i]['description'];
	    }

            content += '</p><h3 class="uppercase"><br></h3></div>';

            if (i === 0) {
		content += '<div class="grid-12-3"><ul class="sidebar-menu sidebar-block"><li>Future Events</li><li><a href="./events.html#past">Past Events</a></li></ul></div>';
            }

            content += '</div>';

            if (i === futureEventsList.length - 1) {
                content += '<div class="grid-12 content"><div class="grid-12-9"><hr><p>&nbsp;</p></div></div></section>';
	    } else {
		content += '</div>';
	    }
	}

        future.innerHTML = content;
    },

    pastEvents: function() {
	console.log('Past');
        var content = "<div class='grid-12 content'><p>&nbsp;<br>&nbsp;<br>&nbsp;</p></div>"
        var past = document.getElementById('past');
        for (var i = 0; i < pastEventsList.length; i++) {

            content += "<div class='grid-12 content'><div class='grid-12-6'>";
            // Title is the only required field
	    content += "<h2 class='uppercase'>";
            content += pastEventsList[i]['title'];
            content += '</h2><p>';

            if ('link' in pastEventsList[i]) {
                content += '<a href="';
                content += pastEventsList[i]['link'];
                content += '">';
	    }

            if ('image' in pastEventsList[i]) {
                content += '<img src="./images/';
                content += pastEventsList[i]['image'];
                content += '" data-src="./images/';
                content += pastEventsList[i]['image'];
		content += ' class="unveil block" width="386">'
	    }

            if ('link' in pastEventsList[i]) {
                content += '</a></p><p>';
            } else {
                content += '</p><p>';
	    }

            if ('date' in pastEventsList[i]) {
                content += pastEventsList[i]['date'];
                content += '<br><br>';
	    }

            if ('description' in pastEventsList[i]) {
                content += pastEventsList[i]['description'];
	    }

            content += '</p><h3 class="uppercase"><br></h3></div>';

            if (i === 0) {
		content += '<div class="grid-12-3"><ul class="sidebar-menu sidebar-block"><li><a href="./events.html#future">Future Events</a></li><li>Past Events</li></ul></div>';
            }

            content += '</div></div>';
	}

        past.innerHTML = content;
    }
}
