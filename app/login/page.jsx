import styles from "./login.module.css"

const Login = () => {
    return (
     <div className={styles.container} >
        
        <form className={styles.form}>
        <h2>Log In</h2>
            <input type="text" placeholder="Username" name="username"/>
            <input type="password" name="password" />
            <button>Log In</button>
        </form>

    </div>  );
}
 
export default Login;<>
</>