import React from 'react';
import MonthlyData from './MonthlyData';
import ChannelData from './ChannelData';
import {connect} from "react-redux";

class SalesBanner extends React.Component {
  formatNumber = (number, fix) =>
    Number.parseFloat(number).toFixed(fix).replace(/\d(?=(\d{3})+\.)/g, '$&,');

  render() {
    return (
      <div className="sales-banner">
        <h3 className="sales-title">Sales this month</h3>
        <MonthlyData formatNumber={this.formatNumber}
                     sales={this.props.sales}>

        </MonthlyData>
        <ChannelData formatNumber={this.formatNumber}
                     channels={this.props.sales
                       ? this.props.sales.salesChannels
                       : []}>

        </ChannelData>
      </div>
    );
  }

}

export default connect()(SalesBanner);