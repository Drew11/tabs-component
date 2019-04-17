 import  Component from './components/component.js'

 export default class Tabs extends Component {

    constructor({ element, tabs }){
        super({ element });

        this._tabs = tabs;
        this._render()
    }

    _render(){
        this._element.innerHTML = `<ul
        data-ul 
        >
       
         ${this._tabs.map((currentTab) => {
           const selector = currentTab['title'].split(' ').join('');
    
           
           this._setContent(selector);
           return `<li
                    data-element=${selector}
                    >${currentTab['title']}
                  </li>`
        }).join('')}
        </ul>
        
       <div
          data-content
        >
        Content block empty<br>
        Nothing selected<br>
        Try click one of headers<br>
        </div>    
       `
    }

    _setContent(selector){



        this._element.addEventListener('click', (event)=>{
            const targetElement = this._element.querySelector(`[data-element=${selector}]`),
                  contentBlock = this._element.querySelector(`[data-content]`);

            if(event.target!==targetElement){
                targetElement.removeAttribute('class');
                return;
            }
            const tab = this._tabs.filter((obj)=>{
               if(obj['title'].split(' ').join('') ===  targetElement.dataset.element){
                   return obj;
               }
            });
            const selectContent = tab[0]['content'],
            title = tab[0]['title'];

            targetElement.setAttribute('class','selected-li--head');
            contentBlock.setAttribute('class', 'selected');
            contentBlock.innerHTML = `<span>${selectContent}</span>`;

            this.emit('tab-selected', {title: title ,content: selectContent})
        })
    }
 }
