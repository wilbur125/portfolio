let projects = [
    {
        id: "tinyhouse-app",
        name: "TinyHouse App",
        image: "./assets/images/portfolio/temp.png",
        cardDescription: "TinyHouse is a Full Stack React Masterclass offered by newline and utilizes React, Node, TypeScript, and GraphQL. This project is inspired by the functionality of AirBnb.",
        url: "https://wilbur125-tinyhouse.herokuapp.com/",
        github: "https://github.com/wilbur125/tinyhouse-dev"
    },
    {
        id: "project-2",
        name: "Project #2",
        image: "./assets/images/portfolio/temp.png",
        cardDescription: "Here is some text",
        url: "#",
        github: "./assets/images/thlogo-white.jpg"
    },
    {
        id: "workout-tracker",
        name: "Workout Tracker",
        image: "./assets/images/portfolio/temp.png",
        cardDescription: "Here is some text",
        url: "#",
        github: "#"
    },
    {
        id: "code-quiz",
        name: "Code Quiz",
        image: "./assets/images/portfolio/temp.png",
        cardDescription: "Here is some text",
        url: "https://wilbur125.github.io/Code_Quiz/",
        github: "https://github.com/wilbur125/Code_Quiz"
    }
];

const portfolio = document.querySelector("#portfolio-display");

portfolio.innerHTML = projects.map(function(project) {
    return (
        `
            <div class="col s12 m6 l3" >
                <div class="card">
                    <a href="${project.id}.html">    
                        <div class="card-image">
                            <img class="responsive-img" src="${project.image}">
                            <span class="card-title black-text">${project.name}</span>
                        </div>
                        <div class="card-content">
                            <p>${project.cardDescription}</p>
                        </div>
                    </a>
                    <div class="card-action center-align">
                        <a class="pointer" href="${project.github}" target="_blank">GitHub Repository</a>
                    </div>
                </div>
            </div>
        `
    )
}).join('');

