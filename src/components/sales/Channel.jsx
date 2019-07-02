import React from 'react';

export default class Channel extends React.Component {
  render() {
    return (
      <div className="channel">
        <div className="channel-part">
          <div className="channel-square"></div>
          {this.props.channel.name}
        </div>
        <div className="channel-info">
          <span className="channel-gross-sales">
            ${this.props.channel ? this.props.formatNumber(this.props.channel.grossSales, 2) : null}
          </span>
          <span
            className={`yoy
            ${this.props.channel && this.props.channel.yearOverYear > 0 ? 
        'green' : 'red'
      }`}>
            {this.props.channel ? this.props.channel.yearOverYear : null }
          </span>
        </div>
      </div>
    );
  }

}