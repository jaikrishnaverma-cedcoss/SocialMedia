import React from 'react';
import "./navStyle.css";
function Navbar(props) {
    // FindData
    return (
        <>
            <div className="nav" style={{ width: "98%", position: "fixed", top: "0", zIndex: "100" }}>
                <span className='row flexAIC' onClick={() => props.onProduct(-1)} style={{ width: "17%" }}><i className="fa fa-bars hamburger" aria-hidden="true"></i> <img style={{ marginLeft: "6%",height:"59px" }} alt="logo here" src="cat-g0be958f39_1920.png" /></span>
                {/* <img id="gol" alt="dfs" src="gol.png" alt="" /> */}
                <div className="searchbox">
                    <input type="text" onChange={props.FindData} value={props.searchString} placeholder="Search User or Post" /><i class="fa fa-search" aria-hidden="true"></i>
                </div>
                <span style={{ color: "white", fontWeight: "600" }}> <i class="hamburger fa fa-user" aria-hidden="true"></i> {props.userData.username}</span>
                <button onClick={props.LogOutHandler} className="btn">Log Out</button>
                <button className="btn btn-success"><i class="fa fa-shopping-cart" aria-hidden="true"></i><span>3</span></button>

            </div>
        </>
    );
}

export default Navbar;