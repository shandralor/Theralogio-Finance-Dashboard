import Card from "../ui/dashboard/card/Card";
import Chart from "../ui/dashboard/chart/Chart";
import Consultations from "../ui/dashboard/consultations/Consultations";
import styles from "../ui/dashboard/dashboard.module.css"
import Rightbar from "../ui/dashboard/rightbar/Rightbar";


const Dashboard = () => {
    return (  
        <div className={styles.wrapper}>
            <div className={styles.main}>
            <div className={styles.cards}>
                <Card />
                <Card />
                <Card />
                </div>
                <Consultations />
                <Chart />
            </div>
            <div className={styles.side}>
                <Rightbar />
            </div>
        </div>
    );
}
 
export default Dashboard;