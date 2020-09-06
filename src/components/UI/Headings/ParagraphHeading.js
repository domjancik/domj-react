import React from 'react'

function ParagraphHeading(props) {
    return (
        <h2 className={`text-center text-sm text-teal-300 pt-2 ${props.className}`}>{props.children}</h2>
    )
}

export default ParagraphHeading
