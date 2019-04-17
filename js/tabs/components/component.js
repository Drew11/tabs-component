
export default  class Component {
    constructor({element}){
        this._element = element;
        this._callBacks = {};

    }
    emit(event, {title, content}){
        if(!this._callBacks[event]){
            return;
        }
        this._callBacks[event]({title, content});
    }

    subscribe(event, callback){
        if(this._callBacks[event]){
            return;
        }
        this._callBacks[event] = callback;
    }
}