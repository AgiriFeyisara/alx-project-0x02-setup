// components/common/UserCard.tsx

import { type UserProps } from "@/interfaces";

const UserCard = ({ name, email, address }: UserProps) => {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-600">{email}</p>
      <p className="mt-2 text-gray-700">
        {address.street}, {address.city}
      </p>
    </div>
  );
};

export default UserCard;
