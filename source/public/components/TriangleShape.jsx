import React from 'react';

export default class TriangleShape extends React.Component {
  render() {
    const width = this.props.size / 15;
    const height = Math.sqrt(3) / 2 * this.props.size + width;

    const coordinates = `
      ${width} ${height - width},
      ${this.props.size - width} ${height - width},
      ${this.props.size / 2} ${width}
    `;

    const position = {
      top: this.props.y,
      left: this.props.x,
      position: 'absolute',
      transform: 'translate(-50%, -50%)',
    }

    return (
      <div style={position} >
        <div className={this.props.spin}>
          <svg width={this.props.size} height={this.props.size}>
            <polygon points={coordinates} strokeWidth={width} stroke={this.props.color} fill="transparent" />
          </svg>
        </div>
      </div>
    );
  }
}

TriangleShape.defaultProps = {
  size: '60',
  color: '#63B1F7',
  spin: 'right-spin',
  x: '50%',
  y: '50%',
}
