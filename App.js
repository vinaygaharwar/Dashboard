import React from 'react';
import { View, Text, Dimensions} from 'react-native';
import { DataTable,Card, Title, Paragraph } from 'react-native-paper';
import {LineChart} from 'react-native-chart-kit';


import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const labels = [
  '7/1/2020',
  '7/2/2020',
  '7/3/2020',
  '7/4/2020',
  
];

const data = [
 20000,
 
 30000,
 
 25000,
 
 45000,
];

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(Order,Tamount,Tquantity,Uname,City,Orderdate,Status,Totalproductcount) {
  return { Order,Tamount,Tquantity,Uname,City,Orderdate,Status,Totalproductcount};
}

const rows = [
  createData(1, 500, 50, 'Amit','Delhi','7/1/2020','Ordered',2500),
  createData(2, 400, 40, 'Sandeep','Dehradun','7/2/2020','Order in process',1600),
  createData(3, 300, 30,'Shugham','gurugram','7/3/2020','Ordered',900),
  createData(4, 200, 20, 'Manish','Noida','7/4/2020','Ordered',400),
  createData(5, 100, 10, 'Priyanshu','Chandigarh','7/4/2020','Ordered',100),
];


const App =() => {
  const classes = useStyles();
  return (
    
     
        <View >
          <Text style={{marginBottom:15,fontWeight: 'bold'}}>Row 1- Four tile card in a row having information-</Text>
          <View style={{flexDirection: 'column',marginBottom:15}}>
          
          <View style={{flexDirection: 'row'}}>

        <Card style={{flex:1,marginBottom:30 }}/>

        <View style={{flex:1,marginBottom:30 , justifyContent:'space-between'}}>
    <Card.Content style={{width: 200,height:100,backgroundColor:'#3467eb'}}>
      
      <Paragraph>Todays order-200</Paragraph>
      <Paragraph>Current week order-150</Paragraph>
    </Card.Content>
    </View>
    
    <View style={{flex:1,marginBottom:30 , justifyContent:'space-between'}}>
    <Card.Content style={{width: 200,height:100,backgroundColor:'#3467eb'}}>
    <Paragraph>Todays orderamount -2000</Paragraph>
      <Paragraph>Current week amount-45000</Paragraph>
    </Card.Content>
    </View>

    <View style={{flex:1,marginBottom:30 , justifyContent:'space-between'}}>
    <Card.Content style={{width: 200,height:100,backgroundColor:'#3467eb'}}>
    <Paragraph>MTD order - 400</Paragraph>
      <Paragraph>Last month order-200</Paragraph>
    </Card.Content>
    </View>
  
    <View style={{flex:1,marginBottom:30 , justifyContent:'space-between'}}>
    <Card.Content style={{width: 200,height:100,backgroundColor:'#3467eb'}}>
    <Paragraph>MTD order amount-65000</Paragraph>
      <Paragraph>Last month amount-15000</Paragraph>
    </Card.Content>
    </View>
    
        <Card style={{flex:1}}/>
        
    </View>
    
  </View>
  <Text style={{marginBottom:15,fontWeight: 'bold'}}>Row 2- Daily Order Trend Order Count Chart Using Line Chart-</Text>
          <View
            style={{
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 25}}>Order Amount</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <LineChart
              data={{
                labels: labels,
                datasets: [
                  {
                    data: data,
                  },
                ],
              }}
              width={Dimensions.get('window').width-50 } 
              height={220}
              chartConfig={{
                backgroundColor: 'white',
                backgroundGradientFrom: 'white',
                backgroundGradientTo: 'white',
                
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                
              }}
             
            />
          </View>
          <View>
          <Text style={{marginBottom:15,fontWeight: 'bold'}}>Row 3- Add top five and bottom five order tables</Text>
          <Text style={{marginTop:15,textDecorationLine: 'underline',fontSize: 15}}>Top five Order</Text>
          <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Order NO</TableCell>
            <TableCell align="right">Total Amount</TableCell>
            <TableCell align="right">Total Quantity</TableCell>
            <TableCell align="right">User Name</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.Order}>
              <TableCell component="th" scope="row">
                {row.Order}
              </TableCell>
              
              <TableCell align="right">{row.Tamount}</TableCell>
              <TableCell align="right">{row.Tquantity}</TableCell>
              <TableCell align="right">{row.Uname}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </View>

            <View>
              <Text style={{marginTop:15,textDecorationLine: 'underline',fontSize: 15}}>Bottom five Order</Text>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Order NO</TableCell>
            <TableCell align="right">Total Amount</TableCell>
            <TableCell align="right">Total Quantity</TableCell>
            <TableCell align="right">User Name</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.Order}>
              <TableCell component="th" scope="row">
                {row.Order}
              </TableCell>
              
              <TableCell align="right">{row.Tamount}</TableCell>
              <TableCell align="right">{row.Tquantity}</TableCell>
              <TableCell align="right">{row.Uname}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </View>

    <View>
          <Text style={{marginBottom:15,fontWeight: 'bold'}}>Row 4- Add top five and bottom five user tables</Text>
          <Text style={{marginTop:15,textDecorationLine: 'underline',fontSize: 15}}>Top five user</Text>
          <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell >User Name</TableCell>
            <TableCell align="right">Total Amount</TableCell>
            <TableCell align="right">Total Quantity</TableCell>
            <TableCell align="right">City</TableCell>
            
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.Uname}>
              <TableCell component="th" scope="row">
                {row.Uname}
              </TableCell>
              
              <TableCell align="right">{row.Tamount}</TableCell>
              <TableCell align="right">{row.Tquantity}</TableCell>
              <TableCell align="right">{row.City}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </View>

            <View>
              <Text style={{marginTop:15,textDecorationLine: 'underline',fontSize: 15}}>Bottom five user</Text>
              
          <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell >User Name</TableCell>
            <TableCell align="right">Total Amount</TableCell>
            <TableCell align="right">Total Quantity</TableCell>
            <TableCell align="right">City</TableCell>
            
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.Uname}>
              <TableCell component="th" scope="row">
                {row.Uname}
              </TableCell>
              
              <TableCell align="right">{row.Tamount}</TableCell>
              <TableCell align="right">{row.Tquantity}</TableCell>
              <TableCell align="right">{row.City}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </View>

    <View>
    <Text style={{marginBottom:15,fontWeight: 'bold'}}>Row 5- Detail Order Report</Text>
              
          <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell >User Name</TableCell>
          <TableCell align="right">OrderNo</TableCell>
          <TableCell align="right">OrderDate</TableCell>
          <TableCell align="right">Status</TableCell>
            <TableCell align="right">Total Amount</TableCell>
            <TableCell align="right">Total Quantity</TableCell>
            <TableCell align="right">Totalproductcount</TableCell>
            
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.Uname}>
              <TableCell component="th" scope="row">
                {row.Uname}
              </TableCell>
              <TableCell align="right">{row.Order}</TableCell>
              <TableCell align="right">{row.Orderdate}</TableCell>
              <TableCell align="right">{row.Status}</TableCell>
              <TableCell align="right">{row.Tamount}</TableCell>
              <TableCell align="right">{row.Tquantity}</TableCell>
              <TableCell align="right">{row.Totalproductcount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </View>
  
        </View>
        
    
  );
};

export default App;
