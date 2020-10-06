const body = document.querySelector("body");
const div = document.getElementById("users");
body.appendChild(div);

const users = fetch("https://reqres.in/api/users")
.then((response) => response.json())
.then((data) => {
    renderData(data.data);
});

function renderData(data) {
    const h1 = document.createElement("h1");
    div.appendChild(h1)
    h1.innerHTML = "Users are ";
    data.map((user) => {
        const p = document.createElement("p");
        div.appendChild(p);
        p.innerHTML = user.first_name;
    }) 
} 