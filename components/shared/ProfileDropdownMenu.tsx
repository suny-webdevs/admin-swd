import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { ChevronsUpDown, LogOut } from "lucide-react"
import Link from "next/link"
import { ADMIN_PHOTO_URL } from "@/constant"

const ProfileDropdownMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="hover:bg-sidebar-accent rounded-md">
        <div className="flex items-center justify-between cursor-pointer p-2">
          <div className="flex items-center gap-3">
            <Avatar className="rounded-lg">
              <AvatarImage
                src={ADMIN_PHOTO_URL}
                alt="Admin-SWD"
              />
              <AvatarFallback>SWD</AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-start">
              <span className="font-bold text-xs">Md Suny Shaikh</span>
              <span className="text-xs">mdsunyshaikh@gmail.com</span>
            </div>
          </div>
          <ChevronsUpDown />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side="top"
        align="center"
      >
        <DropdownMenuItem>
          <Link
            href={"/profile"}
            className="flex items-center gap-3"
          >
            <Avatar className="rounded-lg">
              <AvatarImage
                src={ADMIN_PHOTO_URL}
                alt="Admin-SWD"
              />
              <AvatarFallback>SWD</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="font-bold text-sm">Md Suny Shaikh</span>
              <span className="text-sm">mdsunyshaikh@gmail.com</span>
            </div>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          asChild
          className="cursor-pointer"
        >
          <Link href={"/account"}>Manage account</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">
          <LogOut className="text-red-500" />{" "}
          <span className="text-red-500">Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ProfileDropdownMenu
