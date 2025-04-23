
import { useState, useEffect } from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { ChartWidget } from "@/components/dashboard/ChartWidget";
import { TaskTable } from "@/components/dashboard/TaskTable";
import { 
  mockTasks, 
  getTaskData, 
  getPriorityData,
  getTasksDueToday,
  getOverdueTasks
} from "@/data/taskData";
import { CheckCircle, Clock, AlertTriangle, ListTodo } from "lucide-react";

const Index = () => {
  const [loading, setLoading] = useState(true);

  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </DashboardLayout>
    );
  }

  const tasksByStatus = getTaskData();
  const tasksByPriority = getPriorityData();
  const tasksDueToday = getTasksDueToday();
  const overdueTasks = getOverdueTasks();

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-1">TaskFlow Dashboard</h1>
        <p className="text-gray-500">Welcome back! Here's an overview of your tasks.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Tasks"
          value={mockTasks.length}
          icon={ListTodo}
          description="Total number of tasks in the system"
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard
          title="Tasks Due Today"
          value={tasksDueToday}
          icon={Clock}
          description="Tasks that need to be completed today"
          trend={{ value: 5, isPositive: false }}
        />
        <StatCard
          title="Overdue Tasks"
          value={overdueTasks}
          icon={AlertTriangle}
          description="Tasks that are past their due date"
          trend={{ value: 2, isPositive: false }}
        />
        <StatCard
          title="Completed Tasks"
          value={mockTasks.filter(task => task.status === 'Done').length}
          icon={CheckCircle}
          description="Tasks that have been completed"
          trend={{ value: 8, isPositive: true }}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <ChartWidget
          title="Tasks by Status"
          data={tasksByStatus}
          type="pie"
        />
        <ChartWidget
          title="Tasks by Priority"
          data={tasksByPriority}
          type="bar"
        />
      </div>

      {/* Task Table */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Task List</h2>
        <TaskTable tasks={mockTasks} />
      </div>
    </DashboardLayout>
  );
};

export default Index;
