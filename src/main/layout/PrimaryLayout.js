import React from 'react';
import Header from '../Header';

const PrimaryLayout = ({children}) => (
  <div>
    <Header/>
    <div className='container'>
      {children}
    </div>
  </div>
)

export default PrimaryLayout;