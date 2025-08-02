import ProfileCard from "@/components/card/ProfileCard"
import AddProfile from "@/components/form/AddProfile"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const Profile = () => {
  return (
    <Card>
      <CardHeader className="space-y-3">
        <div>
          <CardTitle className="text-2xl font-mono font-bold uppercase">
            Add Profile Data
          </CardTitle>
          <CardDescription>
            Add your profile data here. After add click save button to save.
          </CardDescription>
        </div>
        <AddProfile />
      </CardHeader>
      <Separator />
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-mono font-bold uppercase">
              Profile Data
            </CardTitle>
            <CardDescription>
              You can see your profile data you recently added or updated
            </CardDescription>
          </div>
          <Button
            variant={"outline"}
            className="cursor-pointer"
          >
            Update profile
          </Button>
        </div>
        <ProfileCard />
      </CardContent>
    </Card>
  )
}

export default Profile
