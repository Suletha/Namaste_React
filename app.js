import React from "react";
import ReactDOM from "react-dom/client";


// {/* <div id="parent">
//     <div id="child1">
//         <h1>Im h1 tag</h1>
//         <h2>Im sibiling of h1</h2>
//     </div>
//     <div id="child2">
//         <h1>Im h1 tag</h1>
//         <h2>Im sibiling of h1</h2>
//     </div>
// </div> */}

// React.createElement --> object---> converted to HTML(when rendered)

// const parent = React.createElement("div",{id:"parent"},[
//     React.createElement("div",{id:"child1"},
//         [
//         React.createElement("h1",{},"Im h1 tag"),
//         React.createElement("h2",{},"sibiling of h1")
//         ]
//     ),
//     React.createElement("div",{id:"child2"},
//         [
//         React.createElement("h1",{},"Im h1 tag"),
//         React.createElement("h2",{},"sibiling of h1")
//         ],
//     )

// ])



// JSX ---> React.createElement---> object---> converted to HTML(when rendered)===>JSX is converted to HTML by Paecel(Babel)
// JSX-->HTML like syntax not HTML in Js 
//React Element
const jsxHeading = <h1 id="parent">This is React Element using JSX--simlified code</h1>

// multiple lines---> use ()

const jsxHeading1 = (<h1 id="parent">
    This is React Element using JSX--simlified code</h1>)

    
// console.log(jsxHeading)
// //const heading = React.createElement("h1",{id:"heading"},"Hello World from React!")
// const root = ReactDOM.createRoot(document.getElementById("divEle"));
// root.render(jsxHeading)
       

//React Functional component
const ReactComp = () => {
    return <h1 className="heading">Its a Functional component</h1>
}

//Component composition(one comp inside another)
const ReactComp2 = () => ( 
    <div>
        <ReactComp/>
        <h1 className="heading">Its a Functional component Composition</h1>

    </div>



)

 


//const heading = React.createElement("h1",{id:"heading"},"Hello World from React!")
const root = ReactDOM.createRoot(document.getElementById("divEle"));
root.render(<ReactComp2/>)
       
    