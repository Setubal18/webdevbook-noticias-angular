import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AutenticacaoService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  API_URL = 'http://localhost:8000/api/categorias/';

  constructor(private http: HttpClient, private auth: AutenticacaoService) {
  }

  private getHeaders() {
    const credenciais = this.auth.getCredenciais();
    if (credenciais) {
      return {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + btoa(`${credenciais.username}:${credenciais.password}`)
        })
      };
    } else {
      return {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      };
    }
  }

  public todos() {
    const headers = this.getHeaders();
    return this.http.get(this.API_URL, headers);
  }

  public salvar(nome: string, slug: string, descricao: string) {
    const options = this.getHeaders();
    const categoria = {
      nome: nome,
      slug: slug,
      descricao: descricao,
    };
    return this.http.post(this.API_URL, categoria, options);
  }

  public excluir(id) {
    const credenciais = this.auth.getCredenciais();
    const options = {
      headers: new HttpHeaders({
        'Authorization': 'Basic ' + btoa(`${credenciais.username}:${credenciais.password}`)
      })
    };
    return this.http.delete(this.API_URL + id + '/', options);
  }

}
