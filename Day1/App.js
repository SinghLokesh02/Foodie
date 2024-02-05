// let heading = React.createElement("h1", {}, "Revision Day 1");

// let root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading)

// Basic hello World Using Reac

let heading = React.createElement(
  "h1",
  { id: "h1", class: "Head1", xyz: "abc", style: { color: "red" } },
  "Hello World From react"
);
let heading1 = React.createElement("h1", {}, "Hello World ");

// let heading1 = React.createElement("h1", {Attribute of element}, "Hello World ");

let Root = ReactDOM.createRoot(document.getElementById("root"));

//   For One Heading
//   Root.render(heading1)

//  For More than one Heading
Root.render([heading1, heading]);

// More Complex
const head = React.createElement(
  "div",
  { id: "Box" },
  React.createElement(
    "div",
    { id: "small" },
    React.createElement("h1", { style: { color: "red" } }, "I'm Inner H1 Text")
  )
);

var meraRoot = ReactDOM.createRoot(document.getElementById("root"));

meraRoot.render(head);

// Slightly More Complex
/*
Slightly More Complex Made this using React
     <div class="parent">
      <div class="child1">
        <h1>I'm H1 Tag</h1>
        <h2>I'm H2 Tag</h2>
      </div>
      <div class="child2">
        <h1>I'm H1 Tag</h1>
        <h2>I'm H2 Tag</h2>
      </div>
    </div>
*/

let createComplex = React.createElement(
  "div",
  { class: "Parent",style:{display:"flex",gap:"10px"} },
  React.createElement(
    "div",
    { class: "child1",style:{background:"blue"} },
    [React.createElement("h1", {}, "I'm H1 Tag"),
    React.createElement("h2", {}, "I'm H2 Tag")]
  ),React.createElement(
    "div",
    { class: "child2",style:{background:"red"} },
    [React.createElement("h1", {}, "I'm H1 Tag"),
    React.createElement("h2", {}, "I'm H2 Tag")]
  )
);


meraRoot.render(createComplex)
