import React, { useState } from 'react';
import './../styles/dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';


function Dashboard() {

    const [branchName, setBranchName] = useState("");

    const navigateFromDashboard = (value) => {
       if(value === 'ten'){
        alert(value);
       }
        

    }

    return(
        <div id="mainDiv">
            <div className="subDiv">
                <h2>Enjoy Your</h2><h1>Dashboard</h1>

                <h3 className='simpleTxt'>Aralaganvila {branchName}</h3>
                <button id='logOutBtn'><FontAwesomeIcon icon={faArrowRightFromBracket} /></button>
            </div>

            <div id='subDivv'>
                <div class="grid-containerr">
                    <div class="grid-itemm">
                        <button className='dashboardBtn' id='btnOne' onClick={navigateFromDashboard('one')}><h1>New Loan</h1></button>
                    </div>
                    <div class="grid-itemm">
                        <button className='dashboardBtn' id='btnOne' onClick={navigateFromDashboard('two')}><h1>Make a Payment</h1></button>
                    </div>
                    <div class="grid-itemm">
                        <button className='dashboardBtn' id='btnOne' onClick={navigateFromDashboard('three')}><h1>Payment of Interest</h1></button>
                    </div>
                    <div class="grid-itemm">
                    <button className='dashboardBtn' id='btnOne' onClick={navigateFromDashboard('four')}><h1>Renewal of loan</h1></button>
                    </div>
                    <div class="grid-itemm">
                        <button className='dashboardBtn' id='btnOne' onClick={navigateFromDashboard('five')}><h1>Loan Details</h1></button>
                    </div>
                    <div class="grid-itemm">
                    <button className='dashboardBtn' id='btnOne' onClick={navigateFromDashboard('six')}><h1>Customer Details</h1></button>
                    </div>
                </div>
            </div>




        </div>
    );

}
export default Dashboard;