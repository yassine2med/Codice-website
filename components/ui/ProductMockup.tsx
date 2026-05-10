"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Clock, TrendingUp } from "lucide-react";

interface Row {
  id: string;
  label: string;
  value: string;
  status: "done" | "active" | "pending";
}

interface Config {
  accent: string;
  headerFrom: string;
  headerTo: string;
  label: string;
  rows: Row[];
  metric: { label: string; value: string; delta: string };
  bars: { label: string; pct: number }[];
}

const configs: Record<string, Config> = {
  "Permitting & Licensing": {
    accent: "#2563EB", headerFrom: "#1E3A8A", headerTo: "#3B82F6",
    label: "Permit Dashboard",
    rows: [
      { id: "PM-4821", label: "Electrical — 1421 K St NW", value: "Approved", status: "done" },
      { id: "PM-4820", label: "Structural — 900 M St SE", value: "In Review", status: "active" },
      { id: "PM-4819", label: "Mechanical — 445 4th St NW", value: "Pending", status: "pending" },
      { id: "PM-4818", label: "Plumbing — 1000 H St NE", value: "Approved", status: "done" },
    ],
    metric: { label: "Open Permits", value: "2,847", delta: "+12%" },
    bars: [{ label: "Electrical", pct: 72 }, { label: "Structural", pct: 45 }, { label: "Mechanical", pct: 61 }],
  },
  "AI & Compliance": {
    accent: "#7C3AED", headerFrom: "#4C1D95", headerTo: "#8B5CF6",
    label: "Regulatory Intelligence",
    rows: [
      { id: "REG-001", label: "29 CFR 1910.134 — Respiratory", value: "Cited", status: "done" },
      { id: "REG-002", label: "HIPAA § 164.312 — Technical", value: "Cited", status: "done" },
      { id: "REG-003", label: "FedRAMP Rev5 — AC-2", value: "Analyzing", status: "active" },
      { id: "REG-004", label: "DC Code § 2-218.55", value: "Queued", status: "pending" },
    ],
    metric: { label: "Regs Indexed", value: "284K", delta: "+2.3K" },
    bars: [{ label: "Federal", pct: 88 }, { label: "DC Municipal", pct: 64 }, { label: "HIPAA/HITECH", pct: 91 }],
  },
  "Logistics & Transportation": {
    accent: "#0369A1", headerFrom: "#0C4A6E", headerTo: "#0EA5E9",
    label: "Fleet & Route AI",
    rows: [
      { id: "RT-201", label: "Route A — NW Corridor", value: "On Schedule", status: "done" },
      { id: "RT-202", label: "Route B — Capitol Hill", value: "Delayed 4m", status: "active" },
      { id: "RT-203", label: "Route C — SW Waterfront", value: "On Schedule", status: "done" },
      { id: "RT-204", label: "Route D — Georgetown", value: "Analyzing", status: "pending" },
    ],
    metric: { label: "Active Routes", value: "143", delta: "87% on-time" },
    bars: [{ label: "On Time", pct: 87 }, { label: "Minor Delay", pct: 9 }, { label: "Rerouted", pct: 4 }],
  },
  "Healthcare Finance": {
    accent: "#0F766E", headerFrom: "#134E4A", headerTo: "#14B8A6",
    label: "Medicaid Cost Reporting",
    rows: [
      { id: "CLM-9921", label: "Inpatient — Q3 Report", value: "$4.2M", status: "done" },
      { id: "CLM-9922", label: "Outpatient — Q3 Report", value: "$1.8M", status: "done" },
      { id: "CLM-9923", label: "Long-Term Care — Q3", value: "In Audit", status: "active" },
      { id: "CLM-9924", label: "Home Health — Q4 Est.", value: "Draft", status: "pending" },
    ],
    metric: { label: "Reported YTD", value: "$48.3M", delta: "+6.1%" },
    bars: [{ label: "Validated", pct: 94 }, { label: "In Audit", pct: 4 }, { label: "Disputed", pct: 2 }],
  },
  "Payment Processing": {
    accent: "#16A34A", headerFrom: "#14532D", headerTo: "#22C55E",
    label: "Government Payments",
    rows: [
      { id: "TXN-7841", label: "Permit Fee — DOB", value: "$1,250.00", status: "done" },
      { id: "TXN-7842", label: "License Renewal — DLR", value: "$450.00", status: "done" },
      { id: "TXN-7843", label: "Court Fine — OAG", value: "$875.00", status: "active" },
      { id: "TXN-7844", label: "Park Reservation — DPR", value: "$120.00", status: "pending" },
    ],
    metric: { label: "Processed Today", value: "$284K", delta: "+18%" },
    bars: [{ label: "Completed", pct: 97 }, { label: "Processing", pct: 2 }, { label: "Failed", pct: 1 }],
  },
  "Healthcare Administration": {
    accent: "#0284C7", headerFrom: "#0C4A6E", headerTo: "#38BDF8",
    label: "Clinical Operations",
    rows: [
      { id: "APT-1021", label: "Dr. Rivera — Cardiology", value: "09:00 AM", status: "done" },
      { id: "APT-1022", label: "Dr. Chen — Primary Care", value: "10:30 AM", status: "active" },
      { id: "APT-1023", label: "Dr. Washington — Neuro", value: "01:00 PM", status: "pending" },
      { id: "APT-1024", label: "Dr. Patel — Oncology", value: "02:45 PM", status: "pending" },
    ],
    metric: { label: "Appointments Today", value: "312", delta: "+24 vs avg" },
    bars: [{ label: "Completed", pct: 58 }, { label: "Scheduled", pct: 35 }, { label: "Cancelled", pct: 7 }],
  },
  "Case Management": {
    accent: "#D97706", headerFrom: "#78350F", headerTo: "#F59E0B",
    label: "Case Workflow",
    rows: [
      { id: "CASE-4401", label: "Benefits Review — J. Harrison", value: "Active", status: "active" },
      { id: "CASE-4402", label: "Child Services — M. Torres", value: "Closed", status: "done" },
      { id: "CASE-4403", label: "Employment Claim — R. Simmons", value: "Active", status: "active" },
      { id: "CASE-4404", label: "Housing Assist. — L. Kim", value: "Pending", status: "pending" },
    ],
    metric: { label: "Open Cases", value: "1,429", delta: "-8% MoM" },
    bars: [{ label: "Active", pct: 52 }, { label: "In Review", pct: 28 }, { label: "Closed", pct: 20 }],
  },
  "Program Management": {
    accent: "#2563EB", headerFrom: "#1E3A8A", headerTo: "#3B82F6",
    label: "Program Dashboard",
    rows: [
      { id: "PRG-101", label: "Youth Services Initiative", value: "On Track", status: "done" },
      { id: "PRG-102", label: "Digital Equity Program", value: "At Risk", status: "active" },
      { id: "PRG-103", label: "Workforce Dev. Fund", value: "On Track", status: "done" },
      { id: "PRG-104", label: "Community Safety Grant", value: "Planning", status: "pending" },
    ],
    metric: { label: "Active Programs", value: "47", delta: "+3 this Q" },
    bars: [{ label: "On Track", pct: 74 }, { label: "At Risk", pct: 17 }, { label: "Planning", pct: 9 }],
  },
};

const fallback: Config = configs["Permitting & Licensing"];

const StatusIcon = ({ status }: { status: Row["status"] }) => {
  if (status === "done") return <CheckCircle2 size={13} className="shrink-0" style={{ color: "#22C55E" }} />;
  if (status === "active") return <div className="w-3 h-3 rounded-full shrink-0 animate-pulse" style={{ backgroundColor: "#F59E0B" }} />;
  return <Clock size={13} className="shrink-0 text-[#94A3B8]" />;
};

const StatusBadge = ({ status, value }: { status: Row["status"]; value: string }) => {
  const cls =
    status === "done"
      ? "bg-green-50 text-green-700 border border-green-200"
      : status === "active"
      ? "bg-amber-50 text-amber-700 border border-amber-200"
      : "bg-[#F8FAFC] text-[#64748B] border border-[#E2E8F0]";
  return (
    <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${cls}`}>
      {value}
    </span>
  );
};

export default function ProductMockup({ category, name }: { category: string; name: string }) {
  const cfg = configs[category] ?? fallback;

  return (
    <div className="absolute inset-0 flex flex-col overflow-hidden rounded-[inherit] bg-[#F8FAFC] font-[family-name:var(--font-inter)]">
      {/* Browser chrome */}
      <div
        className="flex items-center gap-2 px-4 py-3 shrink-0"
        style={{ background: `linear-gradient(135deg, ${cfg.headerFrom}, ${cfg.headerTo})` }}
      >
        <div className="flex gap-1.5">
          {["#FF5F57", "#FEBC2E", "#28C840"].map((c) => (
            <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: c }} />
          ))}
        </div>
        <div className="flex-1 mx-3 bg-white/15 rounded-md px-3 py-1 flex items-center gap-2">
          <div className="w-3 h-3 rounded-full border border-white/40" />
          <span className="text-[9px] font-bold text-white/80 tracking-widest uppercase">{cfg.label}</span>
        </div>
        <div className="w-5 h-5 rounded bg-white/15" />
      </div>

      {/* App body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-28 shrink-0 bg-white border-r border-[#E2E8F0] flex flex-col gap-1 p-2">
          {["Overview", "Active", "Reports", "Settings"].map((item, i) => (
            <div
              key={item}
              className="px-2.5 py-1.5 rounded-lg text-[9px] font-bold tracking-wide truncate"
              style={
                i === 0
                  ? { backgroundColor: cfg.accent + "18", color: cfg.accent }
                  : { color: "#94A3B8" }
              }
            >
              {item}
            </div>
          ))}
          <div className="mt-auto pt-2 border-t border-[#F1F5F9]">
            <div className="px-2.5 py-1.5 rounded-lg bg-[#F8FAFC] text-[9px] font-bold text-[#94A3B8] truncate">
              {name.replace("™", "").replace(".ai", "")}
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col overflow-hidden p-3 gap-2.5">
          {/* Metric + sparkline row */}
          <div className="flex gap-2">
            <div className="flex-1 bg-white rounded-xl border border-[#E2E8F0] px-3 py-2">
              <p className="text-[8px] font-bold uppercase tracking-widest text-[#94A3B8] mb-0.5">{cfg.metric.label}</p>
              <div className="flex items-end gap-2">
                <span className="text-xl font-bold leading-none" style={{ color: cfg.accent }}>{cfg.metric.value}</span>
                <span className="text-[9px] font-bold text-green-600 flex items-center gap-0.5 mb-0.5">
                  <TrendingUp size={9} /> {cfg.metric.delta}
                </span>
              </div>
            </div>
            {/* Mini bar chart */}
            <div className="flex-1 bg-white rounded-xl border border-[#E2E8F0] px-3 py-2">
              <p className="text-[8px] font-bold uppercase tracking-widest text-[#94A3B8] mb-1.5">Distribution</p>
              <div className="flex flex-col gap-1">
                {cfg.bars.slice(0, 2).map((b, i) => (
                  <div key={b.label} className="flex items-center gap-1.5">
                    <div className="w-10 text-[8px] text-[#94A3B8] truncate">{b.label}</div>
                    <div className="flex-1 h-1.5 rounded-full bg-[#F1F5F9] overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: cfg.accent }}
                        initial={{ width: 0 }}
                        animate={{ width: `${b.pct}%` }}
                        transition={{ duration: 1.2, delay: 0.4 + i * 0.15, ease: "easeOut" }}
                      />
                    </div>
                    <span className="text-[8px] font-bold text-[#64748B] w-6 text-right">{b.pct}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Data table */}
          <div className="flex-1 bg-white rounded-xl border border-[#E2E8F0] overflow-hidden">
            <div className="grid grid-cols-[auto_1fr_auto] gap-0 border-b border-[#F1F5F9] px-3 py-1.5 bg-[#F8FAFC]">
              <span className="text-[8px] font-bold uppercase tracking-widest text-[#94A3B8]">ID</span>
              <span className="text-[8px] font-bold uppercase tracking-widest text-[#94A3B8] pl-2">Description</span>
              <span className="text-[8px] font-bold uppercase tracking-widest text-[#94A3B8]">Status</span>
            </div>
            {cfg.rows.map((row, i) => (
              <motion.div
                key={row.id}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                className="grid grid-cols-[auto_1fr_auto] items-center gap-0 px-3 py-1.5 border-b border-[#F8FAFC] hover:bg-[#F8FAFC] transition-colors"
              >
                <div className="flex items-center gap-1">
                  <StatusIcon status={row.status} />
                  <span className="text-[8px] font-bold text-[#64748B] font-mono ml-1">{row.id}</span>
                </div>
                <span className="text-[9px] text-[#334155] pl-2 truncate">{row.label}</span>
                <StatusBadge status={row.status} value={row.value} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Status bar */}
      <div
        className="flex items-center gap-3 px-4 py-1.5 shrink-0 border-t border-[#E2E8F0]"
        style={{ backgroundColor: cfg.accent + "08" }}
      >
        <div className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[8px] font-bold text-[#64748B]">LIVE</span>
        </div>
        <span className="text-[8px] text-[#94A3B8]">Gov-grade secure · FedRAMP aligned · 99.9% uptime</span>
        <span className="ml-auto text-[8px] font-bold" style={{ color: cfg.accent }}>CODICE</span>
      </div>
    </div>
  );
}
