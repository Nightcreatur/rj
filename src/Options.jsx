import React from 'react'

const Options = ({ p, onSelect }) => {
    return (
        <div> <select value={p} onChange={(e) => onSelect(Number(e.target.value))} name="" id="">
            <option value="10"  >It was good (10%)</option>
            <option value="20">Absolutely amazing (20%)</option>
            <option value="0">No so good (0)%</option>
        </select></div>
    )
}

export default Options