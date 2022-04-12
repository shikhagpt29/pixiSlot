import * as PIXI from "pixi.js";
import {Symbol} from "./Symbol";

export class ReelView extends PIXI.Container {
    private _relPos: string[][] = [["hv2", "lv3", "lv3"],
        ["hv1", "lv1", "lv2"],
        ["hv2", "lv3", "lv1"],
        ["hv3", "lv1", "lv2"],
        ["hv2", "lv2", "lv1"],];
    private _symW: number = 128;

    constructor(reelId: number) {
        super();
        const offSet: number = 10;
        this.name = "reel_" + reelId;
        this.position.x = reelId * this._symW + offSet * reelId;
        this.reel(reelId)
    }
    private reel(reelId:number):void{
        const offSet: number = 10;
        for (let symId: number = 0; symId < 3; symId++) {
            let sprite: Symbol = new Symbol(this._relPos[reelId][symId]);
            sprite.position.y = symId * this._symW + offSet * symId;
            this.addChild(sprite);
        }
    }
}
