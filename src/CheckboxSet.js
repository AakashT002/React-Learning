import React from 'react';

const CheckboxSet = (props) => {
  return (
    <div>
      {props.setOptions.map(option => {
        return (
          <label
            key={option}
            style={{textTransform: 'capitalize'}}>
            {option}
            <input
              type="checkbox"
              value={option}
              name={props.setName} />
          </label>
        )
      })}
    </div>
  );
}

export default CheckboxSet;