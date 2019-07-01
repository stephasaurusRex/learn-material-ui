import React from 'react';

export default class TaxEngineDisplay extends React.Component {
  componentDidMount() {
    this.props.onFetchSales();
  }

  render() {
    const {
      sales,
    } = this.props;

    return (
      <div>
        {sales ? sales.grossSales: 'hi'}
      </div>
    );
  }

}
