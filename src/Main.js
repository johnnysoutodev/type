import autobind from 'autobind-decorator';
import Loader from './core/Loader';
import Metrics from './core/Metrics';
import Char from './core/text/Char';
import TextField from './core/text/TextField';

@autobind
class type{

    @Private static _instance = null;

    Loader = Loader;
    Metrics = Metrics;
    text = {
        Char: Char,
        TextField: TextField
    };

    constructor(){
        if(type._instance){
            throw "type: esse objeto só pode ser instanciado uma vez. Use a propriedade instance";
        }

        type._instance = this;
    }

    static get instance(){
        if(!type._instance){
            new type();
        }

        return type._instance;
    }

}

export default type;

window.type = new type();
