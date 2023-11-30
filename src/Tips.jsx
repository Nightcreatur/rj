import React, { useState } from 'react'
import Options from './Options';

const Tips = () => {


    const [cost, setCost] = useState('');

    const [pOne, setPOne] = useState(0);
    const [pTwo, setTwo] = useState(0);

    const tip = Math.round(cost / 200 * (pOne + pTwo));

    function reset() {
        setCost('')
        setPOne(0)
        setTwo(0)
    }


    return (
        <div>
            <h2>How much was the bill ?</h2>
            <input type='number' value={cost} onChange={(e) => setCost(Number(e.target.value))} ></input>
            <h2>How did you like the service ?</h2>
            <Options p={pOne} onSelect={setPOne} />
            <h2>How did your friend like the service ?</h2>
            <Options p={pTwo} onSelect={setTwo} />
            {cost > 0 && <div><h3>Your pay {`${cost} + ${tip} tip`} </h3>
                <button onClick={reset}>Reset</button></div>
            }
        </div>
    )
}

export default Tips