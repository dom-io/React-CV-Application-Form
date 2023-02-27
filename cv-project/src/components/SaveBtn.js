import React from 'react';

function SavePage() {
  const pageLayout = () => {
    const btns = document.getElementsByTagName('button');
    Array.from(btns, (btn) => (btn.style.display = 'none'));

    const inputs = document.getElementsByTagName('input');
    Array.from(inputs, (input) => {
      input.style.backgroundColor = 'white';
      input.style.border = 'white';
    });
  };

  return (
    <>
      <button className="save-btn" onClick={pageLayout}>
        Save
      </button>
    </>
  );
}

export default SavePage;
