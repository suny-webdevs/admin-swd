import { Controller } from "react-hook-form"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

type TSWDInput = {
  label?: string
  name: string
  placeholder: string
  className?: string
}

const SWDTextArea = ({ label, name, placeholder, className }: TSWDInput) => {
  return (
    <div className={className}>
      <Controller
        name={name}
        render={({ field }) => (
          <div className="space-y-2">
            <Label>{label}</Label>
            <Textarea
              {...field}
              placeholder={placeholder}
            />
          </div>
        )}
      />
    </div>
  )
}

export default SWDTextArea
