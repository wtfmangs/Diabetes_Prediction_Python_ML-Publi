// function saveEmail() {
//     var email = document.getElementById('but10').value;
    
//     // Create a new Blob object with the content
//     var blob = new Blob([email], { type: 'text/plain' });
  
//     // Create a temporary anchor element
//     var a = document.createElement('a');
//     a.href = window.URL.createObjectURL(blob);
    
//     // Set the file name
//     a.download = 'emails.txt';
  
//     // Append the anchor to the body and click it
//     document.body.appendChild(a);
//     a.click();
  
//     // Remove the anchor from the body
//     document.body.removeChild(a);
//   }
  





function saveEmail(){

    document.getElementById('contactForm').addEventListener('submit', function(event) {
     event.preventDefault(); // Prevent the default form submission
    
     var email = document.getElementById('but10').value;
    
     // You can send the email address to a server-side script using AJAX or fetch
     // For demonstration purposes, I'll just display the email address in the response div
     var responseDiv = document.getElementById('response');
     responseDiv.textContent = "Thank you! We received your email address: " + email;
   });
}