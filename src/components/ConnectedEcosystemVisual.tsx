"use client";

import { motion } from "framer-motion";
import {
  Activity,
  ArrowDown,
  Bell,
  Building2,
  Cloud,
  Database,
  LayoutDashboard,
  Smartphone,
  Zap,
} from "lucide-react";

const KPI = ({
  label,
  value,
  delta,
  accent,
}: {
  label: string;
  value: string;
  delta: string;
  accent: string;
}) => (
  <div className="rounded-md border border-white/10 bg-white/[0.04] p-1.5">
    <p className="text-[6px] font-semibold uppercase tracking-wider text-white/45">
      {label}
    </p>
    <p className="mt-0.5 text-[10px] font-black text-white">{value}</p>
    <p className="text-[7px] font-bold" style={{ color: accent }}>
      {delta}
    </p>
  </div>
);

const MiniChart = () => (
  <svg viewBox="0 0 120 40" className="h-full w-full" aria-hidden="true">
    <defs>
      <linearGradient id="eco-chart-fill" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1D6FFF" stopOpacity={0.35} />
        <stop offset="100%" stopColor="#1D6FFF" stopOpacity={0} />
      </linearGradient>
    </defs>
    <path
      d="M0 32 L15 28 L30 30 L45 18 L60 22 L75 12 L90 16 L105 8 L120 10 L120 40 L0 40 Z"
      fill="url(#eco-chart-fill)"
    />
    <path
      d="M0 32 L15 28 L30 30 L45 18 L60 22 L75 12 L90 16 L105 8 L120 10"
      fill="none"
      stroke="#22D3EE"
      strokeWidth="1.5"
      className="eco-chart-line"
    />
    <circle cx="105" cy="8" r="2.5" fill="#22D3EE" className="eco-chart-dot" />
  </svg>
);

const WebDashboardMockup = () => (
  <div className="eco-screen flex h-full flex-col overflow-hidden bg-[#0a1628]/90">
    <div className="flex h-6 shrink-0 items-center gap-2 border-b border-white/10 bg-[#0d1b2e] px-2.5">
      <div className="flex gap-1">
        <div className="h-1.5 w-1.5 rounded-full bg-red-400/90" />
        <div className="h-1.5 w-1.5 rounded-full bg-amber-400/90" />
        <div className="h-1.5 w-1.5 rounded-full bg-emerald-400/90" />
      </div>
      <div className="mx-auto flex h-3.5 flex-1 max-w-[140px] items-center rounded-md bg-white/[0.06] px-2">
        <span className="truncate text-[6px] text-white/35">app.gsitel.io/dashboard</span>
      </div>
    </div>

    <div className="flex min-h-0 flex-1">
      <div className="flex w-9 shrink-0 flex-col gap-2 border-r border-white/10 bg-[#081220] p-1.5">
        <div className="flex h-5 w-5 items-center justify-center rounded-md bg-blue-500/25 text-blue-300">
          <LayoutDashboard className="h-2.5 w-2.5" />
        </div>
        <div className="h-4 w-5 rounded bg-white/[0.06]" />
        <div className="h-4 w-5 rounded bg-white/[0.06]" />
        <div className="mt-auto h-4 w-5 rounded-full bg-white/10" />
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-2 p-2">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[7px] font-bold text-white/80">Operations</p>
            <p className="text-[6px] text-white/35">Live overview</p>
          </div>
          <div className="relative flex h-6 w-6 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/15">
            <Bell className="h-2.5 w-2.5 text-blue-300" />
            <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-cyan-400" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-1">
          <KPI label="Users" value="24.8K" delta="+12%" accent="#22D3EE" />
          <KPI label="Uptime" value="99.9%" delta="stable" accent="#34D399" />
          <KPI label="Latency" value="42ms" delta="-8ms" accent="#60A5FA" />
        </div>

        <div className="relative min-h-0 flex-1 overflow-hidden rounded-md border border-white/10 bg-white/[0.03] p-1">
          <div className="mb-0.5 flex items-center justify-between">
            <span className="text-[6px] font-semibold text-white/50">Traffic</span>
            <Activity className="h-2 w-2 text-cyan-400/70" />
          </div>
          <div className="h-[38px]">
            <MiniChart />
          </div>
        </div>
      </div>
    </div>

    <div className="eco-screen-shine pointer-events-none absolute inset-0" aria-hidden="true" />
  </div>
);

const MobileAppMockup = () => (
  <div className="eco-screen relative h-full overflow-hidden rounded-[1.65rem] bg-[#0b1220]">
    <div className="absolute left-1/2 top-1.5 z-10 h-4 w-16 -translate-x-1/2 rounded-full bg-black/80" />
    <div className="flex h-7 items-end justify-between px-5 pb-0.5 pt-2">
      <span className="text-[7px] font-semibold text-white/70">9:41</span>
      <div className="flex gap-0.5">
        <div className="h-1.5 w-2.5 rounded-sm bg-white/50" />
        <div className="h-1.5 w-1 rounded-sm bg-white/50" />
      </div>
    </div>

    <div className="space-y-2.5 px-3 pb-3 pt-1">
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-cyan-400/30 bg-gradient-to-br from-cyan-400/25 to-blue-500/20">
          <Smartphone className="h-3.5 w-3.5 text-cyan-300" />
        </div>
        <div>
          <p className="text-[8px] font-bold text-white">Welcome back</p>
          <p className="text-[6px] text-white/40">3 tasks pending</p>
        </div>
      </div>

      <div className="space-y-1.5">
        {[
          { label: "Orders sync", color: "bg-emerald-400" },
          { label: "Inventory", color: "bg-blue-400" },
          { label: "Alerts", color: "bg-amber-400" },
        ].map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-2 py-1.5"
          >
            <div className={`h-1.5 w-1.5 rounded-full ${item.color}`} />
            <span className="flex-1 text-[7px] font-medium text-white/75">{item.label}</span>
            <span className="text-[6px] text-white/30">›</span>
          </div>
        ))}
      </div>

      <div className="rounded-lg bg-gradient-to-r from-blue-600/80 to-cyan-500/70 py-2 text-center text-[7px] font-bold text-white shadow-lg shadow-blue-500/20">
        Open dashboard
      </div>
    </div>

    <div className="eco-screen-shine pointer-events-none absolute inset-0" aria-hidden="true" />
  </div>
);

const AutomationCard = () => (
  <div className="space-y-2">
    <div className="flex items-center gap-2">
      <div className="relative h-2 w-2">
        <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/60" />
        <span className="relative block h-2 w-2 rounded-full bg-emerald-400" />
      </div>
      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300">
        Automation
      </span>
    </div>

    <div className="flex flex-col gap-1.5">
      <div className="flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.05] px-2 py-1.5">
        <div className="flex h-5 w-5 items-center justify-center rounded bg-blue-500/20 text-blue-300">
          <Zap className="h-2.5 w-2.5" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[7px] font-bold text-white/80">New order</p>
          <p className="text-[6px] text-white/35">Webhook trigger</p>
        </div>
      </div>

      <div className="flex justify-center">
        <ArrowDown className="h-3.5 w-3.5 text-slate-500" strokeWidth={2.5} />
      </div>

      <div className="flex items-center gap-2 rounded-md border border-cyan-500/25 bg-cyan-500/15 px-2 py-1.5">
        <div className="flex h-5 w-5 items-center justify-center rounded bg-cyan-500/25 text-cyan-200">
          <Database className="h-2.5 w-2.5" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[7px] font-bold text-cyan-100">Update ERP</p>
          <p className="text-[6px] text-cyan-200/50">Running · 1.2s</p>
        </div>
      </div>
    </div>
  </div>
);

const CONNECTIONS = [
  { id: "web", d: "M300 300 C 240 240, 190 190, 150 150", grad: "ecosystem-grad-blue", delay: "0s" },
  { id: "mobile", d: "M300 300 C 360 360, 410 410, 450 450", grad: "ecosystem-grad-blue", delay: "-5s" },
  { id: "auto", d: "M300 300 C 380 260, 440 210, 480 180", grad: "ecosystem-grad-cyan", delay: "-10s" },
  { id: "api", d: "M300 300 C 220 360, 160 400, 120 420", grad: "ecosystem-grad-cyan", delay: "-15s" },
] as const;

export const ConnectedEcosystemVisual = () => (
  <motion.div
    className="connected-ecosystem perspective-view hero-grid relative flex w-full items-center justify-center"
    initial={{ opacity: 0, scale: 0.92 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
  >
    <div className="relative flex h-[min(600px,85vw)] w-full max-w-[600px] items-center justify-center sm:h-[600px]">
      {/* Ambient depth */}
      <div className="glow-sphere absolute left-[8%] top-[12%] h-44 w-44 rounded-full bg-blue-600" />
      <div className="glow-sphere absolute bottom-[10%] right-[6%] h-36 w-36 rounded-full bg-cyan-500" />

      {/* Cloud Core Node */}
      <div className="absolute z-20 flex h-32 w-32 items-center justify-center">
        <div className="absolute inset-0 animate-pulse rounded-full bg-blue-500/25 blur-2xl" />
        <div className="pulse-core absolute inset-0 rounded-full border border-blue-500/30" />
        <div className="pulse-core absolute inset-2 rounded-full border border-cyan-400/15" style={{ animationDelay: "-1.5s" }} />
        <div className="glass-panel relative flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-400/40 bg-gradient-to-br from-blue-500/20 to-cyan-500/10 shadow-[0_0_40px_rgba(29,111,255,0.45)]">
          <Cloud className="h-8 w-8 text-blue-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" strokeWidth={1.75} />
        </div>
      </div>

      {/* Connection Lines */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 600 600"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="ecosystem-grad-blue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1D6FFF" stopOpacity={1} />
            <stop offset="100%" stopColor="#10243A" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="ecosystem-grad-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22D3EE" stopOpacity={1} />
            <stop offset="100%" stopColor="#10243A" stopOpacity={0} />
          </linearGradient>
          <filter id="eco-line-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {CONNECTIONS.map((line) => (
          <g key={line.id}>
            <path
              id={`eco-path-${line.id}`}
              d={line.d}
              stroke={`url(#${line.grad})`}
              strokeWidth="2"
              fill="none"
              className="data-flow"
              style={{ animationDelay: line.delay }}
              filter="url(#eco-line-glow)"
              opacity={0.55}
            />
            <circle r="3" fill={line.grad.includes("cyan") ? "#22D3EE" : "#1D6FFF"} opacity={0.9}>
              <animateMotion dur="4s" repeatCount="indefinite" path={line.d} begin={line.delay} />
            </circle>
            <circle r="1.5" fill="#fff" opacity={0.7}>
              <animateMotion dur="4s" repeatCount="indefinite" path={line.d} begin={line.delay} />
            </circle>
          </g>
        ))}

        {[
          [150, 150],
          [450, 450],
          [480, 180],
          [120, 420],
        ].map(([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="6" fill="#10243A" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            <circle cx={cx} cy={cy} r="2.5" fill={i % 2 === 0 ? "#1D6FFF" : "#22D3EE"} opacity={0.85}>
              <animate attributeName="opacity" values="0.5;1;0.5" dur="2.4s" repeatCount="indefinite" />
            </circle>
          </g>
        ))}
      </svg>

      {/* Main Web App Mockup */}
      <div className="glass-panel float-animation skewed-card eco-card-depth absolute left-[5%] top-[10%] z-10 h-[220px] w-[min(320px,55vw)] overflow-hidden rounded-xl border border-white/20 shadow-[0_30px_60px_rgba(0,0,0,0.45)]">
        <WebDashboardMockup />
      </div>

      {/* Mobile App Mockup */}
      <div
        className="glass-panel float-animation skewed-card eco-card-depth absolute bottom-[10%] right-[10%] z-30 h-[280px] w-[140px] rounded-[2.5rem] border border-white/20 p-2.5 shadow-[0_25px_55px_rgba(0,0,0,0.5)]"
        style={{ animationDelay: "-1s" }}
      >
        <MobileAppMockup />
      </div>

      {/* Automation Card */}
      <div
        className="glass-panel float-animation skewed-card eco-card-depth absolute right-[5%] top-[20%] z-20 w-48 rounded-xl p-4 shadow-[0_20px_45px_rgba(0,0,0,0.35)]"
        style={{ animationDelay: "-3s" }}
      >
        <AutomationCard />
      </div>

      {/* Integration Nodes */}
      <div className="skewed-card absolute bottom-[15%] left-[10%] z-30 flex flex-col gap-3">
        {[
          { label: "API", icon: Database, border: "border-blue-500/25", text: "text-blue-400", iconBg: "border-blue-500/25 bg-blue-500/15", bar: "bg-blue-400/30", dot: "bg-blue-400" },
          { label: "ERP", icon: Building2, border: "border-cyan-500/25", text: "text-cyan-400", iconBg: "border-cyan-500/25 bg-cyan-500/15", bar: "bg-cyan-400/30", dot: "bg-cyan-400", offset: true },
          { label: "CRM", icon: Activity, border: "border-indigo-500/25", text: "text-indigo-400", iconBg: "border-indigo-500/25 bg-indigo-500/15", bar: "bg-indigo-400/30", dot: "bg-indigo-400" },
        ].map((node) => {
          const Icon = node.icon;
          return (
            <div
              key={node.label}
              className={`glass-panel flex items-center gap-2.5 rounded-full border px-3.5 py-2 ${node.border} ${"offset" in node && node.offset ? "translate-x-4" : ""}`}
            >
              <div className={`flex h-5 w-5 items-center justify-center rounded-full ${node.iconBg}`}>
                <Icon className={`h-2.5 w-2.5 ${node.text}`} />
              </div>
              <span className={`text-[10px] font-bold ${node.text}`}>{node.label}</span>
              <div className={`h-1 w-10 rounded-full ${node.bar}`} />
              <div className={`h-2 w-2 rounded-full ${node.dot} eco-node-pulse`} />
            </div>
          );
        })}
      </div>

      {/* Floating Indicator Stats */}
      <div
        className="glass-panel float-animation absolute left-[40%] top-[5%] z-40 flex items-center gap-2 rounded-lg border border-emerald-400/30 bg-emerald-500/[0.08] px-3 py-1.5 shadow-[0_8px_24px_rgba(16,185,129,0.15)]"
        style={{ animationDelay: "-4.5s" }}
      >
        <div className="relative flex h-4 w-4 items-center justify-center">
          <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/30" />
          <Activity className="relative h-3.5 w-3.5 text-emerald-400" />
        </div>
        <span className="text-[10px] font-bold tracking-tighter text-white">
          Real-time Data Active
        </span>
      </div>
    </div>
  </motion.div>
);
