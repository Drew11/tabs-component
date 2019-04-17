import Tabs from './tabs/tabs-component.js'

const someEmptyDOMElement = document.querySelector('#root');

let tabs = [
    { title: 'Tab1', content: 'Some text 1' },
    { title: 'Tab2', content: 'Some text 2' },
    { title: 'Tab3', content: 'Some text 3' },
];


let tabsComponent = new Tabs({
    element: someEmptyDOMElement,
    tabs: tabs,
});


//
// tabsComponent.subscribe('tab-selected', ({ title, content }) => {
//     console.log(`Tab ${ title } was selected \n ${content}`);
// });