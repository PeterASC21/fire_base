let usernameElement = document.querySelector("#username");
let messageElement = document.querySelector("#message");
let dateElement = document.querySelector("#date");
let button = document.querySelector("#submitButton");
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