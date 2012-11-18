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
            var cookies = this.fetchAll();
            if ( cookies[name] ) {
                return cookies[name];
            }
            return false;
        },

        fetchAll: function() {
            var cookies = {};
            this.openJar( function( name, value ) {
                cookies[name] = value;
            } );
            return cookies;
        },

        eat: function( name ) {
            this.bake( name, '', -1 );
        },

        eatAll: function() {
            this.openJar( function( name ) {
                this.eat( name );
            } );
        },

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
