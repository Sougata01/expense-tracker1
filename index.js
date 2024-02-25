// Add input element inside form, before button, to take fruit description
const inputElement = document.createElement('input')
inputElement.id = 'description'
const form = document.querySelector('form');
const formButton = form.lastElementChild
form.insertBefore(inputElement,formButton)

// Show the fruit description in italics on the next line
const fruitItems = document.getElementsByClassName('fruit');
const fruitDesc = [
    'Banana is a tropical fruit',
    'Apple is too costly',
    'Orange is one of the most popular fruits',
    'King of fruits',
];
for (let i = 0; i < fruitItems.length; i++) {
    const para = document.createElement('p');
    para.setAttribute('style', 'font-style:italic');
    para.setAttribute('class', 'fruit-desc');
    const textFor_para = document.createTextNode(fruitDesc[i]);
    para.appendChild(textFor_para);

    const placefor_para = fruitItems[i].lastElementChild;
    fruitItems[i].insertBefore(para, placefor_para);
}

// Create a filter that shows only those fruits whose either name or description or both matches the entered text
const filter = document.getElementById('filter')
filter.addEventListener("keyup", function (event) {
    const textEntered = event.target.value.toLowerCase()
    const fruitItems = document.getElementsByClassName('fruit')
    for (let i = 0; i < fruitItems.length; i++) {
        const currentFruitText = fruitItems[i].firstChild.textContent.toLowerCase()
        const currentFruitDescription = fruitItems[i].firstElementChild.textContent.toLowerCase()
        const currentFruit = currentFruitText + currentFruitDescription
        if (currentFruit.indexOf(textEntered) === -1) {
            fruitItems[i].style.display = "none"
        }
        else {
            fruitItems[i].style.display = 'flex'
        }
    }
})