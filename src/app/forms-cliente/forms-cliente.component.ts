import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forms-cliente',
  standalone: true,
  templateUrl: './forms-cliente.component.html',
  styleUrls: ['./forms-cliente.component.css'],
  imports: [CommonModule, ReactiveFormsModule, FormsModule]
})
export class FormsClienteComponent implements OnInit {
  formulario: FormGroup;
  listaCursos: string[] = ['Curso A', 'Curso B', 'Curso C'];

  // Variáveis para controle do envio e da mensagem de sucesso
  envioEmAndamento = false;
  formularioEnviado = false;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nomeAluno: [''],
      nascimentoAluno: [''],
      rgAluno: [''],
      cepAluno: [''],
      estadoAluno: [''],
      cidadeAluno: [''],
      bairroAluno: [''],
      ruaAluno: [''],
      numeroAluno: [''],
      complementoAluno: [''],
      emailAluno: [''],
      telefoneAluno: [''],

      nomeResponsavel: [''],
      nascimentoResponsavel: [''],
      rgResponsavel: [''],
      cepResponsavel: [''],
      estadoResponsavel: [''],
      cidadeResponsavel: [''],
      bairroResponsavel: [''],
      ruaResponsavel: [''],
      numeroResponsavel: [''],
      complementoResponsavel: [''],
      emailResponsavel: [''],
      telefoneResponsavel: [''],

      curso: [''],
      turno: ['']
    });
  }

  ngOnInit() {
    // Inicialização do componente
  }

  // Método de envio do formulário
  enviarFormulario() {
    // Defina o estado de "envio em andamento"
    this.envioEmAndamento = true;
    this.formularioEnviado = false;  // Reseta a mensagem de sucesso antes de tentar enviar

    // Simula o envio do formulário (como se fosse uma requisição HTTP)
    setTimeout(() => {
      // Quando o envio terminar, altere os estados para mostrar a mensagem de sucesso
      this.envioEmAndamento = false;
      this.formularioEnviado = true;  // Exibe a mensagem de sucesso

      // Limpeza do formulário (opcional, pode ser feito se necessário)
      this.formulario.reset();

      // Mensagem desaparece após 3 segundos
      setTimeout(() => {
        this.formularioEnviado = false;
      }, 3000);
    }, 2000);  // Simulando 2 segundos de "envio"

    console.log('Formulário enviado:', this.formulario.value);
  }

  // Método para fechar o modal
  fecharModal() {
    this.formularioEnviado = false; // Fecha o modal
  }
}
