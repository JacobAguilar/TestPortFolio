import { Component, OnInit } from '@angular/core';
import { IModal } from 'src/app/@widgets/modal/modal.interface';


const descripcion = `
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias 
  magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod 
  consequuntur itaque. Nam.
`;
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  items: Array<IModal> = [];
  
  ngOnInit(): void {
    this.items.push({
      title: 'HTML',
      image: 'assets/img/portfolio/new/html.png',
      descripcion: "Diseño y maquetación mediante plantillas bootstrap y angular"
    });
    this.items.push({
      title: 'CSS',
      image: 'assets/img/portfolio/new/css.png',
      descripcion: "No es mi fuerte el css pero puedo llegar a crear buenos diseños en css."
    });
    this.items.push({
      title: 'JS',
      image: 'assets/img/portfolio/new/js.jpg',
      descripcion: "Creo que las web no tendrian vida sin el js, no hay nada mejor que el js en la web."
    });
    this.items.push({
      title: 'C#',
      image: 'assets/img/portfolio/new/csharp.jpg',
      descripcion: "He manejado C# del lado backend, desarrollando servicios windows y apis rest"
    });
    this.items.push({
      title: 'Node js',
      image: 'assets/img/portfolio/new/node.png',
      descripcion: "Un api rest en node js es lo maximo en backend, su codigo es simple y limpio"
    });
    this.items.push({
      title: 'Angular',
      image: 'assets/img/portfolio/new/angular.png',
      descripcion: "Cuando el projecto empieza a escalar no hay nada mejor que un buen framework."
    });

    this.items.push({
      title: 'Android',
      image: 'assets/img/portfolio/new/android.png',
      descripcion: "He desarrollado aplicaciones moviles de forma nativa usando java"
    });
    this.items.push({
      title: 'TypeScript',
      image: 'assets/img/portfolio/new/ts.png',
      descripcion: "Para mi ts es la version javascript orientada a objeto, Me permite programar de forma más estructurada."
    });
    this.items.push({
      title: 'Ionic',
      image: 'assets/img/portfolio/new/ionic.png',
      descripcion: "Cuando quiero hacer una app sencilla y rapida y que ademas funcione como web no hay nada mejor que un framework para aplicaciones híbridas."
    });
  }


}
