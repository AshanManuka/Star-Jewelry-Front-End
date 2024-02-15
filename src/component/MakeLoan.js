import React, { useState } from 'react';
import './../styles/loanForm.css'


function MakeLoan() {

    const [customerNic, setCustomerNic] = useState("");
    const [customerName, setCustomerName] = useState("");
    const [customerAddress, setCustomerAddress] = useState("");
    const [customerTelephone, setCustomerTelephone] = useState("");
    const [loanNumber, setLoanNumber] = useState("");
    const [totalWeight, setTotalWeight] = useState("");
    const [goldWeight, setGoldWeight] = useState("");
    const [estimatedValue, setEstimatedValue] = useState("");
    const [marketValue, setMarketValue] = useState("");
    const [LoanAmount, setLoanAmount] = useState("");

    const changeCustomerNic = (nameInput) => {
        setCustomerNic(nameInput);
    }
    const changeCustomerName = (nameInput) => {
        setCustomerName(nameInput);
    }
    const changeCustomerAddress = (nameInput) => {
        setCustomerAddress(nameInput);
    }
    const changeCustomerTelephone = (nameInput) => {
        setCustomerTelephone(nameInput);
    }
    const changeLoanNumber = (nameInput) => {
        setLoanNumber(nameInput);
    }
    const changeTotalWeight = (nameInput) => {
        setTotalWeight(nameInput);
    }
    const changeGoldWeight = (nameInput) => {
        setGoldWeight(nameInput);
    }
    const changeEstimatedValue = (nameInput) => {
        setEstimatedValue(nameInput);
    }
    const changeMarketValue = (nameInput) => {
        setMarketValue(nameInput);
    }
    const changeLoanAmount = (nameInput) => {
        setLoanAmount(nameInput);
    }
    

    const confirmLoan = () => {
        alert("Confirm Loan");
    }

    return(
        <div id="mainDiv">
            <div className="subDiv">
                <h1>Gold Loan</h1><h2>Dashboard</h2>
            </div>

            <div id='userDetailCard'>
                <h3>Customer's Details,</h3>
                <input id='inputOne' className='textInput' placeholder=' Nic' onChange={changeCustomerNic}></input>
                <input id='inputTwo' className='textInput' placeholder=' Name' onChange={changeCustomerName}></input>
                <input id='inputThree' className='textInput' placeholder=' Address' onChange={changeCustomerAddress}></input>
                <input id='inputFour' className='textInput' placeholder=' Telephone' onChange={changeCustomerTelephone}></input>
            </div>

            <div id='itemDetailCard'>
                <h3>ණය අංකය:</h3>
                <input id='itemInputOne' className='textInputTwo' onChange={changeLoanNumber}></input>
                <h3>මුළු බර</h3>
                <input id='itemInputTwo' className='textInputTwo'  onChange={changeTotalWeight}></input>
                <h3>මුළු රන් බර</h3>
                <input id='itemInputThree' className='textInputTwo' onChange={changeGoldWeight}></input>
                <h3>තක්සේරු වටිනාකම</h3>
                <input id='itemInputFour' className='textInputTwo' onChange={changeEstimatedValue}></input>
                <h3>වෙළෙදපොල වටිනාකම</h3>
                <input id='itemInputFive' className='textInputTwo' onChange={changeMarketValue}></input>
                <h3>ණය මුදල</h3>
                <input id='itemInputSix' className='textInputTwo' onChange={changeLoanAmount}></input>
            </div>

            <button id='confirmBtn' onClick={confirmLoan}>Confirm Loan</button>




        </div>
    );

}
export default MakeLoan;