function customRender(reactElement, container) {
  //   const domElement = document.createElement(reactElement.type);
  //   domElement.innerHTML = reactElement.children;
  //   domElement.setAttribute("href", reactElement.props.href);
  //     domElement.setAttribute("target", reactElement.props.target);
  //     container.appendChild(domElement)

  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (attr in reactElement.props) {
    domElement.setAttribute(attr, reactElement.props[attr]);
  }
  container.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://www.youtube.com/watch?v=kAOuj6o7Kxs&list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige&index=4",
    target: "_blank",
  },
  children: "click me to visit Chai & code",
};

const maincontainer = document.getElementById("root");

customRender(reactElement, maincontainer);
