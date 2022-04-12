import {SlotModel} from "./SlotModel";
import {SlotClass} from "./SlotClass";

export interface IPayLine {
    sym: string,
    count: number,
    payline: number,
    multiplier: number
}

export interface IWinComb {
    totalWin: number,
    winCombinations: IPayLine[],
}

export class WinPresentation {
    constructor() {
    }

    public showReelArea(): void {
        let updatedReels: string[][] = SlotClass.generatePos.createReels();
        for (let reelId: number = 0; reelId < 5; reelId++) {
            for (let symId: number = 0; symId < 3; symId++) {
                let symbol: PIXI.Container = SlotClass.gameScreen.reels[reelId].getChildAt(symId) as PIXI.Container;
                ( symbol!.getChildAt(0) as PIXI.Sprite )!.texture = SlotClass.assetLoader.resources[updatedReels[reelId][symId]].texture;
            }
        }
    }

    public checkWinCombinations(): IWinComb {
        let totalWin: number = 0;
        let winCombinations: IPayLine[] = [];
        const paylines: number[][] = SlotModel.payLines;
        const payOuts = SlotModel.payOuts;
        for (let i = 0; i < paylines.length; i++) {
            let reelIndex = 0;
            let startSymbol = null;
            let count = 0;

            while (reelIndex < SlotClass.generatePos.updateScreen.length) {
                let symbol = SlotClass.generatePos.updateScreen[reelIndex][paylines[i][reelIndex]];
                startSymbol = startSymbol || symbol;

                if (symbol === startSymbol) {
                    count++;
                } else {
                    break;
                }
                reelIndex++;
            }
            let payoutLine: IPayLine = {
                sym: startSymbol!,
                count: count,
                payline: i + 1,
                multiplier: 1
            };
            if (startSymbol) {
                if (payOuts[payoutLine.sym][payoutLine.count]) {
                    payoutLine.multiplier = payOuts[payoutLine.sym][payoutLine.count];
                    totalWin += payoutLine.multiplier;
                    winCombinations.push(payoutLine);
                }
            }
        }
        return {totalWin: totalWin, winCombinations: winCombinations}
    }

}