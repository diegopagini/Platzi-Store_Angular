import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdf',
  template: `
    <h1>pdf</h1>
    <button type="button" (click)="generatePdf()">build pdf</button>
  `,
  styleUrls: ['./pdf.component.scss']
})
export class PdfComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  generatePdf() {
    // const doc = new jsPDF();
    // doc.text('Hello world!', 10, 10);
    // doc.save('a4.pdf');
    // code http
  }

}
