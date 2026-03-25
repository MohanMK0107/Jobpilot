'use client'

import React from 'react'
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  LineChart,
  Line,
  AreaChart,
  Area,
  CartesianGrid
} from 'recharts'

const Page = () => {

  const TotalApplicationsData = {
    TotalApplications:120,
    Interview:30,
    Offer:5,
    Rejected:60,
    Pending:25
  }

  /* ---------------- Status Pie Chart Data ---------------- */

  const statusData = [
    { name: "Interview", value: 30 },
    { name: "Offer", value: 5 },
    { name: "Rejected", value: 60 },
    { name: "Pending", value: 25 }
  ]

  const COLORS = ["#6366f1", "#22c55e", "#ef4444", "#f59e0b"]


  /* ---------------- Source Data ---------------- */

  const sourceData = [
    { source: "LinkedIn", applications: 40 },
    { source: "Indeed", applications: 25 },
    { source: "Company Site", applications: 20 },
    { source: "Referral", applications: 10 },
    { source: "Naukri", applications: 15 }
  ]


  /* ---------------- Weekly Data ---------------- */

  const weeklyData = [
    { week: "Week 1", applications: 8 },
    { week: "Week 2", applications: 15 },
    { week: "Week 3", applications: 10 },
    { week: "Week 4", applications: 18 }
  ]


  /* ---------------- Timeline Data ---------------- */

  const timelineData = [
    { day: "Mon", applications: 3 },
    { day: "Tue", applications: 5 },
    { day: "Wed", applications: 2 },
    { day: "Thu", applications: 6 },
    { day: "Fri", applications: 4 },
    { day: "Sat", applications: 3 },
    { day: "Sun", applications: 1 }
  ]


  return (

    <div className='flex flex-col w-full h-auto overflow-y-scroll gap-20 bg-white shadow-md rounded-lg'>
      {/* ---------- Pie Chart ---------- */}

      <div className='w-full h-[400px] p-4'>

        <h2 className='text-lg font-semibold mb-4'>
          Application Status Distribution
        </h2>

        <ResponsiveContainer width="100%" height="100%">

          <PieChart>

            <Pie
              data={statusData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={120}
              label
            >

              {statusData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}

            </Pie>

            <Tooltip />
            <Legend />

          </PieChart>

        </ResponsiveContainer>

      </div>



      {/* ---------- Source Bar Chart ---------- */}

      <div className='w-full h-[400px] p-4'>

        <h2 className='text-lg font-semibold mb-4'>
          Applications by Source
        </h2>

        <ResponsiveContainer width="100%" height="100%">

          <BarChart data={sourceData}>

            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="source" />
            <YAxis />
            <Tooltip />

            <Bar dataKey="applications" fill="#6366f1" />

          </BarChart>

        </ResponsiveContainer>

      </div>



      {/* ---------- Weekly Line Chart ---------- */}

      <div className='w-full h-[400px] p-4'>

        <h2 className='text-lg font-semibold mb-4'>
          Weekly Applications
        </h2>

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={weeklyData}>

            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="week" />
            <YAxis />
            <Tooltip />

            <Line
              type="monotone"
              dataKey="applications"
              stroke="#22c55e"
              strokeWidth={3}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>



      {/* ---------- Timeline Area Chart ---------- */}

      <div className='w-full h-[400px]  p-4'>

        <h2 className='text-lg font-semibold mb-4'>
          Application Activity Timeline
        </h2>

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={timelineData}>

            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />

            <Area
              type="monotone"
              dataKey="applications"
              stroke="#0ea5e9"
              fill="#64ffda"
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>

  )
}

export default Page