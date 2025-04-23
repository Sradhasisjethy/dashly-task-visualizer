
import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card } from "@/components/ui/card";
import { TeamMemberModal } from "@/components/team/TeamMemberModal";
import { TeamMemberStatus } from "@/components/team/TeamMemberStatus";
import { TeamRoleFilter } from "@/components/team/TeamRoleFilter";
import { TeamMember } from "@/types/team";

const TeamPage = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [selectedRole, setSelectedRole] = useState("all");

  const teamMembers: TeamMember[] = [
    {
      id: "1",
      name: "John Doe",
      role: "Product Manager",
      email: "john@taskflow.com",
      avatar: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=200&h=200",
      status: "active",
      bio: "Experienced product manager with a passion for building great products.",
    },
    {
      id: "2",
      name: "Jane Smith",
      role: "Lead Developer",
      email: "jane@taskflow.com",
      avatar: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=200&h=200",
      status: "busy",
      bio: "Full-stack developer focused on creating scalable solutions.",
    },
    {
      id: "3",
      name: "Mike Johnson",
      role: "UI/UX Designer",
      email: "mike@taskflow.com",
      avatar: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=200&h=200",
      status: "away",
      bio: "Creative designer with a keen eye for detail and user experience.",
    },
  ];

  const roles = Array.from(new Set(teamMembers.map((member) => member.role)));
  const filteredMembers = selectedRole === "all" 
    ? teamMembers 
    : teamMembers.filter((member) => member.role === selectedRole);

  return (
    <DashboardLayout>
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-1">Team Members</h1>
          <p className="text-gray-500">Meet the TaskFlow team</p>
        </div>
        <TeamRoleFilter
          roles={roles}
          selectedRole={selectedRole}
          onRoleChange={setSelectedRole}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMembers.map((member) => (
          <Card 
            key={member.email} 
            className="p-6 cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => setSelectedMember(member)}
          >
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
              <p className="text-sm text-gray-400 mb-3">{member.email}</p>
              <TeamMemberStatus status={member.status} />
            </div>
          </Card>
        ))}
      </div>

      <TeamMemberModal
        member={selectedMember}
        open={!!selectedMember}
        onOpenChange={(open) => !open && setSelectedMember(null)}
      />
    </DashboardLayout>
  );
};

export default TeamPage;
