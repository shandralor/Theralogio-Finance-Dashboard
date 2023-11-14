import { MdSupervisedUserCircle } from "react-icons/md"
import styles from "./card.module.css"

const Card = () => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24}/>
      <div className={styles.text}>
        <span className={styles.title}>Total Clients</span>
        {/* Make this dynamic afterwards based on db total clients */}
        <span className={styles.number}>10</span>
        <span className={styles.detail}>
          {/* Make this dynamic also, based on database calculation */}
          <span className={`${styles.growth} ${styles.positive}`}>12 % </span>
          more that last week
        </span>
      </div>
    </div>
  )
}

export default Card