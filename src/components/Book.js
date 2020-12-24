import React, { Component , useState} from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem, Jumbotron } from 'reactstrap';


const initialState ={
    firstname:'',
    lastname:'',
    telnum :'',
    emailid:'',
    table:1,
    date:'',
    time:'',
    feedback:'',
    focused: {
        firstname:false,
        lastname:false
    },
    error:''

}

export default class Book extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstname:'',
            lastname:'',
            telnum :'',
            emailid:'',
            table:1,
            date:'',
            time:'',
            areacode:'',
            feedback:'',
            focused: {
                firstname:false,
                lastname:false
            },
            error:''

        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
    }
    handleSubmit(e){
        e.preventDefault()
        alert('thank you'+ JSON.stringify(this.state.firstname)+
        '\n'+'Your Table is Booked for '+ JSON.stringify(this.state.date)+
        'at '+  JSON.stringify(this.state.time))
        this.setState(initialState)
    }
    handleChange(e){
        const target = e.target
        const value =  target.type === 'checked'? target.checked : target.value
        const name = target.name
        this.setState({
            [name]:value
        })
    }
    handleBlur = (field) => () => {
        this.setState({
            focused: {...this.state.focused, [field]:true}
        })
    }
    validate(firstame , lastname){
        const errors = {
            firstname:'',
            lastname:''
        }
        if(this.state.focused.firstname && this.state.firstname===''){
            errors.firstname = 'please enter you name'
          
        } 
        if(this.state.focused.lastname && this.state.lastname===''){
            errors.lastname = 'please enter you last name'
          
        } 
        return errors
    }
    render(){
        const errors = this.validate(this.state.firstame, this.state.lastname)

    return (
        <div className='container'>
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active> Book a Table</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <h2 className="text-dark text-center mb-3">Book a Table</h2>
            <div className="row" id='book'>
                    <form onSubmit={this.handleSubmit}>
                    <div className="form-row">
                        <label htmlFor="name" className="col-md-2 col-form-label">Name</label>
                    <div className="col-md-10">
                        <input type="text" id="name" name="firstname"
                            required
                            placeholder="First Name" className="form-control"
                            value = {this.state.firstname}
                            onChange={this.handleChange}
                            onBlur={this.handleBlur('firstname')}
                         />
                    </div>
                    <p className="col-12 text-danger text-center">{errors.firstname}</p>
                    <p className="col-12 text-danger text-center">{this.state.error.firstame}</p>
                    </div>
                            
                    <div className="form-row">
                        <label htmlFor="lastname" className="col-md-2 col-form-label">Last Name</label>
                        <div className="col-md-10">
                        <input type="text" id="lastname" name="lastname" placeholder="last Name"
                            value = {this.state.lastname}
                         className="form-control" onChange={this.handleChange}
                             onBlur={this.handleBlur('lastname')}
                         />
                        </div>
                        <p className="col-12 text-danger text-center">{errors.lastname}</p>
                    </div>
                    <div className="form-row">
                        <label htmlFor="table" className="offset-sm-2 col-md-5 col-form-label">Table For:</label>
                        <div className="col col-md">
                        <select name="table" id="table" className="form-control"
                        value = {this.state.table}
                        onChange={this.handleChange}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                        </select>
                        </div>
                    </div>
                    <div className="form-row">
                            <label htmlFor="telnum" className="col-12 col-md-2 col-form-label">tel.</label>
                        <div className="col-12 col-md-10">
                            <input type="tel" name="telnum" id="telnum" className="form-control"
                            value = {this.state.telnum}
                            onChange={this.handleChange} placeholder="Tel. Number"/>
                        </div>
                    </div>
                    <div className="form-row">
                        <label htmlFor="emailid" className="col-md-2 col-form-label">Email</label>
                        <div className="col-md-10">
                            <input type="email" id="emailid" name="emailid" placeholder="Email"
                            value = {this.state.emailid} 
                            onChange={this.handleChange} className="form-control"/>
                        </div>
                    </div>
                    <div className="form-row">
                        <label htmlFor="date" className="col-12 col-md-2 col-form-label">Date</label>
                    <div className="col-5 col-md-5">
                        <input type="date" name="date" id="date" className="form-control"
                            required
                            value = {this.state.date}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="col-5 col-md-5">
                        <input type="time" name="time" id="time" className="form-control"
                            required
                            value = {this.state.time}
                            onChange={this.handleChange}
                        />
                    </div>
                    </div>
                    <div className="form-row">
                        <label htmlFor="feedback" className="col-md-2 col-form-label">Special Info.</label>

                    <div className="col-md-10">
                  <textarea className="form-control" id="feedback" name="feedback" rows="6"
                  value = {this.state.feedback}
                  onChange={this.handleChange} placeholder="Special Occasion"></textarea>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-md-10 offset-md-2">
                        <button type="submit" className="btn btn-primary">
                            Submit Booking
                        </button>
                    </div>
                </div>
            </form>   
        </div>
    </div>
    )
}
}
