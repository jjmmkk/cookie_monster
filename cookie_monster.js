( function( w ) {

    w.cookieMonster = {

        // Create cookie
        // `days` is cookie duration in days
        bake: function( name, value, days ) {
            var expires = '';
            if ( days ) {
                var date = new Date();
                date.setTime( date.getTime() + ( days * 86400000 ) );// 24 * 60 * 60 * 1000
                expires = [ '; expires=', date.toGMTString() ].join( '' );
            }
            document.cookie = [ name, '=', value, expires, '; path=/' ].join( '' );
        },

        // Get value of cookie by name
        // Returns false if there is no cookie by given name
        fetch: function( name ) {
            var cookies = this.fetchAll();
            if ( cookies[name] ) {
                return cookies[name];
            }
            return false;
        },

        // Returns object with all cookie names and values
        // Returns false if there are no cookies
        fetchAll: function() {
            var cookies = {};
            this.openJar( function( name, value ) {
                cookies[name] = value;
            } );
            for ( var c in cookies ) {
                return cookies;
            }
            return false;
        },

        // Remove cookie by name
        eat: function( name ) {
            this.bake( name, '', -1 );
        },

        // Remove all cookies
        eatAll: function() {
            this.openJar( function( name ) {
                this.eat( name );
            } );
        },

        // Loop all cookies, calling given function with parameters 
        // name and value, which is derived from cookie
        openJar: function( fn ) {
            var jar = document.cookie.split( /[;,] / );
            var jar_size = jar.length;
            if ( jar_size > 1 ) {
                fn = fn || false;
                var cookie;
                var name;
                var value;
                for ( var i = 0; i < jar_size; i++ ) {
                    cookie = jar[i];
                    name = /^[^=]*/.exec( cookie )[0];
                    value = cookie.substring( name.length + 1, cookie.length );
                    if ( fn ) {
                        fn.call( this, name, value );
                    };
                }
            }
        }

    }

} )( window );
