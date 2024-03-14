const form = document.querySelector('form')
const list = document.querySelector('#expense-list')
form.addEventListener('submit', function (event) {
    event.preventDefault()
    const amount = event.target.amount.value
    const description = event.target.description.value
    const category = event.target.category.value
    const newLi = document.createElement('li')
    newLi.innerHTML += amount + ' - ' + description + ' - ' + category + ' - ' + '<button type="submit" class="delete-btn">Delete Expense</button> ' + '<button type="submit" class="edit-btn">Edit Expense</button>'
    list.appendChild(newLi)
    localStorage.setItem('data', list.innerHTML)
})
list.addEventListener('click', function (event) {
    event.preventDefault()
    if (event.target.classList.contains('delete-btn')) {
        var expenseToDelete = event.target.parentElement
        list.removeChild(expenseToDelete)
    }
    localStorage.setItem('data', list.innerHTML)
})
list.addEventListener('click', function (event) {
    event.preventDefault()
    if (event.target.classList.contains('edit-btn')) {
        var expenseToDelete = event.target.parentElement
        document.querySelector('#amount').value=expenseToDelete.textContent.split(' - ')[0]
        document.querySelector('#description').value=expenseToDelete.textContent.split(' - ')[1]
        document.querySelector('#category').value=expenseToDelete.textContent.split(' - ')[2]
        list.removeChild(expenseToDelete)
    }
    localStorage.setItem('data', list.innerHTML)
})
function onscreen() {
    list.innerHTML = localStorage.getItem('data')
}
onscreen()