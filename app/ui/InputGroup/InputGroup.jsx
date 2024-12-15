import React from 'react';

const InputGroup = ({ name, changeID, total, type, options }) => {
  const handleSelectChange = (e) => {
    changeID(e.target.value);
  };

  return (
    <div className="flex flex-col items-center">
      <label htmlFor={name} className="mb-2 text-lg font-semibold">
        {name}
      </label>
      <select
        id={name}
        className="p-2 border border-gray-300 rounded-md"
        onChange={handleSelectChange}
      >
        {type === "Location" ? (
          options.map((location) => (
            <option key={location.id} value={location.id}>
              {location.name}
            </option>
          ))
        ) : (
          [...Array(total).keys()].map((x) => (
            <option key={x + 1} value={x + 1}>
              {type} {x + 1}
            </option>
          ))
        )}
      </select>
    </div>
  );
};

export default InputGroup;