function shortenLink() {
    var originalLink = document.getElementById('originalLink').value;

    // Perform input validation (optional)
    if (originalLink === '') {
        alert('Please enter a valid link.');
        return;
    }

    // Send the original link to the server for shortening (server-side implementation not included here)
    // Assume the server responds with a shortened link
    var shortenedLink = 'https://example.com/abcd123';

    // Display the shortened link to the user
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '<a href="' + shortenedLink + '">' + shortenedLink + '</a>';
}
