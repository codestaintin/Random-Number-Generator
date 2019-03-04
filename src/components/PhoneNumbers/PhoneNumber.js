import React from 'react';

const GeneratedNumbers = ({ phoneNumbers }) => (
  <div>
    { phoneNumbers.length > 1 ?
      <h3><b>Generated Phone Numbers</b></h3>
      :
      <span><i>No phone numbers at the moment</i></span>
    }
    <div>
      <ul className="generated-phone-numbers">
        {
          phoneNumbers && phoneNumbers.map(number => (
            <li key={number}>{number}</li>
          ))
        }
      </ul>
    </div>
  </div>
);

export default GeneratedNumbers;