import {Component, OnInit} from '@angular/core';
import {Categoria} from '../categoria.model';
import {CategoriaService} from '../categoria.service';

@Component({
  selector: 'app-admin-cadastro-categoria',
  templateUrl: './admin-cadastro-categoria.component.html',
  styleUrls: ['./admin-cadastro-categoria.component.css']
})
export class AdminCadastroCategoriaComponent implements OnInit {

  nome = null;
  slug = null;
  descricao = null;
  salvar_ok = false;
  salvar_erro = false;

  constructor(private categoria_Service: CategoriaService) {
  }

  ngOnInit() {
  }

  salvar() {
    this.categoria_Service.salvar(this.nome, this.slug, this.descricao).subscribe(
      (categoria: Categoria) => {
        this.salvar_ok = true;
      },
      erro => {
        console.log(erro);
        this.salvar_erro = true;
      }
    );
  }

  slugify(string) {
    const a = 'àáäâãåèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;';
    const b = 'aaaaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------';
    const p = new RegExp(a.split('').join('|'), 'g');
    return string.toString().toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with
      .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
      .replace(/&/g, '-and-') // Replace & with ‘and’
      .replace(/[^\w\-]+/g, '') // Remove all non-word characters
      .replace(/\-\-+/g, '-') // Replace multiple — with single -
      .replace(/^-+/, ''); // Trim — from start of text .replace(/-+$/, '') // Trim — from end of text
  }

  slugify_nome() {
    this.slug = this.slugify(this.nome);
  }
}
