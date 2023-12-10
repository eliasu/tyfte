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

        let honeypot_full = false;

        formFields.forEach(function (field) {

            if (field.name == 'Fax' && field.value != "" ) {
                honeypot_full = true;
            }
            
            // do not add token and honeypot fields
            if (field.name !== '_token' && field.name !== 'Fax') {

                // Check if the field is a checkbox or radio buttons and is checked
                if ( (field.type === 'checkbox' || field.type === 'radio')  && field.checked) {
                    formDataString += field.name + ': ' + field.value + '\n';
                }

                // Check if the field is an input or textarea and has a value
                else if ((field.type === 'text' || field.type === 'textarea') && field.value.trim() !== '') {
                    formDataString += field.name + ': ' + field.value + '\n';
                }
                
                // Check if the field is a range slider 
                else if (field.type === 'range') {
                    formDataString += field.name + ': ' + field.value + '\n';
                }

                // Check if the field is a select and what is selected
                else if (field.type === 'select-one') {
                    formDataString += field.name + ': ' + field.selectedOptions[0].label + '\n';
                }
            }
        });

        if (honeypot_full) {
            return;
        }
        
        // add the data to the formData object
        formData.append('infos', formDataString);

		
        // submit data
		axios.post(form.action, formData)
			.then(response => {
				console.log("Form Submitted!");
			})
			.catch(error => {
				console.log(error)
                console.log(error.response.data);
                
			})
	});

}   