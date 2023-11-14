import Image from "next/image"
import styles from "./consultations.module.css"

const Consultations = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}> Latest Consultations</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>Pending</span>
            </td>
            <td>09.11.2023</td>
            <td>65€</td>
          </tr>
          {/* === */}
          <tr>
            <td>
              <div className={styles.user}>
                <Image src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Jane Beard
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.payed}`}>Payed</span>
            </td>
            <td>03.11.2023</td>
            <td>65€</td>
          </tr>
          {/* === */}
          <tr>
            <td>
              <div className={styles.user}>
                <Image src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Rita Warren
              </div>
            </td>

            <td>
              <span className={`${styles.status} ${styles.refunded}`}>Refunded</span>
            </td>
            <td>08.11.2023</td>
            <td>65€</td>
          </tr>
        </tbody>

      </table>
    </div>
  )
}

export default Consultations