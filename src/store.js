import { configureStore } from "@reduxjs/toolkit";

import rootreducer from './reducers/index'

const store=configureStore({
    reducer:rootreducer
})

export default store