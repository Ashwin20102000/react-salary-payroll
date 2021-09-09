import React, { useState } from 'react';
import SalaryStructure from './SalaryStructure';
import AnnualEarnings from './AnnualEarnings';
export default function Payslip() {
  const [toggle, setToggle] = useState(true);
  const togglebtn = toggle ? 'Tax Worksheet →' : '← Payslip';
  return (
    <div className="payslip container p-4 d-flex flex-column">
      <div className="filter d-flex mb-4">
        <div className="icon">
          <i class="fas text-info fa-filter" />
        </div>
        &nbsp;
        <h5>Month</h5> &nbsp;
        <input className=" border-0" type="month" name="" id="" />
      </div>
      <div className="payslip-header d-flex justify-content-around">
        <div className="company-wrappe1r d-flex">
          <img
            width="35%"
            src="https://www.tutorialchip.com/wp-content/uploads/2012/08/Technology-Lab.jpg"
            alt="company-logo"
          />
          <div className="company-details">
            <h5>Technology Labs</h5>
            <h6>
              15 SunCity Gloria,
              <br />
              HSR Layout,
              <br />
              Banglore{' '}
            </h6>
          </div>
        </div>
        <div className="payslip-details">
          <button onClick={() => setToggle(!toggle)} className="btn btn-light">
            {togglebtn}
          </button>
          <h5>Payslip</h5>
          <h6>For the month of December</h6>
        </div>
      </div>

      <div className="employee container">
        <hr style={{ height: '3px', color: '#0dcaf0' }} />
        <h4 className="text-info">EMPLOYEE PAY SUMMARY</h4>
        <div className="employee-pay container d-flex justify-content-between">
          <div className="user-details ">
            <div className="d-flex justify-content-between">
              <div className="name mb-1">
                <strong>Employee Name </strong>
              </div>{' '}
              &nbsp;
              <div className="amount mb-1">: Shakthi</div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="name mb-1">
                <strong>Designation </strong>
              </div>
              <div className="amount mb-1"> &nbsp;: Full Stack</div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="name mb-1">
                <strong>Net Pay </strong>
              </div>
              <div className="amount mb-1">: 7,20,000</div>
            </div>
          </div>
          <div className="pay-details text-dark m-3">
            <p>Employee Net Pay</p>
            <h2>₹ 52,00,000</h2>
            <p>Paid Date 31 LOP: 0</p>
          </div>
        </div>
      </div>

      {toggle ? <SalaryStructure hideStat={false} /> : <AnnualEarnings />}
    </div>
  );
}
