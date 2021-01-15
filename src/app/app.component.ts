import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  images = [
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2h8ZW58MHx8MHw%3D&auto=format&fit=crop&w=400&q=60'
    },
    {
      title: 'My dream home',
      url: 'https://images.unsplash.com/photo-1535962192292-d2b200f2e4a2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8ZHJlYW0lMjBob21lfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    },
    {
      title: 'Lake day, I love summer',
      url: 'https://images.unsplash.com/photo-1600635974381-7f31efa76002?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fHZhY2F0aW9uc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    }
  ];
}
