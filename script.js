let usernameElement = document.querySelector("#username");
let messageElement = document.querySelector("#message");
let dateElement = document.querySelector("#date");
let button = document.querySelector("#submitButton");
let messageContainer = document.querySelector(".allMessages");
// Set database object REFERENCE here:

let database = firebase.database().ref();
/**
 * Updates the database with the username and message.
 */
button.onclick = function updateDB(event){
    event.preventDefault(); //stop refreshing
    let username        = usernameElement.value;
    let message         = messageElement.value;
    let date            = dateElement.value; 
    usernameElement.value = "";
    messageElement.value  = "";
    dateElement.value     = "";
    console.log(username + " : " + message + " : " + date);


    //Create a JSON object with the username and message
    let value = {
        NAME: username, 
        MESSAGE: message,
        DATE: date,
    }

    // Pass the JSON object to our database
    database.push(value);

}

// Set the database "child_added" event here: 
database.on("child_added", addMessageToBoard);

function addMessageToBoard(rowData) {
    let row = rowData.val(); 
    let username = row.NAME;
    let message = row.MESSAGE; 
    let date = row.DATE; 
    let pElement = document.createElement("p");
    let p2Element = document.createElement("p");
    let p3Element = document.createElement("p");
    pElement.innerHTML = "Name: " + username;
    p2Element.innerHTML = "Message: " + message; 
    p3Element.innerHTML = "Date: " + date; 
    messageContainer.appendChild(pElement);
    messageContainer.appendChild(p2Element);
    messageContainer.appendChild(p3Element);
}