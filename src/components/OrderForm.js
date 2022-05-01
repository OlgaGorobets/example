import React from 'react';
import styled from 'styled-components'
import { Formik, Form, Field } from 'formik'

const FieldParent = styled.div`
  margin-bottom: 5px;
`
const FieldName = styled.label`
  display: block;
`
const FieldError = styled.div`
  color: red;
`
const OrderForm = ({submitOrder}) => {
  const validateName = value =>  !value ? 'Required' : null
  const validatePhone = value => !value ? 'Required' : 
  !/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/i.test(value) ? 'Invalid phone number' : null
  

  return ( 
    <Formik
      initialValues={{
       name: '',
        phone: '',
      }}
      onSubmit={values => submitOrder(values)}
     >
     {({ errors, touched, isValidating }) => (
      <Form>
	    <FieldParent>
		  <FieldName htmlFor="name">Name</FieldName>
          <Field name="name" validate={validateName} maxLength="10" />
          {errors.name && touched.name && <FieldError>{errors.name}</FieldError>}
		</FieldParent>
		<FieldParent>
		  <FieldName htmlFor="phone">Phone</FieldName>
          <Field name="phone" validate={validatePhone} maxLength="20" />
          {errors.phone && touched.phone && <FieldError>{errors.phone}</FieldError>}
		</FieldParent>

        <button type="submit">Submit</button>
      </Form>
     )}
    </Formik>		
   )
}

export default OrderForm
