
// import PropTypes, {checkPropTypes} from 'prop-types';

// import { applyMiddleware, createStore } from 'redux';
// import rootReducer from '../redux/reducers';
// import { middlewares } from '../redux/store';

export const findByTestAttr = (component:any, attr:any) => {
    return component.find(`[data-testid='${attr}']`);
}

export const findByCustome = (component:any,selector:any,value:any) => {
    return component.find(`[${selector}='${value}']`);
}

// export const testStore = (initialState) => {
//     const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
//     return createStoreWithMiddleware(rootReducer, initialState);
// };