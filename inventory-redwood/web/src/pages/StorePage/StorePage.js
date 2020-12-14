import StoresLayout from 'src/layouts/StoresLayout'
import Store from 'src/components/Store'

const StorePage = ({ id }) => {
  return (
    <StoresLayout>
      <Store id={id} />
    </StoresLayout>
  )
}

export default StorePage
