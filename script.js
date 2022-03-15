const affirmationContainer =document.getElementById('affirmation-container');
const affirmationText =document.getElementById('affirmation');
const twitterBtn =document.getElementById('twitter');
const newAffirmationBtn =document.getElementById('new-affirmation');




// Show New Quote
function newAffirmation() {
    // Pick a random quote from apiAffrimation array
    const affirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
    affirmationText.textContent = affirmation;

}

// Tweet an affirmation 
function tweetAffirmation() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${affirmationText.textContent}`;
    window.open(twitterUrl, '_blank');


    newAffirmationBtn.addEventListener('click', newAffirmation);
    twitterBtn.addEventListener('click', tweetAffirmation);

}

// Event Listeners 

// newAffirmationBtn.addEventListener('click', newAffirmation);
// twitterBtn.addEventListener('click', tweetAffirmation);




newAffirmation(); 