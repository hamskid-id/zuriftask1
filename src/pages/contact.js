import React from 'react';
import { Footer } from '../components/footer';
export const Contact = ()=>{
    let name ="LawalH";
    const handleSubmit=(e)=>{
        e.preventDefaut();
    }
    return(
        <div className='contact-container contact_family'>
            <form className="contact-form m-auto" onSubmit={handleSubmit}>
                <p className="fw-bold fs-4">Contact Me</p>
                <p className="mobileContactSubHeader innertext ">Hi there, contact me to ask me about anything you have in mind</p>
                <div>
                    <div className="row mb-2">
                        <div className="col-md-6 mb-3">
                            <div className="d-flex flex-column">
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" id="first_name" name="firstName" className="p-1 innertext rounded" placeholder="Enter your first name"required/>
                            </div>                          
                        </div>
                        <div className="col-md-6 mb-3">
                            <div className="d-flex flex-column">
                                <label htmlFor="LastName">Last Name</label>
                                <input type="text" id="last_name" name="LastName" className="p-1 innertext rounded" placeholder="Enter your last name" required/>  
                            </div> 
                        </div>
                    </div>
                    <div className="d-flex flex-column mb-3">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" className="p-1 innertext rounded" placeholder="yourname@gmail.com" required/>
                    </div>
                    <div className="d-flex flex-column mb-3">
                        <label htmlFor="text-area">Message</label>
                        <textarea type="text" id="message" name="text-area" className="p-1 innertext rounded" placeholder="Send me a message and i'll reply to you as soon as possible..." required/>
                        <h6 className="text-danger message_prompt">Please enter a message</h6>
                    </div>
                    <div className="mb-3">
                        <input type="checkbox" className="me-1 rounded" required/>
                        <span className='innertext' >you agree to providing your data to {name} who may contact you</span>
                    </div>
                    <button className="btn btn-md btn-primary w-100"  id="btn__submit">Send Message</button>
                </div>
            </form>
            <Footer/>
        </div>
    )
}