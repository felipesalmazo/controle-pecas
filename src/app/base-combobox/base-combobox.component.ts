import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-combobox',
  templateUrl: './base-combobox.component.html',
  styleUrls: ['./base-combobox.component.css'],
})
export class BaseComboboxComponent implements OnInit {
  @Input('titulo')
  titulo!: string;

  @Input('lista')
  lista!: string[];

  constructor() {
  }

  ngOnInit(): void {}
}
