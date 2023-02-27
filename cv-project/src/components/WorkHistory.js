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
        type="date"
        name="datefrom"
        value={workInfo.dateFrom}
        onChange={handleChange}
        placeholder="From"
        id="date-from-input"
      />

      <input
        type="date"
        name="dateTo"
        value={workInfo.dateTo}
        onChange={handleChange}
        placeholder="To"
        id="date-to-input"
      />

      <input
        type="text"
        name="position"
        value={workInfo.position}
        onChange={handleChange}
        placeholder="Position"
        id="position-input"
      />

      <div className="main-tasks-container">
        <input
          type="text"
          name="mainTasks"
          value={workInfo.mainTasks}
          onChange={handleChange}
          placeholder="Main Tasks"
          id="main-tasks-input"
        />
        <input
          type="text"
          name="mainTasks"
          value={workInfo.mainTasks}
          onChange={handleChange}
          placeholder="Main Tasks"
          id="main-tasks-input"
        />
        <input
          type="text"
          name="mainTasks"
          value={workInfo.mainTasks}
          onChange={handleChange}
          placeholder="Main Tasks"
          id="main-tasks-input"
        />
      </div>
    </>
  );
}

export default WorkHistory;
