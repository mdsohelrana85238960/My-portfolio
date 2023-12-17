


import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Log form data for debugging
    console.log('Form Data:', new FormData(form.current));

    emailjs.sendForm('service_u9nmxq8', 'template_8phqn19', form.current, 'Y9HCNeowpEN8yV5y3_-ey')
      .then((result) => {
          console.log('Email Sent:', result.text);
      }, (error) => {
          console.error('Error Sending Email:', error.text);
      });
  };

  return (
    <div className='max-w-7xl mx-auto'>
      <h1></h1>
      <form ref={form} onSubmit={sendEmail}>
      <label className="label">
            <span className="label-text text-white">Name</span>
          </label>
      <input className='rounded-sm w-[400px] p-2 text-black' type="text" name="from_name" /> <br />

      <label className="label">
            <span className="label-text text-white">Email</span>
          </label>
      <input className='rounded-sm w-[400px] p-2 text-black' type="email" name="from_email" /> <br />

      <label className="label">
            <span className="label-text text-white">Message</span>
          </label>
      <textarea className='rounded-sm w-[400px]  text-black' name="message" /> <br />
      <input className='my-4 btn w-[400px] text-xl font-bold  btn-outline btn-error' type="submit" value="Send" />
      </form>
    </div>
  );
};
