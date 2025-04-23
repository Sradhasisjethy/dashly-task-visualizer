
export type EventPriority = 'low' | 'medium' | 'high';
export type RecurrencePattern = 'none' | 'daily' | 'weekly' | 'monthly' | 'yearly';

export interface CalendarEvent {
  id: string;
  title: string;
  description?: string;
  date: Date;
  endDate?: Date;
  priority: EventPriority;
  recurrencePattern: RecurrencePattern;
  recurrenceEndDate?: Date;
}
