import React from 'react';
import FormInput from './FormInput';
import FormDropdown from './FormDropdown';

export const renderTextInput = ({input, type, inputName, placeholder, meta}) => {
  return <FormInput
    input={input}
    id={inputName}
    type={type}
    placeholder={placeholder}
    meta={meta}
  />
}

export const renderDropdown = ({input, options, inputName, placeholder, meta}) => {
  
  const dropdownOptions = options.map(option => <option key={option.id} value={option.value}>{option.value}</option>) ;

  return <FormDropdown
    input={input}
    id={inputName}
    placeholder={placeholder}
    options={dropdownOptions}
    meta={meta}
  />
}