import {createStore, compose } from 'redux';
import rootreducer from '../reducers';

const extension = window.devToolsExtension() || ((f) => f);

const store = createStore(rootreducer, compose(extension));

export default store;
