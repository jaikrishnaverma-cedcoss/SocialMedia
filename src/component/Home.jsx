import React from 'react';
import Navbar from './Nav/Navbar';
import './Home.css'
function Home(props) {
    console.log("props",props.data)
    return ( 
        <>
        <div className="home" style={{width:'100vw'}}>
            <Navbar userData={props.userData} LogOutHandler={props.LogOutHandler}/>
            <div className="row banner2" >
                <div className="col w33 flexAIC">
                    <img src="logo512.png" alt="" />
                    <h3 className='name'> {props.userData.username}</h3>
                </div>
                <div className="col w50 flexSB">
                    <h3>Name:  {props.userData.fullname}</h3>
                    <h3>Userame:  {props.userData.username}</h3>

                    <h4>Email:  {props.userData.email}</h4>
                    <p>Country/City:  {props.userData.country}/{props.userData.city}</p>
                    <p>Pincode:  {props.userData.pincode}</p>
                </div>
               
            </div>
            <div className="row feed">
                <div className="col w20 cards">
                    <h2>Add Friend</h2>
                    <div className="col">
                    {
                        props.data.map((x)=>  <div className="option row flexAIC flexSB"><h2>{x.username}</h2><button className="btn btn-warning" style={{padding:"0px !important"}}><i class="fa fa-user-plus" aria-hidden="true"></i></button></div>
               
                        )
                    }
                    </div>
                </div>
                <div className="col w60 cards">
                <h2>New Feeds <button className="btn btn-success" style={{padding:"0px !important"}}><i class="fa fa-plus-square" aria-hidden="true"></i></button></h2>
               
                    { props.data.map((x)=> <div className="option col feeder"><h4><i class="fa fa-user" aria-hidden="true"></i> {x.username}</h4> <div className='row flexAIC'><img src="logo512.png" style={{height:"70px"}}alt="alt" /><p>{x.fullname} {x.city} {x.pincode} {x.country} {x.email}</p></div></div> )}
            

                </div>
                <div className="col w20 cards">
                <h2>Notifications</h2>
                {
                    props.data.map((x)=>  <div className="option row flexAIC" style={{padding:"10px 20px"}}><h2><i class="fa fa-bell" aria-hidden="true"></i> {x.username}</h2></div>
               
                    )
                }
                </div>
            </div>
        </div>

        </>
     );
}

export default Home;