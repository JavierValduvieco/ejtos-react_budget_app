import React, {useContext} from 'react';
import { AppContext } from '../context/AppContext';


const Currency = () => {

    const {currency,dispatch} = useContext(AppContext);
    const handleOnChangeCurrency = (event) => {
        const newCurrency = event.target.value;
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency,
        });
    };


    return (
        <div className="alert alert-success">
            <span>Currency ({currency})</span>
            <select id="currency_option" onChange={handleOnChangeCurrency} value={currency}>
                <option value="">Select Currency</option>
                <option value="$" >$ Dollar</option>
                <option value="£" >£ Pound</option>
                <option value="€" >€ Euro</option>
                <option value="₹" >₹ Ruppee</option>
            </select>
        </div>
    );

};

export default Currency;