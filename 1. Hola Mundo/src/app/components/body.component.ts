import { Component } from "@angular/core";

@Component({
    selector: 'app-body',
    templateUrl: "body.component.html" 
})
export class BodyComponent {
    mostrar:boolean = false;
    frase:any = {
        mensaje:"Un gran poder bla bla bla",
        autor:"Ven al parque"
    }

    personajes:string[] = ["Spiderman", "Venon", "Octopus"];
}