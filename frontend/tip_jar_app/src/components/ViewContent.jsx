import React, { useState } from 'react';
import { viewContent } from '../utils/api';

const ViewContent = () => {
    const [contentId, setContentId] = useState('');
    const [viewedContent, setViewedContent] = useState('');

    const handleViewContent = async () => {
        try {
            const response = await viewContent(contentId);
            setViewedContent(response.data.uri);
        } catch (error) {
            console.error('Error viewing content:', error);
            alert('Error viewing content');
        }
    };

    return (
        <div>
            <h2>View Content</h2>
            <input
                type="text"
                value={contentId}
                onChange={(e) => setContentId(e.target.value)}
                placeholder="Content ID"
            />
            <button onClick={handleViewContent}>View Content</button>
            {viewedContent && <p>Content URI: {viewedContent}</p>}
        </div>
    );
};

export default ViewContent;
