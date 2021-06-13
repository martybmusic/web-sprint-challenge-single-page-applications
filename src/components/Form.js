import React, { useState } from 'react';
import Response from './Response';

const Form = () => {
    const [ foodOrder, setFoodOrer ] = useState({
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

    const [submitOrder, setSubmitOrder] = useState(false);

    const changeHandler = event => {
        setFoodOrer({...foodOrder, [event.target.name]: event.target.value});
    }

    const submitHandler = event => {
        event.preventDefault();
        console.log(foodOrder);
        setSubmitOrder(true);
    }
    return (
        <div>
            <h3>Build Your Own Pizza</h3>
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
                        <input type='checkbox' name='pepperoni' id='pepperoni' value='pepperoni' onChange={changeHandler}/>
                        Pepperoni
                    </label>
                    <label htmlFor='sausage'>
                        <input type='checkbox' name='sausage' id='sausage' value='sausage' onChange={changeHandler}/>
                        Sausage
                    </label>
                    <label htmlFor='canadianBacon'>
                        <input type='checkbox' name='canadian-bacon' id='canadian-bacon' value='canadian-bacon' onChange={changeHandler}/>
                        Canadian Bacon
                    </label>
                    <label htmlFor='greenPepper'>
                        <input type='checkbox' name='greenPepper' id='greenPepper' value='greenPepper' onChange={changeHandler}/>
                        Green Pepper
                    </label>
                    <label htmlFor='dicedTomatoes'>
                        <input type='checkbox' name='dicedTomatoes' id='dicedTomatoes' value='dicedTomatoes' onChange={changeHandler}/>
                        Diced Tomatoes
                    </label>
                    <label htmlFor='roastedGarlic'>
                        <input type='checkbox' name='roastedGarlic' id='roastedGarlic' value='roastedGarlic' onChange={changeHandler}/>
                        Roasted Garlic
                    </label>
                    <label htmlFor='pineapple'>
                        <input type='checkbox' name='pineapple' id='pineapple' value='pineapple' onChange={changeHandler}/>
                        Pineapple
                    </label>
                    <hr/>
                    <label htmlFor='specialText'>
                        Special Instructions
                        <input type='textarea' name='specialText' id='specialText' placeholder='Anything else?' value={specialText} onChange={changeHandler}/>
                    </label>
                    <hr/>
                    <button id='button' type='submit'>PLACE ORDER</button>
                </div>
            </form>}
            {submitOrder && <Response />}

        </div>
    )
}

export default Form;