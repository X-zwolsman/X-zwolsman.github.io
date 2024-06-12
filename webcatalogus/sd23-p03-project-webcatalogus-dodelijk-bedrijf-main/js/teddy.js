
fetch("http://localhost:3000/teddy-pig")
.then(myData => myData.text())
.then(textData => showInConsole(textData));

function showInConsole(data) {
    console.log(data);
    
}

