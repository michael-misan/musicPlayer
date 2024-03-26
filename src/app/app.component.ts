
import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor( private menu: MenuController, private router: Router) {}

  submitForm() {
    // Ваш код обробки поданої форми тут
  
    // Переходимо на іншу сторінку з даними
    this.router.navigate(['/table.page']);
  }

  openPage(page: string): void {
    // Тут ви можете виконати необхідні дії для вибору сторінки
    console.log(`Вибрано сторінку: ${page}`);
    
    // Переходьте на нову сторінку (пусту сторінку)
    this.router.navigate(['/empty-page']);

    // Закрийте меню
    this.menu.close();
  }

  // playAudio() {
  //   this.nativeAudio.preloadSimple('uniqueId1', 'path/to/your/file.mp3').then(() => {
  //     this.nativeAudio.play('uniqueId1').then(() => console.log('Playing...'));
  //   });
  // }
}

// import { Component } from '@angular/core';
// import { DataService } from 'src/app/services/data.service';

// @Component({
//   selector: 'app-your-component',
//   templateUrl: './your-component.component.html',
//   styleUrls: ['./your-component.component.scss'],
// })
// export class YourComponent {
//   firstName: string = '';
//   lastName: string = '';
//   age: number = 0;
//   pressure: number = 0;
//   pressure_2: number = 0;

//   constructor(private dataService: DataService) {}

//   submitForm(): void {
//     const formData = {
//       firstName: this.firstName,
//       lastName: this.lastName,
//       age: this.age,
//       pressure: this.pressure,
//       pressure_2: this.pressure_2,
//     };

//     this.dataService.addFormData(formData);