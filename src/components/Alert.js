import React from 'react'

export default function Alert(props) {
    const capitalizeMe = (type)=>{
      return type.charAt(0).toUpperCase() + type.substr(1,).toLowerCase();
    }

    return (
      <div style={{height: '50px'}}>
        {props.alert &&
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
          <strong>{capitalizeMe(props.alert.type)}:</strong> {props.alert.msg}
        </div>}
      </div>
    )
}
