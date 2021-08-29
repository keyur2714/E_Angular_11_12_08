import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  friendName : string = 'sachin';
  selectedFriend : string = '';
  isUpdate : boolean = false;
  updateIdx : number = -1;
  currentRow : number = -1;
  

  friendList : string[] = ["Keyur","Denish","Vinit"];

  constructor() { }

  ngOnInit(): void {
  }

  addFriend() : void {    
    if(this.friendName !== ''){
      let isExists = this.friendList.indexOf(this.friendName);
      //alert(isExists);
      if(isExists === -1){
        this.friendList.push(this.friendName);
        this.friendName = '';
      }else{
        alert("Friend Name Already Exists with "+this.friendName);
      }
      
    }else{
      alert("Friend Name should not be Empty.");
    }
  }

  checkVal(idx : number) : void {
    this.currentRow = idx;
  }

  updateFriend() : void{
    if(this.friendName !== ''){
      let isExists = this.friendList.indexOf(this.friendName);
      //alert(isExists);
      if(isExists === -1){
        this.friendList[this.updateIdx]=this.friendName;
        this.friendName = '';
        this.isUpdate = false;
        this.updateIdx = -1;
        alert("Friend Name Updated successfully.");
      }else{
        alert("Friend Name Already Exists with "+this.friendName);
      }
      
    }else{
      alert("Friend Name should not be Empty.");
    }
  }

  setSelectedFriend(name : string) : void{
    this.selectedFriend = name;
  }

  edit(idx : number) : void{
    //alert(idx);
    this.friendName = this.friendList[idx];
    this.isUpdate = true;
    this.updateIdx = idx;
  }

  delete(idx : number) : void {    
    let deletedFriend = this.friendList[idx];
    let confirmMsg = confirm("Are you sure want to Delete Friend : "+ deletedFriend);
    //alert(confirmMsg);
    if(confirmMsg){
      this.friendList.splice(idx,1);
      this.selectedFriend = '';
      alert(deletedFriend + " Deleted Successfully.");
    }
  }

}
