import React from 'react';

const Currency = () => {

    const handleOnChangeCurrency = () => {

    };


    return (
        <div>
            <label for="corrency_option">Currency </label>
            <select id="currency_option" onChange={handleOnChangeCurrency}>
                <option value="dollar" name="dollar">$ Dollar</option>
                <option value="pound" name="pound">£ Pound</option>
                <option value="euro" name="euro">€ Euro</option>
                <option value="ruppee" name="ruppee">₹ Ruppee</option>
            
            </select>
        </div>
    );

};

export default Currency;