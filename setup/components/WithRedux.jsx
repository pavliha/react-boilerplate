import React from 'react'
import { node } from 'prop-types'
import { Provider } from 'react-redux'
import store from 'src/redux/store'

const WithRedux = ({ children }) =>
  <Provider store={store}>
    {children}
  </Provider>

WithRedux.propTypes = {
  children: node.isRequired,
}
export default WithRedux
