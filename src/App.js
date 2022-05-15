import React from 'react';
import { NavBar } from './Components/NavBar/NavBar';
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import { Menu } from './Components/Menu/Menu';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';
const firebaseConfig = {
  apiKey: "AIzaSyAgm4Peg4axuwFWiW0Vf76YN1p_ffWA7AE",
  authDomain: "mrdonalds-d84be.firebaseapp.com",
  projectId: "mrdonalds-d84be",
  storageBucket: "mrdonalds-d84be.appspot.com",
  messagingSenderId: "1007496889133",
  appId: "1:1007496889133:web:4780ecdbe3d7c2f1b989a4"
};

firebase.initializeApp(firebaseConfig);

function App() {

  const auth = useAuth(firebase.auth)
  const openItem = useOpenItem();
  const orders = useOrders();

  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Order {...orders}{...openItem} />
      <Menu {...openItem} />
      {openItem.openItem && <ModalItem {...openItem} {...orders} />}
    </>
  );
}

export default App;
