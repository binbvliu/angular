import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string = 'lily';
  age:number = 30;
  email:string;
  address:Address;
  hobbies:any[];
  constructor() { 
    console.info('构造函数先执行-----')
  }

  ngOnInit() {
    console.info('oninit 后执行');
    this.address = {
      street:'北蔡',
      city:'上海',
      state:'浦东'
    };
    this.age = 90;
    this.name='huawei';
    this.email = 'asd@123.com';
    this.hobbies=['写代码','看电影',123]

  }

}
interface Address{
    street:string,
    city:string,
    state:string
}