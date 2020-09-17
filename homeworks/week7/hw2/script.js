const faqBlock = document.querySelector('.fq-content');

function clickQuestions(e) {
  const element = e.target.closest('.questions-title');
  if (element) {
    element.parentNode.childNodes[3].classList.toggle('answer-show');
  }
}

faqBlock.addEventListener('click', clickQuestions);
