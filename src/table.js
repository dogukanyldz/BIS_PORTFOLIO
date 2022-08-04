import Table from '@mui/material/Table';
import {useLocation} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import LogoutIcon from '@mui/icons-material/Logout';
import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
export default function DataTable() {

    const location = useLocation()
    var data = location.state.data;
    return (
        <><Box sx={{ flexGrow: 1 }}>
        </Box><TableContainer component={Paper}>
            <Table sx={{ minWidth: 1050,minHeight:300 }} size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell style={{color: 'red'}} align="right">Name</TableCell>
                  <TableCell style={{color: 'red'}} align="right">Day</TableCell>
                  <TableCell style={{color: 'red'}}align="right">Hour</TableCell>
                  <TableCell style={{color: 'red'}}align="right">Alt</TableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row,index) => (
                  <TableRow
                    key={row.tc}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="right">{row.name}</TableCell>

                    <TableCell align="right">{row.day}</TableCell>
                    <TableCell align="right">{row.hour}</TableCell>
                    <TableCell align="right">{row.alt}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer></>
      );
}
