//Note in most cases you should use local or session storage.
//Only use ID's for JS, use classes for styling, as ID's are global making them performance heavy.

let UserWidth = screen.width+"X"+screen.height;
const UserRes = document.querySelector("#resolution"); //delcare UserRes to be a header element
UserRes.innerText = "Your Resolution: " + UserWidth; //Modify the text of the header element to be UserWidth.
