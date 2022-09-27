import React, { useState } from 'react'

const Contact = () => {

  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      }
    })

  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(`My name is ${data.fullName}, my Mobile No is ${data.mobile}, and Email is ${data.email}, and here is what I want to sey ${data.msg}`);
  }

  return (
    <>
      <div className='my-5'>
        <h1 className='text-center'> Contact us </h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>

              <div className="mb-3">
                <label className="form-label">FullName</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={inputEvent}
                  placeholder="Enter your Name" 
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone No</label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={inputEvent}
                  placeholder="mobile number" 
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input 
                  type="email" 
                  className="form-control" 
                  id="exampleFormControlInput1" 
                  name="email" 
                  value={data.email} 
                  onChange={inputEvent} 
                  placeholder="name@example.com" 
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea 
                  className="form-control" 
                  id="exampleFormControlTextarea1" 
                  rows="3" 
                  name="msg" 
                  value={setData.msg} 
                  onChange={inputEvent}>
                </textarea>
              </div>

              <div className="col-12">
                <button 
                  type="submit" 
                  className="btn btn-outline-primary mb-3">Submit
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;