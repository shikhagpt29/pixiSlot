import {Button} from "../Button";
import {SlotClass} from "../SlotClass";

export class PreLoadScreen extends PIXI.Container {
    private _loadingText: PIXI.Text;
    private _continueButton: Button;

    constructor() {
        super();
        this.initGraphics();
    }

    public updateText(value: string): void {
        this._loadingText.text = value;
    }

    public hide() {
        this.visible = false;
    }

    private initGraphics(): void {
        this._loadingText = new PIXI.Text("loading..");
        this._loadingText.position.set(150, 200);
        this._continueButton = new Button("continueBtn");
        this._continueButton.position.set(150, 400);
        this._continueButton.addChild(new PIXI.Text("CONTINUE"));
        this.addChild(this._loadingText, this._continueButton);
        this._continueButton.on('pointertap', () => {
            this.hide();
            SlotClass.gameScreen.show();
        });
    }
}