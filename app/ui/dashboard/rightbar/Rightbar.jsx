import Image from "next/image"
import styles from "./rightbar.module.css"
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md"

const Rightbar
 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image
          src="/astronaut.png" 
          alt=""
          fill
          className={styles.bgImage}
          />
        </div>
        <div className={styles.text}>
          <span className={styles.notification}>Available Now!</span>
          <h3 className={styles.notificationTitle}>How to use this dasboard?</h3>
          <span className={styles.notificationSubTitle}>Learn in a couple of minutes</span>
          <p className={styles.notificationContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin ex magna, id euismod est gravida eget. Integer in malesuada mi. </p>
        <button className={styles.button}>
          <MdPlayCircleFilled />
          Watch
        </button>
        </div>
      </div>
      <div className={styles.item}>
       
        <div className={styles.text}>
          <span className={styles.notification}>Available Now!</span>
          <h3 className={styles.notificationTitle}>How to use this dasboard?</h3>
          <span className={styles.notificationSubTitle}>Learn in a couple of minutes</span>
          <p className={styles.notificationContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin ex magna, id euismod est gravida eget. Integer in malesuada mi. </p>
        <button className={styles.button}>
          <MdReadMore />
          Watch
        </button>
        </div>
      </div>

    </div>
  )
}

export default Rightbar
