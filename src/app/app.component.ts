import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-root",
  template: `
    <div class="container">
      <h1>Lista de Tarefas</h1>

      <!-- Campo de entrada para adicionar uma tarefa -->
      <input
        [(ngModel)]="tarefa"
        type="text"
        placeholder="Digite uma nova tarefa"
      />

      <br />
      <br />

      <button (click)="adicionarTarefa()">Adicionar</button>

      <ul>
        <!-- Lista de tarefas -->
        <li *ngFor="let tarefa of tarefas; let i = index">
          <span
            [class.concluida]="tarefa.concluida"
            (click)="marcarComoConcluida(i)"
          >
            {{ tarefa.texto }}
          </span>
          <button (click)="removerTarefa(i)">Remover</button>
        </li>
      </ul>
    </div>
  `,
  styles: [
    `
      body {
        font-family: "Roboto", "sans-serif";
      }

      .container {
        max-width: 400px;
        margin: 50px auto;
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        text-align: center;
      }

      input {
        padding: 10px;
        width: 80%;
        margin-right: 10px;
        border-radius: 8px;
        border: 1px solid #ccc;
      }

      button {
        padding: 10px;
        background-color: blue;
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: background-color 0.3s;
      }

      button:hover {
        background-color: darkblue;
      }

      ul {
        list-style-type: none;
        padding: 0;
      }

      li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 10px 0;
      }

      span.concluida {
        text-decoration: line-through;
        color: grey;
      }

      li button {
        background-color: red;
        color: white;
        border: none;
        padding: 5px 10px;
        border-radius: 4px;
        cursor: pointer;
      }

      li button:hover {
        background-color: darkred;
      }
    `,
  ],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class AppComponent {
  tarefa: string = ""; // Variável para armazenar a tarefa inserida
  tarefas: { texto: string; concluida: boolean }[] = []; // Lista de tarefas com o status de conclusão

  // Função para adicionar tarefa
  adicionarTarefa() {
    if (this.tarefa.trim()) {
      this.tarefas.push({ texto: this.tarefa, concluida: false });
      this.tarefa = ""; // Limpar o campo de entrada após adicionar
    }
  }

  // Função para marcar a tarefa como concluída
  marcarComoConcluida(index: number) {
    this.tarefas[index].concluida = !this.tarefas[index].concluida;
  }

  // Função para remover tarefa
  removerTarefa(index: number) {
    this.tarefas.splice(index, 1);
  }
}
