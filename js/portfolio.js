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
        <div class="col s12 m6 l3">
          <a href="${project.id}.html">
            <div class="card-panel card card-portfolio orange z-depth-2 hoverable hoverable-card">
            <div class="project-image-background center-align">
                <img class="responsive-img project-image" alt="Screenshot from project page" src="${project.image}">
            </div> 
              <span class="white-text">
                <h5 class="">${project.name}</h5>
                <p class="light">${project.cardDescription}</p>
                <br>
                <p class="med-boldify custom-large-font" id="bottom">Click here for details!</p>
              </span>
            </div>
          </a>
        </div>
        `
    )
}).join('');

