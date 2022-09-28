import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import COLORS from '../../../constants/Colors';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function ProjectTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box >
      <Box >
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="React native" {...a11yProps(0)} />
          <Tab label="Android (Native)" {...a11yProps(1)} />
          <Tab label="React Website" {...a11yProps(2)} />
          <Tab label="Node.js" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {/* Item One */}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {/* Item Two */}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {/* Item Three */}
      </TabPanel>
      <TabPanel value={value} index={3}>
        {/* Item Three */}
      </TabPanel>
    </Box>
  );
}
