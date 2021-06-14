import React from 'react';

const Response = props => {
const { foodOrder } = props;
    return (
        <div>
            <h3>Thank you{foodOrder.name}, your Pizza delivery is being prepared!</h3>
        </div>
    )
}

export default Response