import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhoneAlt, faUserCircle, faHome, faCity, faGlobeAmericas, faMailBulk } from '@fortawesome/free-solid-svg-icons'
import './style.scss'

class Contact extends React.Component {
  render() {
    return (
      <div className="contactInformation">
        <h2 className="subtitle">Contact information</h2>

        <p className="inputTitle">E-mail</p>
        <div className="inputWrapper">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          <input type="email" name="email" className="input" placeholder="Enter your email..." />
        </div>

        <p className="inputTitle">Phone</p>
        <div className="inputWrapper">
          <FontAwesomeIcon icon={faPhoneAlt} className="icon" />
          <input type="number" className="input" placeholder="Enter your phone..." />
        </div>

        <h2 className="subtitle">Shipping address</h2>
        <p className="inputTitle">Full name</p>
        <div className="inputWrapper">
          <FontAwesomeIcon icon={faUserCircle} className="icon" />
          <input type="text" className="input" placeholder="Your name..." />
        </div>

        <p className="inputTitle">Address</p>
        <div className="inputWrapper">
          <FontAwesomeIcon icon={faHome} className="icon" />
          <input type="text" className="input" placeholder="Your address..." />
        </div>

        <p className="inputTitle">City</p>
        <div className="inputWrapper">
          <FontAwesomeIcon icon={faCity} className="icon" />
          <input type="text" className="input" placeholder="Your city..." />
        </div>

        <p className="inputTitle">Country</p>
        <div className="inputWrapper">
          <FontAwesomeIcon icon={faGlobeAmericas} className="icon" />
          <input type="text" className="input" placeholder="Your country..." />
        </div>

        <p className="inputTitle">Postal code</p>
        <div className="inputWrapper">
          <FontAwesomeIcon icon={faMailBulk} className="icon" />
          <input type="number" className="input" placeholder="Your postal code..." />
        </div>
        <input type="checkbox" className="checkbox" />
        <span>Save this information for next time</span>
        <button className="button">Continue</button>
      </div>
    );
  }
}

export default Contact;