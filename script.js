function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result
    let error = '';

    // TODO: Write your validation logic here
    if(input.length === 0){return;}

    const pCharFind = /[p]/g,
    numFind = /[0-9]/g,
    capCharFInd = /[A-Z]/g,
    prefixReg = /[pet_]/g,
    yearRegex = /^(19|20)[\d]{2,2}$/,
    nameRegex = /^[A-Z]+[a-zA-Z]+$/;

    const fistChar = input.charAt(0),
    yearChar = input.charAt(4),
    nameCapChar = input.charAt(8);

    const petValue = input.substr(0, 4),
    yearValue = input.substr(4, 4),
    nameValue = input.substr(8);

    const charSyntax = pCharFind.test(fistChar) && numFind.test(yearChar) && capCharFInd.test(nameCapChar);

    if(!charSyntax){
        if(!pCharFind.test(fistChar)){
            error = `Code must start with "pet_".`;
        }
        else if(!numFind.test(yearChar)) {
            error = `"${yearChar}" must be a number.`;
        }
        else if(!capCharFInd.test(nameCapChar)){
            error = `${nameCapChar} must be capitalized.`;
        }
    } 
    else {
        const codeSyntax = prefixReg.test(petValue) && yearRegex.test(yearValue) && nameRegex.test(nameValue);
        if(!codeSyntax){
            if(!prefixReg.test(petValue)){
                error = `Code must start with pet_`;
            }
            else if(!yearRegex.test(yearValue)) {
                error = `"${yearValue}" must be a year`;
            }
            else if(!nameRegex.test(nameValue)){
                error = `${nameValue} must be a Pet's Name`;
            }
        }
    }

    result = (error !== '')? error : input;
    // Check if input starts with 'pet_' and followed by alphanumeric characters

    document.getElementById('result').innerText = result;
}


