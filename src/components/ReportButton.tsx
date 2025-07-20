
'use client';

import { MoreVertical } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function ReportButton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="p-2 rounded-md hover:bg-gray-100">
          <MoreVertical className="w-4 h-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40">
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
          Reportar
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
