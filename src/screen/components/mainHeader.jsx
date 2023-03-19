import React from 'react'

export default function MainHeader() {
  return ( 
    <div className='d-flex justify-content-between align-items-center w-100'>
      
               <div className="d-flex justify-content-between align-items-center"> 
               <div style={{fontWeight:'900', fontSize:'20px'}}>Analystics</div> 
               <div className="mx-3 d-flex jsutify-content-between p-1" style={{borderRadius:'30px', height:'30px', background:'rgb(237 238 239)'}}>
               <div className="fw-bold small d-flex justify-content-center bg-white align-items-center p-2" style={{width:'200px',borderRadius:'50px'}}>
                Full statictics
               </div> <small className="d-flex justify-content-center align-items-center p-2" style={{width:'200px',borderRadius:'50px'}}>
                Results summary
               </small>
               </div>
               </div>


         <div className="d-flex justify-content-end align-items-center" style={{width: '40%'}}>
            <div className=" px-3 border headerplus bi bi-plus fw-bold rounded d-flex  justify-content-center align-items-center mx-3"></div>
            <div className="rounded-circle Userimg" ></div>
         </div>
    </div>
  )
}
