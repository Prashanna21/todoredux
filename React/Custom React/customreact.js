function customRender(element, container){

    //One way to inject
    // mainContainer.innerHTML = `
    // <${element.type} href="${element.props.href}" target = "${element.props.target}"> ${element.children}</${element.type}>
    // `

    const domEl = document.createElement(element.type)
    domEl.innerHTML = element.children
    domEl.setAttribute('href', element.props.href)
    container.appendChild(domEl)
}

const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children : 'click me to visit google'
}

const element = (
    <a> </a>
)
const mainContainer = document.getElementById('root')

customRender(reactElement, mainContainer)