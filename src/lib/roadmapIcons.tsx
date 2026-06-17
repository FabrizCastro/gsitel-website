"use client";

import {
  Activity,
  BarChart3,
  Brain,
  Calendar,
  ClipboardList,
  Cpu,
  FileText,
  Gauge,
  Globe,
  Layers,
  MessageSquare,
  Package,
  PieChart,
  Radio,
  Scissors,
  Settings,
  ShoppingBag,
  Signal,
  Smartphone,
  Sparkles,
  Target,
  Truck,
  UserCheck,
  Users,
  Workflow,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";

const ICON_MAP: Record<string, LucideIcon> = {
  globe: Globe,
  settings: Settings,
  smartphone: Smartphone,
  cpu: Cpu,
  "shopping-bag": ShoppingBag,
  layers: Layers,
  users: Users,
  sparkles: Sparkles,
  "file-text": FileText,
  zap: Zap,
  "user-check": UserCheck,
  brain: Brain,
  truck: Truck,
  "bar-chart": BarChart3,
  package: Package,
  activity: Activity,
  scissors: Scissors,
  calendar: Calendar,
  "message-square": MessageSquare,
  target: Target,
  workflow: Workflow,
  "pie-chart": PieChart,
  radio: Radio,
  signal: Signal,
  gauge: Gauge,
  wrench: Wrench,
  "clipboard-list": ClipboardList,
};

export const renderRoadmapIcon = (iconKey: string): ReactNode => {
  const Icon = ICON_MAP[iconKey] ?? Globe;
  return <Icon className="h-5 w-5" />;
};
