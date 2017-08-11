# ngx-qrcode

An Angular 4+ Component library for Generating QR (Quick Response ) Codes .

## Demo 
A simple [demo](https://www.techiediaries.com/demos/ngx-qrcode/)

## Credits

This package is a fork from [techiediaries/ngx-qrcode](https://github.com/techiediaries/ngx-qrcode).

## Improvements

I have added the functionality to customize the version and error correction level of the QR code used during the generation process.
Now you can use two new attributes in the component to send information to it from parent: qrc-version and qrc-correction-level.

## Installation

To use this version of ngx-qrcode in your project, install it via npm:

```bash
$ npm install ngx-qrcode3 --save
```

## Usage
For a complete and detailed tutorial on how to use this library .See  :

<a href="https://www.techiediaries.com/generate-qrcodes-angular">How to Generate QR Codes In Angular 4+ Applications </a>

Import the NgxQRCodeModule from ngx-qrcode  into your app :

Once the library is imported, you can use the ngx-qrcode component in your Angular application:

```xml
<!-- Adding a qrcode generator component in app.component.html -->

<ngx-qrcode [qrc-value]="value" [qrc-version]=5 [qrc-correction-level]="'L'"></ngx-qrcode>
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Techiediaries](mailto:techiediaries9@gmail.com)
Improvement: [Xavis](http://xaviscript.com)
