1. Priority Queue System
const requestQueue = [];

/**
 * Adds a new prayer request to the priority queue
 * Priority order: Health (1) > Money (2) > Love (3)
 */
function addRequest() {
    const type = document.getElementById('request-type').value;
    const text = document.getElementById('request-text').value.trim();
    
    if (!text) {
        alert('Please describe your request.');
        return;
    }
    
    try {
        let priority;
        switch(type) {
            case 'saude': priority = 1; break;
            case 'dinheiro': priority = 2; break;
            case 'amor': priority = 3; break;
            default: priority = 3;
        }
        
        requestQueue.push({ type, text, priority });
        requestQueue.sort((a, b) => a.priority - b.priority);
        
        updateQueueDisplay();
        document.getElementById('request-text').value = '';
    } catch (error) {
        console.error('Error adding request:', error);
        alert('An error occurred while adding your request.');
    }
}

/**
 * Updates the visual display of the request queue
 */
function updateQueueDisplay() {
    const queueElement = document.getElementById('requests-queue');
    
    try {
        queueElement.innerHTML = '';
        
        if (requestQueue.length === 0) {
            queueElement.innerHTML = '<p>No requests in queue.</p>';
            return;
        }
        
        const ul = document.createElement('ul');
        requestQueue.forEach(request => {
            const li = document.createElement('li');
            li.style.marginBottom = '8px';
            
            let typeText;
            switch(request.type) {
                case 'saude': typeText = 'Health'; break;
                case 'dinheiro': typeText = 'Money'; break;
                case 'amor': typeText = 'Love'; break;
                default: typeText = 'General';
            }
            
            li.innerHTML = `
                <strong>${typeText}</strong> (Priority ${request.priority}): 
                ${request.text}
            `;
            ul.appendChild(li);
        });
        
        queueElement.appendChild(ul);
    } catch (error) {
        console.error('Error updating queue display:', error);
        queueElement.innerHTML = '<p>Error displaying requests.</p>';
    }
}

/**
 * Processes the next request in the queue
 */
function processNextRequest() {
    const resultElement = document.getElementById('processing-result');
    
    try {
        if (requestQueue.length === 0) {
            resultElement.innerHTML = '<p>No requests to process.</p>';
            return;
        }
        
        const nextRequest = requestQueue.shift();
        resultElement.innerHTML = `
            <p><strong>Processing:</strong> ${nextRequest.text}</p>
            <p><strong>Type:</strong> ${getRequestTypeText(nextRequest.type)}</p>
            <p><strong>Priority:</strong> ${nextRequest.priority}</p>
            <p class="success-message">Request processed successfully.</p>
        `;
        
        updateQueueDisplay();
    } catch (error) {
        console.error('Error processing request:', error);
        resultElement.innerHTML = '<p class="error-message">Error processing request.</p>';
    }
}

function getRequestTypeText(type) {
    switch(type) {
        case 'saude': return 'Health';
        case 'dinheiro': return 'Money';
        case 'amor': return 'Love';
        default: return 'General';
    }
}

// 2. Ethical Miracle System
const miracleSideEffects = {
    chuva: {
        miracle: 'Miracle performed: It rained in the desert!',
        effect: 'Side effect: Desert plants unadapted to humidity are dying.'
    },
    cura: {
        miracle: 'Miracle performed: Instant healing achieved!',
        effect: 'Side effect: Hospitals are emptying, healthcare professionals losing jobs.'
    },
    alimento: {
        miracle: 'Miracle performed: Food appeared for everyone!',
        effect: 'Side effect: Farmers cannot sell their products, agricultural economy collapsing.'
    }
};

/**
 * Performs a miracle and shows its side effects
 */
function performMiracle() {
    const miracleType = document.getElementById('miracle-type').value;
    const resultElement = document.getElementById('miracle-result');
    const effectElement = document.getElementById('side-effect');
    
    try {
        const miracle = miracleSideEffects[miracleType];
        if (!miracle) throw new Error('Invalid miracle type');
        
        resultElement.innerHTML = `<p><strong>${miracle.miracle}</strong></p>`;
        effectElement.innerHTML = `<p class="important">${miracle.effect}</p>`;
    } catch (error) {
        console.error('Error performing miracle:', error);
        resultElement.innerHTML = '<p class="error-message">Failed to perform miracle.</p>';
        effectElement.innerHTML = '';
    }
}

// 3. Ethical AI Request System
const ethicalRules = [
    {
        pattern: /(controlar|obrigar|manipular)/i,
        message: 'Rejected: Free will violation.'
    },
    {
        pattern: /(matar|ferir|machucar|violência)/i,
        message: 'Rejected: Non-violence principle violation.'
    },
    {
        pattern: /(dinheiro infinito|riqueza ilimitada)/i,
        message: 'Rejected: Potential economic imbalance.'
    },
    {
        pattern: /(etern[ao]|imortalidade)/i,
        message: 'Rejected: Natural cycle disruption.'
    }
];

const possibleConsequences = [
    'This may lead to increased social inequality.',
    'Consequence: Others may want the same benefit.',
    'Side effect: Changes in interpersonal relationships.',
    'This may alter the natural ecosystem balance.',
    'Positive consequence: Overall happiness increase.',
    'Warning: Could create dependency issues.',
    'Note: May require ongoing maintenance.'
];

/**
 * Evaluates a human request against ethical rules
 */
function evaluateRequest() {
    const request = document.getElementById('human-request').value.trim();
    const ethicalCheckElement = document.getElementById('ethical-check');
    const consequencesElement = document.getElementById('request-consequences');
    
    if (!request) {
        alert('Please make your request.');
        return;
    }
    
    try {
        // Check against ethical rules
        let ethicalApproval = true;
        let ethicalMessage = 'Approved: Request within ethical parameters.';
        
        for (const rule of ethicalRules) {
            if (rule.pattern.test(request)) {
                ethicalApproval = false;
                ethicalMessage = rule.message;
                break;
            }
        }
        
        // Display ethical check result
        ethicalCheckElement.innerHTML = `
            <p><strong>Ethical Analysis:</strong> ${ethicalMessage}</p>
            ${ethicalApproval ? 
                '<p>Request will be processed with due considerations.</p>' : 
                '<p>Request cannot be fulfilled.</p>'}
        `;
        
        // If approved, show random consequences
        if (ethicalApproval) {
            const randomConsequence = possibleConsequences[
                Math.floor(Math.random() * possibleConsequences.length)
            ];
            consequencesElement.innerHTML = `
                <p><strong>Potential Consequences:</strong> ${randomConsequence}</p>
            `;
        } else {
            consequencesElement.innerHTML = '';
        }
        
    } catch (error) {
        console.error('Error evaluating request:', error);
        ethicalCheckElement.innerHTML = '<p class="error-message">Error evaluating request.</p>';
        consequencesElement.innerHTML = '';
    }
}

// 4. Version Control Simulation
function simulateGitHub() {
    const simulationElement = document.getElementById('github-simulation');
    
    try {
        simulationElement.innerHTML = `
            <div class="github-simulation-box">
                <h3>GitHub Repository Simulation</h3>
                <p><strong>Repository:</strong> github.com/ethical/god-2.0</p>
                <p><strong>Last commit:</strong> Added ethical rules for free will protection</p>
                <p><strong>Open issues:</strong> 5</p>
                <ul>
                    <li>"Algorithm shows bias in request approval"</li>
                    <li>"Miracle side effects need better prediction"</li>
                    <li>"Priority queue needs audit for fairness"</li>
                </ul>
                <p><strong>Pull requests:</strong> 2</p>
                <ul>
                    <li>"Add new ethical rule: Environmental impact"</li>
                    <li>"Improve consequence prediction algorithm"</li>
                </ul>
            </div>
        `;
    } catch (error) {
        console.error('Error simulating GitHub:', error);
        simulationElement.innerHTML = '<p class="error-message">Error loading repository data.</p>';
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    updateQueueDisplay();
    
    // Add event listeners for better UX
    document.getElementById('request-text').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') addRequest();
    });
    
    document.getElementById('human-request').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') evaluateRequest();
    });
});
