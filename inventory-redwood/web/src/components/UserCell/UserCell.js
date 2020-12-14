import styled from "styled-components"

import RowContainer from "src/components/RowContainer"

export const QUERY = gql`
  query {
    users {
      id
      name
      date
      description
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ users }) => {
  return (
    <>
    {users.map((user) => (
      <SmallPadding key={user.name}>
        <RowContainer rowData={user} type="user"/>
      </SmallPadding>
    ))}
    </>
  )
}

const SmallPadding = styled.div`
  padding-bottom: 24px;
`
