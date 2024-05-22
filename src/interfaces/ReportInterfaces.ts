export interface CreateReportResponse {
  content:    string;
  user_id:    string;
  post_id:    string;
  updated_at: Date;
  created_at: Date;
  id:         number;
}

export interface CreateReportRequest {
  content: string;
  post_id: string;
}
