# Description of the images

### Images:
* Size: 2x2 and 4x5 pixels
* Bits: 1, 2, 4, 16
* Interlaced: yes, no
* Has colors: yes, no(grayscale)
* Has alpha channel: yes, no

### The amount of images:
```javascript
let nbits = [ 1,2,4,16 ]
let npixels = [ ‘2x2’, ‘4x5’ ]; 
let interlaced = [ true, false ];
let hasAlpha = [ true, false ];
let hasColors = [ true, false ]
let sum = nbits.length * npixels.length * interlaced.length * hasAlpha.length * hasColors.length;
// 4 * 2 * 2 * 2 * 2 = 64 
```
**Sum = 64**

### The amount of images(refactored):
```javascript
let nbits = [ 1,2,4,16 ]
let npixels = [ ‘2x2’, ‘4x5’ ]; 
let interlaced = [ true, false ];
let hasAlpha = [ true, false ];
let hasColors = [ true, false ]
let sum16bits =  1 * npixels.length * interlaced.length * hasAlpha.length * hasColors.length;
let sum1bits = 1 * npixels.length * interlaced.length * (hasColors.length - 1) 
let sum2_4bits = (nbits.length - 2) * npixels.length * interlaced.length  * hasColors.length
let sum = sum16bit + sum1_2_4bit
/* 
 * 1 bits images can only be in Grayscale and with/without interlacing.
 * 2/4 bits images can only be in Color/Grayscale and with/without interlacing.
 * sum16bits = 1 * 2 * 2 * 2 * 2 = 16
 * sum1bits = 1 * 2 * 2 * 1 = 4
 * sum2_4bits = 2 * 2 * 2 * 2 = 16
 * sum = 16 + 4 + 16 = 36 images
 */
```
**Sum = 36**

### Image filename:

**Pixels-'size'-'description'.png**

*Where:*
* 'size' - 2x2 or 4x5
* 'description' - all information about the image through the dashes (nbits, npixels, interlaced, hasAlpha, hasColors)

*Example:* Pixels-2x2-nbits16-interlacedTrue-hasAlphaTrue-hasColorsTrue.png

### References:
* [The Computer Graphics Manual. Page: 970](https://books.google.com.ua/books?id=DX4YstV76c4C&pg=PA970&lpg=PA970&dq=difference+between+1+2+4+bit+png&source=bl&ots=ZuEyDxGKhk&sig=ACfU3U0sZQpqMmeJ-ib7zDSUHH40GqqHag&hl=ru&sa=X&ved=2ahUKEwjojNizu-rpAhVtwqYKHZQLCRAQ6AEwF3oECAUQAQ#v=onepage&q=difference%20between%201%202%204%20bit%20png&f=false)
* [Web Design in a Nutshell: A Desktop Quick Reference. Page: 554](https://books.google.com.ua/books?id=QndQfp5YWCEC&pg=PA554&lpg=PA554&dq=difference+between+1+2+4+bit+png&source=bl&ots=O_NDHvaMUw&sig=ACfU3U1nTpeZu_V5jjGBIv_FIWS4SQAnUg&hl=ru&sa=X&ved=2ahUKEwjojNizu-rpAhVtwqYKHZQLCRAQ6AEwFXoECAoQAQ#v=onepage&q=difference%20between%201%202%204%20bit%20png&f=false)
* [w3.org: Allowed combinations of colour type and bit depth](https://www.w3.org/TR/PNG/#11IHDR)