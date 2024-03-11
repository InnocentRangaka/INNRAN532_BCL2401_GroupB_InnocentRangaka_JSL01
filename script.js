function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result

    // TODO: Write your validation logic here
    const fistChar = input.charAt(0),
    yearChar = input.charAt(4),
    nameCapChar = input.charAt(8);
    
    const petValue = input.substr(0, 4),
    yearValue = input.substr(4, 4),
    nameValue = input.substr(8);
    // input.startWith("pet_")
    console.log(petValue + " | " + yearValue + " | " + nameValue);
    console.log(fistChar.match(/[p]/g) + " | " + yearChar.match(/[0-9]/g) + " | " + nameCapChar.match(/[A-Z]/g));
        // Check if input starts with 'pet_' and followed by alphanumeric characters

            document.getElementById('result').innerText = result;
}


