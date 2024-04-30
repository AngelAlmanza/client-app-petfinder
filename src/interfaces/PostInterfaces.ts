export interface PostRequest {
  pet:  PetRequest;
  post: PostRequest;
}

export interface PetRequest {
  name:        string;
  type:        string;
  breed:       string;
  age:         string;
  personality: string;
}

export interface PostRequest {
  title:    string;
  content:  string;
  type:     string;
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
}

export interface Post extends PostRequest {
  user_id:    number;
  pet_id:     number;
  updated_at: Date;
  created_at: Date;
  id:         number;
}
