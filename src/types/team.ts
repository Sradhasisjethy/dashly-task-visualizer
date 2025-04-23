
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  email: string;
  avatar: string;
  status: "active" | "away" | "busy" | "offline";
  bio?: string;
}
