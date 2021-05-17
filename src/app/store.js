
import photoReducer from 'features/Photo/photoSlice';


const { configureStore } = require("@reduxjs/toolkit");
//object bao gồm nhiêu reducer
const rootReducer ={
    photos:photoReducer,
};


const store = configureStore({
    reducer:rootReducer,
});

export default store;