> generate svg captcha in browser

## install

```
npm install --save svg-captcha-browser
```

## usage in browser

step1: Store Comismsh.ttf under the Fonts directory under the project under your own server

step2: write code

```Javascript
import svgCaptcha from 'svg-captcha-browser'
svgCaptcha.loadFont('http://yourhosts.com/fonts/Comismsh.ttf').then(() => {
	let captcha = svgCaptcha.create();
	console.log(captcha);
	// {data: '<svg.../svg>', text: 'abcd'}
}).catch(e => {
	//加载字体出错
	console.log(e)
})
```

## API

#### `svgCaptcha.create(options)`

If no option is passed, you will get a random string of four characters and corresponding svg.

- `size`: 4 // size of random string
- `ignoreChars`: '0o1i' // filter out some characters like 0o1i
- `noise`: 1 // number of noise lines
- `color`: true // characters will have distinct colors instead of grey, true if background option is set
- `background`: '#cc9966' // background color of the svg image

This function returns an object that has the following property:

- `data`: string // svg path data
- `text`: string // captcha text

#### `svgCaptcha.createMathExpr(options)`

Similar to create api, you have the above options plus 3 additional:

- `mathMin`: 1 // the minimum value the math expression can be
- `mathMax`: 9 // the maximum value the math expression can be
- `mathOperator`: + // The operator to use, `+`, `-` or `+-` (for random `+` or `-`)

This function returns an object that has the following property:

- `data`: string // svg of the math expression
- `text`: string // the answer of the math expression

#### `svgCaptcha.loadFont(url): Promise`

Load your own font and override the default font.

- `url`: string // path to your font
  This api is a wrapper around loadFont api of opentype.js.
  Your may need experiment around various options to make your own font accessible.
  See the following api.

#### `svgCaptcha.options`

Gain access to global setting object.
It is used for create and createMathExpr api as the default options.

In addition to size, noise, color, and background, you can also set the following property:

- `width`: number // width of captcha
- `height`: number // height of captcha
- `fontSize`: number // captcha text size
- `charPreset`: string // random character preset

#### `svgCaptcha.randomText([size|options])`

return a random string.

#### `svgCaptcha(text, options)`

return a svg captcha based on text provided.

In pre 1.1.0 version you have to call these two functions,
now you can call create() to save some key strokes ;).

## sample image

default captcha image:

![image](media/example.png)

math expression image with color options:

![image2](media/example-2.png)

## License

[MIT](LICENSE.md)

## declaration

本仓库源码对 svg-captcha@1.4.0(<a href="https://github.com/steambap/svg-captcha">仓库地址</a>)进行了修改,修改后本库适用为浏览器端
