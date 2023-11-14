"use client"
import styles from "./chart.module.css"
import { LineChart, Line, XAxis, YAxis,  Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  {
    date: "01-11-23",
    total_amount: 130,
   
  },
  {
    date: "02-11-23",
    total_amount: 0,
   
  },
  {
    date: "03-11-23",
    total_amount: 0,
    
  },
  {
    date: "04-11-23",
    total_amount: 325,
    
  },
  {
    date: "05-11-23",
    total_amount: 65,
    
  },
  {
    date: "06-11-23",
    total_amount: 0,
    
  },
  {
    date: "07-11-23",
    total_amount: 260,
    
  },
  {
    date: "08-11-23",
    total_amount: 325,
   
  },

]

const Chart = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Monthly Recap</h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip contentStyle={{background: "#151c2c", border: "none"}}/>
          <Legend />
          
          <Line type="monotone" dataKey="total_amount" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart