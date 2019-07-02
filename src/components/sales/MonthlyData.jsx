import React from 'react';
import { connect } from 'react-redux'

class MonthlyData extends React.Component {
  render() {
    return (
      <div className="monthly-data">
        <div className='bold'>${this.props.formatNumber(this.props.sales.grossSales,2)} gross</div>
        <div>${this.props.formatNumber(this.props.sales.taxDue, 2)} tax</div>
        <div>{this.props.formatNumber(this.props.sales.trxQuantity, 0)} calculations</div>
      </div>
    );
  }

}

export default connect()(MonthlyData);