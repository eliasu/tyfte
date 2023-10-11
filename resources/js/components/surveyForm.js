/**
 * contact component
 * import with "import initSurveyForm from './components/surveyForm';"
**/
import axios from 'axios';

export default function initSurveyForm() { 
    console.log("** init survey Form from /components/surveyForm.js **")
    
    axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

    // Get the form element
    const form = document.getElementById('contact-form');

    // if there is no contact form stop init
    if(!form) {
        console.log("OOps … no survey form found.")
        return;
    }

    // Add a submit event listener to the form
    form.addEventListener("submit", function (e) {

        // create the submit string and the empty formdata object
        // it is empty because there is just an field of "infos" inside the blueprint 
        // but we are dynamicall rendering form fields from globals/contact-form
		let formData = new FormData(form);
        let formDataString = '';
		e.preventDefault();
        
        // Loop through all form fields and add it to the submit string in a formated way
        let formFields = form.querySelectorAll('input, select, textarea, [type="range"]');
        formFields.forEach(function (field) {
            
            // exclude token and honeypot field
            if (field.name !== '_token' && field.name !== 'honeypot') {
                
                // Prefix the value with the name of the field
                formDataString += field.name + ': ' + field.value + '\n';
            }
        });
        
        // add the data to the formData object
        formData.append('infos', formDataString);
		
        // submit data
		axios.post(form.action, formData)
			.then(response => {
				console.log("Form Submitted!");
			})
			.catch(error => {
				console.log(error)
			})
	});

}   