import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { BsPlusCircle } from "react-icons/bs";
import { BsTrash, BsArrowsMove } from "react-icons/bs";
import Draggable from 'react-draggable';
import Button from '@mui/material/Button';
import * as newButton from 'react-bootstrap';
import ClearIcon from '@mui/icons-material/Clear';
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import DataTable from './table';
import { useNavigate } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

export function FormContent({ props, todos, createTask, deleteTask, deleteAlt2 }) {
	var navigate = useNavigate();
	const [value, setValue] = useState('');
	const [hasRender, setRender] = useState(false);
	const [age, setAge] = React.useState("");
	const [state, setState] = useState({
		value: '',
		show: ''
	});
	const handleKeyDown = (event, row_index, value, index) => {
		if (event.key === 'Enter') {
			createTask(row_index, value, index);
		}
	}
	const handleChange = (e) => {
		setState({ value: e.target.value })
	}

	const handleChange2 = (event) => {
		setAge(event.target.value);
	};

	const redirect = (e) => {
		setRender(true);
	}
	return (
		<div>
			{
				todos.map((todo, index) => {
					var row_index = index;
					return (
						<Draggable key={index}
							axis="y"
							handle=".handle"
							defaultPosition={{ x: 0, y: 0 }}
							grid={[25, 25]}
						>
							<Box key={index} sx={{ flexGrow: 1 }}>
								<Grid container spacing={2}>



									<Grid item xs={2}>

										<BsArrowsMove color="blue" className='handle' style={{ marginTop: "10px", width: "25%", cursor: 'move' }} size={51} onClick={() => deleteAlt2(index, row_index)} />

									</Grid>
									<Grid item xs={1}>
										<Select style={{ height: "65%", width: "120%", marginTop: "5px" }} value={age} onChange={handleChange2}>

											<MenuItem value={10}>1</MenuItem>
											<MenuItem value={20}>2</MenuItem>
											<MenuItem value={30}>3</MenuItem>
										</Select>
									</Grid>

									<Grid item xs={1}>
										<input className='text-center'
											style={{
												borderStyle: 'solid', color: 'red', borderColor: 'black', display: 'flex',
												width: '40px',
												height: '40px',
											}}
											defaultValue={todo.day}
										/>
									</Grid>
									<Grid item xs={1}>
										<input className='handle'
											style={{
												borderStyle: 'solid', color: 'red', borderColor: 'black', display: 'flex',
												width: '40px',
												height: '40px',

											}}
											defaultValue={todo.hour}
										/>
									</Grid>
									<Grid item xs={5}>

										<div>
											<input key={index} style={{ color: "black", textAlign: "center", backgroundColor: "#f1ddd6" }} className="handle" value={todo.name} ></input>
										</div>
									</Grid>
									<Grid item xs={1}>
										<Button sx={{ borderRadius: 35, mr: 15 }} className="svg_icons" variant="contained" color="error" startIcon={<ClearIcon />} onClick={() => deleteTask(index)}></Button>
										{/* <Button variant="contained" color="error" startIcon={<ClearIcon />} onClick={() => deleteTask(index)}></Button> */}
									</Grid>
									<Grid item xs={1}>
										<BsPlusCircle color="pink" size={26} onClick={() => createTask(index, "")} />
										{/* <Button startIcon={<AddIcon />} variant="contained" color="success" onClick={() => createTask(index,"")}></Button> */}
									</Grid>

									<Grid item xs={5}>
									</Grid>


									<Grid item xs={5}>
										{

											todo.alt.map((todos, index) => {
												return (


													<div className='input-t' key={index}>

														<input style={{ color: "black", textAlign: "center", width: "90%" }} defaultValue={todos} className='text-center' onChange={(e) => handleChange(e)} onKeyDown={(event) => handleKeyDown(event, row_index, state.value, index)}></input>
														<BsTrash color="red" style={{ marginTop: "10px", width: "10%" }} size={21} onClick={() => deleteAlt2(index, row_index)} />

													</div>

												)
											})}

									</Grid>
								</Grid>
							</Box>
						</Draggable>
					);
				})

			}
			<Link to="/table" state={{ data: todos }}>
				<button type="button">
					Sonraki Adım
				</button>
			</Link>




		</div>
	)
}
