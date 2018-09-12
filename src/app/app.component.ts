import { Component } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello';

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $('.modal').modal();
    $('.carousel').carousel({
      full_width: true
    });
    $('.carousel').css('height', '100%');
    $('.carousel').css('width', '100%');
  }
}
