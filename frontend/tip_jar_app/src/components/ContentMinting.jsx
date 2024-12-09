import React, { useState } from 'react';
import { mintContent } from '../utils/api';

const ContentMinting = () => {
    const [contentURI, setContentURI] = useState('');

    const handleMintContent = async () => {
        try {
            await mintContent(contentURI);
            alert('Content minted!');
        } catch (error) {
            console.error('Error minting content:', error);
            alert('Error minting content');
        }
    };

    return (
        <div>
            <h2>Mint Content</h2>
            <input
                type="text"
                value={contentURI}
                onChange={(e) => setContentURI(e.target.value)}
                placeholder="Content URI"
            />
            <button onClick={handleMintContent}>Mint Content</button>
        </div>
    );
};

export default ContentMinting;
