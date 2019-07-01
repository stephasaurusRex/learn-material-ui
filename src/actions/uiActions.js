export const FETCH_SALES_BEGIN   = 'FETCH_SALES_BEGIN';
export const FETCH_SALES_SUCCESS = 'FETCH_SALES_SUCCESS';
export const FETCH_SALES_FAILURE = 'FETCH_SALES_FAILURE';

export const fetchSalesBegin = () => ({
  type: FETCH_SALES_BEGIN
});

export const fetchSalesSuccess = () => ({
  type: FETCH_SALES_SUCCESS,
  payload: {
    // This month’s gross sales
    // This month’s tax due
    // This month’s quantity of transactions (X calculations)
    // A list of sales channels that has the channel name, monthly gross sales and a YoY comparison
    grossSales: 187832.90,
    taxDue: 1196.83,
    trxQuantity: 23391,
    salesChannels: [
      {
        name: 'Amazon',
        grossSales: 12301.21,
        yearOverYear: 12.1,
      },
      {
        name: 'E-comm',
        grossSales: 20931.94,
        yearOverYear: -3.4,
      },
      {
        name: 'In Store POS',
        grossSales: 24849.33,
        yearOverYear: 4.7,
      },
      {
        name: 'ERP AR',
        grossSales: 113492.01,
        yearOverYear: 1.2,
      }

    ]
  }
});

export const fetchSalesFailure = error => ({
  type: FETCH_SALES_FAILURE,
  payload: { error }
});

export const fetchSales = () => {
  return dispatch => {
    dispatch(fetchSalesBegin());
    dispatch(fetchSalesSuccess());
    // if there were actually a fetch call here.
    // catch(error => dispatch(fetchSalesFailure(error)));
  };
};

// Handle http errors
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}