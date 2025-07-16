const faqContainer = document.getElementById('faq-container');
const resetButton = document.getElementById('reset-button');

// Event delegation: Listen to clicks on the FAQ container
faqContainer.addEventListener('click', function(event) {
  if (event.target.classList.contains('question')) {
    // Shift + click: Toggle all answers
    if (event.shiftKey) {
      const allAnswers = faqContainer.querySelectorAll('.answer');
      const anyHidden = Array.from(allAnswers).some(ans => ans.style.display === 'none');
      allAnswers.forEach(answer => {
        answer.style.display = anyHidden ? 'block' : 'none';
      });
    } else {
      // Toggle the clicked question's answer
      const answerDiv = event.target.nextElementSibling;
      answerDiv.style.display = (answerDiv.style.display === 'block') ? 'none' : 'block';
    }
  }
});
// Reset button
resetButton.addEventListener('click', function() {
  const allAnswers = faqContainer.querySelectorAll('.answer');
  allAnswers.forEach(answer => {
    answer.style.display = 'none';
  });
});
