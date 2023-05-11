import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL} from "../../utils/constants";

export const createUser = createAsyncThunk(
    "user/createUsers",
    async (payload,thunkAPI) => {
        try{
            const res = await axios.post(`${BASE_URL}/users`,payload)
            return res.data
        }
        catch (err){
            console.log(err)
            return thunkAPI.rejectWithValue(err)
        }
    }
)
export const updateUser = createAsyncThunk(
    "user/updateUser",
    async (payload,thunkAPI) => {
        try{
            const res = await axios.put(`${BASE_URL}/users/${payload.id}`,payload)
            return res.data
        }
        catch (err){
            console.log(err)
            return thunkAPI.rejectWithValue(err)
        }
    }
)
export const loginUser = createAsyncThunk(
    "user/loginUsers",
    async (payload,thunkAPI) => {
        try{
            const login = await axios.post(`${BASE_URL}/login`, payload)
            return login.data

        }
        catch (err){
            console.log(123)
            return thunkAPI.rejectWithValue(err)
        }
    }
)

const addCurrentUser = (state,{ payload }) => {
    state.currentUser = payload
    console.log(state.currentUser)
}

const userSlice = createSlice({
    name: "user",
    initialState : {
        currentUser: null,
        cart:[],
        favorites: [],
        isLoading: false,
        formType: "signup",
        showForm:false
    },

    reducers: {
      addItemToCart : (state,{payload}) => {
          let newCart = [...state.cart];
          const found = state.cart.find(({id}) => id === payload.id )

          if(found) {
              newCart = newCart.map((item) => {
                  return item.id === payload.id ? {...item, quantity : payload.quantity || item.quantity + 1} : item;
              });
          }
          else newCart.push({...payload,quantity:1})
          state.cart = newCart
      },
        addItemToFavorites: (state, { payload }) => {
            let newCart = [...state.favorites];
            const found = state.favorites.find(({ id }) => id === payload.id);

            if (found) {
                newCart = newCart.map((item) => {
                    return item.id === payload.id
                        ? { ...item, quantity: payload.quantity || item.quantity + 1 }
                        : item;
                });
            } else newCart.push({ ...payload, quantity: 1 });

            state.favorites = newCart;
        },
      removeItemFromCart: (state,{payload}) => {
          state.cart = state.cart.filter(({ id }) => id !== payload)
      },
        removeItemFromFavorites: (state, { payload }) => {
            state.favorites = state.favorites.filter(({ id }) => id !== payload);
        },
      toggleForm : (state,{payload}) => {
          state.showForm = payload
      },
      toggleFormType: (state,{payload} ) => {
          state.formType = payload
          console.log(payload)
      }
    },
    extraReducers: (builder) => {
        // builder.addCase(getCategories.pending, (state) => {
        //     state.isLoading = true
        // });
        builder.addCase(createUser.fulfilled, addCurrentUser);
        builder.addCase(loginUser.fulfilled,addCurrentUser)
        builder.addCase(updateUser.fulfilled,addCurrentUser)
        // builder.addCase(getCategories.rejected, (state) => {
        //     state.isLoading = false
        // });

    },
});

export const {addItemToCart,toggleForm,removeItemFromCart,toggleFormType,addItemToFavorites,removeItemFromFavorites} = userSlice.actions
export default userSlice.reducer;