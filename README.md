
# TaskFlow Dashboard

An interactive SaaS dashboard built with React, TypeScript, and Tailwind CSS, showcasing task management data through statistics, charts, and filterable tables.

## Features

- **Responsive Layout**: Clean dashboard layout with sidebar navigation that adapts to mobile, tablet, and desktop screens
- **Stats Cards**: Visual representation of key metrics like total tasks, tasks due today, overdue tasks, and completed tasks
- **Interactive Charts**: Data visualization using Recharts, displaying task distribution by status and priority
- **Filterable Data Table**: Client-side filtering with search functionality and dropdown filters for task status and priority
- **Mock Data**: TypeScript-typed mock data representing tasks with various attributes

## Tech Stack

- **React**: UI component library
- **TypeScript**: Static type checking
- **Tailwind CSS**: Utility-first CSS framework for styling
- **React Router**: For navigation
- **Recharts**: For data visualization
- **Shadcn UI**: For UI components

## Component Structure

- **DashboardLayout**: Main layout component with sidebar and content area
- **Sidebar**: Navigation sidebar with menu items
- **StatCard**: Reusable card component for displaying key metrics
- **ChartWidget**: Wrapper for charts with two variations (pie and bar)
- **FilterBar**: Search and filter controls for the data table
- **TaskTable**: Interactive table component with client-side filtering

## Running the Project

1. Clone the repository
2. Install dependencies with `npm install`
3. Start the development server with `npm run dev`
4. Navigate to the provided localhost URL in your browser

## Implementation Details

### Task Data Model

The application uses a TypeScript interface to define the structure of a Task:

```typescript
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
```

### Client-Side Filtering

The task table implements client-side filtering using React's useState and useMemo hooks to efficiently filter the displayed tasks based on:

- Free text search in the task title
- Status dropdown selection
- Priority dropdown selection

### Responsive Design

The dashboard is fully responsive with:
- A collapsible sidebar that transforms to a mobile menu on smaller screens
- Card grids that adjust columns based on screen size
- A table that adapts its displayed columns on mobile devices

## AI Assistance

This project was developed with the assistance of AI, which helped with:
- Initial project structure planning
- Component architecture design
- TypeScript interfaces and types
- Tailwind CSS styling implementation
- Chart configuration

## Future Enhancements

- Server-side filtering and pagination for larger datasets
- Task creation and editing functionality
- User authentication and authorization
- Dark mode support
- More detailed analytics and reporting features
