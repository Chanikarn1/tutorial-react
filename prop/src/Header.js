import React, {Component} from "react"

class Header extends Component{
    render(){
        //let User = this.props.CurrentUser //------(1)
         //User = "Logged in as :" + User //ใช้กับแบบที่ (1)
         let {CurrentUser,islogged} = this.props // บนกับล่างเหมือนกัน -----(2)
         
         CurrentUser = "Logged in as :" + CurrentUser //ใช้กับแบบที่ (2)
       
        return(
           // <div>Hello {User}</div> //ใช้กับแบบที่ 1
             <div>Hello {islogged&&CurrentUser} </div> //ใช้กับแบบที่ 2 ในวงเล็บหมายความว่าถ้าใครล้อกอินจึงจะทำ CurrentUser
        )

    }

}
export default Header