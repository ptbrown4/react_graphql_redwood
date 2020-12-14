import React, { useState } from "react"

import MainLayout from "src/layouts/MainLayout"
import UserCell from 'src/components/UserCell/UserCell'

function Users() {
  const [name, setName] = useState("")
  const [date, setDate] = useState("")
  const [description, setDescription] = useState("")
  const [showCreateForm, setShowCreateForm] = useState(false)

  return (
    <MainLayout>
    <button onClick={() => showCreateForm(true)}>Create New User</button>
    {showCreateForm && (
      <form
        onSubmit={
          () => {
            setName("")
            setDate("")
            setDescription("")
          }
        }
      >
        <label>Name: </label>
        <input 
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <label>Date: </label>
        <input 
          value={date}
          placeholder="Date"
          onChange={(e) => setDate(e.target.value)}
        />
        <label>Description: </label>
        <input 
          value={description}
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Save</button>
      </form>
    )}
    <UserCell />
    </MainLayout>
  )
}

export default Users
