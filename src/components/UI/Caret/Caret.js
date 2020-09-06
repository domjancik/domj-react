import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Caret() {
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            setVisible(visible => !visible)
        }, 500);
        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <span>{visible ? '_' : ' '}</span>
    )
}
