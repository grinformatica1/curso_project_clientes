import { Component } from '@angular/core'

@Component({
    selector: 'hello',
    templateUrl: './hello.component.html'
})
export class HelloComponent{

    nome: string;
    clientes: Cliente[];

    constructor(){
        this.nome = 'Fabricio'
        let fabricio = new Cliente('Fabricio', 30);
        let joao = new Cliente('João', 25);
        let lucas = new Cliente('Lucas', 32)
        this.clientes = [fabricio, joao, lucas];
    }
}

class Cliente{

    constructor(
        public nome: string,
        public idade: number
    ){}

}