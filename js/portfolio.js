let projects = [
    {
        name: "TinyHouse App",
        image: "./assets/images/thlogo-white.jpg",
        description: "TinyHouse is a Full Stack React Masterclass offered by <a href='https://www.newline.co/tinyhouse'>newline</a> and utilizes React, Node, TypeScript, and GraphQL. It is a production ready application inspired by AirBnb. Users can be authenticated through Google OAuth, create listings, search for available listings around the world, schedule bookings, and send/receive payments via Stripe.",
        url: "https://wilbur125-tinyhouse.herokuapp.com/",
        github: "https://github.com/wilbur125/tinyhouse-dev"
    },
    {
        name: "Entertainer Website",
        image: "./assets/images/thlogo-white.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et beatae enim sequi rem nostrum repellat, accusantium laborum dignissimos delectus a inventore quas libero explicabo suscipit officia repudiandae? Error, nam velit!",
        url: "",
        github: "./assets/images/thlogo-white.jpg"
    },
    {
        name: "Restaurant Website",
        image: "./assets/images/thlogo-white.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et beatae enim sequi rem nostrum repellat, accusantium laborum dignissimos delectus a inventore quas libero explicabo suscipit officia repudiandae? Error, nam velit!",
        url: "",
        github: ""
    },
    {
        name: "Vent",
        image: "./assets/images/thlogo-white.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et beatae enim sequi rem nostrum repellat, accusantium laborum dignissimos delectus a inventore quas libero explicabo suscipit officia repudiandae? Error, nam velit!",
        url: "",
        github: ""
    },
    {
        name: "Workout Tracker",
        image: "./assets/images/thlogo-white.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et beatae enim sequi rem nostrum repellat, accusantium laborum dignissimos delectus a inventore quas libero explicabo suscipit officia repudiandae? Error, nam velit!",
        url: "",
        github: ""
    },
    {
        name: "Project 6",
        image: "./assets/images/thlogo-white.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et beatae enim sequi rem nostrum repellat, accusantium laborum dignissimos delectus a inventore quas libero explicabo suscipit officia repudiandae? Error, nam velit!",
        url: "",
        github: ""
    }
];

const portfolio = document.querySelector("#portfolio-display");

portfolio.innerHTML = projects.map(function(project) {
    return (
        `
            <div class="col s12 m6 l4" >
                <div class="card">
                    <div class="card-image">
                        <img src="${project.image}">
                        <span class="card-title black-text">${project.name}</span>
                    </div>
                    <div class="card-content">
                        <p>${project.description}</p>
                    </div>
                    <div class="card-action">
                        <a href="${project.url}">${project.name} URL</a>
                    </div>
                    <div class="card-action">
                        <a href="${project.github}">GitHub Repository</a>
                    </div>
                </div>
            </div>
        `
    )
}).join('');