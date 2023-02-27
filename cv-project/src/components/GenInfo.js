import React, { useState } from 'react';

function GeneralInfo(props) {
  const [info, setInfo] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const formatPhone = (e) => {
    let phoneNum = e.target.value.split('');
    phoneNum.splice(0, 0, '(');
    phoneNum.splice(4, 0, ') ');
    phoneNum.splice(8, 0, '-');
    const newPhone = phoneNum.join('');
    setInfo({ ...info, phone: newPhone });
  };

  return (
    <>
      <input
        type="text"
        name="name"
        value={info.name}
        onChange={handleChange}
        placeholder="Name"
        id="name-input"
      />

      <input
        type="text"
        name="phone"
        value={info.phone}
        onChange={handleChange}
        onBlur={formatPhone}
        placeholder="Phone"
        id="phone-input"
      />

      <input
        type="text"
        name="email"
        value={info.email}
        onChange={handleChange}
        placeholder="Email"
        id="email-input"
      />
    </>
  );
}

export default GeneralInfo;
