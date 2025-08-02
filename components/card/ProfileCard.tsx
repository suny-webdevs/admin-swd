import Image from "next/image"
import { Card, CardContent } from "../ui/card"
import { ADMIN_PHOTO_URL } from "@/constant"

const ProfileCard = () => {
  return (
    <Card>
      <CardContent className="flex items-end gap-5">
        <Image
          src={ADMIN_PHOTO_URL}
          alt="ADMIN-SWD profile photo"
          width={150}
          height={150}
          className="rounded-md object-cover hidden lg:block"
        />
        <div>
          <h1 className="text-5xl font-bold">Md Suny Shaikh</h1>
          <p className="text-lg">Full Stack Developer | MERN Stack</p>

          <div className="space-y-1.5">
            <div className="flex flex-col space-x-3">
              <p>Chitalmari, Bagerhat, Bangladesh</p>
              <p>+88 01923827037</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ProfileCard
