import { useState, useMemo } from 'react';

const TOTAL_LINES = 1000;
const ALL_WORDS = [];
const words = ["React", "Vite", "JavaScript", "Component", "useState"]; // Example words, replace with your own set of words

// Generate random sentences
for (let i = 0; i < TOTAL_LINES; i++) {
    let sentence = '';
    for (let j = 0; j < words.length; j++) {
        sentence += words[Math.floor(words.length * Math.random())] + ' ';
    }
    ALL_WORDS.push(sentence.trim());
}

function App() {
    const [sentences, setSentences] = useState(ALL_WORDS);
    const [filter, setFilter] = useState('');

    // Filter sentences based on user input
    const filteredSentences = useMemo(() => {
        return sentences.filter(sentence => sentence.includes(filter)); // Add return statement here
    }, [sentences, filter]);

    return (
        <div>
            <h1>Sentence Filter App</h1>
            <input 
                type="text" 
                placeholder="Type to filter sentences" 
                onChange={(e) => setFilter(e.target.value)} 
            />
            <div>
                {filteredSentences.map((sentence, index) => (
                    <div key={index}>{sentence}</div>
                ))}
            </div>
        </div>
    );
}

export default App;
