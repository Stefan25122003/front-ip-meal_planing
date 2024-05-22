import React, { useState } from 'react';
import AIModal from './AIModal';

function AIPart() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleModal() {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <button onClick={toggleModal}>Open Modal</button>
            {isOpen && <AIModal onClose={toggleModal} />}
        </div>
    );
}

export default AIPart;