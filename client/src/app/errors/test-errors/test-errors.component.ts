import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-test-errors',
  templateUrl: './test-errors.component.html',
  styleUrls: ['./test-errors.component.css'],
})
export class TestErrorsComponent implements OnInit {
  baseUrl = environment.apiUrl;
  validationErrors: string[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void { }

  get404Error() {
    this.http.get(this.baseUrl + 'Dummy/not-found').subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  get400Error() {
    this.http.get(this.baseUrl + 'Dummy/bad-request').subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  get500Error() {
    this.http.get(this.baseUrl + 'Dummy/server-error').subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  get401Error() {
    this.http.get(this.baseUrl + 'Dummy/auth').subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  get400ValidationError() {
    this.http.post(this.baseUrl + 'account/register', {}).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
        this.validationErrors = error;
      }
    );
  }
}