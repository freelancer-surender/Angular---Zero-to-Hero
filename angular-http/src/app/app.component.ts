import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  users: any;
  url = "https://api.github.com/users";
  isLoading = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.isLoading = true;
    this.http.get(this.url).subscribe(res => {
      console.log('success');
      console.log(res);
      setTimeout(() => {
        this.isLoading = false;
        this.users = res;
      }, 3000);
    }, error => {
      this.isLoading = true;
      console.log('error');
      console.log(error);
    }, () => {
      console.log('completed');
    });
  }

  goToGithub(url) {
    window.open(url, '_blank');
  }
}
