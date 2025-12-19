import clsx from "clsx";
import { Activity, RecentActivityProps } from "@/libs/types";

type Props = {
  activity: Activity;
  showDivider?: boolean;
};

const colorStyles = {
  blue: "bg-blue-100 text-blue-600",
  purple: "bg-purple-100 text-purple-600",
  green: "bg-green-100 text-green-600",
  slate: "bg-slate-100 text-slate-600",
};

function ActivityItem({
  activity,
  showDivider = true,
}: Props) {
  const Icon = activity.icon;
  const color = activity.color ?? "slate";

  return (
    <div
      className={clsx(
        "flex items-center gap-4 pb-4",
        showDivider && "border-b border-slate-100"
      )}
    >
      <div
        className={clsx(
          "w-10 h-10 rounded-lg flex items-center justify-center",
          colorStyles[color]
        )}
      >
        <Icon className="w-4 h-4 sm:w-5 sm:h-4" />
      </div>

      <div className="flex-1">
        <div className="text-[13px] sm:text-base font-medium text-slate-950">
          {activity.title}
        </div>
        <div className="text-xs sm:text-sm text-slate-500">
          {activity.description}
        </div>
      </div>

      <div className="text-xs sm:text-sm text-slate-500 whitespace-nowrap">
        {activity.time}
      </div>
    </div>
  )
}


export default function RecentActivity({ activities }: RecentActivityProps) {
  return (
    <div className="space-y-4">
      {activities.map((activity, index) => (
        <ActivityItem
          key={activity.id}
          activity={activity}
          showDivider={index !== activities.length - 1}
        />
      ))}
    </div>
  )
}
