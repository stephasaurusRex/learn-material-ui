import React from 'react';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default function EngineHeader() {
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }
  return (
    <div className="engine-header">
      <div>
        <h3 className="inline title">Determination Engine</h3>
        <Button variant="contained" color="primary" className="engine-header-button">
        Calculate
        </Button>
      </div>
      <div>
        <Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary">
          <Tab label="Overview" />
          <Tab label="Recent Quotes" />
        </Tabs>
      </div>
    </div>
  );
}