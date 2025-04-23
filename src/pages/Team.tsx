
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Users } from "lucide-react";

const TeamPage = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "Product Manager",
      email: "john@taskflow.com",
      avatar: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=200&h=200",
    },
    {
      name: "Jane Smith",
      role: "Lead Developer",
      email: "jane@taskflow.com",
      avatar: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=200&h=200",
    },
    {
      name: "Mike Johnson",
      role: "UI/UX Designer",
      email: "mike@taskflow.com",
      avatar: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=200&h=200",
    },
  ];

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-1">Team Members</h1>
        <p className="text-gray-500">Meet the TaskFlow team</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <Card key={member.email} className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
              <p className="text-gray-500 mb-2">{member.role}</p>
              <p className="text-sm text-gray-400">{member.email}</p>
            </div>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default TeamPage;
