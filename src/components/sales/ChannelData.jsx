import React from 'react';
import Channel from './Channel';

export default class ChannelData extends React.Component {
  render() {
    return (
      <div className="channel-data">{console.log(this.props)}
        <h3>{this.props.channels ? this.props.channels.length : 0 } channels</h3>
        {this.props.channels ?
          this.props.channels.map((channel) => (
            <Channel formatNumber={this.props.formatNumber} key={channel.name} channel={channel}></Channel>
          ))
          : null}
      </div>
    );
  }

}