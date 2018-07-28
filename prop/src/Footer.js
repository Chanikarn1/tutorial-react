import React, {Component} from 'react'
class Footer extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            times: 0
        }
        setInterval(()=>{
            this.setState({
                times: this.state.times+1
            })
        },1000)
    }
    render(){
        
        let {times} =this.state
        return(
            
            <div>Footer online time {times} </div>
        );
    }
    
}

export default Footer;