function highlight() {
    // Select all <strong> elements
    let boldWords = document.querySelectorAll('strong');
    
    // Loop through each <strong> element and change color to green
    boldWords.forEach(function(word) {
        word.style.color = 'rgb(0, 128, 0)';
    });
}

function return_normal() {
    // Select all <strong> elements
    let boldWords = document.querySelectorAll('strong');
    
    // Loop through each <strong> element and revert color to black
    boldWords.forEach(function(word) {
        word.style.color = 'rgb(0, 0, 0)';
    });
}
