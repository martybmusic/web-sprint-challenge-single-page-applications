import React, { useEffect, useState } from 'react';
import Response from './Response';
import * as yup from 'yup';
import axios from 'axios';

const Form = () => {
    const [ foodOrder, setFoodOrder ] = useState({
        name: '',
        size: '',
        pepperoni: false,
        sausage: false,
        canadianBacon: false,
        greenPepper: false,
        dicedTomatoes: false,
        roastedGarlic: false,
        pineapple: false,
        specialText: ''
    })

    const { name, size, pepperoni, sausage, canadianBacon, greenPepper, dicedTomatoes, roastedGarlic, pineapple, specialText } = foodOrder;
    
    const [disabled, setDisabled] = useState(true)

    const [submitOrder, setSubmitOrder] = useState(false)

    const changeHandler = event => {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        setFoodOrder({...foodOrder, [event.target.name]: value});
    }

    const schema = yup.object().shape({
        name: yup
            .string()
            .required('Name required')
            .min(2, 'name must be at least 2 characters'),
        size: yup.string(),
        pepperoni: yup.string(),
        sausage: yup.string(),
        canadianBacon: yup.string(),
        greenPepper: yup.string(),
        dicedTomatoes: yup.string(),
        roastedGarlic: yup.string(),
        pineapple: yup.string(),
        specialText: yup.string(),
    })

    const submitHandler = event => {
        event.preventDefault();
        console.log(foodOrder);
        setSubmitOrder(true);
    }

    useEffect(() => {
        schema.isValid(foodOrder).then(valid => setDisabled(!valid))
    }, [foodOrder])

    return (
        <div>
            <h3>Build Your Own Pizza</h3>
            {disabled && <p>* Name must be at least 2 characters</p>}
            { !submitOrder && <form id='pizza-form' onSubmit={submitHandler}>
                <label htmlFor='name'>
                    Name
                    <input type='text' name='name' id='name-input' value={name} onChange={changeHandler} />
                    </label>
                <label htmlFor='size'>
                    Choice of Size (required)
                    <select name='size' id='size-dropdown' value={size} onChange={changeHandler}>
                        <option value ='small'>Personal Pizza (8")</option>
                        <option value ='med'>Regular (12")</option>
                        <option value ='large'>Large (14")</option>
                    </select>
                </label>
                <hr/>
                <div id='toppings-container'>
                    <p>Add Toppings (pick up to 5)</p>
                    <label htmlFor='pepperoni'>
                        <input checked={pepperoni} type='checkbox' name='pepperoni' id='pepperoni' value='pepperoni' onChange={changeHandler}/>
                        Pepperoni
                    </label>
                    <label htmlFor='sausage'>
                        <input checked={sausage} type='checkbox' name='sausage' id='sausage' value='sausage' onChange={changeHandler}/>
                        Sausage
                    </label>
                    <label htmlFor='canadianBacon'>
                        <input checked={canadianBacon} type='checkbox' name='canadian-bacon' id='canadian-bacon' value='canadian-bacon' onChange={changeHandler}/>
                        Canadian Bacon
                    </label>
                    <label htmlFor='greenPepper'>
                        <input checked={greenPepper} type='checkbox' name='greenPepper' id='greenPepper' value='greenPepper' onChange={changeHandler}/>
                        Green Pepper
                    </label>
                    <label htmlFor='dicedTomatoes'>
                        <input checked={dicedTomatoes} type='checkbox' name='dicedTomatoes' id='dicedTomatoes' value='dicedTomatoes' onChange={changeHandler}/>
                        Diced Tomatoes
                    </label>
                    <label htmlFor='roastedGarlic'>
                        <input checked={roastedGarlic} type='checkbox' name='roastedGarlic' id='roastedGarlic' value='roastedGarlic' onChange={changeHandler}/>
                        Roasted Garlic
                    </label>
                    <label htmlFor='pineapple'>
                        <input checked={pineapple} type='checkbox' name='pineapple' id='pineapple' value='pineapple' onChange={changeHandler}/>
                        Pineapple
                    </label>
                    <hr/>
                    <label htmlFor='specialText'>
                        Special Instructions
                        <input type='textarea' name='specialText' id='special-text' placeholder='Anything else?' value={specialText} onChange={changeHandler}/>
                    </label>
                    <hr/>
                    <button id='order-button' type='submit' disabled={disabled}>PLACE ORDER</button>
                </div>
            </form>}
            {submitOrder && <Response foodOrder={foodOrder}/>}

        </div>
    )
}

export default Form;