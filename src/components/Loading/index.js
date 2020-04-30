import React,{ Component } from 'react';
class Loading extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    loadingType () {
        if (this.props.error) {
            return <div>加载失败</div>
          } else if (this.props.pastDelay) {
            return <div>Loading...</div>
          } else if (this.props.timedOut) {
            return <div>加载超时</div>
          } else {
              return null;
          }
    }
    render() {
        return (
            this.loadingType()
        )
    }
}
export default Loading