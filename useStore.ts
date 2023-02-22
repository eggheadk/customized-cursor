import { createSlice } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import config from 'config';

const initialState:StoreObject = {
	cursor: 'pointer'
};

const getStore = (initialState: StoreObject) => {
	try {
		const buf = window.localStorage.getItem(config.appKey);
		if (buf) {
			const json = JSON.parse(buf);
			const state: any = initialState;
			for (let k in json) {
				if (state[k] != undefined) {
					state[k] = json[k]
				}
			}
		}
		// if (initialState.cookie === '') {
		// initialState.cookie = uuidv4();
		// }
	} catch (err) {
		console.log(err);
	}

	return initialState;
}

const setStore = (state: any) => {
	// delete state.L;
	// window.localStorage.setItem(config.appKey, JSON.stringify(state));
}

export const slice = createSlice({
	name: 'store',
	initialState: getStore(initialState),
	reducers: {
		update: (state: any, action) => {
			for (const k in action.payload) {
				if (state[k] === undefined) new Error(`Undefined store key ${k}`);
				state[k] = action.payload[k];
			}
			setStore(state);
		}
	}
})

const useStore = () => {
	// const history = useNavigate();
	const G = useSelector((state: StoreObject) => state);
	const dispatch = useDispatch();
	const update = (payload: Partial<StoreObject>) => dispatch(slice.actions.update(payload));

	return { ...G, update }
}

export default useStore;
