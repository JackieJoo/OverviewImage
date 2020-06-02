const Jimp = require( 'jimp' );

Jimp.read( `${__dirname}/../../data/images/PImage.jpg` ).then( ( img ) =>
{
  console.log( 'rgb(' + img.bitmap.data.toJSON().data.slice( 0, 3 ) + ')' );
} );
// OUTPUT: rgb(249,0,0)
