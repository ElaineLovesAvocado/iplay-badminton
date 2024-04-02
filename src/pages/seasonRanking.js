import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import seasonRankOneGift from '../images/Season1March/starbucks.png'
import seasonRankTwoGift from '../images/Season1March/GiftBox.jpeg'
import season2RankOneGift from '../images/Season2/Season2Gift.png'
import season2RankTwoGift from '../images/Season2/Season2Rank2.jpg'

import './seasonRanking.css'


function CustomTabPanel(props) {
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

CustomTabPanel.propTypes = {
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

export default function SeasonRanking() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" 
        variant="scrollable" scrollButtons="auto">
          <Tab label="2024 Mar" {...a11yProps(0)} />
          <Tab label="2024 Apr" {...a11yProps(1)} />
          <Tab label="2024 May" {...a11yProps(2)} />
          <Tab label="2024 Jun" {...a11yProps(3)} />
          <Tab label="2024 Jul" {...a11yProps(4)} />
          <Tab label="2024 Aug" {...a11yProps(5)} />
          <Tab label="2024 Setp" {...a11yProps(6)} />
          <Tab label="2024 Oct" {...a11yProps(7)} />
          <Tab label="2024 Nov" {...a11yProps(8)} />
          <Tab label="2024 Dec" {...a11yProps(9)} />

        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <p> Rank 1 prize: $30 Starbucks Gift Card 🎉🎉🎉</p>
        <p> 🌟🌟🌟Yifan🌟🌟🌟 </p>
        <img src={seasonRankOneGift} height="80px" width="80px"></img>
        <p> Rank 2 prize: Special Gift Sponsored by Amy 🎉🎉🎉</p>
        <p> 🌟🌟🌟XD🌟🌟🌟 </p>
        <img src={seasonRankTwoGift} height="120px" ></img>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <p> Rank 1 prize: Aeroplane Shuttlecock EG1130 一桶黑航 🎉🎉🎉</p>
        <img src={season2RankOneGift} height="80px" width="80px"></img>
        <p> Rank 2 prize: Sport Shoe Bag with custom name 球鞋包 🎉🎉🎉</p>
        <img src={seasonRankTwoGift} height="120px" ></img>      
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Coming soon ...
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Coming soon ...
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        Coming soon ...
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        Coming soon ...
      </CustomTabPanel>
      <CustomTabPanel value={value} index={6}>
        Coming soon ...
      </CustomTabPanel>
      <CustomTabPanel value={value} index={7}>
        Coming soon ...
      </CustomTabPanel>
      <CustomTabPanel value={value} index={8}>
        Coming soon ...
      </CustomTabPanel>
      <CustomTabPanel value={value} index={9}>
        Coming soon ...
      </CustomTabPanel>
    </Box>
  );
}