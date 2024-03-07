// Using Javascript

// Method - 1
// document.querySelector('#root').innerHTML = "<h1>Hello From Javascript</h1>"

// Method - 2

// let heading = document.createElement("h1");
// heading.innerText = "Hello From Javascript";

// document.querySelector("#root").appendChild(heading);

// Using React

const heading = React.createElement(
    "h1",
    { id: "heading", class: "check_head" },
    "This is Basics of the React"
  );

// Create this
//  <div id="parent">
/* <div id="child"> */
/* <h1>This is Heading Using React</h1> */
// </div>
// </div>

const box1 = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "This is Heading Using React")
  )
);

// Create this
//  <div id="parent">
/* <div id="child"> */
/* <h1>This is Heading 1 Using React</h1> */
/* <h1>This is Heading 2 Using React</h1> */
// </div>
// </div>

const box2 = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
      "div",
      { id: "child" },
      [React.createElement("h1", {id:"heading1"}, "This is Heading Using React"),React.createElement("h1", {id:"heading2"}, "This is Heading Using React")]
    )
  );


// Create this
//  <div id="parent">
/* <div id="child1"> */
/* <h1>This is Heading 1 Using React</h1> */
/* <h1>This is Heading 2 Using React</h1> */
// </div>
/* <div id="child2"> */
/* <h1>This is Heading 1 Using React</h1> */
/* <h1>This is Heading 2 Using React</h1> */
// </div>
// </div>
const box3 = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
      "div",
      { id: "child1" },
      [React.createElement("h1", {id:"heading1"}, "This is Heading Using React"),React.createElement("h1", {id:"heading2"}, "This is Heading Using React")]
    ),
    React.createElement(
        "div",
        { id: "child2" },
        [React.createElement("h1", {id:"heading1"}, "This is Heading Using React"),React.createElement("h1", {id:"heading2"}, "This is Heading Using React")]
      )
  );



let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(box3);
