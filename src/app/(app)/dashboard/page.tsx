import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlusCircle, MoreVertical } from "lucide-react";
import Link from "next/link";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";

const projects = [
  {
    id: 1,
    name: "Q3 Strategy Refresh",
    status: "In Progress",
    lastUpdated: "2 hours ago",
    variant: "default",
  },
  {
    id: 2,
    name: "New Product Launch Plan",
    status: "Completed",
    lastUpdated: "1 day ago",
    variant: "secondary",
  },
  {
    id: 3,
    name: "Competitor Analysis",
    status: "On Hold",
    lastUpdated: "3 days ago",
    variant: "destructive",
  },
   {
    id: 4,
    name: "Market Expansion Proposal",
    status: "In Progress",
    lastUpdated: "5 hours ago",
    variant: "default",
  },
];

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h1 className="text-3xl font-bold tracking-tight font-headline">Project Dashboard</h1>
        <div className="flex items-center space-x-2">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            New Project
          </Button>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((project) => (
          <Card key={project.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{project.name}</CardTitle>
               <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>View</DropdownMenuItem>
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardHeader>
            <CardContent>
              <Badge variant={project.variant as any}>{project.status}</Badge>
            </CardContent>
            <CardFooter>
              <p className="text-xs text-muted-foreground">Last updated {project.lastUpdated}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
