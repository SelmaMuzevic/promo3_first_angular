import { Component } from "@angular/core";


@Component({

    /* le selector indique la balise html qui sera liee à ce component
    Si angular voit un <non-app></non-app> dans html , il viendra y mettre le AppComponent */
    selector: 'mon-app',

    template: '<h1>{{message}}</h1>'
})

export class AppComponent{
    private message:string = 'un truc dedans';
     
}