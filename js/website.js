/* General Website JavaScript */

var website = {
    run: function() {
        website.header();
		website.scroll();
		website.sidebar();
		website.hamburger();
		if ( jQuery( ".template-home" ).size() > 0 ) {
			particlesJS( "particles", particles );
		}
		jQuery( "img" ).unveil( 0, function() {
			jQuery( this ).load( function() {
				this.style.opacity = 1;
			});
		});
		jQuery( window ).scroll( function( event ) {
			var scroll = jQuery( this ).scrollTop();
			if ( scroll > 10 ) {
				jQuery( "div#header" ).addClass( "fixed" );
			}
			else {
				jQuery( "div#header" ).removeClass( "fixed" );
			}
		});
    },
	header: function() {
		var height = jQuery( window ).height();
		if ( height < 667 ) {
			height = 667;
		}
		jQuery( "header, header .gradient-fix, header .content, header #particles" ).css( { "height": height } );
	},
	scroll: function() {
		var root = jQuery( "html, body" );
		jQuery( "a.scroll" ).click( function() {
			var href = jQuery( this ).attr( "href" );
			root.animate({
				scrollTop: jQuery( href ).offset().top
			}, 500, function() {
				window.location.hash = href;
			});
			return false;
		});
	},
	sidebar: function() {
		if ( jQuery( ".sidebar-menu" ).size() > 0 ) {
			var root = jQuery( "html, body" );
			jQuery( ".sidebar-menu a[href^=#]" ).click( function() {
				var href = jQuery( this ).attr( "href" );
				root.animate({
					scrollTop: jQuery( href ).offset().top - 100
				}, 500 );
				return false;
			});
		}
	},
	hamburger: function() {
		jQuery( ".hamburger" ).data( { "click": true } ).click( function( e ) {
			e.preventDefault();
			var object = jQuery( this );
			if ( object.data( "click" ) == true ) {
				object.addClass( "click" );
				jQuery( "div#header" ).addClass( "activated" ).removeClass( "hidden" );
			}
			else {
				object.removeClass( "click" );
				jQuery( "div#header" ).addClass( "hidden" ).removeClass( "activated" );
			}
			object.data( { "click": !object.data( "click" ) } );
		});
	}
}

/* Query Object */

var query = function() {
    var string = {};
    var q = window.location.search.substring( 1 );
    var vars = q.split( "&" );
    for ( var i = 0; i < vars.length; i++ ) {
        var pair = vars[ i ].split( "=" );
        if ( typeof string[ pair[ 0 ] ] === "undefined" ) {
            string[ pair[ 0 ] ] = pair[ 1 ];
        }
        else {
            if ( typeof string[ pair[ 0 ] ] === "string" ) {
                var arr = [ string[ pair[ 0 ] ], pair[ 1 ] ];
                string[ pair[ 0 ] ] = arr;
            }
            else {
                string[ pair[ 0 ] ].push( pair[ 1 ] );
            }
        }
    } 
    return string;
}();

/* Cookie Object */

var cookie = {
	create: function( name, value, days, path ) {
		var date = new Date();
		date.setTime( date.getTime() + ( days * 24 * 60 * 60 * 1000 ) );
		var expires = date.toUTCString();
		document.cookie = name + "=" + value + ";" + "expires=" + expires + ";" + "path=" + path + ";";
	},
	read: function( name ) {
		var value = "",
		current = "",
		expression = name + "=", cookies = document.cookie.split( ";" ), n = cookies.length;
		for ( var i = 0; i < n; i++ ) {
			current = cookies[ i ].trim();
			if ( current.indexOf( expression ) == 0 ) {
				value = current.substring( expression.length, current.length );
				break;
			}
		}
		return value;
	},
	delete: function( name ) {
		document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
	}
}

/* Particle.js */

var particles = {
    "particles": {
        "number": {
            "value": 150,
            "density": {
                "enable": true,
                "value_area": 500
            }
        },
        "color": {
            "value": "#000000"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 1
            }
        },
        "opacity": {
            "value": 1,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 5,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 10,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 100,
            "color": "#000000",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 1,
            "direction": "bottom",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "window",
        "events": {
			"onresize": {
				"enable": true,
				"density_auto": true,
				"density_area": 500
			},
            "onhover": {
                "enable": true,
                "mode": "bubble"
            }
        },
        "modes": {
            "bubble": {
                "distance": 200,
                "size": 7,
                "duration": 5,
                "opacity": 1,
                "speed": 10
            }
        }
    },
    "retina_detect": false
};
