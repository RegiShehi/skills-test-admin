/* eslint-disable camelcase */
interface IUser {
  id: number;
  full_name: string;
  first_name: string;
  last_name: string;
  email: string;
  birth_date: Date;
  photo_link: string | null;
}

export default IUser;
