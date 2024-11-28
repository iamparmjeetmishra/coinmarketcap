import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center gap-2">
      HomePage Here we are going to add Marketing sections
      <Button>
        <Link href="/dashboard">Go to dashboard</Link>
      </Button>
    </div>
  );
}
