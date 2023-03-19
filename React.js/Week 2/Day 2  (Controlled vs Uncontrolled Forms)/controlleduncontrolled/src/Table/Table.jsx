import React, { useEffect, useState } from 'react'
import './Table.css'
// import { fetchDataFromLocalStorage } from '../utils/localstorage';


export default function Table() {

    const [nameData, setNameData] = useState("");
    const [emailData, setEmailData] = useState("");
    const [collegeData, setCollegeData] = useState("");
    const [rollNumberData, setRollNumberData] = useState("");

    
    let data = localStorage.getItem('students');
    
    useEffect(()=>{ 
    if(data === null){
        setNameData("");
        setEmailData("");
        setCollegeData("");
        setRollNumberData("");
    }else{
        const arrayData = JSON.parse(data);
        const names = arrayData.map(item => item.name)
        const email = arrayData.map(item => item.email)
        const college = arrayData.map(item => item.college)
        const rollNumber = arrayData.map(item => item.rollNumber)
        setNameData(names.slice(-1)[0]);
        setEmailData(email.slice(-1)[0]);
        setCollegeData(college.slice(-1)[0]);
        setRollNumberData(rollNumber.slice(-1)[0]);
    }
    }, );

    return (
        <div>
            <div className='title'>
                <h1>name</h1>
            </div>
            <div className='table'>
                <table border="1">
                    <thead> 
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>College</th>
                            <th>RollNumber</th>
                        </tr>
                    </thead> 
                    <tbody>
                        <tr>
                            <td>{nameData}</td>
                            <td>{emailData}</td>
                            <td>{collegeData}</td>
                            <td>{rollNumberData}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
