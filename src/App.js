import React, { useState } from 'react';
import './style.css';
import AnnualEarnings from './AnnualEarnings';
import SalaryStructure from './SalaryStructure';
// import Earnings from '/Earnings';
export default function App() {
  const [pagination, setPagination] = useState(0);
  return (
    <div>
      <div className="pagination p-4">
        <button onClick={() => setPagination(1)} className="btn btn-dark">
          Salary Structure
        </button>
        {/* <button
          onClick={() => setPagination(2)}
          className="btn btn-dark border mx-3"
        >
          Payslips
        </button> */}
        <button
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target=".bd-example-modal-lg"
        >
          Payslip
        </button>

        <div
          class="modal fade bd-example-modal-lg"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg">
            <div class="modal-content">...</div>
          </div>
        </div>

        <button
          onClick={() => setPagination(3)}
          className="btn btn-dark border"
        >
          Annual Earnings
        </button>
      </div>
      {pagination == 1 && <SalaryStructure />}
      {pagination == 3 && <AnnualEarnings />}
    </div>
  );
}
