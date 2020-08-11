import React from 'react'
import Pill from './Pill'

function Pills(props) {
    return props.pills.map(pill => <Pill>{pill}</Pill>)
}

export default Pills
