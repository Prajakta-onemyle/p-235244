import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const ReelsFilter: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState({
    newDrafts: false,
    approved: false,
    rejected: false,
    published: false,
  });

  const handleFilterChange = (filterName: keyof typeof filters) => {
    setFilters((prev) => ({
      ...prev,
      [filterName]: !prev[filterName],
    }));
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <button
          className="flex items-center gap-1.5 rounded shadow-[0_8px_20px_rgba(207,212,224,0.1)] text-base text-[#2E3748] bg-white px-4 py-2 border-[0.8px] border-solid border-[rgba(219,225,234,0.8)]"
          aria-label="Filter reels"
        >
          <span>Filter by</span>
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
          >
            <path
              d="M1 1L5.438 5.1497L9.877 1"
              stroke="#2E3748"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-56 p-4">
        <div className="space-y-4">
          <h3 className="font-medium text-sm">Filter by status</h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="new-drafts"
                checked={filters.newDrafts}
                onCheckedChange={() => handleFilterChange("newDrafts")}
              />
              <Label htmlFor="new-drafts">New Drafts</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="approved"
                checked={filters.approved}
                onCheckedChange={() => handleFilterChange("approved")}
              />
              <Label htmlFor="approved">Approved</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="rejected"
                checked={filters.rejected}
                onCheckedChange={() => handleFilterChange("rejected")}
              />
              <Label htmlFor="rejected">Rejected</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="published"
                checked={filters.published}
                onCheckedChange={() => handleFilterChange("published")}
              />
              <Label htmlFor="published">Published</Label>
            </div>
          </div>
          <div className="pt-2 flex justify-end">
            <button
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-3 py-1.5 rounded text-sm"
              onClick={() => setIsOpen(false)}
            >
              Apply Filters
            </button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ReelsFilter;
