function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result
    let error = '';
    let errorStatus = 'valid';

    // TODO: Write your validation logic here
    // Check if input starts with 'pet_' and followed by alphanumeric characters
    if(input.length === 0){return;}

    const prefixReg = /pet_/,
    yearRegex = /^(19|20)[\d]{2,2}$/,
    nameRegex = /^[A-Z]+[a-zA-Z]+$/;

    const petValue = input.substr(0, 4),
    yearValue = input.substr(4, 4),
    nameValue = input.substr(8);

    const codeSyntax = prefixReg.test(petValue) && yearRegex.test(yearValue) && nameRegex.test(nameValue);

    if(!codeSyntax){
        if(!prefixReg.test(petValue)){
            error = `Code must start with "pet_".`;
        }
        else if(!yearRegex.test(yearValue)) {
            error = `"${yearValue}" must be a year`;
        }
        else if(!nameRegex.test(nameValue)){
            error = `${nameValue} must be a Pet's Name with capitalized "${nameValue.charAt(0)}"`;
        }
        errorStatus = "invalid";
    }

    result = (error !== '')? `${error} 🔴` : `${input} 🟢`;

    document.getElementById('result').innerText = result;
}


