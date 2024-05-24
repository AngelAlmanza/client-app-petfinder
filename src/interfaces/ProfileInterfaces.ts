export interface ProfileResponse {
  profile: Profile;
}

export interface Profile {
  id:              number;
  created_at:      Date;
  updated_at:      Date;
  name:            string;
  lastname:        null;
  city:            null;
  profile_picture: null;
  cover_picture:   null;
  user_id:         number;
}
