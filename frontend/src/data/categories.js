import { Laptop, BarChart } from 'lucide-react';

export const categories = [
  { 
    name: "Computer Science", 
    count: 1250, 
    icon: Laptop, // ✅ Valid React Component
    gradient: "from-blue-500 to-cyan-400",
    description: "Programming, algorithms, data structures"
  },
  { 
    name: "Mathematics", 
    count: 980, 
    icon: BarChart, // ✅ Valid React Component
    gradient: "from-purple-500 to-pink-400",
    description: "Calculus, algebra, statistics, geometry"
  },
];
