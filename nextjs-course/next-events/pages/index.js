import { getFeaturedEvents } from '../mock/dummy-data'
import EventList from '../components/events/EventList'

function HomePage() {
  const featuredEvents = getFeaturedEvents()

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  )
}

export default HomePage
