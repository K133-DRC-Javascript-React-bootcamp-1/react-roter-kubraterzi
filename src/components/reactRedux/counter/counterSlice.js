import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({ //name, initialState, reducers gibi başlıca tanımları olan bir yapıdır.
  name: "counter", //state e ulaşmak istendiğinde state.counter şeklinde ulaşmamıza yardımcı bir key dir.
  initialState: {
    value: 0, // state in ilk değeri ve numerik bir state olduğu için 0 verdik, istediğimiz herhangi bir ismi verebilirdik.
  },
  reducers: { // bu değiştirilebilir bir isim değildir, createSlice içerisindeki mevcut prop lar ile girdi yapılabilir
    // state i güncellemek için kullanacağımız metotlar buraya yazılır
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount : (state, action) => {// burada action, props gibi içerisinde birden fazla prop taşır. içerisinde type ve payload prop ı vardır(reducer yapısından doğrudan bu iki prop gelir.). bu prop lardan birini yalnızca almak istersek içinden doğrudan ilgilendiğimiz prop ismini çekip parametre olarak verebiliriz. Yani,  burada action diye parametre alıp action.payload diyerek ona ulaşmak yerine doğrudan {payload} diyerek, parametre olarak payload gönderebiliriz.
      state.value += Number(action.payload)
    }
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions; //counterSlice içerisindeki metotları export edip kullanacağımız yerlerde import etmeliyiz.
export default counterSlice.reducer; // .reducer -> createSlice sonucunda oluşan slice nesnesinin içerisinde, bir function içeren prop tur. İki tane parametre alır(state,action) state i manipüle edebilmek için bu reducer fonksiyonuna ihityacımız var.
