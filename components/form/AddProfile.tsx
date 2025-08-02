"use client"

import { FieldValues, SubmitHandler } from "react-hook-form"
import { Button } from "../ui/button"
import { toast } from "sonner"
import SWDInput from "./SWDForm/SWDInput"
import SWDForm from "./SWDForm/SWDForm"
import SWDTextArea from "./SWDForm/SWDTextArea"

const AddProfile = () => {
  const defaultValues = {
    image: "",
    name: "",
    devRole: "",
    phone: "",
    address: "",
  }

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    toast("Profile data Submitted", {
      description: (
        <pre className="text-sm mt-2 whitespace-pre-wrap">
          {JSON.stringify(data, null, 2)}
        </pre>
      ),
    })
  }

  return (
    <SWDForm
      onSubmit={onSubmit}
      defaultValues={defaultValues}
      className="grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      <SWDInput
        type="url"
        name="image"
        label="Image"
        placeholder="Enter image url here"
      />
      <SWDInput
        name="name"
        label="Name"
        placeholder="Enter your name here"
      />
      <SWDInput
        name="devRole"
        label="Developer Role"
        placeholder="Enter developer role here"
      />
      <SWDInput
        name="phone"
        label="Phone"
        placeholder="Enter your phone number here"
      />
      <SWDTextArea
        name="address"
        label="Address"
        placeholder="Enter your address here"
        className="md:col-span-2"
      />

      <Button
        type="submit"
        size={"lg"}
        className="cursor-pointer md:col-span-2"
      >
        Save
      </Button>
    </SWDForm>
  )
}

export default AddProfile
