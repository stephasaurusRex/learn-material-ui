import React from 'react';

import EngineHeader from './header/engineHeader';
import SalesBanner from './sales/salesBanner';
import RecentArticles from './articles/recentArticles';
import WantTo from './want-to/wantTo';

export default class TaxEngineDisplay extends React.Component {
  componentDidMount() {
    this.props.onFetchSales();
  }

  render() {
    return (
      <>
        <EngineHeader></EngineHeader>
        <SalesBanner sales={this.props.sales}></SalesBanner>
        <RecentArticles></RecentArticles>
        <WantTo></WantTo>
      </>
    );
  }

}
