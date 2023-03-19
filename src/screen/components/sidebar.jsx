import React from "react";

export default function Sidebar() {
  return (
    <div className="sidebar py-4 shadow px-4">
      <div className="owner">
        {/* logo div with background image */}
        <div className="logo"></div>
      </div>
      <div className="links">
      <a href="" className="text-muted">
          {" "}
           MAIN MENU
        </a> 
        <a href="" className="active p-2" style={{background: '#bfdfe985'}}>
          {" "}
          <div className="bi bi-grid-fill"></div> Dashboard
        </a>
        <a href="">
          {" "}
          <div className="bi bi-people-fill"></div> Users{" "}
        </a>
        <a href="">
          {" "}
          <div className="bi bi-credit-card-fill"></div> Accounts{" "}
        </a>
        <a href="">
          {" "}
          <div className="bi bi-bar-chart-fill"></div> Statistics{" "}
        </a>
      </div>




      <div className="links">
      <a href="" className="text-muted">
          {" "}
           TEAMS
        </a> 
        <a href="" className="left-center">
          {" "}
          <div style={{width:'10px', height:'10px', background:'#ff875a', borderRadius: '30px'}}></div> Marketing
        </a>
        <a href="" className="left-center">
          {" "}
          <div style={{width:'10px', height:'10px', background:'#b3d2e9', borderRadius: '30px'}}></div> Development{" "}
        </a>
      
      </div>


      <div className="bottom_sidenav">
        {" "}
        <a href="">
          {" "}
          <div className="bi bi-gear"></div> Settings{" "}
        </a>
        <a href="">
          {" "}
          <div className="bi bi-info-square"></div> Log-out{" "}
        </a>
      </div>
    </div>
  );
}
