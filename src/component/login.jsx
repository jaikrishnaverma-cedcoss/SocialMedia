import React, { Component } from 'react';
import './Login.css'
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {switch:"login" ,Credentials:[],tmpUsername:"",tmpPassword:"",tmpContact:"",tmpEmail:"",tmpCity:"",tmpFullName:"",tmpCountry:"",tmpPinCode:"",SessionId:-1,notify:""}
    }
    Changebtn=(event)=>
    {
        this.setState({switch:event},()=>{
            this.setState({notify:""})
        })

        // console.log(event)
    }
    ChangeUsername=event=>{
   this.setState({tmpUsername:event.target.value})
    }
    ChangePassword=event=>{
        this.setState({tmpPassword:event.target.value})
    }
    ChangeContact=event=>{
        this.setState({tmpContact:event.target.value})
    }
    ChangePinCode=event=>{
        this.setState({tmpPinCode:event.target.value})
    }
    ChangeEmail=event=>{
        this.setState({tmpEmail:event.target.value})
    }
    ChangeCity=event=>{
        this.setState({tmpCity:event.target.value})
    }
    ChangeFullName=event=>{
        this.setState({tmpFullName:event.target.value})
    }
    ChangeCountry=event=>{
        this.setState({tmpCountry:event.target.value})
    }



    LoginHandler=event=>{
        let flag=-1;
        this.props.Credentials.map((obj,i)=>{
            if(obj.username===this.state.tmpUsername && obj.password===this.state.tmpPassword)
            flag=i
            return i
        })
        if(flag!==-1)
        this.setState({SessionId:flag},()=>
        {
            this.setState({notify:"Logged IN."})
            this.props.auth(this.state.SessionId)
    })
        else
         this.setState({notify:"Invalid Username Or Password"})
    }
    SignupHandler=event=>{
        if(this.state.tmpUsername!==""&&this.state.tmpContact!==""&&this.state.tmpPassword!==""&&this.state.tmpCity!==""&&this.state.tmpCountry!==""&&this.state.tmpFullName!==""&&this.state.tmpEmail!==""&&this.state.tmpPinCode!=="")
        {
            let obj={username:this.state.tmpUsername,password:this.state.tmpPassword,contact:this.state.tmpContact,city:this.state.tmpCity,country:this.state.tmpCountry,fullname:this.state.tmpFullName,email:this.state.tmpEmail,pincode:this.state.tmpPinCode}
            this.state.Credentials.push(obj)
            this.props.SignupHandler(obj)
            this.setState({Credentials:this.state.Credentials},()=>{
                console.log(this.state.Credentials)
                this.setState({notify:"Signup Successfully!"})
            })
        }
        else{

            this.setState({notify:"fill all details!"})
        }
    }
    render() { 
        if(this.state.switch==="login")
        {
        return ( 
            <>
            <div className="login">
                <img id="logo" src="logo192.png" alt="" />
                <p className="notify">{this.state.notify}</p>
                <div className="form col">
                    <div className="col">
                   <label >Username</label>
                    <input onChange={this.ChangeUsername} value={this.state.tmpUsername} placeholder="Enter Your Username" className="btn btn-danger"type="text" />
                    </div>
                    <label>Password</label>
                    <input onChange={this.ChangePassword} value={this.state.tmpPassword} placeholder="Enter Password" className="btn btn-danger" type="password" />
                </div>
                <div className="foot">
              <p >Dont have any Account <a href="#" onClick={()=>this.Changebtn("Signup")} className='linker'>Signup</a></p>
      <button onClick={this.LoginHandler} className="btn btn-warning">{this.state.switch}</button>
                </div>
            </div>
            </>
         );
        }
        if(this.state.switch==="Signup")
        {
            return ( 
                <>
                <div className="login sign">
                    <img id="logo" src="logo192.png" alt="" />
                    
                <p className="notify">{this.state.notify}</p>
                     {/* <iframe src="https://giphy.com/embed/0DYL4Yz6wwG0DfEBs9"  className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/mcdonaldsuk-mcdonalds-uk-change-a-little-lot-0DYL4Yz6wwG0DfEBs9"></a></p> */}
                    <div className="form col">
                        <div className="col">
                            <div className="row">
                                <div className="col w50"><label>Username</label>
                        <input onChange={this.ChangeUsername} value={this.state.tmpUsername}  placeholder="Enter Username" className="btn btn-danger"type="text" />
                        </div>
                        <div className="col w50">

                        <label>Password</label>
                        <input onChange={this.ChangePassword} value={this.state.tmpPassword}  placeholder="Enter New Password" className="btn btn-danger" type="password" />
                    
                      
                        </div>
                            </div>
                       </div>
                       <label>Full Name</label>
                        <input onChange={this.ChangeFullName} value={this.state.tmpFullName}  placeholder="Enter Your Full Name" className="btn btn-danger"type="text" />
                      
                       <div className="row">
                        <div className="col w50">  <label>Email</label>
                        <input onChange={this.ChangeEmail} value={this.state.tmpEmail}  placeholder="Enter Your Valid Email" className="btn btn-danger" type="text" />
                       </div>
                        <div className="col w50">
                        <label>Contact</label>
                        <input onChange={this.ChangeContact} value={this.state.tmpContact}  placeholder="Enter Contact No." className="btn btn-danger" type="text" />
                       
                        </div>
                       </div>
                     
                      
                      <div className="row">
                        <div className="col w33" sty><label>City</label>
                        <input onChange={this.ChangeCity} value={this.state.tmpCity}  placeholder="Enter City Name" className="btn btn-danger" type="text" />
                       </div>
                       <div className="col w33">
                        <label>Country</label>
                        <input onChange={this.ChangeCountry} value={this.state.tmpCountry}  placeholder="Enter Country Name" className="btn btn-danger" type="text" />              
                         
                        </div>
                        <div className="col w33">
                        <label>Pin Code</label>
                        <input onChange={this.ChangePinCode} value={this.state.tmpPinCode}  placeholder="Enter Area PinCode" className="btn btn-danger" type="text" />              
                         
                        </div>
                       </div>
                        
                                 </div>
                    <div className="foot signn">
              <p >Already have Account <a href="#" onClick={()=>this.Changebtn("login")} className='linker'>LogIn</a></p>
      <button  onClick={this.SignupHandler} className="btn btn-success">{this.state.switch}</button>

          </div>
                </div>
                </>
             );
        }
    }
}
 
export default Login;