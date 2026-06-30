import {
  LayoutDashboard,
  GraduationCap,
  Users,
  UserCheck,
  School,
  BookOpen,
  ClipboardList,
  FileText,
  CalendarCheck,
  Calendar,
  MessageSquare,
  Bell,
  Settings,
  LogOut,
} from "lucide-react";

export const menuItems = [
  {
  title:"MENU",
  items:[
  { label: "Home", href: "/dashboard", icon: LayoutDashboard },
  { label: "Teachers", href: "/teachers", icon: GraduationCap },
  { label: "Students", href: "/students", icon: Users },
  { label: "Parents", href: "/parents", icon: UserCheck },
  { label: "Classes", href: "/classes", icon: School },
  { label: "Lessons", href: "/lessons", icon: BookOpen },
  { label: "Exams", href: "/exams", icon: ClipboardList },
  { label: "Assignments", href: "/assignments", icon: FileText },
  { label: "Attendance", href: "/attendance", icon: CalendarCheck },
  { label: "Events", href: "/events", icon: Calendar },
  { label: "Messages", href: "/messages", icon: MessageSquare },
  { label: "Announcements", href: "/announcements", icon: Bell },
  { label: "Settings", href: "/settings", icon: Settings },
  { label: "Logout", href: "/logout", icon: LogOut },
  
]
  }
]