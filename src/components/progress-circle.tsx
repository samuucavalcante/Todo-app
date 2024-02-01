"use client";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { cn } from "@/lib/utils";
import { type ComponentProps } from "react";
import { Progress } from "./ui/progress";

const COLORS = {
  completed: "#22c55e",
  warning: "#eab308",
  danger: "#b91c1c",
} as const;

type ProgressCircleProps = ComponentProps<"div"> & {
  value: number;
};
export function ProgressCircle({ value, ...props }: ProgressCircleProps) {
  // return (
  //  <div {...props}>
  //   <span className={cn("text-xs text-white/60", {
  //     "text-green-500": value === 100,
  //     "text-yellow-500": value > 49 && value < 100,
  //     "text-red-500": value < 50,

  //   })}>

  //  {value}%
  //   </span>
  //  <Progress className={cn("h-1 bg-white/10 text-white/60", {
  //   "bg-green-500": value === 100,
  //   "bg-yellow-500": value > 49 && value < 100,
  //   "bg-red-500": value < 50
  //  })} value={value} />
  //  </div>
  // );

  const color = () => {
    const completed = value === 100;
    const warning = value > 49 && value < 100;
    const danger = value < 49;
    if (completed) return COLORS.completed;
    if (warning) return COLORS.warning;
    if (danger) return COLORS.danger;
  };

  if(value === 0) return <span className="text-xs text-white/60 italic">Não iniciado</span>

  return (
    <div className="">
      <CircularProgressbar
        styles={buildStyles({
          textColor: color(),
          pathColor: color(),
          textSize: '1.5rem',

        })}
        circleRatio={2}
        backgroundPadding={2}
        className="flex justify-start w-8 h-8"
        value={value}
        maxValue={200}
        minValue={0}
        text={`${value}%`}
      />
    </div>
  );
}
