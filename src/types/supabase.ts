export interface SupabaseResponse {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any; 
  success: boolean; 
  error: { code: string; message: string }
}
