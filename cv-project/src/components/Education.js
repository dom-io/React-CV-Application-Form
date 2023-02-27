import React, { useState } from 'react';

function Education(props) {
  const [eduInfo, setInfo] = useState({
    school: '',
    dateAttendedFrom: '',
    dateAttendedTo: '',
    degree: '',
    location: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...eduInfo, [name]: value });
  };

  return (
    <>
      <input
        type="text"
        name="school"
        value={eduInfo.school}
        onChange={handleChange}
        placeholder="School"
        id="school-input"
      />

      <input
        type="text"
        name="dateAttended"
        value={eduInfo.dateAttended}
        onChange={handleChange}
        placeholder="Date Attended mm/yyyy - mm/yyyy"
        id="edu-date-input"
      />

      <input
        type="text"
        name="degree"
        value={eduInfo.degree}
        onChange={handleChange}
        placeholder="Degree"
        id="degree-input"
      />

      <input
        type="text"
        name="location"
        value={eduInfo.location}
        onChange={handleChange}
        placeholder="School Location"
        id="location-input"
      />
    </>
  );
}

export default Education;
