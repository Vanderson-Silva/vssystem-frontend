import { Component } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";

export interface User {
  name: string;
  email: string;
  phone: string;
}

const USERS: User[] = [
  { name: "John", email: "john@example.com", phone: "123-456-7890" },
  { name: "Jane", email: "jane@example.com", phone: "987-654-3210" },
  { name: "Bob", email: "bob@example.com", phone: "555-555-5555" },
];

@Component({
  selector: "app-cliente-list",
  templateUrl: "./cliente-list.component.html",
  styleUrls: ["./cliente-list.component.css"],
})
export class ClienteListComponent {
  displayedColumns: string[] = ["name", "email", "phone"];
  dataSource = new MatTableDataSource<User>(USERS);
}
