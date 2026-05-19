"use client";

import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Mon", calories: 2100, active: 45 },
  { name: "Tue", calories: 2450, active: 60 },
  { name: "Wed", calories: 1800, active: 30 },
  { name: "Thu", calories: 2800, active: 90 },
  { name: "Fri", calories: 2200, active: 50 },
  { name: "Sat", calories: 3100, active: 120 },
  { name: "Sun", calories: 2600, active: 75 },
];

export function ActivityChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="glass rounded-3xl p-6 h-full border border-white/5"
    >
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-bold">Weekly Activity</h3>
          <p className="text-sm text-muted-foreground">Calories burned & active minutes</p>
        </div>
        <select className="bg-background border border-white/10 rounded-lg px-3 py-1.5 text-sm text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary">
          <option>This Week</option>
          <option>Last Week</option>
          <option>This Month</option>
        </select>
      </div>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorCalories" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#7CFF6B" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#7CFF6B" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
            <XAxis 
              dataKey="name" 
              stroke="rgba(255,255,255,0.2)" 
              fontSize={12} 
              tickLine={false}
              axisLine={false}
              dy={10}
            />
            <YAxis 
              stroke="rgba(255,255,255,0.2)" 
              fontSize={12}
              tickLine={false}
              axisLine={false}
              dx={-10}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#111827', 
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.5)'
              }} 
              itemStyle={{ color: '#fff' }}
            />
            <Area 
              type="monotone" 
              dataKey="calories" 
              stroke="#7CFF6B" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorCalories)" 
              activeDot={{ r: 6, fill: '#7CFF6B', stroke: '#0B0F19', strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
