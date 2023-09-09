interface common {
  _id: string;
  createdAt: string;
  updatedAt: string;
}

export interface User extends common {
  userId: string;
  name: string;
  email: string;
  imageUrl: string;
}

export interface Server extends common {
  userAuthId: string;
  name: string;
  imageUrl: string;
  email: string;
  inviteCode: string;
}
