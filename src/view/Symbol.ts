import {SlotClass} from "../SlotClass";
import * as PIXI from "pixi.js";
export class Symbol extends PIXI.Container {
    private _syms: string[] = ["hv1", "hv2", "hv3", "hv4", "lv1", "lv2", "lv3", "lv4"];

    constructor(texture: string) {
        super();
        this.createSprite(texture);
    }

    private createSprite(texture: string): PIXI.Sprite | null {
        if (this._syms.indexOf(texture) > -1) {
            const sprite: PIXI.Sprite = new PIXI.Sprite(SlotClass.assetLoader.resources[texture].texture);
            sprite.width = sprite.width / 2;
            sprite.height = sprite.height / 2;
            this.addChild(sprite);
            return sprite;
        }
        return null
    }
}