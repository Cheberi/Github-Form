import { Component, OnInit } from '@angular/core';
import { UserFetchService } from '../../services/user-fetch.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  magnify: string = 'assets/search(1).png';
  followersImage: string = 'assets/followers(1).png'
  active: boolean = false;
  name: any;
  login: any; 
  avatar: any;
  link: any;
  bio: any;
  followers: any;
  following: any;
  date: any;
  repos: any;
  constructor(private userFetch: UserFetchService) { }

  ngOnInit() {
    this.name = 'Meshack Cheberi';
    this.login= 'cheberi'; 
    this.avatar= 'https://avatars.githubusercontent.com/u/92095559?v=4';
    this.link= 'https://github.com/Cheberi';
    this.bio= '';
    this.followers= 5;
    this.following= 7;
    this.date= '2021-9-30T10:25:39Z';
  }
  searchUser(e: any,username: string){
    if(username === ''){
      alert("Enter a username!")
    }else{    
    this.active = true;
    this.userFetch.userFetch(username);
    this.name = this.userFetch.name;
    this.login = this.userFetch.login;
    this.avatar = this.userFetch.avatar;
    this.link = this.userFetch.link;
    this.bio = this.userFetch.bio;
    this.followers = this.userFetch.followers;
    this.following = this.userFetch.following;
    this.date = this.userFetch.date;
    //Repos from service
    this.userFetch.repoFetch(username);
    this.repos = this.userFetch.repos;
    }
    
    e.preventDefault();

  }
}
