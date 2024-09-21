import React, { useState } from 'react';
import './AllServices.css';

const ServiceBlock = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`service-block ${isOpen ? 'open' : ''}`}>
      {/* Placeholder for translucent image */}
      <div className="service-image">
        <span>txt (Image)</span>
      </div>
      <div className="service-header" onClick={toggleDropdown}>
        <h3>{title}</h3>
        {/* Placeholder for dropdown icon */}
        <div className="dropdown-icon">
          <span>{isOpen ? 'txt (Icon Open)' : 'txt (Icon Closed)'}</span>
        </div>
      </div>

      {/* Description will toggle open/close */}
      {isOpen && <p className="service-description">{description}</p>}
    </div>
  );
};

const AllServices = () => {
  return (
    <div>
      <h1>All Services</h1>
      <p>Here are all the services we offer...</p>

      <div className="services-container">
        <ServiceBlock
          title="UI Designing"
          description="We design UIs from scratch catering towards your request."
        />
        <ServiceBlock
          title="Static Websites"
          description="We can create websites based on your ideas or your designs which could help put your business out there. This means we can create websites with minimal interaction, but add additional contact details which you could use to promote your Business and give yourself and your business a tactical advantage on competitors!"
        />
        <ServiceBlock
          title="E-Commerce Websites"
          description="We can develop and build a web or/and mobile application in which you can use to sell your business goods and items. This package deal contains around the clock management and continues cloud server maintenance and upkeep!"
        />

        <ServiceBlock title="Business websites" description="Description for service 4" />
        <ServiceBlock title="Service 5" description="Description for service 5" />
        <ServiceBlock title="Service 6" description="Description for service 6" />
      </div>
    </div>
  );
};

export default AllServices;
