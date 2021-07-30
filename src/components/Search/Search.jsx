import React from 'react'
import { ContainerSearch } from './SearchStyled'
import { Form, FormControl, InputGroup } from 'react-bootstrap'

const Search = () => {
  return (
    <ContainerSearch>
      <Form className='d-flex'>
        <InputGroup className='mb-2'>
          <FormControl
            id='inlineFormInputGroup'
            placeholder='Busca tu película favorita'
          />
          <InputGroup.Text><img src='https://i.imgur.com/Tiq9eHB.png' alt='lupa de búsqueda'/></InputGroup.Text>
        </InputGroup>
      </Form>
    </ContainerSearch>
  )
}

export default Search
