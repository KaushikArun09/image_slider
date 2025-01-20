// Get the slider container
const sliderContainer = document.querySelector('.slider-container');

// Get the slides
const slides = document.querySelectorAll('.slide-item');

// Get the navigation buttons
const prevButton = document.querySelector('#prevBtn');
const nextButton = document.querySelector('#nextBtn');

// Get the indicators
const indicators = document.querySelectorAll('.indicator-dot');

// Set the current slide index
let currentSlideIndex = 0;

// Function to show the current slide
function showCurrentSlide() {
  // Hide all slides
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });

  // Show the current slide
  slides[currentSlideIndex].classList.add('active');

  // Update the indicators
  indicators.forEach((indicator) => {
    indicator.classList.remove('active');
  });
  indicators[currentSlideIndex].classList.add('active');
}

// Function to handle the previous button click
function handlePrevButtonClick() {
  // Decrement the current slide index
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;

  // Show the current slide
  showCurrentSlide();
}

// Function to handle the next button click
function handleNextButtonClick() {
  // Increment the current slide index
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;

  // Show the current slide
  showCurrentSlide();
}

// Function to handle the indicator click
function handleIndicatorClick(event) {
  // Get the slide index from the indicator
  const slideIndex = parseInt(event.target.dataset.slide);

  // Update the current slide index
  currentSlideIndex = slideIndex;

  // Show the current slide
  showCurrentSlide();
}

// Add event listeners to the navigation buttons
prevButton.addEventListener('click', handlePrevButtonClick);
nextButton.addEventListener('click', handleNextButtonClick);

// Add event listeners to the indicators
indicators.forEach((indicator) => {
  indicator.addEventListener('click', handleIndicatorClick);
});

// Show the first slide by default
showCurrentSlide();
