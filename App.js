
{/* <div>
    <div>
        <h1>Hello from H1 Tag</h1>
    </div>
</div> */}

// const heading = React.createElement("h1", { name: "Sharukh", xyz: "abc", id: "heading" }, "Hello World from Vinayak!")
import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    "parent", 
    {},
    [React.createElement("child", {}, 
    [React.createElement("h1", {}, "Namaste React tutorial"),
    React.createElement("h2", {}, "Hello from H2 tag")]),
    React.createElement("child", {}, 
    [React.createElement("h1", {}, "Hello from H1 tag"),
    React.createElement("h2", {}, "Hello from H2 tag")])
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent);

// const heading = React.createElement("h1", {}, "Namaste React!");

// const root = ReactDOM.createRoot(document.getElement);

// root.render(heading)