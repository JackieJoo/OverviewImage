const fs = require( 'fs' );
const omggif = require( 'omggif' );

const gr = new omggif.GifReader( fs.readFileSync( `${__dirname}/../../data/images/Image3.gif` ) );
console.log( gr )
console.log( gr.frameInfo( 0 ) )
