/* eslint-disable */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// @ts-ignore
const appRoot = document.getElementById('root');

appRoot.insertAdjacentHTML('afterend', '<div id="modal-root"></div>');

// @ts-ignore
const modalRoot = document.getElementById('modal-root');

class InnerModal extends Component {
  constructor(props) {
    super(props);
    // @ts-ignore
    this.el = document.createElement('div');
  }

  componentDidMount() {
    // @ts-ignore
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    // @ts-ignore
    modalRoot.removeChild(this.el);
  }

  render() {
    const containerStyle = {
      alignItems: 'stretch',
      border: '0 solid black',
      boxSizing: 'border-box',
      display: 'flex',
      flexBasis: 'auto',
      flexDirection: 'column',
      flexShrink: 0,
      marginTop: 0,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0,
      minHeight: 0,
      minWidth: 0,
      paddingTop: 0,
      paddingRight: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      position: 'relative',
      zIndex: 0,

      // modal
      position: 'fixed',
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      zIndex: 2,

      // etc
      backgroundColor: this.props.transparent ? 'transparent' : 'white',
    };

    // @ts-ignore
    return ReactDOM.createPortal(<div style={containerStyle}>{this.props.children}</div>, this.el);
  }
}

export default class Modal extends Component {
  render() {
    // @ts-ignore
    if (this.props.visible) {
      return <InnerModal {...this.props} />;
    }
    return null;
  }
}
