
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { TeamMemberStatus } from "./TeamMemberStatus";
import { TeamMember } from "@/types/team";

interface TeamMemberModalProps {
  member: TeamMember | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const TeamMemberModal = ({ member, open, onOpenChange }: TeamMemberModalProps) => {
  if (!member) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Team Member Details</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 rounded-full overflow-hidden">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
              <TeamMemberStatus status={member.status} />
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium">Contact</h4>
            <p className="text-sm text-gray-500">{member.email}</p>
          </div>
          {member.bio && (
            <div className="space-y-2">
              <h4 className="font-medium">Bio</h4>
              <p className="text-sm text-gray-500">{member.bio}</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
