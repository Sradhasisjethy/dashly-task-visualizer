
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface TeamRoleFilterProps {
  roles: string[];
  selectedRole: string;
  onRoleChange: (role: string) => void;
}

export const TeamRoleFilter = ({
  roles,
  selectedRole,
  onRoleChange,
}: TeamRoleFilterProps) => {
  return (
    <Select value={selectedRole} onValueChange={onRoleChange}>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Filter by role" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All Roles</SelectItem>
        {roles.map((role) => (
          <SelectItem key={role} value={role}>
            {role}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
