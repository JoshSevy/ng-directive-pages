import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 0;
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
    },
    {
      title: 'I love my job',
      url: 'https://images.unsplash.com/photo-1581893106728-1e2197903b0a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fGRldmVsb3BlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
    },
    {
      title: 'Death before decaf',
      url: 'https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8ZGV2ZWxvcGVyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60'
    },
    {
      title: 'Best Burrito in Town',
      url: 'https://images.unsplash.com/photo-1598806243937-2072d39bc11d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJyZWFrZmFzdCUyMGJ1cnJpdG98ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60'
    },
    {
      title: 'Kapowui',
      url: 'https://images.unsplash.com/photo-1520116468816-95b69f847357?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8c3VyZmluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60'
    },
    {
      title: 'What next?',
      url: 'https://images.unsplash.com/photo-1599499654517-21fce9a3186f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1233&q=80'
    },
    {
      title: 'I thought I saw you!',
      url: 'https://images.unsplash.com/photo-1512781421346-e8ff1805e3ab?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fHNoYXJrfGVufDB8fDB8&auto=format&fit=crop&w=1100&q=60'
    },
    {
      title: 'Hold On, its coming!',
      url: 'https://images.unsplash.com/photo-1493243350443-9e3048ce7288?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1197&q=80'
    },
    {
      title: 'Top of the world',
      url: 'https://images.unsplash.com/photo-1497292682820-42687987a662?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fGZyZWVkb218ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60'
    },
    {
      title: 'Old habits die hard',
      url: 'https://images.unsplash.com/photo-1506104795953-3862fa60f36e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDJ8fHNrYXRlYm9hcmRpbmd8ZW58MHx8MHw%3D&auto=format&fit=crop&w=1100&q=60'
    },
    {
      title: 'Cheap Fun',
      url: 'https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fGhhcHB5fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60'
    }
  ];

  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }
}
