// Write your code below:
// storing to local storage
function handleFormSubmit(event) {
    event.preventDefault()
    // inititalize input texts
    const user_name = event.target.username.value
    const e_mail = event.target.email.value
    const phone_no = event.target.phone.value
    // object created
    const userobj = {
        username: user_name,
        email: e_mail,
        phone: phone_no
    }
    // sterialized
    const userobj_serialized = JSON.stringify(userobj)
    // storing to localStorage
    localStorage.setItem(e_mail, userobj_serialized)

    // adding unordered list
    const ul = document.querySelector('ul')
    const Li = document.createElement('li')
    const LiText = document.createTextNode(user_name + ' - ' + e_mail + ' - ' + phone_no)
    Li.appendChild(LiText)
    ul.appendChild(Li)
}
module.exports = handleFormSubmit