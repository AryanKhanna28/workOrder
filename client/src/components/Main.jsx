import Buttons from "./Buttons"
import { useState } from "react";
import Table from "./Table";
import Try from "./Try";

const Body=()=>{

    const [category,setCategory]=useState("Overview"); 

    const handleCategory=(val)=>{
        setCategory(val);
    }


const data = [
    { Packages: 'Civil 1', rate: '567.80', total: '₹2,98,6792' },
    { Packages: 'Civil 2', rate: '567.80', total: '₹2,98,6792' },
    { Packages: 'Civil 3', rate: '567.80', total: '₹2.98,6792' },
    { Packages: 'Civil 4', rate: '567.80', total: '2,98,6792' },
    { Packages: 'Civil 5', rate: '567.80', total: '2,98,6792' },
    ];   

    return (
        <div className="body">

            <Buttons category={category} handleCategory={handleCategory}/>

            { category==="Overview"? 
            <div className="main-container">
                <Try/>
            </div>
            : <h3>Hello World</h3>
            }

        </div>
       
    )
}

export default Body;