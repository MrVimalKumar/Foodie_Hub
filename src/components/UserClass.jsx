import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);
    this.state={
        count:0,
        count1:1,
    }
    console.log("child constructor")
    }
    componentDidMount(){
      console.log("child did mount")
    }
  render() {
    console.log("child render")
    const {name,location,age}=this.props;
    return (
        
      <div className="user-cards">
        <h1>Count : {this.state.count}</h1>
        <h1>Count1 : {this.state.count1}</h1>
        <button onClick={()=>{
            this.setState({
                count:this.state.count+1,
                count1:this.state.count1+1,
            })
        }}>Click me to increase count</button>
        <h3>Name:{name}</h3>
        <h3>Location:{location}</h3>
        <h3>Age:{age}</h3>
      </div>
    );
  }
}

export default UserClass;
