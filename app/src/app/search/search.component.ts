import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  profile = {
    name : "",
    login : "",
    company : "",
    location : "",
    avatar_url : "",
    bio : "",
    hireable : "",
    blog : "", 
    email : "",
    followers : "",
    following : "",
    public_gists : "",
    public_repos : "",
    html_url : "",



  }
username : any
findProfile : any
repos :any

  constructor() { }

  ngOnInit(): void {
  }

}
