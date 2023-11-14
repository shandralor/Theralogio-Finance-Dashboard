'use client'

import React from 'react'
import styles from './singleUser.module.css'
import Image from 'next/image'

const SingleUserPage = () => {

   
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src='/noavatar.png' alt='' fill />
                </div>
                John Doe
            </div>
            <div className={styles.formContainer}>
                <form className={styles.form}>
                <label>First Name</label>
                <input type="text" name='first_name' placeholder='John' />
                <label>Last Name</label>
                <input type="text" name='last_name' placeholder='Doe' />
                <label>Email Address</label>
                <input type="email" name='first_name' placeholder='someone@example.com' />
                <label>Cellphone Number</label>
                <input type="phone" name='cellphone' placeholder='0000000000' />
                <label>Is Active?</label>
                <select name='is_active' >
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
                </form>
                <div className={styles.buttonDiv}><button className={styles.button}>Update</button></div>
                
            </div>
        </div>
    )
}

export default SingleUserPage