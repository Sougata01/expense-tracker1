const form = document.querySelector('form')
const fruits = document.querySelector('.fruits')
// adding
form.addEventListener('submit',function(event){
    event.preventDefault()
    // selected the input element
    const fruitToAdd = document.getElementById('fruit-to-add')
    // created the li
    const newLi = document.createElement('li')
    newLi.innerHTML = fruitToAdd.value + '<button class="delete-btn">x</button>'
    newLi.className = 'fruit'
    // adding li as the last element of unordered list
    fruits.appendChild(newLi)
})
// deleting
fruits.addEventListener('click',function(event){
    if(event.target.classList.contains('delete-btn')){
        const fruitsToDelete = event.target.parentElement
        fruits.removeChild(fruitsToDelete)
    }
})