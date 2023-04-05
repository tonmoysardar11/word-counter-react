import React from 'react'

const Alert = (props) => {
  return (
    <div style={{ height: '8vh' }}>
      {props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
        <strong>{props.alert.message}</strong>
      </div>}
    </div>
  )
}

export default Alert
