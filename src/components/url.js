import React from 'react'

const URL = (props) => {
  const { url, setUrl } = props;
  const changeUrl = (e) => {
    const value = e.target.value;
    setUrl(value);
  }
  return (
    <div className="mb-3 row">
      <label htmlFor="staticEmail" className="col-sm-2 col-form-label">URL</label>
      <div className="col-sm-10">
        <input type="text" className="form-control" id="staticEmail" value={url} onChange={changeUrl} />
      </div>
    </div>
  )
}

export default URL;