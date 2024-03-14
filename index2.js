const form = document.querySelector('form')
const ul = document.getElementById('expense-list')

// submit button
const submitBtn = document.getElementById('submit-btn')
form.addEventListener('submit', function (event) {
    event.preventDefault()
    // local storage
    const amount = event.target.amount.value
    const description = event.target.description.value
    const category = event.target.category.value
    const obj = {
        amount,
        description,
        category
    }
    const newLi = document.createElement('li')
    newLi.innerHTML = obj.amount + ' - ' + obj.description + ' - ' + obj.category + ' ' + '<button class="delete-btn">Delete Expense</button>' + '<button class="edit-btn">Edit Expense</button>'
    ul.appendChild(newLi)
    // this can be done using unique keys like date
    // const obj = {
    //     new Date().getTime():'kj'
    // }
    localStorage.setItem(obj.description, JSON.stringify(obj))
})
// on screen at starting or refreshing
function onscreen() {
    for (let i = 0; i < localStorage.length; i++) {
        let deserialized_obj = JSON.parse(localStorage.getItem(localStorage.key(i)))
        ul.innerHTML += '<li>' + deserialized_obj.amount + ' - ' + deserialized_obj.description + ' - ' + deserialized_obj.category + ' ' + '<button class="delete-btn">Delete Expense</button>' + '<button class="edit-btn">Edit Expense</button>' + '</li>'
    }
}
onscreen()

// delete button