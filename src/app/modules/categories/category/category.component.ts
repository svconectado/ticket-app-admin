import {Component, OnInit} from '@angular/core';


export class Category {
  public id: string;
  public name: string;
  public description: string;
  public image: string;
}

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  public categories: Category[] = [
    {
      id: '1',
      name: 'Restaurantes',
      description: 'Locales con servicio a la mesa, segun las especialidades.',
      image: 'restaurant.png'
    },
    {
      id: '2',
      name: 'Supermercados',
      description: 'Locales para la compra de productos basicos y de conveniencia',
      image: 'market.png'
    },
    {
      id: '3',
      name: 'Banco o Financiera',
      description: 'Servicios financieros',
      image: 'bank.png'
    },
    {
      id: '4',
      name: 'Comida Rapida',
      description: 'Locales con servicio para llevar especializados en comida rapida.',
      image: 'fastfood.png'
    },
    {
      id: '5',
      name: 'Farmacias',
      description: 'Locales que venden productos farmaceuticos o relacionados.',
      image: 'pharmacy.png'
    }
  ];

  public header = {
    title: 'Categorias',
    description: 'Una forma rapida de clasificar todos nuestros comercios afiliados.'
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
