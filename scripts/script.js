// Select all items
const faqItem = document.querySelectorAll('.faq-item');

faqItem.forEach(function (item) {

    // Select all elements in the item
    const question = item.querySelector('.question');
    const answerContainer = item.querySelector('.answer-container');
    const btn = item.querySelector('.btn');

    question.addEventListener('click', function () {

        // Clear answer if another question is clicked
        faqItem.forEach(function (item) {
            if (item.querySelector('.question') !== question) {
                item.querySelector('.answer-container').classList.add('hidden');
                item.querySelector('.question').classList.remove('heavy-weight');
                item.querySelector('.btn').firstChild.classList.remove('rotate');
                item.querySelector('.answer-container').style.maxHeight = 0;
            }
        });

        answerContainer.classList.toggle('hidden');

        if (answerContainer.classList.contains('hidden')) {
            answerContainer.style.maxHeight = 0;
        } else {
            answerContainer.style.maxHeight = '100px';
        }

        btn.firstChild.classList.toggle('rotate');
        question.classList.toggle('heavy-weight');
    });
});