import React from 'react';

const Form = () => {
    const submitHandler = event => {
        event.preventDefault();
        console.log(event);
    };

    const onChangeHandler = event => {
        console.log(event);
    }
    return (
        <div>
            <h3>Build Your Own Pizza</h3>
            <form id='pizza-form' onSubmit={submitHandler}>
                <label htmlFor='size'>
                    Choice of Size (required)
                    <select name='size' id='size-select' onChange={onChangeHandler}>
                        <option value ='small'>Personal Pizza (8")</option>
                        <option value ='med'>Regular (12")</option>
                        <option value ='large'>Large (14")</option>
                    </select>
                </label>
                <p>Add Toppings (pick up to 5)</p>
                <label htmlFor='pepperoni'>
                    <input type='checkbox' name='pepperoni' id='pepperoni' value='pepperoni' onChange={onChangeHandler}/>
                    Pepperoni
                </label>
                <label htmlFor='sausage'>
                    <input type='checkbox' name='sausage' id='sausage' value='sausage' onChange={onChangeHandler}/>
                    Sausage
                </label>
                <label htmlFor='canadian-bacon'>
                    <input type='checkbox' name='canadian-bacon' id='canadian-bacon' value='canadian-bacon' onChange={onChangeHandler}/>
                    Canadian Bacon
                </label>
                <label htmlFor='green-pepper'>
                    <input type='checkbox' name='green-pepper' id='green-pepper' value='green-pepper' onChange={onChangeHandler}/>
                    Green Pepper
                </label>
                <label htmlFor='diced-tomatoes'>
                    <input type='checkbox' name='diced-tomatoes' id='diced-tomatoes' value='diced-tomatoes' onChange={onChangeHandler}/>
                    Diced Tomatoes
                </label>
                <label htmlFor='roasted-garlic'>
                    <input type='checkbox' name='roasted-garlic' id='roasted-garlic' value='roasted-garlic' onChange={onChangeHandler}/>
                    Roasted Garlic
                </label>
                <label htmlFor='pineapple'>
                    <input type='checkbox' name='pineapple' id='pineapple' value='pineapple' onChange={onChangeHandler}/>
                    Pineapple
                </label>
                <label htmlFor='special-text'>
                    Special Instructions
                    <input type='textarea' name='special-text' if='special-text' placeholder="Anything else you'd like to add?" onChange={onChangeHandler}/>
                </label>
            </form>


        </div>
    )
}

export default Form;