import React, { Component } from 'react';

const styles = {
  height: '100px',
  width: '200px',
  margin: '20px auto 0 auto',
}

export default class ColorBox extends Component {

  render() {
    const { color } = this.props;
    return (
      <div style={{ ...styles, backgroundColor: `${color}` }}></div>
    );
  }
}
