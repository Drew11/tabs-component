
 export default class Tabs {
    constructor({ element, tabs }){
        this._element = element;
        this._tabs = tabs;
        this._render()


    }

    _render(){
        let a = [];
        this._element.innerHTML = `<ul
        data-ul 
        >
       
         ${this._tabs.map((currentTab) => {
           const selector = currentTab['title'];
           
           this._setContent(selector);
           return `<li
                    data-element=${selector}
                    >${currentTab['title']}
                  </li>`
        }).join('')}
        
      
       
        <div
          data-content
        >
        ${this._tabs[0]['content']}
        </div>    
     
        </ul>
       `
    }

    _setContent(selector){
        this._element.addEventListener('click', (event)=>{
            if(event.target!== this._element.querySelector(`[data-element=${selector}]`)){
                return;
            }
            const currentHead = this._element.querySelector(`[data-element=${selector}]`);
            const tab = this._tabs.filter((obj)=>{
               if(obj['title'] === currentHead.dataset.element){
                   return obj;
               }
            });
            const contentBlock = this._element.querySelector(`[data-content]`);
            console.dir(tab);
            contentBlock.innerHTML = `<span>${tab[0]['content']}</span>`
        })
    }
 }
