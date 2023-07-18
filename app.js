console.log('App is connected');

// Protagonist of our application
const barbie = {
  name: 'Barbie',
  wardrobe: [],
  wallet: 0,
  // Element that will hold the game screen
  element: document.querySelector('#barbie'),
  // Game Screen
  render: () => {
    barbie.el.innerHTML = `
        <h1>${barbie.name} Status</h1>
        <h3>${barbie.name} works as a ${barbie.career.name} </h3>
        <h3> Each week ${barbie.name} takes home $${barbie.career.income}</h3>
        <h3> Currently ${barbie.name} has $${barbie.wallet} in their bank account</h3>
    `;
  },
};

class Career {
  constructor(name, description, income, id) {
    this.name = name;
    this.description = description;
    this.income = income;
  }
}

class Clothing {
  constructor(name, designer, color, type, size, price) {
    this.name = name;
    this.designer = designer;
    this.color = color;
    this.type = type;
    this.size = size;
    this.price = price;
  }
}

const birkin = new Clothing(
  'Birkin Bag',
  'Hermes',
  'purple',
  'bag',
  'lg',
  15470
);

const birkinButton = document.getElementById('birkin');

birkinButton.addEventListener('click', () => {
  if (barbie.wallet >= birkin.price) {
    barbie.wardrobe.push(birkin);
    barbie.wallet -= birkin.price;
    barbie.render();
    // WE updated the wardrobe that belongs to barbie so the object was changed
    // the object control the information that is visible to us on the screen
    // I want to re-render the content so that i can see the updated information in the browser
  } else {
    alert('Stop trippin you know you aint got it like that');
  }
});

const workButton = document.getElementById('work');

workButton.addEventListener('click', () => {
  if (barbie.career) {
    barbie.wallet += barbie.career.income; // WE updated the wallet that belongs to barbie so the object was changed
    // the object control the information that is visible to us on the screen
    // I want to re-render the content so that i can see the updated information in the browser
    barbie.render();
  } else {
    alert('You are unemployed, get a job first');
  }
});
