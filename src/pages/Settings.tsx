
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { SettingsTabs } from "@/components/settings/SettingsTabs";

const Settings = () => {
  return (
    <DashboardLayout>
      <div className="container max-w-4xl py-6">
        <h1 className="text-3xl font-bold mb-6">Settings</h1>
        <SettingsTabs />
      </div>
    </DashboardLayout>
  );
};

export default Settings;
