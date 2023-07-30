// import React from 'react';

// import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
// import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

// const dummyData = [
//   { name: 'Stock A', day: 120, week: -8000, month: 3200, quarter: 10000, year: 40000 },
//   { name: 'Stock B', day: 80, week: 600, month: 2400, quarter: 8000, year: 30000 },
//   { name: 'Stock C', day: 200, week: -1000, month: 4200, quarter: 15000, year: 50000 },
//   { name: 'Stock D', day: 50, week: 400, month: 1800, quarter: 6000, year: 20000 },
//   { name: 'Stock E', day: 180, week: 1200, month: 5000, quarter: 20000, year: 80000 },
// ];

// const App = () => {

//   return (
//     <Container maxWidth="md" >
//       <TableContainer component={Paper} >
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Stock</TableCell>
//               <TableCell align="right">Day</TableCell>
//               <TableCell align="right">Week</TableCell>
//               <TableCell align="right">Month</TableCell>
//               <TableCell align="right">Quarter</TableCell>
//               <TableCell align="right">Year</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {dummyData.map((stock) => (
//               <TableRow key={stock.name}>
//                 <TableCell>{stock.name}</TableCell>
//                 <TableCell align="right">{stock.day}</TableCell>
//                 <TableCell align="right">{stock.week}</TableCell>
//                 <TableCell align="right">{stock.month}</TableCell>
//                 <TableCell align="right">{stock.quarter}</TableCell>
//                 <TableCell align="right">{stock.year}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       <BarChart layout='vertical' width={600} height={400} data={dummyData}>

//         {/* <XAxis type="number" />
//         <YAxis dataKey="name" type="category" /> */}
//         <XAxis type="number" />
//         <YAxis dataKey="name" type="category" />
//         <Legend />
//         {/* <Bar dataKey="day" fill="#8884d8" name="Day" />
//         <Bar dataKey="week" fill="#82ca9d" name="Week" />
//         <Bar dataKey="month" fill="#ffc658" name="Month" />
//         <Bar dataKey="quarter" fill="#ca82aa" name="Quarter" />
//         <Bar dataKey="year" fill="#82caaa" name="Year" />  */}
//          <Bar dataKey="day" fill="#8884d8" name="Day" />
//         <Bar dataKey="week" fill="#82ca9d" name="Week" />
//         <Bar dataKey="month" fill="#ffc658" name="Month" />
//         <Bar dataKey="quarter" fill="#ca82aa" name="Quarter" />
//         <Bar dataKey="year" fill="#82caaa" name="Year" />

//       </BarChart>

//     </Container>

//   );
// };

// export default App;

// import React, { useState } from 'react';
// import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
// import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

// const dummyData = [
//   { name: 'Stock A', day: 120, week: -8000, month: 3200, quarter: 10000, year: 40000 },
//   { name: 'Stock B', day: 80, week: 600, month: 2400, quarter: 8000, year: 30000 },
//   { name: 'Stock C', day: 200, week: -1000, month: 4200, quarter: 15000, year: 50000 },
//   { name: 'Stock D', day: 50, week: 400, month: 1800, quarter: 6000, year: 20000 },
//   { name: 'Stock E', day: 180, week: 1200, month: 5000, quarter: 20000, year: 80000 },
// ];

// const timeFrames = ["Day", "Week", "Month", "Quarter", "Year"];

// const App = () => {
//   const [selectedStock, setSelectedStock] = useState(null);

//   const handleStockClick = (stock) => {
//     setSelectedStock(stock);
//   };

//   return (
//     <Container maxWidth="md">
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Time Frame</TableCell>
//               {dummyData.map((stock) => (
//                 <TableCell key={stock.name} align="right" onClick={() => handleStockClick(stock.name)}>
//                   {stock.name}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {timeFrames.map((timeFrame) => (
//               <TableRow key={timeFrame}>
//                 <TableCell>{timeFrame}</TableCell>
//                 {dummyData.map((stock) => (
//                   <TableCell key={stock.name} align="right">
//                     {stock[timeFrame.toLowerCase()]}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {selectedStock && (
//         <BarChart layout="vertical" width={600} height={400} data={[dummyData.find((stock) => stock.name === selectedStock)]}>
//           <XAxis type="number" />
//           <YAxis dataKey="name" type="category" />
//           <Legend />
//           <Bar dataKey="day" fill="#8884d8" name="Day" />
//           <Bar dataKey="week" fill="#82ca9d" name="Week" />
//           <Bar dataKey="month" fill="#ffc658" name="Month" />
//           <Bar dataKey="quarter" fill="#ca82aa" name="Quarter" />
//           <Bar dataKey="year" fill="#82caaa" name="Year" />
//         </BarChart>
//       )}
//     </Container>
//   );
// };

// export default App;

import React, { useState } from "react";

import {
  Card,
  Button,
  Box,
  Paper,
  Dialog,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import Grid from "@mui/material/Grid";
const dummyData = [
  {
    name: "Stock A",
    day: 120,
    week: -8000,
    month: 3200,
    quarter: 10000,
    year: 40000,
  },
  {
    name: "Stock B",
    day: 80,
    week: 600,
    month: 2400,
    quarter: 8000,
    year: 30000,
  },
  {
    name: "Stock C",
    day: 200,
    week: -1000,
    month: 4200,
    quarter: 15000,
    year: 50000,
  },
  {
    name: "Stock D",
    day: 50,
    week: 400,
    month: 1800,
    quarter: 6000,
    year: 20000,
  },
  {
    name: "Stock E",
    day: 180,
    week: 1200,
    month: 5000,
    quarter: 20000,
    year: 80000,
  },
];

const timeFrames = ["Day", "Week", "Month", "Quarter", "Year"];
const colors = ["#8884d8", "#82ca9d", "#ffc658", "#ca82aa", "#82caaa"];

const App = () => {
  const [selectedStock, setSelectedStock] = useState(null);
  const [open, setOpen] = useState(false);


  const handleStockClick = (stock) => {
    setSelectedStock(stock);
    handleClickOpen();
  };


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  

  
  return (
<Box sx={{backgroundColor:'gray ',height:'100vh',overflow:"hidden"}}>
    <Box
      my={4}
      mx={2}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:'gray',
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
        <Grid item xs={12} md={6} lg={6} xl={6}>
          <Card sx={{backgroundColor:'gray'}}>
            <TableContainer component={Paper} >
              <Table height={400}>
                <TableHead>
                  <TableRow>
                    <TableCell>Time Frame</TableCell>
                    {dummyData.map((stock) => (
                      <TableCell key={stock.name} align="right">
                        <Button
                          variant="contained"
                          size="small"
                          onClick={() => handleStockClick(stock.name)}
                        >
                          {stock.name}
                        </Button>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {timeFrames.map((timeFrame) => (
                    <TableRow key={timeFrame}>
                      <TableCell>{timeFrame}</TableCell>
                      {dummyData.map((stock) => (
                        <TableCell key={stock.name} align="right">
                          {stock[timeFrame.toLowerCase()]}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={6} xl={6}>
          <Card>
            <BarChart
              layout="vertical"
              width={600}
              height={400}
              data={dummyData}
            >
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" />
              <Tooltip />

              <Legend />
              {timeFrames.map((timeFrame, index) => (
                <Bar
                  key={timeFrame}
                  dataKey={timeFrame.toLowerCase()}
                  fill={colors[index]}
                  name={timeFrame}
                />
              ))}
            </BarChart>
          </Card>
        </Grid>
      </Grid>

      <Dialog maxWidth={true} open={open} onClose={handleClose}>
        <Card sx={{ m: 6, width: 600 }}>
          {selectedStock && (
            <BarChart
              layout="vertical"
              width={500}
              height={400}
              data={[dummyData.find((stock) => stock.name === selectedStock)]}
            >
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" />
              <Tooltip />

              <Legend />
              {timeFrames.map((timeFrame, index) => (
                <Bar
                  key={timeFrame}
                  dataKey={timeFrame.toLowerCase()}
                  fill={colors[index]}
                  name={timeFrame}
                />
              ))}
            </BarChart>
          )}
        </Card>
      </Dialog>
    </Box>
    </Box>
  );
};

export default App;
