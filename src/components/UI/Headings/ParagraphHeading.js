import React from 'react'

function ParagraphHeading(props) {
    return (
        <h2 className={`text-sm text-teal-300 border-t-4 border-teal-200 border-dotted pt-2 ${props.className}`}>{props.children}</h2>
    )
}

export default ParagraphHeading
