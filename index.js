// Write your code below:
// storing to local storage
function handleFormSubmit(event) {
    event.preventDefault()
    // inititalize input texts
    const username = event.target.username.value
    const email = event.target.email.value
    const phone = event.target.phone.value
    // object created
    const userobj = {
        username,
        email,
        phone
    }
    // sterialized
    const userobj_serialized = JSON.stringify(userobj)
    // storing to localStorage
    localStorage.setItem(userobj.email, userobj_serialized)
    showUserOnScreen(userobj)
}

function showUserOnScreen(obj) {
    // adding unordered list
    const parentElem = document.getElementById('listofItems')
    const childElem = document.createElement('li')
    childElem.textContent = obj.username + ' - ' + obj.email + ' - ' + obj.phone
    const deleteButton = document.createElement('button')
    deleteButton.type = 'submit'
    deleteButton.textContent = 'Delete'
    deleteButton.onclick = () =>{
        localStorage.removeItem(obj.email)
        parentElem.removeChild(childElem)
    }
    const editButton = document.createElement('button')
    editButton.type = 'submit'
    editButton.textContent = 'Edit'
    editButton.onclick = () =>{
        localStorage.removeItem(obj.email)
        parentElem.removeChild(childElem)
        document.getElementById('username').value=obj.username
        document.getElementById('email').value=obj.email
        document.getElementById('phone').value=obj.phone
    }


    childElem.appendChild(editButton)
    childElem.appendChild(deleteButton)
    parentElem.appendChild(childElem)
}

module.exports = handleFormSubmit