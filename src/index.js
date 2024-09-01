import {createStore} from 'redux';
import './styles/norm.css';
import './styles/styles.css';

/* Sound Effect */
import clickSound from './sound/click-effect-short.mp3';
const buttons = document.querySelectorAll('.boton');

const playSound = () => {
    const audio = new Audio(clickSound);
    audio.play();
};

buttons.forEach(button => {
    button.addEventListener('click', () => {
        playSound();
    })
})
/* Sound Effect */

const reset = document.querySelector('.reset');
const sumar = document.querySelector('.sumar');
const restar = document.querySelector('.restar');
const number = document.querySelector('.count');


// Action Types
const INCREMENTAR_CONTADOR = 'INCREMENTAR_CONTADOR';
const DECREMENTAR_CONTADOR = 'DECREMENTAR_CONTADOR';
const RESET_CONTADOR = 'RESET_CONTADOR'

// Reducer
const initialState = {
    count: 0
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case INCREMENTAR_CONTADOR:
            if(state.count < 100){
                return {...state, count: state.count + 1}
            } else {
                return {...state}
            }
        case DECREMENTAR_CONTADOR:
            if(state.count > 0){
                return {...state, count: state.count - 1}
            } else {
                return {...state}
            }
        case RESET_CONTADOR:
            return {...state, count: 0}
        default:
            return {...state}
    }
}

// Store
const store = createStore(reducer);

// Escuchar los cambios en el store y actualizar el DOM
store.subscribe(() => {
    const state = store.getState();
    number.textContent = state.count; // Actualiza el número en el DOM
});

// Action Creators
const sumando = () => {
    store.dispatch({ type: INCREMENTAR_CONTADOR })
};
const restando = () => {
    store.dispatch({ type: DECREMENTAR_CONTADOR })
}
const reseteando = () => {
    store.dispatch({ type: RESET_CONTADOR })
}


sumar.addEventListener('click', sumando);
restar.addEventListener('click', restando);
reset.addEventListener('click', reseteando);

// Inicializar el DOM con el valor inicial
number.textContent = store.getState().count;