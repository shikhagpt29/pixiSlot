import {SlotModel} from "./SlotModel";

export class GeneratPositions {
    private _updatedReels: string[][] = [[],[],[],[],[]];
    private _screen: string[][] = [[],[],[],[],[]];

    constructor() {
    }

    public get updateReels(): string[][] {
        return this._updatedReels;
    }

    public get updateScreen(): string[][] {
        return this._screen!;
    }

    public createReels(): string[][] {
        this._updatedReels =[[],[],[],[],[]];
        this._screen =[[],[],[],[],[]];
        let reels: string[][] = SlotModel.reels;
        let positions: number[] = [];
        for (let reelId = 0; reelId < reels.length; reelId++) {
            let pos = Math.floor(Math.random() * reels[reelId].length);
            positions.push(pos);
        }
        for (let i: number = 0; i < 3; i++) {
            let rowMap: string = ' ';
            let column: number = 0;
            while (column < reels.length) {
                rowMap += ( reels[column] )[( positions[column] + i ) % ( reels[column].length )] + ' ';
                this._screen[column].push(( reels[column] )[( positions[column] + i ) % ( reels[column].length )]);
                column++;
            }
        }
        this._updatedReels = JSON.parse(JSON.stringify(this._screen));
        return this._updatedReels;
    }
}