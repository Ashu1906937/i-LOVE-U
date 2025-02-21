// Reveal the message when the heart is clicked
document.getElementById('heart').addEventListener('click', function() {
    const message = document.getElementById('message');
    message.style.display = 'block';
});

// Play the message when the button is clicked
document.getElementById('playButton').addEventListener('click', function() {
    const msg = new SpeechSynthesisUtterance();
    msg.text = "I love u Awanshika"; // Exact message to be spoken
    window.speechSynthesis.speak(msg);
});
