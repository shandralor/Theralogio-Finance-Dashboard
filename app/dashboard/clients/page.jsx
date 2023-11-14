import React from 'react'
import styles from "@/app/ui/dashboard/clients/clients.module.css"
import Search from '@/app/ui/dashboard/search/Search'
import Link from 'next/link'
import Image from 'next/image'
import { MdEuroSymbol, MdGroupAdd } from 'react-icons/md'
import {HiPlus} from 'react-icons/hi'
import Pagination from '@/app/ui/dashboard/pagination/Pagination'

const ClientsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user" />
        <Link href="/dashboard/clients/add">
          <button className={styles.addButton}>Add New Client</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>
              Name
            </td>
            <td>
              Email
            </td>
            <td>
              Last Consultation
            </td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image src="/noavatar.png" alt='' width={40} height={40}
                className={styles.userImage} /> John Doe
              </div>
            </td>
            <td>john_doe@gmail.com</td>
            <td>01/11/2023</td>
            <td>
              <div className={styles.buttons}>
              <Link href="/">
                <button className={`${styles.button} ${styles.addPayment}`}><HiPlus /> <MdEuroSymbol/></button>
               </Link>
              <Link href="/dashboard/clients/test">
                <button className={`${styles.button} ${styles.view}`}> View</button>
               </Link>
               <Link href="/">
                <button className={`${styles.button} ${styles.delete}`}> Delete</button>
               </Link>
               </div>
            </td>

          </tr>

        </tbody>
      </table>
      <Pagination />
    </div>
  )
}

export default ClientsPage