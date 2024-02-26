function handleFormSubmit(event){
    event.preventDefault()
    // inititalize input texts
    const username = event.target.username.value
    const email = event.target.email.value
    const phone = event.target.phone.value
    // object created
    const userobj = {
        Username: username,
        Email: email,
        Phone: phone
    }
    // sterialized
    const userobj_serialized = JSON.stringify(userobj)
    // storing to localStorage
    localStorage.setItem("User Details",userobj_serialized)
    console.log(event)
}
