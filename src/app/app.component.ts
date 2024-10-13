import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from './shared/services/authservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iusto debitis recusandae eos nobis necessitatibus id dolores distinctio earum accusamus perferendis, quia est repellat officiis, voluptate, a assumenda cupiditate. Dolor."
  title = 'kayaApparels';
isloginusers!: boolean;
constructor(private _authservice:AuthserviceService){}
ngOnInit(): void {
  this._authservice.loginsub$.subscribe(res=>{
    this.isloginusers=res
  })
}

}
