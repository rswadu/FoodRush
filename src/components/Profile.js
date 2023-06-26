import {Component} from "react";

export class Profile extends Component {
    constructor(props){
      super(props);
      this.state={
        count:0,
      };
    }
    render(){
        return (
            <div>
                <p>this is class component</p>
                <p>name={this.props.name}</p>
                <p>count={this.state.count}</p>
                <button 
                onClick={()=>{
                    this.setState({
                        count:1,
                    });
                }}
                >setCount</button>
                
            </div>
            
        );
    }
}
