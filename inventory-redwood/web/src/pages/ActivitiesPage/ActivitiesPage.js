import React, { useState } from "react"
import styled from "styled-components"

import RowContainer from "src/components/RowContainer"
import MainLayout from "src/layouts/MainLayout"


function Activities() {
  const [name, setName] = useState("")
  const [date, setDate] = useState("")
  const [description, setDescription] = useState("")
  const [showCreateForm, setShowCreateForm] = useState(false)

  const data = [
    {
      name: "Oranges",
      date: "11/29/2020",
      description: "KITCHEN"
    },
    {
      name: "Oranges",
      date: "11/30/2020",
      description: "BATHROOM"
    }
  ]

  return (
    <MainLayout>
    <button onClick={() => showCreateForm(true)}>Create New Activity</button>
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
      {data.map((activity) => (
        <SmallPadding key={activity.name}>
          <RowContainer rowData={activity} type="activity"/>
        </SmallPadding>
      ))}
    </MainLayout>
  )
}

const SmallPadding = styled.div`
  padding-bottom: 24px;
`

export default Activities
