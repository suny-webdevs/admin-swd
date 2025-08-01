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
    email: "",
    password: "",
    phone: "",
    address: "",
  }

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    toast("Profile data Submitted", {
      description: (
        <div className="text-sm mt-2 whitespace-pre-wrap">
          {JSON.stringify(data, null, 2)}
        </div>
      ),
    })
  }

  return (
    <SWDForm
      onSubmit={onSubmit}
      defaultValues={defaultValues}
      className="grid grid-cols-1 md:grid-cols-2 gap-3"
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
        type="email"
        name="email"
        label="Email"
        placeholder="Enter your email here"
      />
      <SWDInput
        type="password"
        name="password"
        label="Password"
        placeholder="Enter your password here"
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
      <div>
        <Button
          type="submit"
          className="cursor-pointer"
        >
          Save
        </Button>
      </div>
    </SWDForm>
  )
}

export default AddProfile
