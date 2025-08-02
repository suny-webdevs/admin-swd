import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tooltip, TooltipContent } from "@/components/ui/tooltip"
import { ADMIN_PHOTO_URL } from "@/constant"
import { TooltipTrigger } from "@radix-ui/react-tooltip"
import { UserCog } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const ProfilePage = () => {
  return (
    <Card>
      <CardHeader className="relative flex items-end gap-5">
        <div className="absolute top-0 right-6">
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href={"/profile/manage-profile"}>
                <Button
                  variant={"outline"}
                  size={"icon"}
                  className="cursor-pointer"
                >
                  <UserCog />
                </Button>
              </Link>
            </TooltipTrigger>
            <TooltipContent>Manage profile</TooltipContent>
          </Tooltip>
        </div>
        <Image
          src={ADMIN_PHOTO_URL}
          alt="ADMIN-SWD profile photo"
          width={200}
          height={200}
          className="rounded-md object-cover hidden lg:block"
        />
        <div>
          <h1 className="text-5xl font-bold">Md Suny Shaikh</h1>
          <p className="text-lg">Full Stack Developer | MERN Stack</p>

          <div className="space-y-1.5">
            <div className="flex flex-col lg:flex-row lg:items-center space-x-3 lg:h-4">
              <p>Chitalmari, Bagerhat, Bangladesh</p>
              <Separator orientation="vertical" />
              <p>+88 01923827037</p>
              <Separator orientation="vertical" />
              <p>mdsunyshaikh@gmail.com</p>
            </div>
            <div className="flex items-center space-x-3 h-4">
              <Link
                href={"https://linkedin.com/in/mdsunyshaikh"}
                className="hover:underline text-blue-500"
              >
                LinkedIn
              </Link>
              <Separator orientation="vertical" />
              <Link
                href={"https://github.com/suny-webdevs"}
                className="hover:underline text-blue-500"
              >
                GitHub
              </Link>
              <Separator orientation="vertical" />
              <Link
                href={"https://wa.me/8801923827037"}
                className="hover:underline text-blue-500"
              >
                WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="space-y-10">
        {/* Biography */}
        <div className="space-y-1">
          <h1 className="text-2xl font-bold font-mono uppercase">Biography</h1>
          <p className="text-lg tracking-wide">
            Motivated and detail-oriented MERN Stack Developer with hands-on
            experience in designing, developing, and maintaining dynamic web
            applications. Skilled in building full-stack solutions using
            MongoDB, Express.js, React.js, and Node.js. Adept at creating
            seamless user experiences, integrating APIs, and managing databases
            to deliver high-performance, scalable web applications.
          </p>
        </div>

        {/* Skills */}
        <div className="space-y-1">
          <h1 className="text-2xl font-bold font-mono uppercase">Skills</h1>
          <p className="text-lg tracking-wide">
            <strong>Technical skills : </strong> Tailwind CSS, JavaScript,
            TypeScript, Node.js, React.js, Redux.js, Next.js, Express.js,
            MongoDB, Mongoose, PostgreSQl, Prisma ORM, Git & GitHub
          </p>
        </div>

        {/* Education */}
        <div className="space-y-1">
          <h1 className="text-2xl font-bold font-mono uppercase">Education</h1>
          <span className="text-lg tracking-wide">
            <strong>Govt. P.C College, Bagerhat</strong>
            <p>BSS(Bachelor of Social Science) in Economics</p>
            <p>Session : 2020-21</p>
          </span>
        </div>

        {/* Experiences */}
        <div className="space-y-1">
          <h1 className="text-2xl font-bold font-mono uppercase">
            Experiences
          </h1>
          <span className="text-lg tracking-wide">
            <strong>Company/Institute Name</strong>
            <p>Company/Institute Role</p>
            <p>Job Duration</p>
          </span>
        </div>

        {/* Services */}
        <div className="space-y-1">
          <h1 className="text-2xl font-bold font-mono uppercase">Services</h1>
          <div className="text-lg tracking-wide">
            <p>
              <strong>Front-End :</strong> Building intuitive, responsive, and
              user-friendly web interfaces with clean and efficient code.
            </p>
            <p>
              <strong>Back-End :</strong> Building intuitive, responsive, and
              user-friendly web interfaces with clean and efficient code.
            </p>
            <p>
              <strong>Full Stack :</strong> Building intuitive, responsive, and
              user-friendly web interfaces with clean and efficient code.
            </p>
          </div>
        </div>

        {/* Certifications */}
        <div className="space-y-1">
          <h1 className="text-2xl font-bold font-mono uppercase">
            Certifications
          </h1>
          <div className="space-y-4">
            <div className="text-lg tracking-wide">
              <strong>Complete Web Development</strong>
              <p>From : Programming Hero</p>
              {/* <p>Duration : 6 months</p> */}
              <p>
                Certificate :{" "}
                <Link
                  href={
                    "https://drive.google.com/file/d/1TyT-m2HQHwbNGlVMnxXwEckxw5v4fzXu/view?usp=drive_link"
                  }
                  className="text-blue-500 hover:underline"
                >
                  https://drive.google.com/file/d/1TyT-m2HQHwbNGlVMnxXwEckxw5v4fzXu/view?usp=drive_link
                </Link>
              </p>
            </div>
            {/* <Separator /> */}
            <div className="text-lg tracking-wide">
              <strong>Next Level Web Development</strong>
              <p>From : Programming Hero</p>
              {/* <p>Duration : 6 months</p> */}
              <p>
                Certificate :{" "}
                <Link
                  href={
                    "https://drive.google.com/file/d/1I601-2lU2oukeqZk6Dma0wTZEvik_gYv/view?usp=drive_link"
                  }
                  className="text-blue-500 hover:underline"
                >
                  https://drive.google.com/file/d/1I601-2lU2oukeqZk6Dma0wTZEvik_gYv/view?usp=drive_link
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Social links */}
        <div className="space-y-1">
          <h1 className="text-2xl font-bold font-mono uppercase">
            Social links
          </h1>
          <div className="text-lg tracking-wide">
            <p>
              <strong>LinkedIn : </strong>
              <Link
                href={"https://linkedin.com/in/mdsunyshaikh"}
                className="text-blue-500 hover:underline"
              >
                https://linkedin.com/in/mdsunyshaikh
              </Link>
            </p>
            <p>
              <strong>GitHub : </strong>
              <Link
                href={"https://github.com/suny-webdevs"}
                className="text-blue-500 hover:underline"
              >
                https://github.com/suny-webdevs
              </Link>
            </p>
            <p>
              <strong>WhatsApp : </strong>
              <Link
                href={"https://wa.me/8801923827037"}
                className="text-blue-500 hover:underline"
              >
                https://wa.me/8801923827037
              </Link>
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ProfilePage
