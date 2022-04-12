/**
 * Created by shikha on 2022-04-09.
 */

import {SlotApplication} from "./SlotApplication";
import {PreLoadScreen} from "./view/PreLoadScreen";
import {GameScreen} from "./view/GameScreen";
import {GeneratPositions} from "./GeneratPositions";
import {WinPresentation} from "./WinPresentation";


export class SlotClass extends SlotApplication {
    public static gameScreen: GameScreen;
    public static assetLoader: PIXI.Loader;
    public static preLoad: PreLoadScreen;
    public static updateWin: WinPresentation;
    public static generatePos: GeneratPositions;

    constructor() {
        super();
    }

    protected init(): void {
        SlotClass.preLoad = new PreLoadScreen();
        SlotClass.updateWin = new WinPresentation();
        SlotClass.generatePos = new GeneratPositions();
        this.stage.addChild(SlotClass.preLoad);
        this.loader.add('hv1', '../assets/hv1_symbol.png')
            .add('hv2', '../assets/hv2_symbol.png')
            .add('hv3', '../assets/hv3_symbol.png')
            .add('hv4', '../assets/hv4_symbol.png')
            .add('lv1', '../assets/lv1_symbol.png')
            .add('lv2', '../assets/lv2_symbol.png')
            .add('lv3', '../assets/lv3_symbol.png')
            .add('lv4', '../assets/lv4_symbol.png')
            .add('spin', '../assets/spin_button.png');
        this.loader.load((loader: PIXI.Loader, resources: Partial<Record<string, PIXI.LoaderResource>>) => this.onLoadComplete(loader, resources));
        this.loader.onProgress.add(() => {
            SlotClass.preLoad.updateText("Loading " + this.loader.progress + "%");
        })
    }


    protected onLoadComplete(loader: PIXI.Loader, resources: Partial<Record<string, PIXI.LoaderResource>>): void {
        SlotClass.assetLoader = loader;
        SlotClass.gameScreen = new GameScreen();
        SlotClass.preLoad.updateText("Loaded 100%");
        this.stage.addChild(SlotClass.gameScreen);
    }
}