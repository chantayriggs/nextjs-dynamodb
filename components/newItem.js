import React from 'react';
import { useState } from "react"

const NewItem = () => {

    const [createText, setCreateText ] = useState("")

    const handleNewItem = async () => {
        event.preventDefault()
        const data = {
            content: createText
        }
        try {
          const res = await fetch('/api/item', {
            method: 'PUT',
            body: data
          });
          console.log(res)
        } catch (error) {
          console.error(error);
        }
    }

    return (
        <div>
            <h1>Create new Item</h1>
            <form onSubmit={handleNewItem}>
                <label>Input new content</label>
                <input type="text" onChange={ event => setCreateText(event.target.value)} value={createText} />
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default NewItem;