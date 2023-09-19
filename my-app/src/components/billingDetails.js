import React from 'react';

export default function BillingDetails() {
  return (
    <>
      <div className="col-md-6 mb-5 mb-md-0">
        <h2 className="h3 mb-3 text-black">Billing Details</h2>
        <div className="p-3 p-lg-5 border">
          <div className="form-group">
            <label htmlFor="c_country" className="text-black">
              Country <span className="text-danger">*</span>
            </label>
            <select id="c_country" className="form-control">
              <option value="1">Select a country</option>
              <option value="2">Bangladesh</option>
              {/* Add more country options here */}
            </select>
          </div>
          <div className="form-group row">
            <div className="col-md-6">
              <label htmlFor="c_fname" className="text-black">
                First Name <span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" id="c_fname" name="c_fname" />
            </div>
            <div className="col-md-6">
              <label htmlFor="c_lname" className="text-black">
                Last Name <span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" id="c_lname" name="c_lname" />
            </div>
          </div>

          {/* Rest of the billing details form fields */}
        </div>
      </div>
    </>
  );
}
