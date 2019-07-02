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
          {this.props.channel && this.props.channel.yearOverYear > 0 ?
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><path fill="#51c68b" d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/></svg> :
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><path fill="#ee534b" d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"/></svg>}
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