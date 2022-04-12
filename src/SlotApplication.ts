/**
 * Created by shikha on 2022-04-09.
 */
import * as PIXI from "pixi.js";
export class SlotApplication {

    public stage: PIXI.Container;
    public loader: PIXI.Loader;
    private _app: PIXI.Application;

    constructor() {
        const resolution: number = window.devicePixelRatio;
        this._app = new PIXI.Application({
            autoStart : true,
            autoDensity : true,
            antialias : false,
            resolution : resolution,
            backgroundColor : 0xaaaaaa,
            resizeTo : window
        });

        document.body.appendChild(this._app.view);
        this.stage = this._app.stage;
        this.loader = this._app.loader;
        this.init();
    }
    protected init():void{};
}