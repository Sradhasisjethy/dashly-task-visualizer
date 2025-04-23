
import { useState, useEffect, useMemo } from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarPlus, CalendarDays, List, Edit, Trash, Repeat } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { CalendarEvent, EventPriority, RecurrencePattern } from "@/models/event";
import { format } from "date-fns";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { v4 as uuidv4 } from "@/lib/uuid";

const CalendarPage = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState("calendar");
  const { toast } = useToast();
  
  // Form state for new event
  const [eventTitle, setEventTitle] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventPriority, setEventPriority] = useState<EventPriority>("medium");
  const [recurrencePattern, setRecurrencePattern] = useState<RecurrencePattern>("none");
  const [recurrenceEndDate, setRecurrenceEndDate] = useState<Date | undefined>(undefined);

  // Sample events
  useEffect(() => {
    const sampleEvents: CalendarEvent[] = [
      {
        id: "1",
        title: "Team Meeting",
        description: "Weekly team sync",
        date: new Date(new Date().setDate(new Date().getDate() - 2)),
        priority: "high",
        recurrencePattern: "weekly",
        recurrenceEndDate: new Date(new Date().setMonth(new Date().getMonth() + 3)),
      },
      {
        id: "2",
        title: "Product Demo",
        description: "Present new features to stakeholders",
        date: new Date(),
        priority: "medium",
        recurrencePattern: "none",
      },
      {
        id: "3",
        title: "1:1 with Manager",
        description: "Monthly check-in",
        date: new Date(new Date().setDate(new Date().getDate() + 3)),
        priority: "medium",
        recurrencePattern: "monthly",
      },
    ];
    setEvents(sampleEvents);
  }, []);

  const handleAddEvent = () => {
    if (!date) {
      toast({
        title: "Error",
        description: "Please select a date for the event",
        variant: "destructive",
      });
      return;
    }
    
    if (!eventTitle.trim()) {
      toast({
        title: "Error",
        description: "Please enter an event title",
        variant: "destructive",
      });
      return;
    }

    const newEvent: CalendarEvent = {
      id: uuidv4(),
      title: eventTitle,
      description: eventDescription,
      date: date,
      priority: eventPriority,
      recurrencePattern: recurrencePattern,
      recurrenceEndDate: recurrencePattern !== "none" ? recurrenceEndDate : undefined,
    };

    setEvents([...events, newEvent]);
    resetForm();
    setIsDialogOpen(false);
    
    toast({
      title: "Event Added",
      description: `${eventTitle} has been scheduled for ${format(date, "PPP")}`,
    });
  };

  const resetForm = () => {
    setEventTitle("");
    setEventDescription("");
    setEventPriority("medium");
    setRecurrencePattern("none");
    setRecurrenceEndDate(undefined);
  };

  const handleDeleteEvent = (id: string) => {
    setEvents(events.filter(event => event.id !== id));
    toast({
      title: "Event Deleted",
      description: "The event has been removed from your calendar",
    });
  };

  const eventsForSelectedDate = useMemo(() => {
    if (!date) return [];
    return events.filter(event => {
      // Check for exact date match
      if (event.date.toDateString() === date.toDateString()) return true;
      
      // Check for recurring events
      if (event.recurrencePattern !== 'none') {
        const eventDate = new Date(event.date);
        const selectedDate = new Date(date);
        
        // Check if the selected date is after the event start date
        if (selectedDate >= eventDate) {
          // Check if there's an end date and if selected date is before it
          if (event.recurrenceEndDate && selectedDate > event.recurrenceEndDate) {
            return false;
          }
          
          switch (event.recurrencePattern) {
            case 'daily':
              return true;
            case 'weekly':
              return eventDate.getDay() === selectedDate.getDay();
            case 'monthly':
              return eventDate.getDate() === selectedDate.getDate();
            case 'yearly':
              return eventDate.getMonth() === selectedDate.getMonth() && 
                     eventDate.getDate() === selectedDate.getDate();
            default:
              return false;
          }
        }
      }
      
      return false;
    });
  }, [date, events]);

  const datesWithEvents = useMemo(() => {
    // Create a map of dates with events
    const dateMap = new Map();
    
    events.forEach(event => {
      // Add specific event dates
      const dateStr = event.date.toDateString();
      dateMap.set(dateStr, true);
      
      // Add recurring event dates if applicable
      if (event.recurrencePattern !== 'none') {
        // Generate dates based on recurrence pattern for the next few months
        const today = new Date();
        const futureDate = new Date();
        futureDate.setMonth(today.getMonth() + 3); // Look 3 months into the future
        
        const endDate = event.recurrenceEndDate || futureDate;
        const currentDate = new Date(event.date);
        
        while (currentDate <= endDate) {
          dateMap.set(currentDate.toDateString(), true);
          
          // Move to next occurrence based on pattern
          switch (event.recurrencePattern) {
            case 'daily':
              currentDate.setDate(currentDate.getDate() + 1);
              break;
            case 'weekly':
              currentDate.setDate(currentDate.getDate() + 7);
              break;
            case 'monthly':
              currentDate.setMonth(currentDate.getMonth() + 1);
              break;
            case 'yearly':
              currentDate.setFullYear(currentDate.getFullYear() + 1);
              break;
          }
        }
      }
    });
    
    // Convert map keys to dates
    return Array.from(dateMap.keys()).map(dateStr => new Date(dateStr));
  }, [events]);

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-1">Calendar</h1>
        <p className="text-gray-500">View and manage your schedule</p>
      </div>
      
      <Tabs defaultValue="calendar" value={currentTab} onValueChange={setCurrentTab}>
        <div className="flex justify-between items-center mb-4">
          <TabsList>
            <TabsTrigger value="calendar" className="flex items-center gap-1">
              <CalendarDays className="h-4 w-4" />
              Calendar View
            </TabsTrigger>
            <TabsTrigger value="list" className="flex items-center gap-1">
              <List className="h-4 w-4" />
              List View
            </TabsTrigger>
          </TabsList>
          
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="flex items-center gap-2">
                <CalendarPlus className="h-4 w-4" />
                Add Event
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Schedule a new event</DialogTitle>
              </DialogHeader>
              
              <div className="grid gap-4 py-4">
                <div>
                  <label htmlFor="eventTitle" className="text-sm font-medium mb-1 block">
                    Event Title
                  </label>
                  <Input
                    id="eventTitle"
                    value={eventTitle}
                    onChange={(e) => setEventTitle(e.target.value)}
                    placeholder="Enter event title"
                  />
                </div>
                
                <div>
                  <label htmlFor="eventDescription" className="text-sm font-medium mb-1 block">
                    Description (Optional)
                  </label>
                  <Textarea
                    id="eventDescription"
                    value={eventDescription}
                    onChange={(e) => setEventDescription(e.target.value)}
                    placeholder="Enter event description"
                  />
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="w-full">
                    <label htmlFor="eventPriority" className="text-sm font-medium mb-1 block">
                      Priority
                    </label>
                    <Select
                      value={eventPriority}
                      onValueChange={(val) => setEventPriority(val as EventPriority)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="low">Low</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="w-full">
                    <label htmlFor="recurrence" className="text-sm font-medium mb-1 block">
                      Recurrence
                    </label>
                    <Select 
                      value={recurrencePattern}
                      onValueChange={(val) => setRecurrencePattern(val as RecurrencePattern)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select recurrence" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="none">None</SelectItem>
                          <SelectItem value="daily">Daily</SelectItem>
                          <SelectItem value="weekly">Weekly</SelectItem>
                          <SelectItem value="monthly">Monthly</SelectItem>
                          <SelectItem value="yearly">Yearly</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                {recurrencePattern !== 'none' && (
                  <div>
                    <label className="text-sm font-medium mb-1 block">
                      Recurrence End Date (Optional)
                    </label>
                    <Calendar
                      mode="single"
                      selected={recurrenceEndDate}
                      onSelect={setRecurrenceEndDate}
                      className="border rounded-md mx-auto"
                      disabled={(date) => date < new Date()}
                    />
                  </div>
                )}
              </div>
              
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleAddEvent}>
                  Schedule Event
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <TabsContent value="calendar" className="mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <CardContent className="p-6">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border mx-auto pointer-events-auto"
                  modifiers={{
                    hasEvent: datesWithEvents
                  }}
                  modifiersStyles={{
                    hasEvent: {
                      fontWeight: 'bold',
                      textDecoration: 'underline',
                      backgroundColor: 'var(--accent)',
                      color: 'var(--accent-foreground)'
                    }
                  }}
                />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>
                  {date ? `Events for ${format(date, 'MMMM d, yyyy')}` : 'No date selected'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {eventsForSelectedDate.length === 0 ? (
                  <p className="text-gray-500 text-center py-6">No events scheduled for this date</p>
                ) : (
                  <div className="space-y-4">
                    {eventsForSelectedDate.map((event) => (
                      <div 
                        key={event.id}
                        className={`p-3 rounded-lg border ${
                          event.priority === 'high' 
                            ? 'border-red-200 bg-red-50' 
                            : event.priority === 'medium'
                              ? 'border-yellow-200 bg-yellow-50'
                              : 'border-green-200 bg-green-50'
                        }`}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium">{event.title}</h3>
                            {event.description && (
                              <p className="text-sm text-gray-600 mt-1">{event.description}</p>
                            )}
                            {event.recurrencePattern !== 'none' && (
                              <div className="flex items-center gap-1 text-xs text-gray-500 mt-2">
                                <Repeat className="h-3 w-3" />
                                <span>Repeats {event.recurrencePattern}</span>
                              </div>
                            )}
                          </div>
                          <button 
                            onClick={() => handleDeleteEvent(event.id)}
                            className="text-gray-500 hover:text-red-600"
                          >
                            <Trash className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="list" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle>All Events</CardTitle>
            </CardHeader>
            <CardContent>
              {events.length === 0 ? (
                <p className="text-gray-500 text-center py-6">No events scheduled</p>
              ) : (
                <div className="space-y-4">
                  {events.map((event) => (
                    <div 
                      key={event.id}
                      className="p-4 rounded-lg border flex justify-between items-center hover:bg-gray-50"
                    >
                      <div>
                        <h3 className="font-medium">{event.title}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                          <span>{format(event.date, 'MMMM d, yyyy')}</span>
                          {event.recurrencePattern !== 'none' && (
                            <div className="flex items-center gap-1">
                              <Repeat className="h-3 w-3" />
                              <span>Repeats {event.recurrencePattern}</span>
                            </div>
                          )}
                        </div>
                        {event.description && (
                          <p className="text-sm text-gray-600 mt-1">{event.description}</p>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${
                          event.priority === 'high' 
                            ? 'bg-red-500' 
                            : event.priority === 'medium'
                              ? 'bg-yellow-500'
                              : 'bg-green-500'
                        }`}></span>
                        <button 
                          onClick={() => handleDeleteEvent(event.id)}
                          className="text-gray-500 hover:text-red-600 ml-2"
                        >
                          <Trash className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default CalendarPage;
