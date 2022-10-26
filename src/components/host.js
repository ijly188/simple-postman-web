import React from 'react'

const Host = (props) => {
  const { host, setHost } = props;
  const changeHost = (e) => {
    const value = e.target.value;
    setHost(value);
  }
  return (
    <div className="mb-3 row">
      <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Host</label>
      <div className="col-sm-10">
        <input type="text" className="form-control" id="staticEmail" value={host} onChange={changeHost} />
      </div>
    </div>
  )
}

export default Host;