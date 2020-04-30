import React,{ Component } from 'react';
// 模块重新引入加载 嵌套路由就是用来嵌套的，别琢磨着把父级弄没了🤮
class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <>
            <div>Main组件相关信息内容</div>
            <div>
                <div>MainList</div>
                <div>MainDetail</div>
            </div>
            </>
        )
    }
}
export default Main