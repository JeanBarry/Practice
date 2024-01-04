const previousArrow = document.querySelector('#previous-arrow');
const nextArrow = document.querySelector('#next-arrow');

const testimonies = [
  {
    authorImage: 'https://swaysight.com/wp-content/uploads/2022/02/testimonial.jpeg',
    authorName: 'John V. Bellamy',
    authorDescription: 'Founder & CEO, The Company',
    words: 'Both attractive and highly adaptable. Buy this now. Thank you for making it painless, pleasant and most of all hassle free!'
  },
  {
    authorImage: 'https://media.istockphoto.com/id/1216152397/photo/portrait-of-female-owner-of-gift-store-standing-in-front-of-shelves-with-cosmetics-and-candles.jpg?s=612x612&w=0&k=20&c=23L_GhirOBiExv00QPw555TiTsSrZqhFii2F89CHXVE=',
    authorName: 'Melanie Waters',
    authorDescription: 'Lead Product Manager',
    words: 'Working in a dynamic and fast-paced industry, finding a tool that truly aligns with my needs was a game-changer'
  },
  {
    authorImage: 'https://media.istockphoto.com/id/1230749818/photo/portrait-of-smiling-male-owner-of-fashion-store-standing-in-front-of-clothing-display.jpg?s=612x612&w=0&k=20&c=xoWhF-hrQcbMEPDYncHiHF8HJX2YgmYt7T-KLCPZIpY=',
    authorName: 'Michael Brown',
    authorDescription: 'Senior Developer',
    words: 'I\'ve had the pleasure of incorporating this tool into our workflow, and the impact has been nothing short of transformative. '
  },

];

let testimonyPos = 0;

const getTestimony = (direction, testimonies) => {
  let testimony;

  switch(direction) {
    case 'forward':
      if (testimonyPos + 1 >= testimonies.length) {
        testimonyPos = 0;
      } else {
        testimonyPos += 1;
      }
      break;
    case 'backward':
      if (testimonyPos - 1 < 0) {
        testimonyPos = testimonies.length - 1;
      } else {
        testimonyPos -= 1;
      }
      break;
  }

  testimony = testimonies[testimonyPos];
  return testimony;
};


previousArrow.addEventListener('click', () => {
  const previousTestimony = getTestimony('backward', testimonies);
  setTestimony(previousTestimony);
});

nextArrow.addEventListener('click', () => {
  const nextTestimony = getTestimony('forward', testimonies);
  setTestimony(nextTestimony);
});


const setTestimony = ({
  authorImage,
  authorName,
  authorDescription, 
  words
}) => {
  const setWords = (words) => {
    const wordsPlaceholder = document.querySelector("#testimony-words");
    wordsPlaceholder.textContent = words;
  };

  const setAuthor = (authorImage, authorName, authorDescription)=> {
    const imagePlaceholder = document.querySelector("#author-image");
    const namePlaceholder = document.querySelector("#author-name");
    const descriptionPlaceholder = document.querySelector("#author-description");

    imagePlaceholder.setAttribute('src', authorImage);
    namePlaceholder.textContent = authorName;
    descriptionPlaceholder.textContent = authorDescription;
  }

  setWords(words);
  setAuthor(authorImage, authorName, authorDescription);
}