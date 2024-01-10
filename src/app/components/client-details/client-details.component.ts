import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/client.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrl: './client-details.component.css'
})
export class ClientDetailsComponent implements OnInit {

  id!: string;
  client!: Client;

  constructor(private clientService: ClientService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.clientService.getById(this.id).subscribe((data: Client) => {
      this.client = data;
    });
  }

  onSubmit() {
    this.clientService.update(this.id, this.client).subscribe(data => {
    }
      , error => console.log(error));
  }
}

