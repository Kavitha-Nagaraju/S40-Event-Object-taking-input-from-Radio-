import React, { useRef } from 'react'
import { useLocation } from 'react-router-dom';

function SignupForm() {
    let firstNameRef=useRef();
    let lastNameRef = useRef();
    let stateSelectRef=useRef();
    let msgParaRef = useRef();
    let femaleRBRef = useRef();
    let maleRBRef = useRef();
    let marriedRBRef = useRef();
    let unmarriedRBRef = useRef();
    let selectGender;
    let salutation;
    let marritalStatus;
    let locObj =useLocation();
  return (
    <div>
        <form>
            <div>
                <label>First Name</label>
                <input ref={firstNameRef}></input>
            </div>
            <div>
                <label>Last Name</label>
                <input ref={lastNameRef}></input>
            </div>
            <div>
                <label>State</label>
                <select ref={stateSelectRef}>
                    <option>AndhraPradhesh</option>
                    <option>Telangana</option>
                    <option>Maharastra</option>
                    <option>Taamilnadu</option>
                </select>
            </div>
            <div>
                <label>Gender</label>
                <input type="radio"  name="gender" ref={femaleRBRef} onChange={()=>{
                    
                    if(femaleRBRef.current.checked==true)
                    {
                        selectGender="Female";
                    }
                }}></input>
                <label className='gender'>Female</label>
                <input type="radio" name="gender" ref={maleRBRef} onChange={()=>{
                    if(maleRBRef.current.checked==true){
                        selectGender="Male";
                    }
                }}></input>
                <label className='gender'>Male</label>
            </div>
            <div>
                <label>Marrital status</label>
                <input type="radio" name="ms" ref={marriedRBRef} onChange={(eventObj)=>{
                    if(eventObj.target.checked==true){
                          marritalStatus="Married";
                    }

                }}></input>
                <label className='gender'>Married</label>
                <input type="radio" name="ms" ref={unmarriedRBRef} onChange={(eventObj)=>{
                    if(eventObj.target.checked==true){
                        marritalStatus="UnMarried";
                    }
                }}></input>
                <label className='gender'>Unmarried</label>
            </div>
            <div>
                <label>Email</label>
                <input></input>
            </div>
            <div>
                <label>Password</label>
                <input></input>
            </div>
            <div>
                <h2>Message:{locObj && locObj.state &&locObj.state.msg?locObj.state.msg:"Hi! Welcome"}</h2>
            </div>
            <div>
            <button type="button" onClick={()=>{
                 let firstName=firstNameRef.current.value;
                 let lastName = lastNameRef.current.value;
                 if(selectGender =='Male'){
                    salutation="Mr";
                 }
                 else{
                    if(marritalStatus=="Married"){
                        salutation='Mrs';
                    }
                     else{
                        salutation="miss";
                     }
                 }
            msgParaRef.current.innerHTML=`${salutation} ${firstName} ${lastName} from ${stateSelectRef.current.value} Your account has Created Successfully`;
            }}>Button</button>
            </div>
            <div>
                <p ref={msgParaRef}></p>
            </div>
        </form>
      
    </div>
  )
}

export default SignupForm
