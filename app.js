{/* <div id="parent">
    <div id="child1">
        <h1>Im h1 tag</h1>
        <h2>Im sibiling of h1</h2>
    </div>
    <div id="child2">
        <h1>Im h1 tag</h1>
        <h2>Im sibiling of h1</h2>
    </div>
</div> */}


const parent = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child1"},
        [
        React.createElement("h1",{},"Im h1 tag"),
        React.createElement("h2",{},"sibiling of h1")
        ]
    ),
    React.createElement("div",{id:"child2"},
        [
        React.createElement("h1",{},"Im h1 tag"),
        React.createElement("h2",{},"sibiling of h1")
        ],
    )

])
  


  

console.log(parent)
//const heading = React.createElement("h1",{id:"heading"},"Hello World from React!")
const root = ReactDOM.createRoot(document.getElementById("divEle"));
root.render(parent)
       
    