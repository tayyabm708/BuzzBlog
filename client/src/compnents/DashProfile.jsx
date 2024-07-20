import { Button, Label, Spinner, TextInput } from "flowbite-react";
import React from "react";
import { useSelector } from "react-redux";

export default function DashProfile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="max-w-lg mx-auto p-3 w-full">
      <h1 className="my-7 text-center font-semibold text-3xl">Profile</h1>
      <form className="flex flex-col gap-4">
        <div className="w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full">
          <img
            src={currentUser.profilePicture}
            alt="user"
            className="rounded-full w-full h-ful object-cover border-8 border-[lightgray] "
          />
        </div>
        <div>
          <Label value="Your username" />
          <TextInput
            type="text"
            placeholder="username"
            id="username"
            defaultValue={currentUser.username}
          />
        </div>
        <div>
          <Label value="Your email" />
          <TextInput type="email" placeholder="name@company.com"
           id="email"
           defaultValue={currentUser.email}
           />
        </div>
        <div>
          <Label value="Your password" />
          <TextInput
            type="password"
            placeholder="password"
            id="password"
          />
        </div>
        <Button gradientDuoTone="purpleToBlue" outline type="submit">
          Update
        </Button>
      </form>
      <div className="text-red-500 flex justify-between mt-5">
        <span className="cursor-pointer">Delete Acocunt</span>
        <span className="cursor-pointer">Sign Out</span>
      </div>
    </div>
  );
}
