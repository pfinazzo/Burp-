import React from 'react';

const Login = (props) => {
  return (
    <div>
<input type="checkbox" checked={props.checked} onChange={props.loggedIn} />
</div>
  )
}

export default Login