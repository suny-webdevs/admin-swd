import BiographyAndSkills from "@/components/page/update-profile/BiographyAndSkills"
import Certifications from "@/components/page/update-profile/Certifications"
import Education from "@/components/page/update-profile/Education"
import Experiences from "@/components/page/update-profile/Experiences"
import Profile from "@/components/page/update-profile/Profile"
import Services from "@/components/page/update-profile/Services"
import SocialLinks from "@/components/page/update-profile/SocialLinks"
import { ScrollBar } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const tabItems = [
  {
    value: "profile",
    label: "Profile",
    component: <Profile />,
  },
  {
    value: "biography_skills",
    label: "Biography and Skills",
    component: <BiographyAndSkills />,
  },
  {
    value: "education",
    label: "Education",
    component: <Education />,
  },
  {
    value: "experiences",
    label: "Experiences",
    component: <Experiences />,
  },
  {
    value: "services",
    label: "Services",
    component: <Services />,
  },
  {
    value: "certifications",
    label: "Certifications",
    component: <Certifications />,
  },
  {
    value: "social_links",
    label: "Social Links",
    component: <SocialLinks />,
  },
]

const UpdateProfile = () => {
  return (
    <Tabs defaultValue="profile">
      <div className="flex items-center justify-center">
        <TabsList className="border rounded-lg">
          {tabItems.map((item, index) => (
            <TabsTrigger
              key={index}
              value={item.value}
              className="cursor-pointer"
            >
              {item.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
      {tabItems.map((item, index) => (
        <TabsContent
          key={index}
          value={item.value}
        >
          {item.component}
        </TabsContent>
      ))}
      <ScrollBar orientation="horizontal" />
    </Tabs>
  )
}

export default UpdateProfile
