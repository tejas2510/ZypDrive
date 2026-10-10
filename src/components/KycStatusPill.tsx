import { cn } from "@/lib/utils";

export const KYC_LOCKED = ["In Review", "Approved"];
export const KYC_FAILED = ["Declined", "Resubmitted", "Expired", "Kyc Expired", "Abandoned"];

export function KycStatusPill({ status }: { status: string }) {
  const kind =
    status === "Approved" ? "ok" : status === "In Review" ? "review" : KYC_FAILED.includes(status) ? "fail" : "pending";
  const label = { ok: "Verified", review: "Under review", fail: "Action needed", pending: "Pending" }[kind];
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
        kind === "ok" && "bg-success/15 text-success",
        kind === "review" && "bg-warning/15 text-warning",
        kind === "fail" && "bg-destructive/15 text-destructive",
        kind === "pending" && "bg-muted text-muted-foreground",
      )}
    >
      {label}
    </span>
  );
}
