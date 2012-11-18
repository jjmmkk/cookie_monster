# Cookie Monster

## Abstract

Tool for managing browser JS cookies.

## Install

Include the script _cookie\_monster.js_. This should make `cookieMonster` available.

## Usage

### Make cookie

    cookieMonster.bake( name, value, days );

### Get cookie value

    cookieMonster.fetch( name );

### Get all cookies

    cookieMonster.fetchAll();

### Remove cookie

    cookieMonster.eat( name );

### Remove all cookies

    cookieMonster.eatAll();

### Manipulate all cookies

    cookieMonster.openJar( fn );

Function `fn` will called for each cookie with parameters `name` and `value`, derived from the cookie.
