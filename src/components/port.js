import React from 'react'

export default function Port(props) {
  const { port, setPort } = props;
  const changeUrl = (e) => {
    const value = e.target.value;
    setPort(value);
  }
  return (
    <div className="mb-3 row">
      <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Port</label>
      <div className="col-sm-10">
        <input type="text" className="form-control" id="staticEmail" value={port} onChange={changeUrl} />
      </div>
    </div>
  )
}
