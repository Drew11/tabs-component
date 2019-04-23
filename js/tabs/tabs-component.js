 import  Component from './components/component.js'

 export default class Tabs extends Component {

    constructor({ element}){
        super({ element });

        this._selected = false;
        this._setTabs();
        this._render();
    }
    _setTabs () {
        this._tabs =
        [...this._element.children]
            .filter((el) => el.matches('tab'))
            .map((tabEl) => {
                const title = tabEl.getAttribute('title') || 'no-name';
                const content = tabEl.textContent;
                return {title, content};
    });

    }

     getCurrentTab() {
        if(this._selected){
            const currentSelected = this._tabs.filter((obj)=>{
                if(obj['title'] === this._selected.innerText){
                    return obj;
                }
            });

            return currentSelected[0];
        }else  return 'Sorry no one of the headers no select'
     }

    _render(){
        console.log(this._tabs)
            this._element.innerHTML = `

   
        <ul
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
          class="selected-li--head"
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
            const targetElement = event.target.closest(`[data-element=${selector}]`),
                  contentBlock = this._element.querySelector(`[data-content]`);

            if(!targetElement){
                return;
            }
            const tab = this._tabs.filter((obj)=>{
               if(obj['title'].split(' ').join('') === event.target.dataset.element){
                   return obj;
               }
            });
            if(this._selected){
                this._selected.classList.remove('selected-li--head');
            }
            this._selected = targetElement;
            event.target.classList.add('selected-li--head');
            contentBlock.setAttribute('class', 'selected');
            contentBlock.innerHTML = `<span>${tab[0]['content']}</span>`;


            this.emit('tab-selected', tab[0]);

            const tabSelectedEvent = new CustomEvent('tab-selected', {
                detail: this.getCurrentTab()['title']

            });
            tabSelectedEvent.dispatchEvent(tabSelectedEvent);
        })
    }
 }





 // export default class Tabs extends Component {
 //     constructor({ element, tabs }) {
 //         super({ element });
 //         this._tabs = tabs || [...this._element.children]
 //             .filter((el) => el.matches('tab'))
 //             .map((tabEl) => {
 //                 const title = tabEl.getAttribute('title') || 'no-name';
 //                 const content = tabEl.textContent;
 //                 return {title, content};
 //             })
 //
 //         this._currentTab = 0;
 //
 //         this._render();
 //
 //         this.on('click', '[data-element="tab-select"]', (event) => {
 //             const tabSelectEl = event.target.closest('[data-element="tab-select"]');
 //             this._currentTab = tabSelectEl.dataset.tabId;
 //             this._render();
 //             this.emit('tab-selected', this.getCurrentTabData());
 //
 //             const tabSelectedEvent = new CustomEvent('tab-selected', {
 //                 detail: this.getCurrentTabData()
 //             })
 //             this._element.dispatchEvent(tabSelectedEvent);
 //         })
 //     }
 //
 //     getCurrentTabData() {
 //         return this._tabs[this._currentTab];
 //     }
 //
 //     _render() {
 //         this._element.innerHTML = `
 //            <div class="tabs__controls">
 //                ${
 //             this._tabs.map((tab, i) => `
 //                        <button data-element="tab-select" data-tab-id="${i}">${tab.title}</button>
 //                    `).join('')
 //             }
 //            </div>
 //            <div class="tabs__content" data-element="content">
 //                ${
 //             this.getCurrentTabData().content
 //             }
 //            </div>
 //        `
 //     }
 // }

