import {Component, OnInit} from '@angular/core';
import { People } from '../people';
import { Repos } from '../repos';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  [x: string]: any;
  people!: People;
  repo!: Repos;
  constructor(public myService: People, private repoService: Service) {
  }

  searchs(searchName: string) {
    this.myService.searchUSer(searchName).then(
      (success: any)=>{
        this['user'] = this.myService.foundUser;
      },
      (error: any)=>{
        console.log(error)
      }
    );
      this.repoService.getReopos(searchName).then(
        (results: any)=>{
          this.repo =this.repoService.allRepos
          console.log(this.repo);
        },
        (error: any)=>{
          console.log(error);
        }
      );
  }

  ngOnInit() {
    this.searchs('Owiti-Charles');
  }
}