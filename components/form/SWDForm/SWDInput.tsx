import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Controller } from "react-hook-form"

type TSWDInput = {
  label?: string
  type?: "text" | "email" | "password" | "url" | "file"
  name: string
  placeholder: string
  className?: string
}

const SWDInput = ({
  label,
  type = "text",
  name,
  placeholder,
  className,
}: TSWDInput) => {
  return (
    <div className={className}>
      <Controller
        name={name}
        render={({ field }) => (
          <div className="space-y-2">
            <Label>{label}</Label>
            <Input
              {...field}
              type={type}
              placeholder={placeholder}
            />
          </div>
        )}
      />
    </div>
  )
}

export default SWDInput
