import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent{

  forma:FormGroup;
  user:Object = {
    fullName: {
      name: "Javi",
      surname: "Munoz"
    },
    email: "javi.munoz@aaaa.com",
    // hobbies: ["Run", "Read", "Play"]
  }
  constructor() { 
    console.log(this.user);
    
    this.forma = new FormGroup({
      'fullName': new FormGroup({
        'name': new FormControl(   '', [Validators.required, Validators.minLength(3)]),
        'surname': new FormControl('', 
                                    [ Validators.required,
                                      this.noSurname
                                    ]),
      }),
      'email': new FormControl(  '', [
                                      Validators.required, 
                                      Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
      'hobbies': new FormArray([
        new FormControl('Run', Validators.required)
      ]),
      "username": new FormControl("", Validators.required, this.usernameExists),      
      "password1": new FormControl("", Validators.required),
      "password2": new FormControl(),

    });

    // this.forma.setValue(this.user);
    this.forma.controls["password2"].setValidators([
      Validators.required,
      this.noSame.bind(this.forma) //*******************quiero que this dentro de la funcion sea igual a this.forma
    ]);

    this.forma.valueChanges.subscribe(data => console.log(data));
    this.forma.controls["username"].valueChanges.subscribe(data => console.log(data));
    this.forma.controls["username"].statusChanges.subscribe(data => console.log(data));
    

  }
  addHobbie() {
    (<FormArray>this.forma.controls['hobbies']).push(
      new FormControl("Sleep", Validators.required)
    )
  }

  noSurname(control: FormControl):{[s:string]:boolean}{
    if(control.value === "munoz"){
      return {
        nosurname:true
      }
    }
    return null;
  }

  noSame(control: FormControl):{[s:string]:boolean}{
    let forma:any = this;
    if(control.value !== forma.controls["password1"].value){
      return {
        nosame:true
      }
    }
    return null;
  }

  usernameExists(control:FormControl): Promise<any>|Observable<any>{
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        if (control.value=="strider") return resolve({exist:true});
        return resolve(null);
      }, 3000)
    })
  }

  guardarCambios(){
    console.log(this.forma.value);
    // this.forma.reset(this.user);
  }
}
