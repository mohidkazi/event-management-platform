export type EventType = {
  id: string // Unique identifier for the event
  eventName: string // Name of the event
  eventDate: Date // Date of the event
  organizer: string // Organizer's name
  email: string // Email of the organizer
  phone: string // Phone number of the organizer
  location: {
    street: string // Venue street address
    city: string // Venue city
    state: string // Venue state
    zip: string // Venue zip code
  }
  createdAt: Date // Timestamp when the event was created
  updatedAt: Date // Timestamp when the event was last updated
}
