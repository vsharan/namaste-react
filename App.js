
{/* <div>
    <div>
        <h1>Hello from H1 Tag</h1>
    </div>
</div> */}

// const heading = React.createElement("h1", { name: "Sharukh", xyz: "abc", id: "heading" }, "Hello World from Vinayak!")

const parent = React.createElement(
    "parent", 
    {},
    [React.createElement("child", {}, 
    [React.createElement("h1", {}, "Hello from H1 tag"),
    React.createElement("h2", {}, "Hello from H2 tag")]),
    React.createElement("child", {}, 
    [React.createElement("h1", {}, "Hello from H1 tag"),
    React.createElement("h2", {}, "Hello from H2 tag")])
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent);
