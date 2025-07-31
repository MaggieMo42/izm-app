import React, { useState } from 'react';

function MailerLiteForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('fields[email]', email);
    formData.append('ml-submit', '1');

    try {
      const response = await fetch('https://assets.mailerlite.com/jsonp/1214054/forms/139447399347127371/subscribe" data-code="', {
        method: 'POST',
        body: formData,
        mode: 'no-cors'  
      });

      setStatus('Success! Check your email to confirm subscription.');
      setEmail('');
    } catch (error) {
      setStatus('Error submitting form. Please try again.');
    }
  };

  return (
    <form className="newsletter-form" onSubmit={handleSubmit}>
      <label htmlFor="email">Pretplatite se naš newsletter</label><br />
      <input
        type="email"
        id="email"
        name="fields[email]"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="Vaš email"
      />
      <button className="custom-btn" type="submit">Pretplatite se</button>
      {status && <p>{status}</p>}
    </form>
  );
}

export default MailerLiteForm;
