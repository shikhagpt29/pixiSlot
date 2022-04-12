import {Button} from "../Button";
import {SlotClass} from "../SlotClass";
import {ReelView} from "./ReelView";
import {IWinComb} from "../WinPresentation";
import {WinText} from "./WinText";

export class GameScreen extends PIXI.Container {
    public reels: ReelView[] = [];
    private _winTxtContainer: WinText;

    constructor() {
        super();
        this.initGraphics();
        this.visible = false;
        this.position.set(100,100);
    }

    public show(): void {
        this.visible = true;
    }

    private initGraphics(): void {
        this._winTxtContainer = new WinText();
        this.createSpinButton();
        for (let reelId: number = 0; reelId < 5; reelId++) {
            this.reels.push(new ReelView(reelId));
            this.addChild(this.reels[reelId] as PIXI.Container);
        }
        this.addChild(this._winTxtContainer);
    }

    private createSpinButton(): void {
        const spinButton: Button = new Button("spinButton");
        const sprite = new PIXI.Sprite(SlotClass.assetLoader.resources["spin"].texture);
        sprite.width = sprite.width / 2;
        sprite.height = sprite.height / 2;
        spinButton.on('pointertap', () => {
            SlotClass.updateWin.showReelArea();
            this.showWin();
        });
        spinButton.addChild(sprite);
        this.addChild(spinButton);
        spinButton.position.set(677, 203);
    }

    private showWin(): void {
        let winData: IWinComb = SlotClass.updateWin.checkWinCombinations();
        let addText = "";
        let text = "";
        const totalWin = winData.totalWin;
        const winCombinations = winData.winCombinations;
        if (totalWin) {
            text = "Total win  : " + totalWin;
            for (var wc = 0; wc < winCombinations.length; wc++) {
                addText += "\n" + "payline " + winCombinations[wc].payline + ", "
                    + winCombinations[wc].sym + " x" + winCombinations[wc].count + "," + " " + winCombinations[wc].multiplier;
            }
        } else {
            text = "You Won nothing";
        }
        this._winTxtContainer.displayWin(text + addText);
    }
}