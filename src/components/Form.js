import React, { useState } from 'react'

const Form = (props) => {
  const [name, setName] = useState("");
  const [URL, setURL] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'name') setName(value);
    if (name === 'URL') setURL(value);
    /*
            TODO - Logic for changing state based on form changes
        */
  }

  const onFormSubmit = (event) => {
    // to prevent page reload on form submit
    event.preventDefault()
    props.handleSubmit({ name, URL });
    setName('');
    setURL('');
    /*
            TODO - Logic for calling props to handle submission and setting state changes
        */
  }

  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" value={name} onChange={handleChange} />
      <label htmlFor="URL">URL:</label>
      <input type="text" name="URL" value={URL} onChange={handleChange} />
      <button type="submit">Add Link</button>
      {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
    </form>
  )
}

export default Form
