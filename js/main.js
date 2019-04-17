import Tabs from './tabs/tabs-component.js'

const someEmptyDOMElement = document.querySelector('#root');
const someEmptyDOMElement1 = document.querySelector('#root1');

let tabs = [
    { title: 'Tab 1', content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr' },
    { title: 'Tab 2', content: 'Some text 2' },
    { title: 'Tab 3', content: 'Some Lorem ipsum dolor sit amet, consetetur sadipscing elitr'},
];

let tabsComponent = new Tabs({
    element: someEmptyDOMElement,
    tabs: tabs,
});

 tabsComponent.subscribe('tab-selected', ({ title, content }) => {
    console.log(`Tab ${ title } was selected \n ${content}`);
 });