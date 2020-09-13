import React, { useState } from "react";
import {connect} from 'react-redux'
import {UP} from './actions/actions'
const Counter = (props) =>{

   return (
     <div className="counter">
       <h2>Counter</h2>
       <div>
         <button onClick={props.Decrement}>-</button>
         <span className="count">{props.c}</span>
         <button onClick={props.Increment}>+</button>
       </div>
     </div>
   );
 }
const mapDispatchToProps=(dispatch)=>{
    return {
Increment:()=>dispatch(UP()),
Decrement:()=>dispatch({type:"Decrement"})
    }
}
const mapStateToProps=(state)=>{
    return{
        c:state.count,
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);