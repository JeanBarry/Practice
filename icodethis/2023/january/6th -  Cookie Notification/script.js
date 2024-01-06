const upperBanner = document.querySelector('.upperbanner');
const lowerBanner = document.querySelector('.lowerbanner');

const upperBannerCloseButton = document.querySelector('.close-upper-banner');
const lowerBannerCloseButton = document.querySelector('.close-lower-banner');
const cookiesActionButtons = document.querySelectorAll('.cookies-button');

const lowerBannerClosingButtons = [lowerBannerCloseButton, ...cookiesActionButtons]

const closeBanner = banner => {
  switch (banner) {
    case 'upper':
      upperBanner.classList.add('hidden');
      break;
    case 'lower':
      lowerBanner.classList.add('hidden');
      break;
  }
};

upperBannerCloseButton.addEventListener('click', () => closeBanner('upper'));
lowerBannerClosingButtons.forEach(button => 
  button.addEventListener('click', 
    () => closeBanner('lower')
));
