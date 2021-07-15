/**
 * Interface for the 'Notes' data
 */
export interface NoteItem {
  id: string | number;
  name: string;
  full_name: string;
  description: string;
  created_at:Date;
  size: number|null;
  url: string;
}