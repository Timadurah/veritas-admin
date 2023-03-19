import React from 'react';
import Tracki from "../components/incometrack";
import Profile1 from "../assets/images/1.webp";
import Profile2 from "../assets/images/2.webp";
import Profile3 from "../assets/images/3.webp";
import Profile4 from "../assets/images/4.webp";
import Profile5 from "../assets/images/5.webp";


export default function Cards() {
  return (
   <>
   </> 
  )
}

export function TeamPayment() {
    return (
        <div className='p-2 rounded col-2 teampayment position-relative' style={{border:'1px dashed gray'}}>

           <div className='p-2' style={{fontSize:'15px', fontWeight:'800'}}>Team <br /> Payments
           <br />
           <small className='bi bi-calendar-date-fill text-primary' style={{fontSize:'10px'}}>
           <span className='text-dark mx-1'> o7 Dec Approval </span>
           </small>
           </div>
           <div className=' d-flex justify-content-start align-items-center mt-5' >
                 <div className="p1" style={{width:'30px', height:'30px'}}></div>
                 <div className="p2" style={{width:'30px', height:'30px', position: 'relative', left:'-10px' }}></div>
                 <div className="p3" style={{width:'30px', height:'30px', position: 'relative', left:'-20px'}}></div>
                 <div className="p4 fw-bold d-flex justify-content-center align-items-center shadow bg-white" style={{fontSize: '10px',width:'30px', height:'30px', position: 'relative', left:'-30px'}}>24+</div>
           </div>
           <div className='bi bi-bell-fill text-dark position-absolute' style={{right: '5%', top: '5%'}}></div>
        </div>
    )
}

export function Savings() {
  return (
        
      <div  className="p-2 rounded col-2 teampayment" style={{ border: "1px dashed gray" }} >
 <div className="d-flex align-items-center ">
 <small className='bi bi-pie-chart-fill text-dark' style={{fontSize:'20px'}}></small>
 <div className='p-2' style={{fontSize:'15px', fontWeight:'800'}}>Savings
 </div>
</div>
<div className="tracksamp"></div>
<div className='p-2' style={{fontSize:'20px', fontWeight:'800'}}>$5,389
 </div>
 <div className="d-flex justify-content-between small">
    <div className="d-flex">
    <span className='bi bi-bezier2 text-danger'>-11%</span>
    <div className="text-muted mx-1">last week</div>
    </div>
    <div className="bi bi-arrow-right px-2 py-1 d-flex align-items-center justify-content-between text-white bg-dark" style={{borderRadius: '100px'}}></div>

 </div>

      </div>
  )
}


export function Income() {
    return (
          
        <div  className="p-2 bg-white col-2 income" style={{fontSize: '5px',borderRadius: '20px'}} >
   <div className="d-flex align-items-center">
   <div className='p-2' style={{fontSize:'15px',fontWeight:'800'}}>Income statictics
   </div>
  </div>
  <div className="tracki">
    <Tracki />
  </div>
    </div>
    )
  }
  


  
export function Detail() {
    return (
          
        <div  className="p-2 col-2 teampayment position-relative" style={{ border: "1px dashed gray",borderRadius: '30px' }} >
   
   <div  className="bg-white col-2 Detail position-absolute" style={{left:'-20px', top:'15px',borderRadius: '30px'}} >
<div className="detailbg p-2" style={{borderTopRightRadius: '30px', borderTopLeftRadius: '30PX'}}>
<div className='p-2 text-white' style={{fontSize:'25px', fontWeight:'800'}}>$95.9
<p className='mx-1 text-white'  style={{fontSize:'6px'}}> per month </p>
</div>
<div className=' d-flex justify-content-start align-items-center mt-2 fw-bold text-white' >
     Choose best plane for you!
     </div>
<div className='bi bi-stars text-white position-absolute' style={{right: '10%', top: '10%'}}></div>

</div>


<div className="d-flex align-items-center justify-content-between p-2 px-3">
<div className="small fw-bold d-flex align-items-center justify-content-center text-dark">Details</div>
<div className="p-2 px-4 d-flex align-items-center justify-content-between text-white bg-dark" style={{borderRadius: '100px', fontSize: '7px'}}>Upgrade</div>

</div>
</div>


        </div>
    )
  }
  
  


  export function Datatablerow() {
    return(
        <div className="datatablerow bg-white rounded-4 p-4">
     <div className="d-flex justify-content-between align-items-center mb-2">

        <div style={{fontSize:'20px', fontWeight:'900'}}>Transaction</div>
        <div>
            <span className='bi bi-search position-relative text-muted' style={{left:'30px'}}></span>
        <input type="text" className='rounded p-2 ser ' style={{border: '0px solid transparent', outline:'none', background:'#f1f5f5'}} placeholder='        search' />
        </div>
     </div>

          <table>

<tr>
    <th className='text-muted'>Reciever</th>
    <th className='text-muted'>Type</th>
    <th className='text-muted'>Status</th>
    <th className='text-muted'>Date</th>
    <th className='text-muted'>amount</th>
</tr>
<Rows name='Justin Weber' amounts='$3,892' date='Feb 19 2023' status='Pending'  statusBg='pink' profile={Profile1} />
<Rows name='Adrian Derin' amounts='$2,92' date='Feb 20 2023' status='Pending'  statusBg='pink' profile={Profile2} />
<Rows name='Roxanill Hills' amounts='$892' date='Feb 15 2023' status='success' statusBg='#d3dee1' profile={Profile3} />
<Rows name='Romany Jade' amounts='$5,435' date='Jan 16 2023' status='Pending'  statusBg='pink' profile={Profile4} />
<Rows name='Jack June' amounts='$1,92' date='Jan 28  2023' status='success'  statusBg='pink' profile={Profile5} />


          </table>


        </div>
    )
  }

  export function Rows(props) {
    return(
        
<tr>
    <td> <div className="d-flex align-items-center">
        <input type="checkbox" name="" style={{marginRight:'10px', border:'1px solid lightgray', width:'40px', height:'17px'}} />
                <img src={props.profile} alt="profile1" height={30} width={30} className="rounded" />
                    <b className="fw-bold text-dark mx-3" style={{fontSize:'12px'}}>{props.name}</b>
                </div>
                </td>
    <td>Salary</td>
    <td>                <div className=" d-flex align-items-center justify-content-center p-1 px-3 rounded-5 fw-bold col-4" style={{background:props.statusBg, fontSize:'10px'}}>{props.status}</div>
</td>
    <td> <b style={{fontSize:'14px'}}>Feb 19 2023</b> </td>
    <td>
        <div className="d-flex justify-content-between align-items-center"><b style={{fontSize:'15px'}}>{props.amounts}</b> 
         <div className="p-3 border text-muted col-4 rounded d-flex align-items-center justify-content-center fw-bold" style={{fontSize:'10px', height:'30px'}}>Details</div></div>
     </td>
</tr>
    )
  }