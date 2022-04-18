import { Component, OnInit } from '@angular/core';
import {UserserviceService} from '../userservice.service';
import { Repos } from '../repos';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReopsitoriesComponent implements OnInit {

  repo: Repos;
  constructor( public repoService: UserserviceService ) { }

  repoSearch(searchName: string){
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
    this.repoSearch('Owiti-Charles');
  }
 
}