function validateSyntax() {
    let input = document.getElementById('petInput'),
    inputValue = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result

    // TODO: Write your validation logic here
    input.addEventListener("input", function(e){
        console.log(e.data + " | " + e.target.value);
    });
        // Check if input starts with 'pet_' and followed by alphanumeric characters

            document.getElementById('result').innerText = result;
}


