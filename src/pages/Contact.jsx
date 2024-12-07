import React, { useState } from 'react';
import './Contact.css'; // Optional CSS file for styling

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" })
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here 
        const url = "http://localhost:8080/api/contact";
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: formData.name, email: formData.email, message: formData.message
            })
        })
    }
    return (
        <div className="contact-page">
            <h1>Contact Us</h1>
            <p>We'd love to hear from you! Please reach out with any questions or feedback.</p>
            <form className="contact-form" method="POST" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" placeholder="Your Name" required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Your Email" required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" placeholder="Your Message" rows="5" required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}>
                    </textarea>
                </div>
                <button type="submit" className="btn">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;





