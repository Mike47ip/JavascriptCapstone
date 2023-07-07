// Sliding menu
const grid = document.querySelector('.grid');
const slidingMenu = document.querySelector('.slidingMenu');
const closeMenu = document.querySelector('.closeMenu');
const anchorTags = document.querySelectorAll('.slidingMenu ul > li');

grid.addEventListener('click', () => {
  slidingMenu.style.left = '0%';
});

closeMenu.addEventListener('click', () => {
  slidingMenu.style.left = '100%';
});

anchorTags.forEach((sync) => sync.addEventListener('click', () => {
  slidingMenu.style.left = '100%';
}));

// Render Feature Section Dynamically

const speakers = [
  {
    id: '1',
    name: 'Samuel Duodo',
    title: 'Director of Art Centre Accra, Ghana',
    experience: 'He stands gifted as one of the co-founders of Apple with an awesome portfolio in the geopolitical diaspora as well.',
    picture: './Images/portrait-real-black-african-man-260nw-505311127.jpg',
  },
  {
    id: '2',
    name: 'Anita Ama',
    title: 'Minister of Education Nairobi, Kenya',
    experience: 'With a dazzling expertise in the field of Education she has left her mark on the phase of Education as we know it in Africa.',
    picture: './Images/istockphoto-1060680104-612x612.jpg',
  },
  {
    id: '3',
    name: 'Lawrence Amoafo',
    title: 'Prime Minister of United Kingdom',
    experience: 'His reputation preceeds him as the acting Prime Minister of UK in the geopolitical diaspora as well.',
    picture: './Images/istockphoto-502581380-612x612.jpg',
  },
  {
    id: '4',
    name: 'Dennis Walker',
    title: 'Minister of Transportation Obuasi, Ghana',
    experience: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque consequuntur repellat, quia sapiente blanditiis',
    picture: './Images/Russian_passport_photo.jpeg',
  },
  {
    id: '5',
    name: 'Shatta Wale',
    title: 'Prime Minister of United States',
    experience: 'He stands gifted as one of the co-founders of Apple with an awesome portfolio in the geopolitical diaspora as well.',
    picture: './Images/istockphoto-912922894-612x612.jpg',
  },
  {
    id: '6',
    name: 'Adwoa Amansa',
    title: 'First Lady Canada, British Columbia',
    experience: 'With a dazzling expertise in the field of Education she has left her mark on the phase of Education as we know it in Africa.',
    picture: './Images/istockphoto-615279718-612x612.jpg',
  },
];

const loadSpeakers = () => {
  const guestSpeakers = document.querySelector('.featureContainer');
  guestSpeakers.innerHTML = '';
  speakers.forEach((speaker) => {
    const list = document.createElement('div');
    if (speaker.id === '1' || speaker.id === '2') {
      list.className = 'SpeakerPort';
    } else {
      list.className = 'SpeakerPort';
      list.classList.add('hiddenPort');
    }

    list.innerHTML = `
    <ion-icon id="picdec" name="film"></ion-icon> 
    <img
      src="${speaker.picture}"
      alt="Black American Speaker"
    />
    <div class="port">
      <span>
        <b>${speaker.name}</b> <br />
        <span class="portTitle"
          >${speaker.title}</span
        >
        <br /></span
      ><br />
      <hr />
      <br />
      <span class="exp"
        >${speaker.experience}</span
      >
    </div>
    `;
    guestSpeakers.appendChild(list);
  });
};

window.onload = () => {
  loadSpeakers();
};

const more = document.querySelector('.seeMore');
const less = document.querySelector('.seeLess');
const panelSpeakers = document.getElementsByClassName('SpeakerPort');

const openMore = () => {
  for (let i = 0; i < panelSpeakers.length; i += 1) {
    panelSpeakers[i].classList.remove('hiddenPort');
  }
  more.classList.add('active');
  less.classList.add('active');
};

const closeMore = () => {
  for (let i = 2; i < panelSpeakers.length; i += 1) {
    panelSpeakers[i].classList.add('hiddenPort');
  }
  more.classList.remove('active');
  less.classList.remove('active');
};

more.addEventListener('click', openMore);
less.addEventListener('click', closeMore);
