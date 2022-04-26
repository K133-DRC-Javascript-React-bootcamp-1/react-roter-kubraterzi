import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter/counterSlice"; // burada counterReducer yerine istediğimiz ismi verebilirdik. import ettiğimiz yerden default export çıkışı olduğu için doğrudan reducer ın kendisi çıkıyor ve buradan istediğmiz herhangi bir isimle karşılayabiliyoruz.

export const store = configureStore({
    reducer: {
        counter : counterReducer
    }
})