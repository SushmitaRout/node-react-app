import logo from './logo.svg';
import React from 'react';
import './App.css';
import {Button,Grid} from '@material-ui/core';

function App() {
  return (
    <>
    <table border="0" cellSpacing="0" cellPadding="0">
      <tr>
        <td colspan="2">
          <table border="0" width="100%">
            <tr>
              <td > <img src="logo1.png" style={{marginTop:""}}></img></td>
              <td class="lbl1"> <span><label >PATIENTS</label></span></td>
              <td class="lbl1"><span><label >CALEANDAR</label></span> </td>
              <td class="lbl1"> <span><label >USERS</label></span></td>
              <td class="lbl1"><span><label >BILLING</label></span></td>
              <td style={{width:"10%"}}><img src="12.png" class="img1"></img></td>
              <td ><span><img src="2.png" class="img2" height="30" width="30"></img></span></td>
            </tr>
          </table>
        <span></span> 
        </td>
      </tr>
      <tr>
      <td class="sidebar" rowSpan="2">
        <div style={{marginTop:"-20px"}}>
 <span style={{marginleft: "7px",padding:"5px"}}>Patients</span><br></br>
 <input type="text" class="side_inpt"></input><br></br><br></br>
 <div class="side_div"><img src="5.png" style={{borderRadius:"25px",float:"left"}}></img> <span > Sara Smith</span><br></br><span>15 Aug 2020</span> <img src="9.png" style={{borderRadius:"25px",float:"right",marginTop:"-20px",padding:"10px"}}></img></div><br></br><br></br>
 <div  class="side_div"><img src="6.png" style={{borderRadius:"15px",float:"left"}}></img> James Johnson<br></br><span>No Clearance</span> <img src="10.png" style={{borderRadius:"25px",float:"right",marginTop:"-20px",padding:"10px"}}></img></div><br></br><br></br>
 <div class="side_div"><img src="7.png" style={{borderRadius:"15px",float:"left"}}></img> Patrice Page<br></br><span>19 Aug 2020</span><img src="11.png" style={{borderRadius:"25px",float:"right",marginTop:"-20px",padding:"10px"}}></img></div><br></br><br></br>
 <div class="side_div"><img src="8.png" style={{borderRadius:"15px",float:"left"}}></img> DerekDiamon<br></br><span>21 Aug 2020</span><img src="11.png" style={{borderRadius:"25px",float:"right",marginTop:"-20px",padding:"10px"}}></img></div><br></br><br></br>
 </div>
 </td>
        <td colspan="4">
         <table cellSpacing="0" cellPadding="0" border="0" width="100%">
           <tr style={{backgroundColor:" rgb(243, 243, 243)",}}>
             <td colspan="5"><span style={{float:"left",fontWeight:"bold"}}>Patient Information</span>
             <span style={{float:"right"}}>Last update:10:25AM, Today</span></td>
           </tr>
           <tr class="tr1">
             <td class="div2">
             <img src="4.png" width="100" height="100"></img></td>
             <td> <span style={{fontWeight:"bold",fontSize:"20px"}}>Sara Smith</span><br></br>
             <table>
               <tr>
                 <td style={{fontSize:"13px"}}>
                   <span style={{padding:"8px"}}>Phone:</span><br></br>
                 <span style={{padding:"8px"}}>Email:</span> <br></br>
                 <span style={{padding:"8px"}}>Gender:</span><br></br>
                 <span style={{padding:"8px"}}>Age:</span></td>
                 <td style={{fontSize:"13px",fontWeight:"bold"}}>
                 <span style={{padding:"8px"}}>302-857-9685</span><br></br>
                 <span style={{padding:"8px"}}>sarasmith@gmail.com</span><br></br>
                 <span style={{padding:"8px"}}>Female</span><br></br>
                 <span style={{padding:"8px"}}>45</span><br></br>
                 </td>
               </tr>
             </table>
              
             </td>

           <td class="div2"> 
           <br></br>
           <table>
             <tr>
               <td style={{fontSize:"13px"}}>
               <span style={{padding:"8px"}}>Surgery Type:</span><br></br>
               <span style={{padding:"8px"}}>Surgery Date:</span><br></br>
               <span style={{padding:"8px"}}>Height(cm):</span><br></br>
               <span style={{padding:"8px"}}>Weight(lb):</span><br></br>
               <span style={{padding:"8px"}}>BMI:</span><br></br>
               </td>
               <td style={{fontSize:"13px",fontWeight:"bold"}}>
               <span style={{padding:"8px"}}>Rotator Cuff Repair</span><br></br>
              <span style={{padding:"8px"}}>10 Aug 2020</span><br></br>
             <span style={{padding:"8px"}}>120cm</span><br></br>
              <span style={{padding:"8px"}}>50</span><br></br>
             <span style={{padding:"8px"}}>45</span><br></br>
               </td>
             </tr>
           </table>
             </td>

             <td class="div2"> 
             <br></br>
             <table>
               <tr>
                 <td style={{fontSize:"13px"}}>
                 <span style={{padding:"8px"}}>Anesthesiologist:</span><br></br>
                 <span style={{padding:"8px"}}>Anesthesiologiest Phone:</span><br></br>
                 <span style={{padding:"8px"}}>Anesthesiologiest Email:</span><br></br>
                 </td>
                 <td style={{fontSize:"13px",fontWeight:"bold"}}>
                 <span style={{padding:"8px"}}>Dr. Christina Hardaway</span><br></br>
              <span style={{padding:"8px"}}>301-896-8745</span><br></br>
             <span style={{padding:"8px"}}>christina@h3a.com</span><br></br>
                 </td>
               </tr>
             </table>
           
             </td>

             <td class="div2" style={{fontSize:"13px"}}>
               <span>Surgery Clearance</span><br></br>
               <img src="3.png" width="70" height="70" style={{borderRadius:"15px"}}></img>
             </td>
           
           </tr>
      
         </table>
        </td>
        
      </tr>

     <tr>
     <td style={{paddingLeft:"20px"}}>
          <table border="0" width="100%">
            <tr>
              <td>
                <Grid container direction="row">
                <span>
              <Button variant="outlined" color="primary" style={{height:"50px"}}>
                List of prior<br></br>
                Surgeries
              </Button>
              </span>
              <span>
              <Button variant="outlined" color="primary" style={{height:"50px"}}>
                <span  style={{padding:"8px"}}>List of Medical<br></br> Diagnosis</span>
              </Button>
              </span>
              <span>
              <Button variant="outlined" color="primary" style={{height:"50px"}}>
               List of <br></br>Medications
              </Button>
              </span>
              <span>
              <Button variant="outlined" color="primary" style={{height:"50px"}}>
                Airway<br></br>
                Evaluation
              </Button>
              </span>
              <span>
              <Button variant="outlined" color="primary" style={{height:"50px"}}>
                Anesthesia Clearance and <br></br>
                Recommendation
              </Button>
              </span>
                </Grid>
              
              </td>
            </tr>
            <tr >
              <td >
                <div class="td_x">
                <div class="div_3">First Time Surgery</div>
                <div class="div_4">No</div>
                </div>
               
              </td>
            </tr>
            <tr >
              <td>
                <div class="td_x">
                <div class="div_3">Family History of Surgical Complications?</div>
                <div class="div_4">Yes</div>
                </div>
              </td>
            </tr>

            <tr >
              <td>
                <div class="td_x">
                <div class="div_3">First Time Surgery</div>
                <div class="div_4">No</div>
                </div>
              </td>
            </tr>

            <tr >
              <td >
                <div class="td_x">
                <div class="div_3">If Yes,please provide more details</div>
                <div class="div_4">Lorem ipsum dolor sit amet,consectetur adipiscing elit.<br></br>
                Vestibulum placerat ex ut commodo mollis proin sapien mauris<br></br>
                Porttitor eget augue vitae, vehicula scelerisque eros.<br></br></div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                Previous surgeries
              </td>
            </tr>
            <tr>
              <td>
                <table width="100%" cellSpacing="0">
                  <tr style={{backgroundColor:"rgb(207, 238, 238)"}}>
                    
                    <td class="tbl">Surgery Type</td>
                    <td class="tbl">Date</td>
                    <td class="tbl">Anesthesia Type</td>
                    <td class="tbl">Surgical complications</td>
                    <td class="tbl">Anesthetic Complications(nausea ,<br></br>vomiting,difficult intubation)</td>
                  
                   
                  </tr>

                  <tr style={{backgroundColor:"rgb(240, 239, 239)"}}>
                  
                    <td class="tbl2">Shoulder reconstruction</td>
                    <td class="tbl2">January 2008</td>
                    <td class="tbl2">General "Breathing Tube"</td>
                    <td class="tbl2">No</td>
                    <td class="tbl2">No</td>
                   
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
     </tr>
       
    </table>
    </>
  );
}

export default App;
