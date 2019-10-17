/**
 * FIND elements with namespaces, eq. SOAP Messages
 *
 * Inspired by this post:
 * @see https://akoskm.com/2013/09/14/jquery-find-element-namespace.html
 */

$( document ).ready( function() {
    /**
     * Search for a nested element names.
     * Not ALLOWED other searches like class names, attributes,...
     * EG: $( jQueryDomObj ).findNSElements( 'html header title' ).text()
     * You can still search with "find()" on the result.
     * EG: $( jQueryDomObj ).findNSElements( 'body div' ).find( '.myClass' );
     * @param string strSearches Element names with spaces as seperator
     * @returns {$}
     */
    $.fn.findNSElements = function ( strSearches ) {
        strSearches = strSearches.trim().replace( /\s\s+/g, ' ' ); // remove multible spaces

        var arrSearches = strSearches.split( ' ' );
        var jqResults = this;
        for ( var i = 0; i < arrSearches.length; i++ ) {
            var strSearch = arrSearches[ i ];
            jqResults = jqResults.filterNSElements( strSearch );
        }
        return jqResults;
    };

    // filter accomodatios

    $.fn.filterNSAttributes = function( strAttrName, strAttrValue ) {
        return this.find( '*' ).filter( function () {
            var strFoundAttrValue = $(this).attr( strAttrName );
            if ( ! strFoundAttrValue && strFoundAttrValue !== "" ) {
                console.log( "false" );
                return false;
            }
            console.log( "found" );
            if ( ! strAttrValue || strAttrValue === '' ) {
                return true;
            }
            if ( strFoundAttrValue && strFoundAttrValue.indexOf( strAttrValue ) >= 0 ) return true;
            return false;
        } );
    };


    /**
     * Search for a single element name. NOT nested.
     * EG: $( jQueryDomObj ).findNSElements( 'title' ).text()
     * @param strName
     * @returns {Int32Array | Uint32Array | T[] | Int8Array | Float64Array | BigUint64Array | Uint8Array | Int16Array | BigInt64Array | Float32Array | Uint8ClampedArray | T[] | Uint16Array}
     */
    $.fn.filterNSElements = function ( strName ) {
        var fHasNS = strName.indexOf( ':' ) < 0 ? false : true;
        return this.find( '*' ).filter( function () {
            if ( fHasNS ) {
                return this.nodeName === strName;
            }
            var nD = this.nodeName.indexOf( ':' );
            var strBaseNode = nD < 0 ? this.nodeName : this.nodeName.substr( nD + 1 );
            //console.log( this.nodeName );
            return strBaseNode === strName;
        } );
    };
});