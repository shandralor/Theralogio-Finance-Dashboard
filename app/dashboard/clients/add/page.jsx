'use client'
import React from 'react'
import styles from "./addClient.module.css"

const AddClientPage = () => {

  const handleChange = (e) => {
    if (e.target.value === "") {
      e.target.value = "true"; // Set "Yes" as the default value when user interacts
    }
    // Handle the change event further as needed
  };
  return (
    <div className={styles.container}>
      <form action='' className={styles.form}>
        <input type='text' placeholder='First Name' name='first_name' required />
        <input type='text' placeholder='Last Name' name='last_name' required />
        <input type='email' placeholder='Email Address' name='key' required />
        <input type='phone' placeholder='Cellphone number' name='cellphone' />
        <select name='is_active' defaultValue="" onChange={handleChange}>
          <option value="" disabled>Client is active?</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <div className={styles.buttonDiv}>
          <button type='submit' className={styles.button}>Save</button>
        </div>
      </form>
    </div>
  )
}

export default AddClientPage