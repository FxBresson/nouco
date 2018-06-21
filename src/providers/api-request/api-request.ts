import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiRequestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiRequestProvider {

  public apiUrl: String = 'http://api.fxbresson.fr:3000'

  constructor(public http: HttpClient) {
    
  }

  public get(path):Promise<{}> {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + path).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  public post(path, data):Promise<{}> {
    return new Promise(resolve => {
      this.http.post(this.apiUrl + path, data, {
        headers: new HttpHeaders().set('Content-Type', 'application/json')
      }).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  public getServices() {
    
  }

  public participateToWokshop(workshopId, contributors) {
    return new Promise(resolve => {
      this.http.patch(this.apiUrl + '/workshops/' + workshopId, {"contributors": contributors}, {
        headers: new HttpHeaders().set('Content-Type', 'application/json')
      }).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    })
  }

  public getWorkshop(path, cb) {
    return new Promise(resolve => { 
      this.get('/users').then(function(users) {
        this.get(path).then(function(workshops) {
          cb(this.processWorkshops(workshops, users))
        }.bind(this))
      }.bind(this))
    })
  }

  public processWorkshops(workshops, users) {
    for (let workshop of workshops) {
      workshop.host = users.find(x => x.id == workshop.host);
      for (let contributorIndex in workshop.contributors) {
        workshop.contributors[contributorIndex] = users.find(x => { return x.id == workshop.contributors[contributorIndex]})
      }

      let date = new Date(workshop.date)
      workshop.day = date.toLocaleDateString()
      workshop.time = date.getHours() + 'h' + date.getMinutes();
    }
    return workshops;
  }

  // public request(path):void {
  //   this.response.next(this.http.get(path))
  // }
}
