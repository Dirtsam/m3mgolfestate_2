$('.carousel').carousel({
    interval: 2000
  })


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var brochureBtn = document.getElementById("BrochureBtn");
var brochureBtn2 = document.getElementById("BrochureBtn2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

brochureBtn.onclick = function() {
  modal.style.display = "block";
}
brochureBtn2.onclick = function() {
  modal.style.display = "block";
}


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
    
    
// Hero contact number share form

// phone number form
function sendNum(){
  
  // let fullName = document.getElementById('name').value;
  let phoneNumber = document.getElementById('contactNum').value;
  // let clientEmail = document.getElementById('userEmail').value;
  
  let body = "Contact Num:"+ phoneNumber ;  
  Email.send({
  SecureToken : "c2f962d2-a64a-4525-83de-56b8cbf20c6e",
  To : 'propgrowofficial@gmail.com',
  From :'amitmaggu591@gmail.com',
  Subject : "M3M Golf Estate",
  Body : body
  }).then(
  message => alert(message)
  );
  }


  // Contact page 
  
  function contactEmail(){
  let fullName = document.getElementById('cName').value;
  let phoneNumber = document.getElementById('cPhone').value;
  // let clientEmail = document.getElementById('cEmail').value;
  
  let body = 'Full Name :' + fullName + '<br> Contact :' + phoneNumber;
  
  Email.send({
  SecureToken : "c2f962d2-a64a-4525-83de-56b8cbf20c6e",
  To : 'propgrowofficial@gmail.com',
  From :'amitmaggu591@gmail.com',
  Subject : "M3M Golf Estate2",
  Body : body
  }).then(
  message => alert(message)
  );
  }
  
