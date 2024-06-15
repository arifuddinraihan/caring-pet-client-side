"use client";

import { Button, ModalHeader, useDisclosure } from "@nextui-org/react";
import Image from "next/image";
import CustomModal from "../../../../components/shared/CustomModal";
import UpdateUserInfoForm from "./UpdateUserInfoForm";

const MyProfileInformation = ({ name, profilePhoto, email }: any) => {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

  return (
    <div className="my-12 flex flex-col gap-2 justify-items-center">
      <div className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm">
        <Image
          src={profilePhoto ? profilePhoto : ""}
          alt={name ? name : "alt text"}
          className="w-full h-48 rounded-t-md"
          width={100}
          height={48}
        />
        <div className="pt-3 ml-4 mr-4 mb-4">
          <h3 className="text-xl text-gray-900">{name ? name : ""}</h3>
          <p className="text-gray-400 text-sm mt-1">{email ? email : ""}</p>
        </div>
        <CustomModal size="md" isOpen={isOpen} onOpenChange={onOpenChange}>
          <div className="py-6">
            <ModalHeader className="flex flex-col gap-1 text-center">
              Edit your information
            </ModalHeader>

            <UpdateUserInfoForm
              name={name}
              email={email}
              profilePhoto={profilePhoto}
              onClose={onClose}
            />
          </div>
        </CustomModal>
        <Button
          className="mb-4"
          type="button"
          size="md"
          color="primary"
          variant="shadow"
          onClick={onOpen}
        >
          Edit Profile
        </Button>
      </div>
    </div>
  );
};

export default MyProfileInformation;
