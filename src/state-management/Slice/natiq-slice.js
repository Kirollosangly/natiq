import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = 'https://echo-6sdzv54itq-uc.a.run.app/natiq'
export const connectNatiq = createAsyncThunk('natiq/speak', async (natiqSentence) => {
    const response = await axios.post(`${baseURL}`, natiqSentence)
    console.log(response);
    return {
        data: response.data
    }
})


const natiqSlice = createSlice({
    name: 'NatiQ',
    initialState: {
        natiqText: {
            text: ''
        },
        loading: false,
        audioWave: undefined,
        lastEcho: [],
    },
    reducers: {
        changeAudioState: (state) => {
            state.audioWave = undefined
        }
    },
    extraReducers: {
        [connectNatiq.pending]: (state, action) => {
            state.loading = true;
        },
        [connectNatiq.fulfilled]: (state, action) => {
            state.audioWave = action.payload.data.wave;
            state.lastEcho = action.payload.data.durations;
            state.loading = false;
        },
        [connectNatiq.rejected]: (state, action) => { }
    }
})

export const { changeAudioState } = natiqSlice.actions;
export default natiqSlice.reducer;