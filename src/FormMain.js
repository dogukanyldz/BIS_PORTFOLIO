import React, { useState } from 'react';
import { FormContent } from './FormContent.js';

export default function FormMain(props) {
	const [todos, setTodos] = useState([{name:'Ticari1',day:2,hour:8,alt:[]},
										{name:'Ticari2',day:2,hour:5,alt:[]},
										{name:'Ticari3',day:2,hour:5,alt:[]},
										{name:'Ticari4',day:2,hour:5,alt:[]},

										// {name:'KREDİ OPERASYONLARI DİPLOMA SINAVI/SON SINAV',day:4,hour:10},
										// {name:'Bireysel Kredi Mevzuatı',day:7,hour:2},
										// {name:'Operasyon Risk Ve Verimlilik',day:8,hour:3}
   										]);

	function createTask(index,value,input_index) {
		var data = [... todos];
        if(value==''){
            data[index].alt.push([value]);	
        }     
        else
            data[index].alt[input_index]=value	

        
		setTodos(data);
	}
	function deleteTask(index) {
		console.log(index);
		const newTodos = [... todos];
		newTodos.splice(index, 1);
		setTodos(newTodos);
	}
	function deleteAlt2(index,row_index) {
		var data = [... todos];
		data[row_index].alt.splice(index,1);		
		setTodos(data);
	}

	return <>
		<FormContent props={props} todos={[... todos]} createTask={createTask} deleteTask={deleteTask} deleteAlt2={deleteAlt2} />
	</>
}