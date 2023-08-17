const ipElement = document.querySelector("#ip"); //Set IP element to header element named ip in HTML doc


fetch('https://api.ipify.org')
    .then((res) => res.text())
    .then(ip => {
        // Update the content of the HTML element with the fetched IP address
        ipElement.innerText = `Your IP: ${ip}`;
    })
    .catch(err => console.log(err));
