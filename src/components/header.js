import React from 'react'

export default function Header(props) {
  const {headerData, setHeaderData} = props;
  const changeHeader = (e) => {
    const value = e.target.value;
    setHeaderData(value);
  }
  return (
    <div className="mb-3">
      <label htmlFor="response" className="form-label">Header Data</label>
      <textarea
        className="form-control" id="response" rows="5"
        value={JSON.stringify(headerData)}
        onChange={changeHeader}></textarea>
    </div>
  )
}
