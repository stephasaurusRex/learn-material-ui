import { connect } from 'react-redux';

import applyHOCs from '../helpers/applyHOCs';

import TaxEngineDisplay from './taxEngineDisplay';

import { fetchSales } from '../actions/uiActions';

function mapStateToProps(state) {
  return {
    sales: state.ui.sales,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onFetchSales: () => dispatch(fetchSales()),
  };
}

export default applyHOCs(
  connect(mapStateToProps, mapDispatchToProps),
)(TaxEngineDisplay);
