export class WinText extends PIXI.Container{
    private _winText:PIXI.Text;
    constructor(){
        super();
        this.init();
    }
    private init():void{
        let style = new PIXI.TextStyle({
            wordWrap: true,
            breakWords: true,
            wordWrapWidth: 300
        });
        this._winText =new PIXI.Text('', style);
        this._winText.name ="winText";
        this._winText.position.set(140, 415);
        this.addChild(this._winText);
    }
    public displayWin(text:string) {
        this._winText.text = text;
    }
}