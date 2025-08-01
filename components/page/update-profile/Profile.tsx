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

const Profile = () => {
  return (
    <Card>
      <CardHeader className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-mono font-bold uppercase">
              Add Profile Data
            </CardTitle>
            <CardDescription>
              Add your profile data here. After add click save button to save.
            </CardDescription>
          </div>
          <div>
            <Button
              variant={"outline"}
              className="cursor-pointer"
            >
              Change Password
            </Button>
          </div>
        </div>
        <AddProfile />
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <CardTitle className="text-2xl font-mono font-bold uppercase">
            Profile Data
          </CardTitle>
          <CardDescription>
            You can see your profile data you recently added or updated
          </CardDescription>
        </div>
        <ProfileCard />
      </CardContent>
    </Card>
  )
}

export default Profile
