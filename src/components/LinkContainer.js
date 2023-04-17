import React, { useState } from 'react'
import Table from './Table';
import Form from './Form';

const LinkContainer = (props) => {
  const [favLinks,setFavLinks] = useState([]);

  const handleRemove = (index) => {
    const updatedLinks = favLinks.filter((_,i) => i !== index);
    setFavLinks(updatedLinks);
    /*
            TODO - Create logic for setting the state to filter array and remove favLink at index
        */
  }

  const handleSubmit = (favLink) => {
    setFavLinks([...favLinks, favLink]);
    /*
            TODO - Create logic to set state and add new favLink to favLinks array in state
        */
  }

  return (
    <div className="container">
      <h1>My Favorite Links</h1>
      <p>Add a new url with a name and link to the table.</p>
      <Table linkData={favLinks} removeLink={handleRemove} />
      {/*TODO - Add Table Component */}

      <br />

      <h3>Add New</h3>
      <Form handleSubmit={handleSubmit} />
      {/*TODO - Add Form Component */}
    </div>
  )
}

export default LinkContainer
