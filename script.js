function validateSyntax() {
    let input = document.getElementById('petInput').value,
    // Validation logic goes here
    
    result = '', // Placeholder for validation result
    statusClass = '', // Placeholder for validation status
    removeClass = '', // Placeholder for class to be removed
    resultElement = document.getElementById('result'); // Element for displaying validation result

    // TODO: Write your validation logic here
    // Check if input starts with 'pet_' and followed by alphanumeric characters

    const prefixRegex = /pet_/, // Regex to match the literal string "pet_" at the beginning of the input.
    yearRegex = /^(19|20)[\d]{2,2}$/, // Regex to match a valid year format between 1900 and 2099.
    nameRegex = /^[A-Z]+[a-zA-Z]+$/; // Regex to match a pet name format starting with an uppercase letter and contains only letters.

    const petValue = input.substr(0, 4), // Retrieves first 4 characters from petInput element.
    yearValue = input.substr(4, 4), // Retrieves second 4 characters from petInput element.
    nameValue = input.substr(8);  // Retrieves the last characters after second 4 characters from petInput element.

    // Validates the presence of the prefix "pet_".
    // Validates the year format (starting with 19 or 20 followed by two digits between 00 and 99).
    // Validates the pet name format (starting with an uppercase letter, containing only letters).
    // Checks if the input follows a specific "pet_<YEAR><PET_NAME>" format.
    const codeSyntax = prefixRegex.test(petValue) && yearRegex.test(yearValue) && nameRegex.test(nameValue); 

    // Validation result and the classes assignment based on the input and validation status
    // Checks if the codeSyntax variable is false or the user input length is zero (empty input)
    result = (!codeSyntax || input.length === 0)? 'Invalid Syntax' : 'Valid Syntax'; // If true, set validation result to "Invalid Syntax", otherwise set it to "Valid Syntax".
    statusClass = (!codeSyntax || input.length === 0)? 'invalid' : 'valid'; // If true, set validation class to "invalid", otherwise set it to "valid".
    removeClass = (!codeSyntax || input.length === 0)? 'valid' : 'invalid'; // If true, set class to be removed to "valid", otherwise set it to "invalid".

    resultElement.innerText = result; // Displays the final validation result (valid or invalid)
    resultElement.classList.remove(removeClass); // Removes existing valid or invalid class
    resultElement.classList.add(statusClass); // Add a valid or invalid class
}


