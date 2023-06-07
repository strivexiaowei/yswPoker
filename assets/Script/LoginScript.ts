import { _decorator, Component, Node, director } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('LoginScript')
export class LoginScript extends Component {
    start() {
       setTimeout(() => {
           director.loadScene('Start', () => {
               console.log("打开了开始场景")
           })
       }, 0)
    }

    update(deltaTime: number) {
        
    }
}


