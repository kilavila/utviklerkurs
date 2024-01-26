import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-files',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './files.component.html',
  styleUrl: './files.component.scss'
})
export class FilesComponent {

  files: any[] = [];

  constructor(
    private toast: ToastService,
  ) {}

  onFileChange(event: any): void {
    let selectedFiles = event.target;

    for (let file of selectedFiles.files) {
      console.log(file);
      this.files.push(file);
    }
  }

  removeFile(file: any): void {
    const index = this.files.indexOf(file);
    if (index > -1) {
      this.files.splice(index, 1);

      this.toast.notify(`${file.name} ble fjernet`, 'info');
    }
  }

}
