import Tabs from './tabs/tabs-component.js'

const someEmptyDOMElement = document.querySelector('#root');
const someEmptyDOMElement1 = document.querySelector('#root1');

let tabs = [
    { title: 'Tab 1', content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr' },
    { title: 'Tab 2', content: 'Some text 2' },
    { title: 'Tab 3', content: 'Some Lorem ipsum dolor sit amet, consetetur sadipscing elitr'},
];


 //
 // tabsComponent.subscribe('tab-selected', ({ title, content }) => {
 //    console.log(`Tab ${ title } was selected \n ${content}`);
 // });


// setInterval(()=>{
 //     console.log(tabsComponent.getCurrentTab())
 // },3000);
let tabsComponent = new Tabs({
    element: someEmptyDOMElement,
});

let tabsElements = [...document.querySelectorAll('tabs')];

tabsElements.forEach((el) => {
    el.addEventListener('tab-selected', (event) => {
        let { title } = event.detail;
        console.log(title);
    })
});


