
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";

export const AppearanceSettings = () => {
  const { theme, setTheme } = useTheme();

  const handleSave = () => {
    toast.success("Theme preferences saved");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Appearance</CardTitle>
        <CardDescription>
          Customize how the application looks and feels.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <Label className="text-base">Theme</Label>
          <RadioGroup
            defaultValue={theme}
            onValueChange={setTheme}
            className="grid grid-cols-3 gap-4"
          >
            <div className="flex flex-col items-center space-y-2">
              <div className="flex h-16 w-16 items-center justify-center rounded-md border-2 border-muted bg-[#FFFFFF] dark:bg-[#1A1A1A]">
                <RadioGroupItem value="light" id="light" className="sr-only" />
              </div>
              <Label htmlFor="light">Light</Label>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="flex h-16 w-16 items-center justify-center rounded-md border-2 border-muted bg-[#1A1A1A]">
                <RadioGroupItem value="dark" id="dark" className="sr-only" />
              </div>
              <Label htmlFor="dark">Dark</Label>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="flex h-16 w-16 items-center justify-center rounded-md border-2 border-muted bg-gradient-to-br from-[#FFFFFF] to-[#1A1A1A]">
                <RadioGroupItem value="system" id="system" className="sr-only" />
              </div>
              <Label htmlFor="system">System</Label>
            </div>
          </RadioGroup>
        </div>
        <Button onClick={handleSave}>Save Preferences</Button>
      </CardContent>
    </Card>
  );
};
