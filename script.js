function validateSyntax() {
    let input = document.getElementById('petInput').value,
    // Validation logic goes here
    
    result = '', // Placeholder for validation result
    statusClass = '', // Placeholder for validation status
    removeClass = '', // Placeholder for class to be removed
    resultElement = document.getElementById('result'); // Element for displaying validation result

    // TODO: Write your validation logic here
    // Check if input starts with 'pet_' and followed by alphanumeric characters

    // Validates the presence of the prefix "pet_".
    // Validates the year format (starting with 19 or 20 followed by two digits between 00 and 99).
    // Validates the pet name format (starting with an uppercase letter, and many contain letters and numbers).
    // Checks if the input follows a specific "pet_<YEAR><PET_NAME>" format.
    const codeSyntax = /^pet_(19|20)\d{2}[A-Z][a-zA-Z0-9]+$/.test(input);
    let validationStatus = codeSyntax || input.length === 0; // Status is true or false.

    // Validation result and the classes assignment based on the input and validation status
    // Checks if the codeSyntax variable is false or the user input length is zero (empty input)
    result = (!validationStatus)? 'Invalid Syntax' : 'Valid Syntax'; // Sets validation result to "Invalid Syntax", otherwise set it to "Valid Syntax".
    statusClass = (!validationStatus)? 'invalid' : 'valid'; // Sets validation class to "invalid", otherwise set it to "valid".
    removeClass = (!validationStatus)? 'valid' : 'invalid'; // Sets class to be removed to "valid", otherwise set it to "invalid".

    resultElement.innerText = result; // Displays the final validation result (valid or invalid)
    resultElement.classList.remove(removeClass); // Removes existing valid or invalid class
    resultElement.classList.add(statusClass); // Add a valid or invalid class
}


