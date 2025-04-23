
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { useState } from "react";

const CalendarPage = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-1">Calendar</h1>
        <p className="text-gray-500">View and manage your schedule</p>
      </div>

      <Card className="p-6">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border mx-auto"
        />
      </Card>
    </DashboardLayout>
  );
};

export default CalendarPage;
