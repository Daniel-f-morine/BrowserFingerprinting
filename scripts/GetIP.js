const ipElement = document.querySelector("#ip"); //Set ipElement variable to header element named ip in HTML doc
const ipfailElement = document.querySelector("#ipfail"); //Set ipfailElement variable to header element named ipfail in HTML doc

fetch('https://api.ipify.org')
    .then((res) => res.text())
    .then(ip => {
        // Update the content of the HTML element with the fetched IP address
        ipElement.innerText = `Your IP: ${ip}`;
    })
    .catch(err => {
        ipfailElement.innerText = 'IP Address API Blocked by your browser automatically!'
    })
