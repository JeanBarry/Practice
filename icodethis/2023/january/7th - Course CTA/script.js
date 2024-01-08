const enrollmentButtons = document.querySelectorAll('.enrollment-item');
const enrollmentDetails = {
  deadline: document.querySelector('#deadline'),
  commencement: document.querySelector('#commencement'),
  completion: document.querySelector('#completion'),
};

const enrollments = [
  {
    deadline: '15 June',
    commencement: '01 July',
    completion: '31 August',
  },
  {
    deadline: '15 September',
    commencement: '20 October',
    completion: '15 November',
  },
  {
    deadline: '15 December',
    commencement: '10 January',
    completion: '28 February',
  }
];

const setEnrollment = ({deadline, commencement, completion}) => {
  enrollmentDetails.deadline.textContent = deadline;
  enrollmentDetails.commencement.textContent = commencement;
  enrollmentDetails.completion.textContent = completion;
};

const toggleActiveEnrollment = (index) => {
  for (let i = 0; i < 3; i++) {
    const button = enrollmentButtons[i];
    if (i === index) {
      if (!button.classList.contains('active')) {
        button.classList.add('active');
      }
    } else {
      button.classList.remove('active');
    }
  }
}

enrollmentButtons.forEach((button, i) => button.addEventListener('click', () => {
  setEnrollment(enrollments[i]);
  toggleActiveEnrollment(i);
}));