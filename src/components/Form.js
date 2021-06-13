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
                <p>Add Toppings (pick up to 6)</p>
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
            </form>


        </div>
    )
}

export default Form;