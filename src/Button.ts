import {Container} from "@pixi/display";

export class Button extends Container {
    constructor(name:string){
        super();
        this.interactiveChildren = true;
        this.buttonMode = true;
        this.name = name;
        this.position.set(10, 137);
    }
}