import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  try {
    const { data } = await axios.get(
      `https://64156ebf0412de6d0f929076.mockapi.io/contacts`
    );
    return data;
  } catch (error) {
    console.error(error);
  }
});

export const addContact = createAsyncThunk('contacts/addContact', async contact => {
  try {
    const { data } = await axios.post(
      'https://64156ebf0412de6d0f929076.mockapi.io/contacts',
      contact
    );
    return data;
  } catch (error) {
    console.error(error);
  }
});

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    try {
      const { data } = await axios.delete(
        `https://64156ebf0412de6d0f929076.mockapi.io/contacts/${contactId}`
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);