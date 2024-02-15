'use client';
import React from 'react'
import { Provider } from 'react-redux';
import { store } from './store';

<<<<<<<< HEAD:store/ProviderController.js
export default function ProviderController({children}) {
========
export default function provider({children}) {
>>>>>>>> parent of 9318b31 (fixed naming convention):store/provider.js
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}
