import { AnimalTypes } from "../enums/animalTypes";
import { PublicationTypes } from "../enums/publicationTypes";
import { Profile } from "./ProfileInterfaces";

export interface StorePostRequest {
  pet:  PetRequest;
  post: PostRequest;
}

export interface PetRequest {
  name:        string;
  type:        AnimalTypes;
  breed:       string;
  age:         string;
  personality: string;
  image:       string;
  image_type:  string;
}

export interface PostRequest {
  title:    string;
  content:  string;
  type:     PublicationTypes;
  location: string;
}

export interface CreatePostResponse {
  pet:  Pet;
  post: Post;
}

export interface Pet extends PetRequest {
  user_id:     number;
  updated_at:  Date;
  created_at:  Date;
  id:          number;
  images:      Image[];
}

export interface Post extends PostRequest {
  user_id:    number;
  pet_id:     number;
  updated_at: Date;
  created_at: Date;
  id:         number;
  pet:        Pet;
  user:       User;
}

export interface GetAllPostResponse {
  posts: GetAllPostResponseData;
}

export interface GetAllPostResponseData {
  current_page:   number;
  data:           Post[];
  first_page_url: string;
  from:           number;
  last_page:      number;
  last_page_url:  string;
  links:          Link[];
  next_page_url:  null;
  path:           string;
  per_page:       number;
  prev_page_url:  null;
  to:             number;
  total:          number;
}

export interface Link {
  url:    null | string;
  label:  string;
  active: boolean;
}

export interface GetPostResponse {
  post: Post;
}

export interface User {
  id:         number;
  email:      string;
  email_verified_at: null;
  created_at: Date;
  updated_at: Date;
  profile:   Profile;
}

export interface Image {
  id:         number;
  base64_url: string;
}

export interface PostSearchQueryParams {
  postType: PublicationTypes;
  animalType: AnimalTypes;
}