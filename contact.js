
import React, { Component } from "react";

class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '', 
            email: '', 
            phone: '',
            message: ''
        }

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePhone = this.handleChangePhone.bind(this);
        this.handleChangeMessage = this.handleChangeMessage.bind(this);
    }

     handleChangeName = (event) => {
        //log all change in the console(inspection)
        
        console.log('Name:'+this.state.name);

         this.setState({name: event.target.value})
     }

     handleChangeEmail = (event) => {
        //log all change in the console(inspection)
        
        console.log('Email:'+this.state.email);

         this.setState({email: event.target.value})
     }

     handleChangePhone = (event) => {
        //log all change in the console(inspection)
        
        console.log('Phone:'+this.state.phone);

         this.setState({phone: event.target.value})
     }

     handleChangeMessage = (event) => {
        //log all change in the console(inspection)
        
        console.log('Message:'+this.state.message);

         this.setState({message: event.target.value})
     }

    render() {
        return (


            <section className="page-section" id="contact">
                <div className="container">
                    {/* Contact Section Heading*/}
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
                    {/* Icon Divider*/}
                    <div className="divider-custom">
                        <div className="divider-custom-line" />
                        <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                        <div className="divider-custom-line" />
                    </div>
                    {/* Contact Section Form*/}
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-xl-7">
                            {/* * * * * * * * * * * * * * * **/}
                            {/* * * SB Forms Contact Form * **/}
                            {/* * * * * * * * * * * * * * * **/}
                            {/* This form is pre-integrated with SB Forms.*/}
                            {/* To make this form functional, sign up at*/}
                            {/* https://startbootstrap.com/solution/contact-forms*/}
                            {/* to get an API token!*/}
                            <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                                {/* Name input*/}
                                <div className="form-floating mb-3">
                                    <input value={this.state.name} onChange={this.handleChangeName} className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                                    <label htmlFor="name">Full name</label>
                                    <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                                </div>
                                {/* Email address input*/}
                                <div className="form-floating mb-3">
                                    <input value={this.state.email} onChange={this.handleChangeEmail} className="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                                    <label htmlFor="email">Email address</label>
                                    <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                    <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                                </div>
                                {/* Phone number input*/}
                                <div className="form-floating mb-3">
                                    <input value={this.state.phone} onChange={this.handleChangePhone} className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                                    <label htmlFor="phone">Phone number</label>
                                    <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                                </div>
                                {/* Message input*/}
                                <div className="form-floating mb-3">
                                    <textarea value={this.state.message} onChange={this.handleChangeMessage} className="form-control" id="message" type="text" placeholder="Enter your message here..." style={{ height: '10rem' }} data-sb-validations="required" defaultValue={""} />
                                    <label htmlFor="message">Message</label>
                                    <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                                </div>
                                {/* Submit success message*/}
                                {/**/}
                                {/* This is what your users will see when the form*/}
                                {/* has successfully submitted*/}
                                <div className="d-none" id="submitSuccessMessage">
                                    <div className="text-center mb-3">
                                        <div className="fw-bolder">Form submission successful!</div>
                                        To activate this form, sign up at
                                        <br />
                                        <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                    </div>
                                </div>
                                {/* Submit error message*/}
                                {/**/}
                                {/* This is what your users will see when there is*/}
                                {/* an error submitting the form*/}
                                <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                                {/* Submit Button*/}
                                <button className="btn btn-primary btn-xl disabled" id="submitButton" type="submit">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contact;



