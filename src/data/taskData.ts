
import { format, addDays, subDays, isSameDay } from "date-fns";

// Define Task interface
export interface Task {
  id: string;
  title: string;
  status: 'Todo' | 'In Progress' | 'Done' | 'Overdue';
  priority: 'Low' | 'Medium' | 'High';
  dueDate: string;
  assignee?: string;
  description?: string;
  createdAt: string;
}

// Generate mock tasks
export const mockTasks: Task[] = [
  {
    id: "task-1",
    title: "Complete dashboard design",
    status: "In Progress",
    priority: "High",
    dueDate: format(addDays(new Date(), 1), "yyyy-MM-dd"),
    assignee: "Alex Thompson",
    description: "Finalize the UI/UX design for the analytics dashboard",
    createdAt: format(subDays(new Date(), 3), "yyyy-MM-dd")
  },
  {
    id: "task-2",
    title: "Fix authentication bug",
    status: "Todo",
    priority: "High",
    dueDate: format(new Date(), "yyyy-MM-dd"),
    assignee: "Jamie Smith",
    description: "Resolve the issue with user authentication flow",
    createdAt: format(subDays(new Date(), 2), "yyyy-MM-dd")
  },
  {
    id: "task-3",
    title: "Update API documentation",
    status: "Done",
    priority: "Medium",
    dueDate: format(subDays(new Date(), 1), "yyyy-MM-dd"),
    assignee: "Riley Johnson",
    description: "Update the API documentation with new endpoints",
    createdAt: format(subDays(new Date(), 5), "yyyy-MM-dd")
  },
  {
    id: "task-4",
    title: "Implement data visualization",
    status: "In Progress",
    priority: "Medium",
    dueDate: format(addDays(new Date(), 3), "yyyy-MM-dd"),
    assignee: "Taylor Wilson",
    description: "Create data visualization components for the dashboard",
    createdAt: format(subDays(new Date(), 1), "yyyy-MM-dd")
  },
  {
    id: "task-5",
    title: "Mobile responsiveness",
    status: "Todo",
    priority: "Low",
    dueDate: format(addDays(new Date(), 4), "yyyy-MM-dd"),
    assignee: "Jordan Lee",
    description: "Ensure all pages are responsive on mobile devices",
    createdAt: format(subDays(new Date(), 1), "yyyy-MM-dd")
  },
  {
    id: "task-6",
    title: "Performance optimization",
    status: "Overdue",
    priority: "High",
    dueDate: format(subDays(new Date(), 2), "yyyy-MM-dd"),
    assignee: "Casey Martin",
    description: "Optimize application performance and loading times",
    createdAt: format(subDays(new Date(), 7), "yyyy-MM-dd")
  },
  {
    id: "task-7",
    title: "Unit testing",
    status: "Todo",
    priority: "Medium",
    dueDate: format(addDays(new Date(), 2), "yyyy-MM-dd"),
    assignee: "Morgan Davis",
    description: "Write unit tests for core functionality",
    createdAt: format(subDays(new Date(), 3), "yyyy-MM-dd")
  },
  {
    id: "task-8",
    title: "Database optimization",
    status: "In Progress",
    priority: "High",
    dueDate: format(new Date(), "yyyy-MM-dd"),
    assignee: "Alex Thompson",
    description: "Optimize database queries for better performance",
    createdAt: format(subDays(new Date(), 4), "yyyy-MM-dd")
  },
  {
    id: "task-9",
    title: "Implement notifications",
    status: "Todo",
    priority: "Low",
    dueDate: format(addDays(new Date(), 5), "yyyy-MM-dd"),
    assignee: "Jamie Smith",
    description: "Add real-time notifications for task updates",
    createdAt: format(subDays(new Date(), 1), "yyyy-MM-dd")
  },
  {
    id: "task-10",
    title: "Security audit",
    status: "Overdue",
    priority: "High",
    dueDate: format(subDays(new Date(), 1), "yyyy-MM-dd"),
    assignee: "Riley Johnson",
    description: "Complete security audit and implement recommendations",
    createdAt: format(subDays(new Date(), 8), "yyyy-MM-dd")
  },
  {
    id: "task-11",
    title: "Feature documentation",
    status: "Done",
    priority: "Medium",
    dueDate: format(subDays(new Date(), 3), "yyyy-MM-dd"),
    assignee: "Taylor Wilson",
    description: "Document new features for the upcoming release",
    createdAt: format(subDays(new Date(), 6), "yyyy-MM-dd")
  },
  {
    id: "task-12",
    title: "Refactor code",
    status: "In Progress",
    priority: "Medium",
    dueDate: format(addDays(new Date(), 1), "yyyy-MM-dd"),
    assignee: "Jordan Lee",
    description: "Refactor code for better maintainability",
    createdAt: format(subDays(new Date(), 2), "yyyy-MM-dd")
  },
  {
    id: "task-13",
    title: "User feedback survey",
    status: "Todo",
    priority: "Low",
    dueDate: format(addDays(new Date(), 6), "yyyy-MM-dd"),
    assignee: "Casey Martin",
    description: "Create and distribute user feedback survey",
    createdAt: format(subDays(new Date(), 1), "yyyy-MM-dd")
  },
  {
    id: "task-14",
    title: "Accessibility compliance",
    status: "Todo",
    priority: "High",
    dueDate: format(new Date(), "yyyy-MM-dd"),
    assignee: "Morgan Davis",
    description: "Ensure the application complies with accessibility standards",
    createdAt: format(subDays(new Date(), 4), "yyyy-MM-dd")
  },
  {
    id: "task-15",
    title: "Integration testing",
    status: "Done",
    priority: "Medium",
    dueDate: format(subDays(new Date(), 4), "yyyy-MM-dd"),
    assignee: "Alex Thompson",
    description: "Complete integration testing for new features",
    createdAt: format(subDays(new Date(), 9), "yyyy-MM-dd")
  },
  {
    id: "task-16",
    title: "Third-party API integration",
    status: "In Progress",
    priority: "High",
    dueDate: format(addDays(new Date(), 2), "yyyy-MM-dd"),
    assignee: "Jamie Smith",
    description: "Integrate third-party API for additional functionality",
    createdAt: format(subDays(new Date(), 3), "yyyy-MM-dd")
  },
  {
    id: "task-17",
    title: "Deployment pipeline",
    status: "Overdue",
    priority: "High",
    dueDate: format(subDays(new Date(), 3), "yyyy-MM-dd"),
    assignee: "Riley Johnson",
    description: "Set up automated deployment pipeline",
    createdAt: format(subDays(new Date(), 10), "yyyy-MM-dd")
  },
  {
    id: "task-18",
    title: "User onboarding flow",
    status: "Todo",
    priority: "Medium",
    dueDate: format(addDays(new Date(), 4), "yyyy-MM-dd"),
    assignee: "Taylor Wilson",
    description: "Design and implement improved user onboarding flow",
    createdAt: format(subDays(new Date(), 2), "yyyy-MM-dd")
  },
  {
    id: "task-19",
    title: "Localization support",
    status: "Done",
    priority: "Low",
    dueDate: format(subDays(new Date(), 5), "yyyy-MM-dd"),
    assignee: "Jordan Lee",
    description: "Add support for multiple languages",
    createdAt: format(subDays(new Date(), 12), "yyyy-MM-dd")
  },
  {
    id: "task-20",
    title: "Billing system update",
    status: "In Progress",
    priority: "High",
    dueDate: format(addDays(new Date(), 3), "yyyy-MM-dd"),
    assignee: "Casey Martin",
    description: "Update billing system to support new payment methods",
    createdAt: format(subDays(new Date(), 5), "yyyy-MM-dd")
  }
];

// Stats calculation helper functions
export const calculateTasksByStatus = () => {
  const statusCounts = {
    Todo: mockTasks.filter(task => task.status === 'Todo').length,
    'In Progress': mockTasks.filter(task => task.status === 'In Progress').length,
    Done: mockTasks.filter(task => task.status === 'Done').length,
    Overdue: mockTasks.filter(task => task.status === 'Overdue').length
  };
  
  return statusCounts;
};

export const calculateTasksByPriority = () => {
  const priorityCounts = {
    High: mockTasks.filter(task => task.priority === 'High').length,
    Medium: mockTasks.filter(task => task.priority === 'Medium').length,
    Low: mockTasks.filter(task => task.priority === 'Low').length
  };
  
  return priorityCounts;
};

export const getTasksDueToday = () => {
  const today = new Date();
  return mockTasks.filter(task => 
    isSameDay(new Date(task.dueDate), today)
  ).length;
};

export const getOverdueTasks = () => {
  return mockTasks.filter(task => task.status === 'Overdue').length;
};

export const getTaskData = () => {
  const statusData = calculateTasksByStatus();
  return [
    { name: 'Todo', value: statusData.Todo },
    { name: 'In Progress', value: statusData['In Progress'] },
    { name: 'Done', value: statusData.Done },
    { name: 'Overdue', value: statusData.Overdue }
  ];
};

export const getPriorityData = () => {
  const priorityData = calculateTasksByPriority();
  return [
    { name: 'High', value: priorityData.High },
    { name: 'Medium', value: priorityData.Medium },
    { name: 'Low', value: priorityData.Low }
  ];
};
