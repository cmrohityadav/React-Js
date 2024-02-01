
import { configureStore, createSlice } from "@reduxjs/toolkit"


const counterSlice=createSlice({
    name:'counter',
    initialState:{counterVal:0},
    reducers:{
        increament:(state,action)=>{
          state.counterVal++;
        },
        decreament:(state,action)=>{
          state.counterVal--;

        },
        add:(state,action)=>{
            state.counterVal+=Number(action.payload.num);

        },
        sub:(state,action)=>{
            state.counterVal-=Number(action.payload)
         

        }
    }
})

const privacySlice=createSlice({
    name:'privacy',
    initialState:false,
    reducers:{
        toggle:(state)=>{
          return state=!state;
        }
    }
})

const counterStore=configureStore({reducer:{
    counter:counterSlice.reducer,
    privacy:privacySlice.reducer,

}})


export  const counterActions=counterSlice.actions;
export const privacyActions=privacySlice.actions;
export default counterStore;



// for comparasion to redux react
// import { createStore } from "redux";
// // const INITIAL_VALUE={
//     counter:0,
//     privacy:false,

// }
//old: const counterReducer=(store=INITIAL_VALUE,action)=>{
//     if(action.type=='INCREAMENT'){
//         return {counter: store.counter+1,privacy: !store.privacy}

//     }else if(action.type==='DECREAMENT'){
//         return {counter: store.counter-1,privacy: !store.privacy}
//     }else if(action.type==='ADD'){
//         return {...store,counter:store.counter+Number(action.payload.num)}
//     }else if(action.type==='SUB'){
//         return {...store,counter: store.counter-Number(action.payload.num)}
//     }else if(action.type==='PRIVACY_TOGGLE'){
//         return {privacy: !store.privacy,counter: store.counter}
//     }
//     return store;

// }

//old: const counterStore=createStore(counterReducer);
// export default counterStore;