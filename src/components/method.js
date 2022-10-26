import React from 'react'

export default function methods(props) {
  const { method, setMethod } = props;
  const clickMethod = (e) => {
    const value = e.target.value;
    setMethod(value);
  }
  return (
    <div className="mb-3 row">
      <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Methods</label>
      <div className="col-sm-10 row ms-1">
        <div className="form-check col-2">
          <input className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="GET" value="GET"
            onClick={clickMethod}
            defaultChecked={method === "GET" ? true : false}
            />
          <label className="form-check-label" htmlFor="GET">
            GET
          </label>
        </div>
        <div className="form-check col-2">
          <input className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="POST" value="POST"
            onClick={clickMethod}
            defaultChecked={method === "POST" ? true : false}
            />
          <label className="form-check-label" htmlFor="POST">
            POST
          </label>
        </div>
        <div className="form-check col-2">
          <input className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="PUT" value="PUT"
            onClick={clickMethod}
            defaultChecked={method === "PUT" ? true : false}
            />
          <label className="form-check-label" htmlFor="PUT">
            PUT
          </label>
        </div>
        <div className="form-check col-2">
          <input className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="PATCH" value="PATCH"
            onClick={clickMethod}
            defaultChecked={method === "PATCH" ? true : false}
            />
          <label className="form-check-label" htmlFor="PATCH">
            PATCH
          </label>
        </div>
        <div className="form-check col-2">
          <input className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="DELETE" value="DELETE"
            onClick={clickMethod}
            defaultChecked={method === "DELETE" ? true : false}
            />
          <label className="form-check-label" htmlFor="DELETE">
            DELETE
          </label>
        </div>
        <div className="form-check col-2">
          <input className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="OPTIONS" value="OPTIONS"
            onClick={clickMethod}
            defaultChecked={method === "OPTIONS" ? true : false}
            />
          <label className="form-check-label" htmlFor="OPTIONS">
            OPTIONS
          </label>
        </div>
      </div>
    </div>
  )
}
