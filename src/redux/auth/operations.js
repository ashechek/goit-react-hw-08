import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const goitApi = axios.create({
  baseURL: "https://connections-api.goit.global/",
});

// Utility to add JWT
const setAuthHeader = (savedToken) => {
  goitApi.defaults.headers.common.Authorization = `Bearer ${savedToken}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  goitApi.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkApi) => {
    try {
      const { data } = await goitApi.post("users/signup", credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkApi) => {
    try {
      const { data } = await goitApi.post("users/login", credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkApi) => {
  try {
    await goitApi.post("users/logout");
    clearAuthHeader();
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const refresh = createAsyncThunk("auth/refresh", async (_, thunkApi) => {
  try {
    // Отримуємо збережений токен з локал стореджа
    const savedToken = thunkApi.getState().auth.token;
    // console.log(savedToken);

    // якщо там нічого нема, не виконуємо запит
    if (!savedToken) {
      return thunkApi.rejectWithValue("Token does not exist!");
    }
    // якщо є - встановлюємо по замовчуванню хедер авторизації для запитів

    setAuthHeader(savedToken);
    // робимо запит за обліковими даними
    const { data } = await goitApi.get("users/current");
    // повертаємо дані в слайс для опрацювання
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
