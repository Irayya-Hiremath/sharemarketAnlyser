// import React, { useState } from 'react';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

// const fixedData = [
//   { name: 'SPY', Day: 2, Week: 4, Month: 6, YearToDate: 22, Year: 25 },
//   { name: 'QQQ', Day: 3, Week: 5, Month: 8, YearToDate: 28, Year: 20 },
//   { name: 'SECTOR', Day: 3, Week: 5, Month: 20, YearToDate: -15, Year: 22 },
// ];

// const stocksData = [
//   { name: 'TATA', Day: 10, Week: 12, Month: 15, YearToDate: 5, Year: 10 },
//   { name: 'GOOG', Day: 5, Week: 8, Month: 12, YearToDate: 18, Year: 15 },
//   { name: 'AMZN', Day: 8, Week: 10, Month: 14, YearToDate: 20, Year: 22 },
//   { name: 'MSFT', Day: 6, Week: 9, Month: 16, YearToDate: 25, Year: 30 },
//   { name: 'TSLA', Day: 15, Week: 20, Month: 25, YearToDate: 30, Year: 35 },
//   { name: 'NVDA', Day: 12, Week: 15, Month: 22, YearToDate: 28, Year: 25 },
//   { name: 'BABA', Day: 18, Week: 25, Month: 30, YearToDate: 35, Year: 40 },
//   { name: 'NFLX', Day: 9, Week: 13, Month: 17, YearToDate: 15, Year: 12 },
//   { name: 'JPM', Day: 7, Week: 10, Month: 12, YearToDate: 5, Year: 8 },
//   { name: 'V', Day: 22, Week: 28, Month: 32, YearToDate: 38, Year: 40 },
//   { name: 'MA', Day: 20, Week: 26, Month: 30, YearToDate: 35, Year: 42 },
//   { name: 'PG', Day: 2, Week: 3, Month: 5, YearToDate: 8, Year: 10 },
//   { name: 'KO', Day: 4, Week: 6, Month: 10, YearToDate: 12, Year: 15 },
//   { name: 'DIS', Day: 12, Week: 18, Month: 24, YearToDate: 28, Year: 30 },
//   { name: 'PEP', Day: 6, Week: 8, Month: 12, YearToDate: 15, Year: 18 },
//   { name: 'WMT', Day: 8, Week: 12, Month: 15, YearToDate: 20, Year: 25 },
// ];

// const StockChart = () => {
  
//     const [selectedStock, setSelectedStock] = useState(null);
  
//     // Function to handle stock selection
//     const handleStockSelect = (event, value) => {
//       setSelectedStock(value);
//     };
  
//     // Function to compare the selected stock's data with fixedData
//     const getComparisonData = () => {
//       if (selectedStock) {
//         const stockData = stocksData.find((stock) => stock.name === selectedStock.name);
//         if (stockData) {
//           return Object.keys(stockData).map((key) => ({
//             name: key,
//             [selectedStock.name]: stockData[key],
//             FixedData: fixedData.find((data) => data.name === selectedStock.name)[key],
//           }));
//         }
//       }
//       return [];
//     };
  
//     const comparisonData = getComparisonData();
//     console.log(comparisonData)
  
//     return (
//       <div>
//         {/* Search bar */}
//         <Autocomplete
//           options={stocksData}
//           getOptionLabel={(option) => option?.name || ''} 
//           onChange={handleStockSelect}
//           renderInput={(params) => <TextField {...params} label="Search Stock" />}
//         />
  
//         {selectedStock && (
//           <BarChart
//             width={500}
//             height={400}
//             layout="vertical"
//             data={comparisonData}
//             margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
//           >
//             <XAxis type="number" />
//             <YAxis dataKey="name" type="category" />
//             <Tooltip />
//             <Legend />
  
//             <Bar dataKey={selectedStock?.name} fill="#8884d8" name={selectedStock?.name} /> {/* Handle null or undefined case */}
//             <Bar dataKey="FixedData" fill="#82ca9d" name="FixedData" />
//           </BarChart>
//         )}
//       </div>
//     );
//   };
  
// export default StockChart;


import React, { useState } from 'react';
import { TextField, Autocomplete, Box,Grid,Card } from '@mui/material';
import {InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, Legend, CartesianGrid,LabelList } from 'recharts';


const fixedData = [
  { name: 'SPY', Day: 2, Week: 4, Month: 6, YearToDate: 22, Year: -25 },
  { name: 'QQQ', Day: 3, Week: 5, Month: 8, YearToDate: -28, Year: 20 },
  { name: 'SECTOR', Day: 3, Week: 5, Month: 20, YearToDate: -15, Year: 22 },
];

const stocksData = [
  { name: 'TATA', Day: 10, Week: 12, Month: 15, YearToDate: 5, Year: 10 },
  { name: 'GOOG', Day: 5, Week: 8, Month: 12, YearToDate: 18, Year: 15 },
  { name: 'AMZN', Day: 8, Week: 10, Month: 14, YearToDate: 20, Year: 22 },
  { name: 'MSFT', Day: 6, Week: 9, Month: 16, YearToDate: 25, Year: 30 },
  { name: 'TSLA', Day: 15, Week: 20, Month: 25, YearToDate: 30, Year: 35 },
  { name: 'NVDA', Day: 12, Week: 15, Month: 22, YearToDate: 28, Year: 25 },
  { name: 'BABA', Day: 18, Week: 25, Month: 30, YearToDate: 35, Year: -40 },
  { name: 'NFLX', Day: 9, Week: 13, Month: 17, YearToDate: 15, Year: 12 },
  { name: 'JPM', Day: 7, Week: 10, Month: 12, YearToDate: 5, Year: 8 },
  { name: 'V', Day: 22, Week: 28, Month: 32, YearToDate: -38, Year: 40 },
  { name: 'MA', Day: 20, Week: 26, Month: 30, YearToDate: 35, Year: 42 },
  { name: 'PG', Day: 2, Week: 3, Month: 5, YearToDate: 8, Year: 10 },
  { name: 'KO', Day: 4, Week: 6, Month: 10, YearToDate: 12, Year: 15 },
  { name: 'DIS', Day: 12, Week: 18, Month: 24, YearToDate: 28, Year: 30 },
  { name: 'PEP', Day: 6, Week: 8, Month: 12, YearToDate: 15, Year: 18 },
  { name: 'WMT', Day: 8, Week: 12, Month: 15, YearToDate: 20, Year: 25 },
];
const StockChart = () => {

  const [selectedStock, setSelectedStock] = useState(null);
const barArr=[selectedStock, ...fixedData]
  const handleStockChange = (_, newValue) => {
    setSelectedStock(newValue);
  };
  const timeFrames = ["Day", "Week", "Month", "YearToDate", "Year"];
// const colors = ["#8884d8", "#82ca9d", "#ffc658", "#ca82aa", "#82caaa"];
  return (
    <Box sx={{height:'100vh',overflow:"hidden"}}>
 
      <Autocomplete
        sx={{ width: 250,m:10,color:'white',zIndex:1,outline:"none",border:'transparent',borderRadius:4}}

      options={stocksData}
      // value={searchText}
      getOptionLabel={(option) => option.name}

      onChange={handleStockChange}
      renderInput={(params) => (
        <TextField
        sx={{color:'white',backgroundColor:'white',zIndex:1,borderRadius:5,outline:"none",border:'transparent'}}
          {...params}
          // label="Search stocks"
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start" 
              
        sx={{color:'white',backgroundColor:'white',zIndex:1,borderRadius:5,outline:"none",border:'transparent'}}
              
              >
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      )}
    />
    <Box
      my={4}
      mx={2}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor:'gray',
      }}
    >
      
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
       
       {/* {selectedStock && ( <Grid item xs={6} md={4} lg={4} xl={4}>
          <Card>
         

          <TableContainer component={Paper} >
               <Table  sx={{height:{sm:400,md:400,lg:400} }} >
                 <TableHead>
                   <TableRow>
                     <TableCell sx={{fontSize:{xs:8,sm:14,md:14,lg:14} }}  >Time Frame</TableCell>
                     <TableCell sx={{fontSize:{xs:8,sm:14,md:14,lg:14} }}  >{selectedStock.name}</TableCell>
                   </TableRow>
                 </TableHead>
                 <TableBody>
                   {timeFrames.map((timeFrame) => (
                     <TableRow key={timeFrame}>
                       <TableCell sx={{fontSize:{xs:8,sm:14,md:14,lg:14} }}>{timeFrame}</TableCell>
                      
                  
                     </TableRow>
                     
                   ))}
                    {Object.keys(selectedStock).map((key) => (
                       <TableCell sx={{fontSize:{xs:8,sm:14,md:14,lg:14} }}>{key}</TableCell>
                       ))}
                       
                  
                 </TableBody>
               </Table>
             </TableContainer>

          </Card>
        </Grid>)} */}
        <Grid item xs={12} md={6} lg={6} xl={6}>
          <Card>
          {selectedStock && (


              
          <BarChart layout="vertical" width={600} height={400} data={[selectedStock, ...fixedData]}>
            {/* <CartesianGrid strokeDasharray="3" /> */}
            {/* <XAxis dataKey="name" /> */}
            
            {/* <YAxis> */}
              {/* <Label value="Values" position="insideLeft" angle={-90} offset={0} /> */}
            {/* </YAxis> */}
            {/* <Tooltip /> */}
            <XAxis type="number" />  
            {/* {timeFrames.map((el)=>{
              return(
                <YAxis dataKey={el} type="category" />

              )
            })}   
                     */}
                     
            <YAxis dataKey='name' type="category" />
            <Legend />
            {/* {barArr.map((el)=>{
              return(
                
              )
            })} */}
            <Bar dataKey="Day" fill="#8884d8" ></Bar>
            <Bar dataKey="Week" fill="#82ca9d" />
            <Bar dataKey="Month" fill="#ffc658" />
            <Bar dataKey="YearToDate" fill="#ca82ca" />
            <Bar dataKey="Year" fill="#f5a623" />
          </BarChart>

        )}
          </Card>
        </Grid>
        
      </Grid>

      
    </Box>
    </Box>
   
  );
};

export default StockChart;


