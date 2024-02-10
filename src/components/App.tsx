import React,{useState} from 'react';
import classes from './App.module.scss';
import { Link,Outlet } from 'react-router-dom';



export const App = () => {
    const [count,setCount]=useState<number>(0);
    const increment = () => setCount(perv=>perv+1)
    
    // if( __PLATFORM__==='desktop') {
    //     return (
    //         <div>Desktop</div>
    //     );
    // }
    // if( __PLATFORM__==='mobile') {
    //     return (
    //         <div>MOBILE</div>
    //     );
    // }
    
    // if(__ENV__==='development') {
    //     //devTools
    // }

    return(
        <div>
            <h1>platform={ __PLATFORM__}</h1>
            <div></div>
            <Link to ={'/about'}>about</Link>
            <br/>
            <Link to ={'/shop'}>shop</Link>
            <h1 className={classes.value}>{count}</h1>
            <button className={classes.button} onClick={increment}><span>
                asfafadfdaf
                </span></button>
                <Outlet/>
        </div>
    );
    
};

