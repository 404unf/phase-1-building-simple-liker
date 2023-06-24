// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const allHearts = document.querySelectorAll('span.like-glyph')
allHearts.forEach(heart => heart.addEventListener('click',handleHeart))

function handleHeart(event) {
  event.preventDefault()
  if(this.textContent === EMPTY_HEART) {
    mimicServerCall()
      // .then(response=>response.json())
      .then(data => { this.textContent = FULL_HEART; this.classList.add('activated-heart') })
      .catch(error => handleFail)
  }
  if(this.textContent === FULL_HEART){
    this.textContent = EMPTY_HEART
    this.classList.remove('activated-heart')}
}


function handleFail(error) {
  // Remove .hidden class
  const modal = document.querySelector('#modal')
  modal.classList.remove('hidden')

  // Display server message
  modal.textContent(error.message)

  // Hide modal for 3 seconds
  setTimeout(() => {
    modal.classList = 'hidden'
  }, 3);
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
