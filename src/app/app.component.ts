import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Umang";

  users = [];
  admins = [];

  pushUsers(data) {
    this.users.push(data);
  }
  pushAdmins(data) {
    this.admins.push(data);
  }

  onRemoveAdmins(item){
    this.admins.splice(item,1);
  }

  onRemoveUsers(item){
    this.users.splice(item,1);
  }
}
