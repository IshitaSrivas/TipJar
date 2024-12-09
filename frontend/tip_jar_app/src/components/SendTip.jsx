import React, { useState } from 'react';
import { sendTip } from '../utils/api';

const SendTip = () => {
    const [creatorAddress, setCreatorAddress] = useState('');
    const [amount, setAmount] = useState('');
    const [message, setMessage] = useState('');

    const handleSendTip = async () => {
        try {
            await sendTip(creatorAddress, amount, message);
            alert('Tip sent!');
        } catch (error) {
            console.error('Error sending tip:', error);
            alert('Error sending tip');
        }
    };

    return (
        <div>
            <h2>Send Tip</h2>
            <input
                type="text"
                value={creatorAddress}
                onChange={(e) => setCreatorAddress(e.target.value)}
                placeholder="Creator Address"
            />
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Amount (ETH)"
            />
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
            />
            <button onClick={handleSendTip}>Send Tip</button>
        </div>
    );
};

export default SendTip;
