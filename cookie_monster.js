( function( w ) {

    w.cookieMonster = {

        bake: function( name, value, days ) {
            var expires = '';
            if ( days ) {
                var date = new Date();
                date.setTime( date.getTime() + ( days * 86400000 ) );// 24 * 60 * 60 * 1000
                expires = [ '; expires=', date.toGMTString() ].join( '' );
            }
            document.cookie = [ name, '=', value, expires, '; path=/' ].join( '' );
        },

        fetch: function( name ) {
            var nameEq = [ name, '=' ].join( '' );
            var cookies = document.cookie.split( /[;,] / );
            var cookies_length = cookies.length;
            for ( var i = 0; i < cookies_length; i++ ) {
                var c = cookies[i];
                if ( c.indexOf( nameEq ) === 0 ) {
                    return c.substring( nameEq.length, c.length );
                }
            }
            return false;
        },

        eat: function( name ) {
            this.bake( name, '', -1 );
        }

    };

} )( window );
