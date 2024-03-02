import React, { useState } from 'react';
import './../styles/dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


function Dashboard() {

    const navigate = useNavigate();
    const [branchName, setBranchName] = useState("");

    const navigateFromDashboard = (pageNumber) => {
        if(pageNumber == 'one'){
            navigate('/makeLoan');
        }

    }



    const getSignOut = () =>{
        // make logics
        navigate('/');
    }

    return(
        <div id="mainDiv">
            <div className="mainSubDiv">
                <h2>Enjoy Your</h2><h1>Dashboard</h1>

                <h3 className='simpleTxt'>Aralaganvila {branchName}</h3>
                <button id='logOutBtn' onClick={() => getSignOut()}><FontAwesomeIcon icon={faArrowRightFromBracket} /></button>
            </div>

            <div id='subDivv'>
                <div class="grid-containerr">
                    <div class="grid-itemm">
                        <button className='dashboardBtn' id='btnOne' onClick={() => navigateFromDashboard('one')}><h1>නව බාණ්ඩයක් උකස් තැබීම</h1></button>
                    </div>
                    <div class="grid-itemm">
                        <button className='dashboardBtn' id='btnOne' onClick={() => navigateFromDashboard('two')}><h1>බාණ්ඩයක් බේරා ගැනීමට</h1></button>
                    </div>
                    <div class="grid-itemm">
                        <button className='dashboardBtn' id='btnOne' onClick={() => navigateFromDashboard('three')}><h1>පොලිය ගෙවීම</h1></button>
                    </div>
                    <div class="grid-itemm">
                    <button className='dashboardBtn' id='btnOne' onClick={() => navigateFromDashboard('four')}><h1>ණය අලුත් කිරීම</h1></button>
                    </div>
                    <div class="grid-itemm">
                        <button className='dashboardBtn' id='btnOne' onClick={() => navigateFromDashboard('five')}><h1>සියලු රන් ණය විස්තර</h1></button>
                    </div>
                    <div class="grid-itemm">
                    <button className='dashboardBtn' id='btnOne' onClick={() => navigateFromDashboard('six')}><h1>සියලු පාරිබෝගික විස්තර</h1></button>
                    </div>
                </div>
            </div>




        </div>
    );

}
export default Dashboard;