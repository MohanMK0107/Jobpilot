"use client"
import React from 'react'
import {
  BarChart, Bar, XAxis, YAxis,
  CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const ChartAnalytics = () => {

  const MonthData = [
    { month: 'Jan', count: 40 , rejected:30 , interviewcalls: 10, pending: 5 },
    { month: 'Feb', count: 30 , rejected:20 , interviewcalls: 15, pending: 5 },
    { month: 'Mar', count: 50 , rejected:10 , interviewcalls: 20, pending: 10 },
  ];

  return (
    <div className="w-full h-[400px] bg-white p-3 rounded-lg shadow-md">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={MonthData}>
          <XAxis dataKey="month" />
          <YAxis />
          <CartesianGrid stroke="#f5f5f5" strokeDasharray="5 5" />
          <Tooltip />
          <Legend />
          
          <Bar dataKey="count" fill="#8884d8" />
          <Bar dataKey="rejected" fill="#ff7f7f" />
          <Bar dataKey="interviewcalls" fill="#7fff7f" />
          <Bar dataKey="pending" fill="#FFAC1C" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ChartAnalytics