// Write your code below:

// creating subHeading element
const subHeading = document.createElement('h3')
const headingtext = document.createTextNode('Buy high organic fruits online')
subHeading.appendChild(headingtext)

// getting div
const div = document.getElementsByTagName('div')

// inserting element in first div
const firstdiv = div[0]
firstdiv.appendChild(subHeading)

// Make the sub-heading text italic
subHeading.style.fontStyle = 'italic'

// creating paragraph element
const para = document.createElement('p')
const paratext = document.createTextNode('Total fruits: 4')
para.appendChild(paratext)

// getting ul
const fruits = document.querySelector('.fruits')

// inserting in second div
const seconddiv = div[1]
seconddiv.insertBefore(para,fruits)

// setting id
para.id = 'fruits-total'