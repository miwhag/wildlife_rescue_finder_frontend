import React, { Component } from 'react'
import Axios from 'axios'; 
import KangarooImg from'../../Images/kangaroo.jpg'
import '../../Styles/ContactPage.css'

export default class ContactPage extends Component{

    state =  {
        name: "", 
        email: "", 
        message: "", 
        disabled: false, 
        emailSent: null,
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            disabled: true
        });

        Axios.post('http://localhost:3030/emails', this.state)
            .then(res => {
                if(res.data.success) {
                    this.setState({
                        disabled: false,
                        emailSent: true
                    });
                } else {
                    this.setState({
                        disabled: false,
                        emailSent: false
                    });
                }
            })
            .catch(err => {
                this.setState({
                    disabled: false,
                    emailSent: false
                });
            })

        
                this.setState({name: "", 
                email: "", 
                message: "", 
                disabled: false, 
                emailSent: null,})
        
    }

    render(){

        return (
            <div id="ContactMe-form-container">
                <img id="ContactPage-kangaroo-img" src={KangarooImg} alt="kangaroo"/>
                <div id="ContactPage-form-container">
                    <form onSubmit={this.handleSubmit} className="ContactMe-form" >
                    <img id="contact-image"src="https://i.ibb.co/hWrzkrM/contact.png"alt="contact-img"/>
                        <input
                        required
                        name="name"
                        type="text"
                        placeholder="Full Name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        >
                        </input>
    
                        <input
                        required
                        name="email"
                        type="email"
                        placeholder="Your Email Address"
                        value={this.state.email}
                        onChange={this.handleChange}
                        >
                            
                        </input>
    
                        <textarea
                            required
                            rows="2" 
                            cols="20" 
                            name="message" 
                            type ="text"
                            wrap="hard" 
                            placeholder="Write Your Message Here"
                            value={this.state.message}
                            onChange={this.handleChange}
                        >
                            
                        </textarea>
    
                        <button 
                            type="submit" 
                            value="Send"
                            disabled={this.state.disabled}
                            > 
                                Send
                        </button>
    
                    {this.state.emailSent === true && <p id="ContactMe-form-success-message"> Success! Email Sent </p>}
                    {this.state.emailSent === false && <p id="ContactMe-form-failure-message">Error: Try Again</p>}
    
    
                    </form>
                </div>
                
            </div>
        )


    }
    
}

