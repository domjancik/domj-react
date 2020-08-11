import React from 'react'

function FixMe({children}) {
    const handleClicked = () => {
        console.log(children)
    }

    return (
        <span className="text-xs text-red-300 absolute" onClick={handleClicked}>FIX ME</span>
    )
}

export default FixMe
