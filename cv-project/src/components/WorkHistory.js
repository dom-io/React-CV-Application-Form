import React, { useState } from 'react';

function WorkHistory(props) {
  const [workInfo, setInfo] = useState({
    companyName: '',
    dateFrom: '',
    dateTo: '',
    position: '',
    mainTasks: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...workInfo, [name]: value });
  };

  return (
    <>
      <input
        type="text"
        name="companyName"
        value={workInfo.companyName}
        onChange={handleChange}
        placeholder="Company"
        id="company-name-input"
      />

      <input
        type="text"
        name="dateEmployed"
        value={workInfo.date}
        onChange={handleChange}
        placeholder="Employed mm/yyyy - mm/yyyy"
        id="date-input"
      />

      <input
        type="text"
        name="position"
        value={workInfo.position}
        onChange={handleChange}
        placeholder="Position"
        id="position-input"
      />

      <input
        type="text"
        name="mainTasks"
        value={workInfo.mainTasks}
        onChange={handleChange}
        placeholder="Description"
        id="main-tasks-input"
      />
    </>
  );
}

export default WorkHistory;
