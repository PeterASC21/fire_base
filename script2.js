let messageContainer = document.querySelector(".allMessages");

let database = firebase.database().ref();

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
    let brake = document.createElement("br");
    pElement.innerText = "Name: " + username;
    p2Element.innerText = "Message: " + message; 
    p3Element.innerText = "Date: " + date;
    messageContainer.appendChild(pElement);
    messageContainer.appendChild(p2Element);
    messageContainer.appendChild(p3Element);
    messageContainer.appendChild(brake);
}