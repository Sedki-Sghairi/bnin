import React from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'

export default function Book() {
    return (
        <div className='container'>
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active> Book a Table</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <h1 className="text-primary text-center mb-3">  Please fill out this Form</h1>
            <div className="row">
            <form>
            <div class="form-row">
              <label for="name" class="col-md-2 col-form-label">Name</label>
              <div class="col-md-10">
              <input type="text" id="name" name="firstname" placeholder="Full Name" class="form-control"/>
              </div>
            </div>
            <div class="form-row">
                <label for="petname" class="col-md-2 col-form-label">Pet Name</label>
                <div class="col-md-5">
                <input type="text" id="petname" name="petname" placeholder="Pet Name" class="form-control"/>
                </div>
                <div class="col-md-5">
                    <select name="pet" id="pet" class="form-control">
                        <option>Cat</option>
                        <option>Dog</option>
                        <option>Bird</option>
                    </select>
                </div>
            </div>
            <div class="form-row">
                <label for="telnum" class="col-12 col-md-2 col-form-label">tel.</label>
                <div class="col-5 col-md-3">
                  <input type="tel" name="areacode" id="areacode" class="form-control" placeholder="Area Code"/>
                </div>
                <div class="col-7 col-md-7">
                  <input type="tel" name="telnum" id="telnum" class="form-control" placeholder="Tel. Number"/>
                </div>
            </div>
            <div class="form-row">
                <label for="emailid" class="col-md-2 col-form-label">Email</label>
                <div class="col-md-10">
                    <input type="email" id="emailid" name="emailid" placeholder="Email" class="form-control"/>
                </div>
            </div>
            <div class="form-row">
                <label for="address" class="col-md-2 col-form-label">Address</label>
                <div class="col-md-10">
                    <input type="text" id="address" name="address" placeholder="Address" class="form-control"/>
                </div>
            </div>
            <div class="form-row">
              <label for="date" class="col-12 col-md-2 col-form-label">Date</label>
              <div class="col-5 col-md-5">
                <input type="date" name="date" id="date" class="form-control"/>
              </div>
              <div class="col-5 col-md-5">
                <input type="time" name="time" id="time" class="form-control"/>
              </div>
            </div>
            <div class="form-row">
                <label for="feedback" class="col-md-2 col-form-label">Optional</label>

                <div class="col-md-10">
                  <textarea class="form-control" id="feedback" name="feedback" rows="10" placeholder="Medications/Allergies/Specific instructions"></textarea>
                </div>
            </div>
            <div class="form-row">
                <div class="col-md-10 offset-md-2">
                    <button type="submit" class="btn btn-primary">
                        Submit Booking
                    </button>
                </div>
            </div>
        </form>               
            </div>
        </div>
    )
}
