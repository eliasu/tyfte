/**
 * lovecounter component
 * import with "import initLoveCounter from './components/love_counter';"
**/


export default function initLoveCounter() { 
    console.log("** init love counter from /components/love_counter.js **")
    let loveBtn = document.querySelector("#love")
    
    loveBtn.addEventListener("click", function() {
        // Define the URL of the Laravel route that will handle the update request
        const updateUrl = '/update-number';

        // Define the new number you want to update
        const newNumber = 42;

        // Retrieve the CSRF token from the meta tag in the HTML
        const csrfToken = window.getToken();
        
        console.log("token: " + csrfToken)

        // Create a new HTTP request using the Fetch API
        fetch(updateUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': window.getToken()
        },
        body: JSON.stringify({ number: newNumber })
        })
        .then(response => {
        console.log('Number updated successfully');
        })
        .catch(error => {
        console.error('Error updating number', error);
        });
        
        document.getElementById("loveCount").innerHTML = newNumber;
    });

}
