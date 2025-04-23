
import { Badge } from "@/components/ui/badge";

type Status = "active" | "away" | "busy" | "offline";

interface TeamMemberStatusProps {
  status: Status;
}

const statusConfig = {
  active: { label: "Active", className: "bg-green-500 text-white" },
  away: { label: "Away", className: "bg-yellow-500 text-white" },
  busy: { label: "Busy", className: "bg-red-500 text-white" },
  offline: { label: "Offline", className: "bg-gray-500 text-white" },
};

export const TeamMemberStatus = ({ status }: TeamMemberStatusProps) => {
  const config = statusConfig[status];
  return <Badge className={config.className}>{config.label}</Badge>;
};
