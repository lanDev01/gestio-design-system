import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'demo';

  options = [
    { display: '0 - A IDENTIFICAR', value: '0' },
    { display: 'OO - OUTROS 2', value: 'OO' },
    { display: '00000 - PADRÃO', value: '00000' },
    { display: '00000000 - A IDENTIFICAR', value: '00000000' },
    {
      display: '00000001 - FRETE SOBRE COMPRA DE MATERIAIS',
      value: '00000001',
    },
  ];
}
