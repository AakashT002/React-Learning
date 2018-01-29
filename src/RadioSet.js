import React from 'react';

const RadioSet = (props) => {
    return (
        <div>
            {props.setOptions.map(option => {
                return (
                    <label
                        key={option}
                        style={{ textTransform: 'capitalize' }}>
                        {option}
                        <input
                            type="radio"
                            value={option}
                            name={props.setName} />
                    </label>
                )
            })}
        </div>
    );
}

export default RadioSet;