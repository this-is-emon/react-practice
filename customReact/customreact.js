//Declaring method 
function customRender(reactElement,container) {
    //create Empty element 
    const domElement = document.createElement(reactElement.type)
    //inserting children, attributes
    domElement.innerHTML = reactElement.children;
    /* 
    domElement.setAttribute('href',reactElement.props.href);
    domElement.setAttribute('target',reactElement.props.target)
    */
    //for multiple props
    for (const prop in reactElement.props) {
        if (prop === children) {
            continue
        }
        document.setAttribute(prop,reactElement.props[prop]);
    }

    //inserting reactElement inside container
    container = appendChild(domElement)
}

//custom element
const reactElement ={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click me to visit google'
}

const mainContainer = document.querySelector('#root');

//Calling custom method to inject element into #root
customRender(reactElement,mainContainer);
