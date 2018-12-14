import { Component, Input, OnChanges, ViewChild, Renderer2, ElementRef } from '@angular/core';

declare var require: any;

let QRCode = require('qrcode');

@Component({
  selector: 'ngx-qrcode',
  template: `<div #qrcElement [class]="cssClass"></div>`,
  styles: []
})
export class NgxQRCodeComponent implements OnChanges {

  @Input('qrc-element-type') elementType: 'url' | 'img' | 'canvas' = 'url';
  @Input('qrc-version') version: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22' | '23' | '24' | '25' | '26' | '27' | '28' | '29' | '30' | '31' | '32' | '33' | '34' | '35' | '36' | '37' | '38' | '39' | '40' | '' = '';
  @Input('qrc-correction-level') correctionLevel: 'L' | 'M' | 'Q' | 'H' = 'H';
  @Input('qrc-class') cssClass = 'qrcode'; 
  @Input('qrc-value') value = 'Techiediaries';
  @ViewChild('qrcElement') qrcElement: ElementRef;


  constructor(private renderer: Renderer2) { 
    
  }

  ngOnChanges() {
    this.createQRCode();
  }
  toDataURL(){
    return new Promise((resolve,reject)=>{
      QRCode.toDataURL(this.value, { errorCorrectionLevel: this.correctionLevel, version: this.version } ,function (err, url) {
        if(err){
          console.error(err);
          reject(err);
        }
        else{
          console.log(url);
          resolve(url);
        }
      })      
    });
  }
  toCanvas(canvas){
    return new Promise((resolve,reject)=>{
      QRCode.toCanvas(canvas, this.value,{ errorCorrectionLevel: this.correctionLevel, version: this.version } ,function (error) {
        if (error){
          //console.error(error);
          reject(error);
        }
        else{
          //console.log('success!');
          resolve("success");
        }     
      }) 
    });   
  }
  renderElement(element){
    for (let node of this.qrcElement.nativeElement.childNodes) {
              this.renderer.removeChild(this.qrcElement.nativeElement, node);
    }            
    this.renderer.appendChild(this.qrcElement.nativeElement, element);
  }
  createQRCode(){
    if ( ! this.value) { 
      return; 
    };

    let element: Element;
    console.log("QR Encoding " + this.value);
    switch (this.elementType) {

      case 'canvas':
        element = this.renderer.createElement('canvas');
        this.toCanvas(element).then((v)=>{
            console.log(v);
            this.renderElement(element);
        }).catch((e)=>{
          console.error(e);
        });
        break;
      case 'url':
      case 'img':
      default:
        element = this.renderer.createElement('ion-img');
        this.toDataURL().then((v : string)=>{
          console.log(v);
          element.setAttribute("src",v);
          this.renderElement(element);
        }).catch((e)=>{
          console.error(e);
        })
        
    }
    
    
  }

}
