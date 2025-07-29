import { ChartArea } from "@/components/shared/ChartArea"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <Card>
          <CardHeader>
            <p className="text-xl font-bold font-mono">Projects</p>
            <span className="font-mono">
              How many projects I&apos;ve uploaded
            </span>
          </CardHeader>
          <CardContent>
            <h1 className="text-5xl font-bold font-mono">03</h1>
          </CardContent>
          <CardFooter>
            <Link
              href={"/projects"}
              className={buttonVariants({ variant: "link", size: "sm" })}
            >
              View all
            </Link>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <p className="text-xl font-bold font-mono">Blogs</p>
            <span className="font-mono">How many blogs I&apos;ve uploaded</span>
          </CardHeader>
          <CardContent>
            <h1 className="text-5xl font-bold font-mono">03</h1>
          </CardContent>
          <CardFooter>
            <Link
              href={"/blogs"}
              className={buttonVariants({ variant: "link", size: "sm" })}
            >
              View all
            </Link>
          </CardFooter>
        </Card>
      </div>
      <ChartArea />
    </div>
  )
}
