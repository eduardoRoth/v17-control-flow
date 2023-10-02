import { Component, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  showAddName = signal<boolean>(false);
  names = signal<string[]>([]);
  newName = new FormControl('');

  addName() {
    this.names.mutate((names) => names.push(this.newName.value ?? ''));
    this.newName.reset();
  }
}
