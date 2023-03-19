import React from "react";
import MainHeader from "../components/mainHeader";
import { TeamPayment, Savings, Income, Detail, Datatablerow } from "../components/cards";
import Profile1 from "../assets/images/1.webp";
import Profile3 from "../assets/images/3.webp";


export default function Main() {
  return (
    <div className="main p-4">
      <MainHeader />
      <div className="d-flex justify-content-between py-4 col-12 datatablerow2">
        <TeamPayment />
        <Savings />
        <Income />
        <Detail />
      </div>
         <div style={{fontSize:'20px', fontWeight:'900'}} className="my-3">Recently Payments</div>
      <div className="d-flex justify-content-between align-items-center">

        <div className="col-5 d-flex justify-content-between align-items-center bg-white rounded p-2" style={{marginRight:'10px'}}>
            
            <div className="d-flex">
                <img src={Profile1} alt="profile1" height={40} width={40} className="rounded" />
                <div className="d-block mx-3" style={{height:'40px'}}>
                    <b className="fw-bold text-dark" style={{fontSize:'12px'}}>Emma Ryan Jr</b>
                    <br />
                    <small className="small text-muted" style={{fontSize:'10px'}}>
                        Mar 9 2023
                    </small>
                </div>
            </div>
                <div className="fw-bold small">$4,832</div>
                <div className="text-info text-center p-1 px-3 rounded-5 fw-bold" style={{background:'#d3dee1',fontSize:'10px'}}>Done</div>
                <div className="bi bi-three-dots text-muted mx-3 cursor"></div>

        </div>


        
        <div className="col-5 d-flex justify-content-between align-items-center bg-white rounded p-2" style={{marginLeft:'10px'}}>
            
            <div className="d-flex">
                <img src={Profile3} alt="profile1" height={40} width={40} className="rounded" />
                <div className="d-block mx-3" style={{height:'40px'}}>
                    <b className="fw-bold text-dark" style={{fontSize:'12px'}}>Justin Weber</b>
                    <br />
                    <small className="small text-muted" style={{fontSize:'10px'}}>
                        Mar 2 2023
                    </small>
                </div>
            </div>
                <div className="fw-bold small">$3,937</div>
                <div className="text-info text-danger p-1 px-3 rounded-5 fw-bold" style={{background:'pink',fontSize:'10px'}}>Pending</div>
                <div className="bi bi-three-dots text-muted mx-3 cursor"></div>

        </div>


      </div>
       

<br />
<br />

       {/* data table eow */}
<Datatablerow />

    </div>
  );
}
