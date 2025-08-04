import React, { useState } from 'react';

function MailerLiteForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    const formData = new FormData();
    formData.append('fields[email]', email);
    formData.append('ml-submit', '1');
    
    try {
      // Fixed URL - remove the extra characters
      const response = await fetch('https://assets.mailerlite.com/jsonp/1214054/forms/139447399347127371/subscribe', {
        method: 'POST',
        body: formData,
        // Remove 'no-cors' to allow reading the response
      });
      
      // Check if the response was successful
      if (response.ok || response.type === 'opaque') {
        setStatus('Hvala vam! Uspješno ste se pretplatili na naš newsletter.');
        setEmail('');
      } else {
        setStatus('Greška pri prijavi. Molimo pokušajte ponovno.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('Greška pri prijavi. Molimo pokušajte ponovno.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="newsletter-form" onSubmit={handleSubmit}>
      <label htmlFor="email">Pretplatite se naš newsletter</label><br /><br></br>
      <input className=" px-2"
        type="email"
        id="email"
        name="fields[email]"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="Vaš email"
      />
      <button className="custom-btn" type="submit" disabled={isLoading}>
        {isLoading ? 'Submitting...' : 'Pretplatite se'}
      </button>
      {status && <p>{status}</p>}
    </form>
  );
}

export default MailerLiteForm;