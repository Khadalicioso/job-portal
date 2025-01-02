import React from "react";
import { Link } from "react-router-dom";
import { FiCalendar, FiClock, FiDollarSign, FiMapPin } from "react-icons/fi";

const Card = ({ data }) => {
  // Destructure the data object to extract relevant job details
  const {
    companyName,
    companyLogo,
    jobTitle,
    minPrice,
    maxPrice,
    salaryType,
    jobLocation,
    employmentType,
    postingDate,
    description,
  } = data;

  return (
    <section className="card">
      {/* Link to the job details page */}
      <Link to={"/"} className="flex gap-4 flex-col sm:flex-row items-start">
        {/* Display the company logo */}
        <img src={companyLogo} alt="Company Logo" />
        <div>
          {/* Display the company name */}
          <h4 className="text-primary mb-1">{companyName}</h4>
          {/* Display the job title */}
          <h3 className="text-lg font-semibold mb-2">{jobTitle}</h3>
          <div className="text-primary/70 text-base flex flex-wrap gap-2 mb-2">
            {/* Display job location */}
            <span className="flex items-center gap-2">
              <FiMapPin />
              {jobLocation}
            </span>
            {/* Display employment type */}
            <span className="flex items-center gap-2">
              <FiClock />
              {employmentType}
            </span>
            {/* Display salary range */}
            <span className="flex items-center gap-2">
              <FiDollarSign />
              {minPrice}K-{maxPrice}K
            </span>
            {/* Display posting date */}
            <span className="flex items-center gap-2">
              <FiCalendar />
              {postingDate}
            </span>
          </div>
          {/* Display job description */}
          <p className="text-base text-primary/70">{description}</p>
        </div>
      </Link>
    </section>
  );
};

export default Card;

// 2:03:33 / 3:32:47
