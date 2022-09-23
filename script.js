// Get DOM Elements
document.addEventListener('DOMContentLoaded', () => {
    const text = document.querySelector('textarea');
    const countBtn = document.getElementById('count-btn');
    const clearBtn = document.getElementById('clear-btn');
    const wordCount = document.getElementById('word-count');
    const display = document.querySelector('.display')


// Function to get userInput
    function getText(event) {
        let words = text.value;
        words = words.split(' ');
        const wordsCount = {};
        const sortedWords =[];
        if (!event.key || event.key === 'Enter') {

            words.forEach((word) => {
                if (wordsCount[word]) {
                    wordsCount[word]++;
                } else {
                    wordsCount[word] = 1;
                }
            });

            for (key in wordsCount) {
                sortedWords.push([key, wordsCount[key]])
            }

            sortedWords.sort((a,b) => {
                return b[1] - a[1]; 
            });
            
            console.log(sortedWords); 

            sortedWords.forEach((word) => {
                display.insertAdjacentHTML('beforeend', `<p>${word[0]}: ${word[1]} times</p>`);
            }) 
            
            display.style.color = "blue";
        }
    }

// Function to clear textArea
    function clearText(event){
        console.log('Clearing text')
        text.value = '';
    }

    countBtn.addEventListener('click', getText);
    text.addEventListener('keydown', getText);
    clearBtn.addEventListener('click', clearText);

})

