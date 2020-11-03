import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import firebase from './firebase'

const messaging = firebase.messaging()

messaging.requestPermission().then((token) => {
  return messaging.getToken()
}).then((token) => {
  console.log('token: ' + token)
}).catch((error) => {
  console.error(error)
})

ReactDOM.render(
  <React.Fragment>
    <App messaging={messaging} />
  </React.Fragment>,
  document.getElementById('root')
)