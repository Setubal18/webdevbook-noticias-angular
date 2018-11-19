import {Component, OnInit} from '@angular/core';
import {CategoriaService} from '../categoria.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-categoria',
  templateUrl: './admin-categoria.component.html',
  styleUrls: ['./admin-categoria.component.css']
})

export class AdminCategoriaComponent implements OnInit {
  categoria$ = null;
  resultado_excluir = null;
  erro_excluir = null;

  constructor(private categoria_serve: CategoriaService, private router: Router) {
  }

  ngOnInit() {
    this.categoria$ = this.categoria_serve.todos();
  }

  carregarDados() {
    this.categoria$ = this.categoria_serve.todos();
  }
  excluir(categoria) {
    if (confirm('Tem certeza que deseja excluir a notícia "?\n\nEssa operação é irreversível.')) {
      this.categoria_serve.excluir(categoria.id).subscribe(
        r => {
          this.carregarDados();
          this.resultado_excluir = true;
        },
        erro => {
          this.resultado_excluir = false;
          this.erro_excluir = erro.message;
        }
      );
    }
  }
}
