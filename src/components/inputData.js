import React from 'react'

export default function InputData(props) {
  const {inputData, setInputData} = props;
  const changeInputData = (e) => {
    const value = e.target.value;
    setInputData(value);
  }
  return (
    <div className="mb-3">
      <label htmlFor="response" className="form-label">Input Data</label>
      <textarea className="form-control" id="response" rows="3"
        value={JSON.stringify(inputData)}
        onChange={changeInputData}></textarea>
    </div>
  )
}
