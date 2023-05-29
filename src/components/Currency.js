import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { currency, currencyName, dispatch  } = useContext(AppContext);
   
    const setCurrency = (value) => {
        dispatch ({
            type: 'CHG_CURRENCY',
            payload: value,
        });
    }
    return (
        <div className='alert alert-success greenish_1 whitish_1' style={{background: "#7bdb7b"}}>
            <label>Currency</label>
           <select style={{background: "#7bdb7b"}} defaultValue={currency} className="custom-alert-success" id="currencySelect"
            onChange={(event) => setCurrency(event.target.value)}>
                <option value="$" name="dollar">$ Dollar</option>
                <option value="£" name="pound" >£ Pound</option>
                <option value="€" name="euro" >€ Euro</option>
                <option value="₹" name="ruppee" >₹ Ruppee</option>
                  </select>
        </div>
    );
};
export default Currency;