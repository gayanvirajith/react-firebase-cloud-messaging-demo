import React, { useEffect, useState } from 'react'

import './app.css'

export default function App({ messaging }) {

    const [cloudMessage, setCloudMessage] = useState({})

    messaging.onMessage((payload) => {
        console.log('Message received. ' + JSON.stringify(payload))
        setCloudMessage({ ...cloudMessage, payload })
    })

    return (
        <div>
            Firebase cloud messaging
            <pre>
                {Object.keys(cloudMessage).length > 0 && JSON.stringify(cloudMessage)}
            </pre>
            {Object.keys(cloudMessage).length === 0 && (<p>{'Waiting for a message...'}</p>)}
        </div>
    )
}

