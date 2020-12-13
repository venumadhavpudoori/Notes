import React, { useState,Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../redux/actions';

import ArrowRightIcon from '@material-ui/icons/ArrowRight';

function TodoItem({todo}) {
    const [editable, setEditable] = useState(false);
    const [name, setName] = useState(todo.name);
    let dispatch = useDispatch();
    return (
        <div>   
            <div className="row mx-2 align-items-center">
            <Fragment>
                <div>{<ArrowRightIcon />}</div>
                <div className="col">
                { editable ? 
                <input 
                type='text' 
                className='form-control' 
                value={name}
                onChange={
                    (e) => setName(e.target.value)
                } /> :  <h4>{todo.name}</h4>  }
                </div>
                <button
                onClick={() => {
                    console.log("update");
                    dispatch(updateTodo(
                        {
                            ...todo,
                            name:name
                        }
                    ))
                    if(editable){
                        setName(todo.name);
                    }
                     setEditable(!editable); 
                     
                }}
                className="btn btn-primary m-2">{editable ? "Update" : "Edit" }</button>
                <button
                onClick={() => dispatch(deleteTodo(todo.id))}
                className="btn btn-danger m-2">Delete</button>
                </Fragment>
            </div>
        </div>     
    
    );
}

export default TodoItem;