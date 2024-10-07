import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage(null);
    setErrorMessage(null);

    try {
      const response = await axios.post('http://localhost:5000/send', formData); // Use port 5000 for API
      if (response.data) {
        setSuccessMessage(response.data.message);
        setFormData({ name: '', email: '', message: '' });
        alert('Thank you! Your message has been sent.');
      } else {
        throw new Error('No response data');
      }
    } catch (error: any) {
      console.error('Error sending message:', error);
      if (error.response) {
        setErrorMessage(error.response.data.message || 'Failed to send message. Please try again.');
      } else {
        setErrorMessage('An error occurred. Please try again later.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="container mx-auto p-4 pt-6 md:p-6 lg:p-6 xl:p-6">
      <h2 className="text-6xl font-bold text-center mb-4">Contact me.</h2>
      <div className="flex justify-center">
        <div className="max-w-md bg-base-500 rounded-lg p-4 md:p-6 lg:p-6 xl:p-6">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="input input-bordered"
                required
              />
            </div>
            <div className="flex justify-center">
              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send'}
              </button>
            </div>
          </form>

          {successMessage && <p className="text-green-500 text-center mt-4">{successMessage}</p>}
          {errorMessage && <p className="text-red-500 text-center mt-4">{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default Contact;