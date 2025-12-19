import React from "react";
import clsx from "clsx";

type MetricCardProps = {
  label: string;
  value: string | number;
  subText?: string;
  trend?: "up" | "down" | "neutral";
};

const trendStyles = {
  up: "text-green-600",
  down: "text-red-600",
  neutral: "text-slate-500",
};

export default function MetricCard({
  label,
  value,
  subText,
  trend = "neutral",
}: MetricCardProps) {
  return (
    <div className="bg-white rounded-xl border border-slate-300 p-4 md:p-6 shadow-md">
      <div className="text-sm text-slate-600 mb-2">{label}</div>

      <div className="text-2xl sm:text-3xl font-bold text-slate-900">
        {value}
      </div>

      {subText && (
        <div className={clsx("text-xs sm:text-sm mt-3", trendStyles[trend])}>
          {subText}
        </div>
      )}
    </div>
  );
}
