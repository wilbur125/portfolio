let projects = [
    {
        name: "Project 1",
        image: "./assets/images/thlogo-white.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et beatae enim sequi rem nostrum repellat, accusantium laborum dignissimos delectus a inventore quas libero explicabo suscipit officia repudiandae? Error, nam velit!",
        url: "google.com",
        github: "google.com"
    },
    {
        name: "Project 2",
        image: "./assets/images/thlogo-white.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et beatae enim sequi rem nostrum repellat, accusantium laborum dignissimos delectus a inventore quas libero explicabo suscipit officia repudiandae? Error, nam velit!",
        url: "",
        github: "./assets/images/thlogo-white.jpg"
    },
    {
        name: "Project 3",
        image: "./assets/images/thlogo-white.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et beatae enim sequi rem nostrum repellat, accusantium laborum dignissimos delectus a inventore quas libero explicabo suscipit officia repudiandae? Error, nam velit!",
        url: "",
        github: ""
    },
    {
        name: "Project 4",
        image: "./assets/images/thlogo-white.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et beatae enim sequi rem nostrum repellat, accusantium laborum dignissimos delectus a inventore quas libero explicabo suscipit officia repudiandae? Error, nam velit!",
        url: "",
        github: ""
    },
    {
        name: "Project 5",
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