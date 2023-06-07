import { _decorator, Component, Node, director, Button } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('StartScript')
export class StartScript extends Component {
    @property(Button)
    playBtn: Button | null = null;
    start() {
        console.log('hehe')
        this.playBtn.node.on(Button.EventType.CLICK, this.onClickMain, this);
    }
    onLoad () {

    }

    update(deltaTime: number) {
        
    }

    onClickMain () {
        director.loadScene('Main')
    }
}


