import { useRouter } from 'next/router'
import { Fragment } from 'react';
import EventSummary from '../../components/event-detail/event-summary'
import Eventlogistics from '../../components/event-detail/event-logistics'
import EventContent from '../../components/event-detail/event-content'
import { getEventById } from '../../dummy-data'

function EventDetailPage() {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);
  if (!event) {
    return <p>No event found!</p>
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <Eventlogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent >
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  )
}

export default EventDetailPage;
