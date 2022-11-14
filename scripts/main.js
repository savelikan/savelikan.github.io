const myImage = document.querySelector('img')

myImage.onclick = () => {
    const mySrc = myImage.getAttribute('src'); 
    if (mySrc === 'images/images1.jpeg'){
        myImage.setAttribute('src','images/images2.jpeg');
    } else {
    myImage.setAttribute('src','images/images1.jpeg');
}
}

let myButton = document.querySelector( 'button');
let myHeading = document.querySelector('h1');



function setUserName() {
    const myName = prompt('please enter your name.');
    localStorage.setItem('name', myName);
    console.log(myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
    if(!myName){
        setUserName();
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    const storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, '+ storedName;
}
myButton.onclick = () => {
    setUserName();
}