
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: 'table.page.html',
  styleUrls: ['table.page.scss'],
})
export class TablePage {
  private formData: any[] = [];
  indexToDelete: number | null = null;
  firstName: string = '';
  // lastName: string = '';
  age: number = 0;
  pressure: number = 0;
  pressure_2: number = 0;
  date: string = '';

  constructor(private route: ActivatedRoute) { }

  getFormData(): any[] {
    return this.formData;
  }
  deleteRow(): void {
    if (this.indexToDelete !== null) {
      this.formData.splice(this.indexToDelete, 1); // Видалення рядка з formData
      this.indexToDelete = null; // Очищення індексу після видалення
    }
  }
  addFormData(data: any): void {
    this.formData.push(data);
  }

  submitForm(): void {
    const currentDate = new Date(); // Отримуємо поточну дату і час

    const formData = {
      firstName: this.firstName,
      // lastName: this.lastName,
      age: this.age,
      pressure: this.pressure,
      pressure_2: this.pressure_2,
      date: currentDate.toISOString(), // Додаємо поточну дату до formData
    };

    // Очищення даних форми після додавання у таблицю
    this.firstName = '';
    // this.lastName = '';
    this.age = 0;
    this.pressure = 0;
    this.pressure_2 = 0;
    this.date = '';

    this.addFormData(formData); // Додаємо дані до formData
  }
}