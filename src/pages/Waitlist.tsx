import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Chrome, CheckCircle, Loader2, AlertCircle } from "lucide-react";

type WaitlistStatus =
  | "idle"
  | "loading"
  | "success"
  | "error"
  | "checking_auth";

interface WaitlistState {
  status: WaitlistStatus;
  user: null;
  error: null;
}

export default function Waitlist() {
  const { toast } = useToast();
  const [state, setState] = useState<WaitlistState>({
    status: "idle",
    user: null,
    error: null,
  });

  // Helper to update state
  const updateState = (patch: Partial<WaitlistState>) =>
    setState((prev) => ({ ...prev, ...patch }));

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-2xl shadow-2xl">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-slate-900">
            Join Our Waitlist
          </h2>
        </div>
      </div>
    </div>
  );
}
