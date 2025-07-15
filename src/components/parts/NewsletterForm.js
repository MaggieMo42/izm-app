const NewsletterForm = () => {
  return (
    <form 
      className="newsletter-form"
      action="https://assets.mailerlite.com/subscription-form/1214054" 
      method="POST">
      <div className="mb-3">
        <p class="creamtext">Naš newsletter vas obavještava o novim radionicama i pogodnostima.</p>
        <input 
          type="email" 
          name="fields[email]" 
          className="form-control"
          placeholder="Vaš email" 
          required
        />
      </div>
      <button type="submit" className="btn btn-success custom-btn w-100">
        Pretplati se
      </button>
    </form>
  );
};
export default NewsletterForm; 