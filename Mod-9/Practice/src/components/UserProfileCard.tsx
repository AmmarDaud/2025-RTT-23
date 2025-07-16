import React from 'react';
import type { UserProfileCardProps } from './../types';

export const UserProfileCard: React.FC<UserProfileCardProps> = ({
  user,
  showEmail = false,
  showRole = false,
  onEdit,
  children
}) => {
  return (
    <div className="p-4 border rounded shadow-md bg-white">
      <img
        src={user.avatarUrl || 'https://via.placeholder.com/100'}
        alt={user.name}
        className="w-24 h-24 rounded-full mb-2"
      />
      <h2 className="text-lg font-semibold">{user.name}</h2>
      {showEmail && <p className="text-sm text-gray-600">{user.email}</p>}
      {showRole && <p className="text-sm text-gray-600">{user.role}</p>}
      {onEdit && (
        <button
          onClick={() => onEdit(user.id)}
          className="mt-2 text-blue-500 hover:underline"
        >
          Edit Profile
        </button>
      )}
      {children}
    </div>
  );
};
