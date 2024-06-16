import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'; // Updated import statement for emailjs
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';

const Contact = () => {
    const formRef = useRef(null);
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [isLoading, setIsLoading] = useState(false);
    const { alert, showAlert } = useAlert(); // Destructure alert and showAlert from useAlert

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        emailjs
            .send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                form,
                process.env.REACT_APP_EMAILJS_USER_ID
            )
            .then(() => {
                setIsLoading(false);
                showAlert({ text: 'Message sent successfully.', type: 'success' });
                setForm({ name: '', email: '', message: '' });
            })
            .catch((error) => {
                setIsLoading(false);
                console.error('Error sending email:', error);
                showAlert({ text: 'Could not send message.', type: 'danger' });
            });
    };

    return (
        <section className="relative flex lg:flex-row flex-col max-container">
            {alert.show && <Alert {...alert} />} 

            <div className="flex-1 min-w-[50%] flex flex-col">
                <h1 className="head-text">Get in Touch</h1>
                <form className="w-full flex flex-col gap-7 mt-14" onSubmit={handleSubmit}>
                    <label className="text-black-500 font-semibold">
                        Name
                        <input
                            type="text"
                            name="name"
                            className="input"
                            placeholder="Your Name"
                            required
                            value={form.name}
                            onChange={handleChange}
                        />
                    </label>

                    <label className="text-black-500 font-semibold">
                        E-Mail
                        <input
                            type="email"
                            name="email"
                            className="input"
                            placeholder="example@email.com"
                            required
                            value={form.email}
                            onChange={handleChange}
                        />
                    </label>

                    <label className="text-black-500 font-semibold">
                        Your Message
                        <textarea
                            name="message"
                            rows="4"
                            className="textarea"
                            placeholder="Questions/Wishes/Suggestions?"
                            required
                            value={form.message}
                            onChange={handleChange}
                        />
                    </label>

                    <button type="submit" className="btn" disabled={isLoading}>
                        {isLoading ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
