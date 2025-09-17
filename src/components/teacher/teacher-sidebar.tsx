import { LayoutDashboard, BookOpen, FileText, TestTube, BarChart3, User, LogOut } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { title: "Dashboard", url: "/teacher", icon: LayoutDashboard },
  { title: "Classes & Subjects", url: "/teacher/subjects", icon: BookOpen },
  { title: "Assignments", url: "/teacher/assignments", icon: FileText },
  { title: "Tests", url: "/teacher/tests", icon: TestTube },
  { title: "Analytics", url: "/teacher/analytics", icon: BarChart3 },
  { title: "Profile", url: "/teacher/profile", icon: User },
];

interface TeacherSidebarProps {
  onLogout: () => void;
}

export function TeacherSidebar({ onLogout }: TeacherSidebarProps) {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";

  return (
    <Sidebar className={collapsed ? "w-14" : "w-64"} collapsible="icon">
      <SidebarContent className="bg-gradient-to-b from-primary/5 to-primary/10">
        {/* Logo Section */}
        <div className="p-4 border-b border-border/50">
          <div className="flex items-center space-x-3">
            <div className="text-2xl">👩‍🏫</div>
            {!collapsed && (
              <div>
                <h2 className="text-lg font-bold text-primary">V.E.D.A</h2>
                <p className="text-xs text-muted-foreground">Teacher Portal</p>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className="text-primary font-semibold">
            {!collapsed && "Navigation"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="group">
                    <NavLink
                      to={item.url}
                      className={({ isActive }) =>
                        `flex items-center space-x-3 rounded-lg px-3 py-2 transition-all duration-200 ${
                          isActive
                            ? "bg-primary text-primary-foreground shadow-md"
                            : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                        }`
                      }
                    >
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      {!collapsed && <span className="font-medium">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Logout Button */}
        <div className="mt-auto p-4">
          <Button
            onClick={onLogout}
            variant="outline"
            size={collapsed ? "sm" : "default"}
            className="w-full border-destructive/20 text-destructive hover:bg-destructive hover:text-destructive-foreground"
          >
            <LogOut className="h-4 w-4" />
            {!collapsed && <span className="ml-2">Logout</span>}
          </Button>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}