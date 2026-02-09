import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gds-button',
  templateUrl: './gds-button.component.html',
  styleUrls: ['../styles/tokens/index.css', './gds-button.component.scss'],
})
export class GdsButtonComponent implements OnInit {
  @Input() variant: 'primary' | 'secondary' | 'tertiary' = 'primary';

  constructor() {}

  ngOnInit(): void {}
}
