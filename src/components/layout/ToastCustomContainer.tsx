'use client'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ToastCustomContainer() {
  return (
    <ToastContainer autoClose={ 2000 } />
  );
}

export default ToastCustomContainer;
