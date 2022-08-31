let projects = [
    {
        id: "tinyhouse-app",
        name: "TinyHouse App",
        image: "./assets/images/portfolio/thlogo.png",
        cardDescription: "TinyHouse is a Full Stack React Masterclass offered by newline and utilizes React, Node, TypeScript, and GraphQL. This project is inspired by the functionality of AirBnb.",
        url: "https://wilbur125-tinyhouse.herokuapp.com/",
        github: "https://github.com/wilbur125/tinyhouse-dev"
    },
    {
        id: "earthquake-tracker",
        name: "Earthquake Tracker",
        image: "./assets/images/portfolio/etlogo.jpeg",
        cardDescription: "The Earthquake Tracker shows the use the three most recent earthquakes as reported by USGS. Users can click on an event and it will display on Google Maps.",
        url: "https://wilbur125.github.io/earthquake-tracker2/",
        github: "https://github.com/wilbur125/earthquake-tracker2"
    },
    {
        id: "workout-tracker",
        name: "Workout Tracker",
        image: "./assets/images/portfolio/wtlogo.png",
        cardDescription: "This app gives users the ability to track resistance and cardio workouts. The Fitness Dashboard will show the user's daily workouts for the current week using bar charts and pie charts.",
        url: "https://w125-workout-tracker.herokuapp.com/",
        github: "https://github.com/wilbur125/workout-tracker"
    },
    {
        id: "code-quiz",
        name: "Code Quiz",
        image: "./assets/images/portfolio/cqlogo.png",
        cardDescription: "This single page application is a code quiz to test the user's knowledge of essential coding concepts. The quiz is gamified and prompts users to enter their initials when the quiz is completed.",
        url: "https://wilbur125.github.io/Code_Quiz/",
        github: "https://github.com/wilbur125/Code_Quiz"
    }
];

const portfolio = document.querySelector("#portfolio-display");

portfolio.innerHTML = projects.map(function(project) {
    return (
        `
          <div class="col s12 l3">
            <div class="card" id="portfolio-card">
              <div class="card-image valign-wrapper">
                <img class="responsive-img" src="${project.image}">
                <span class="card-title black-text" id="portfolio-card__heading">${project.name}</span>
                <a class="btn-floating halfway-fab waves-effect waves-light red" href="${project.id}.html"><i class="material-icons">more_horiz</i></a>
              </div>
              <div class="card-content">
                <p id="portfolio-card__description">${project.cardDescription}</p>
              </div>
            </div>
          </div>
        `
    )
}).join('');

