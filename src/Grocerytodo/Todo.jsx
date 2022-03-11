import React, { useEffect, useState } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = () => {
    let getItem = localStorage.getItem('list');
    if (getItem) {
        return JSON.parse(localStorage.getItem('list'))
    } else {
        return []
    }
}


const Todo = () => {
    const [name, setName] = useState('')
    const [list, setList] = useState(getLocalStorage())
    const [isEdit, setIsEdit] = useState(false)
    const [editId, setEditId] = useState(null)
    const [alert, setAlert] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name) {
            showAlert(true, 'danger', 'Field should not be empty!')
        } else if (name && isEdit) {
            setList(list.map((item) => {
                if (item.id === editId) {
                    return { ...item, title: name.toUpperCase() }
                }
                return item
            }))
            setName('')
            setEditId(null)
            setIsEdit(false)
            showAlert('true', 'success', 'Item Edited!')
        } else {
            showAlert(true, 'success', 'item added to the grocery list')
            const newItem = { id: new Date().getTime().toString(), title: name }
            setList([...list, newItem])
            setName('')
        }
    }

    const showAlert = (show = false, type = '', msg = '') => {
        setAlert({ show, type, msg })
    }

    const clearList = () => {
        showAlert('true', 'danger', 'Grocery List Cleared!')
        setList([])
    }

    const removeItem = (id) => {
        showAlert('true', 'danger', 'item removed!')
        setList(list.filter((item) => item.id !== id))
    }

    const editItem = (id) => {
        const specificItem = list.find((item) => item.id === id)
        setIsEdit(true)
        setEditId(id)
        setName(specificItem.title)
    }


    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list))
    }, [list])
    return (
        <div className="container text-center">
            <div className="card mt-5 mb-5">
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
                        <h3>Grocery Bud</h3>
                        <input type="text" className="form-control" placeholder="Enter text" value={name} onChange={(e) => { setName(e.target.value) }} />
                        <button type="submit" className="btn btn-dark mt-4">
                            {isEdit ? 'edit' : 'submit'}
                        </button>
                    </form>
                    {list.length > 0 && (
                        <div className="lists">
                            <List list={list} edit={editItem} removeItem={removeItem} />
                            <button className="btn btn-primary mt-5" onClick={clearList}>Clear</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Todo
