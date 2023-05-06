import React from 'react'
import Button from 'react-bootstrap/Button';

const Contact = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <div className="container mt-4" style={{backgroundColor:'#0d6efd'}}>
      <div className="mb-2" style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        <Button variant="info" size="lg">
         Contact
        </Button>{' '}
      </div>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name:
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email:
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message:
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn btn-info" size="lg" type="submit" >
          {formStatus}
        </button>
      </form>
    </div>
  )
}
export default Contact