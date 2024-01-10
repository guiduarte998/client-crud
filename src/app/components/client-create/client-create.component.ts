import { Component } from '@angular/core';
import { Client } from '../../models/client.model';
import { ClientService } from '../../services/client.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrl: './client-create.component.css'
})
export class ClientCreateComponent {

  client: Client = {
    name: '',
    cpf: '',
    email: '',
    income: '',
    dateOfBirth: '',
    dateRegister: ''
  };
  submitted = false;

  constructor(private clientService: ClientService, public datepipe: DatePipe) { }

  newClient(): void {
    const data = {
      name: this.client.name,
      cpf: this.client.cpf,
      email: this.client.email,
      income: this.client.income,
      dateOfBirth: this.client.dateOfBirth,
      dateRegister: this.datepipe.transform((new Date), 'MM/dd/yyyy h:mm:ss')
    };

    this.clientService.create(data)
      .subscribe({
        next: (res) => {
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  /*newClient(): void {
    this.submitted = false;
    this.client = {
      name: '',
      cpf: '',
      email: '',
      income: '',
      dateOfBirth: '',
      dateRegister: ''
    };
  }*/
}
