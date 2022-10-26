import React from 'react'

export default function Response() {
  return (
    <div className="mb-3">
      <label htmlFor="response" className="form-label">Response</label>
      <textarea className="form-control" id="response" rows="3"></textarea>
    </div>
  )
}
