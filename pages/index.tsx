import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { slice } from '@/useStore'

import Cursor from '@/elements/cursor';
import Layout from '@/components/layout';

const store = configureStore({ reducer: slice.reducer });

export default function Home() {

	return (
		<Provider store={store}>
			<Layout>
				{/* <Home /> */}
				<div></div>
			</Layout>
			<Cursor />
		</Provider>
	)
}
