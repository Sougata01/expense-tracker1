// Write your code below
// grabbing form as event is to be added there
// eventlistener
// const form = document.querySelector('form')
// form.addEventListener('submit',function(event){
//     const username = event.target.username.value
//     const email = event.target.email.value
//     const phone = event.target.phone.value
//     localStorage.setItem("name",username)
//     localStorage.setItem("email",email)
//     localStorage.setItem("phone",phone)
// })


// eventhandler
function handleFormSubmit(event){
    event.preventDefault()
    const storedUsername = event.target.username.value
    const storedEmail = event.target.email.value
    const storedPhone = event.target.phone.value
    localStorage.setItem("Username",storedUsername)
    localStorage.setItem("Email",storedEmail)
    localStorage.setItem("Phone",storedPhone)
}