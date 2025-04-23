
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";

export const NotificationSettings = () => {
  const [emailNotifs, setEmailNotifs] = useState(false);
  const [pushNotifs, setPushNotifs] = useState(false);
  const [teamMentions, setTeamMentions] = useState(true);

  const handleSave = () => {
    toast.success("Notification preferences saved");
    console.log({ emailNotifs, pushNotifs, teamMentions });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Notification Preferences</CardTitle>
        <CardDescription>
          Choose how you want to receive notifications and updates.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between space-y-1">
          <div>
            <Label className="font-medium">Email Notifications</Label>
            <p className="text-sm text-muted-foreground">
              Receive email updates about your account activity.
            </p>
          </div>
          <Switch checked={emailNotifs} onCheckedChange={setEmailNotifs} />
        </div>
        <div className="flex items-center justify-between space-y-1">
          <div>
            <Label className="font-medium">Push Notifications</Label>
            <p className="text-sm text-muted-foreground">
              Get notified about important updates and events.
            </p>
          </div>
          <Switch checked={pushNotifs} onCheckedChange={setPushNotifs} />
        </div>
        <div className="flex items-center justify-between space-y-1">
          <div>
            <Label className="font-medium">Team Mentions</Label>
            <p className="text-sm text-muted-foreground">
              Get notified when someone mentions you in comments.
            </p>
          </div>
          <Switch checked={teamMentions} onCheckedChange={setTeamMentions} />
        </div>
        <Button onClick={handleSave} className="mt-6">Save Preferences</Button>
      </CardContent>
    </Card>
  );
};
