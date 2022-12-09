import React, { useState } from "react";
import { useParams } from "react-router";
import EventsDetail from "../../components/event/EventsDetail";
import {
  getEvents
} from "../../utils/event-data.js";

function DetailEvent () {
  const { id } = useParams();
  const [Event_Detail] = useState(getEvents(id));

  return (
    <>
      <EventsDetail {...Event_Detail} />
    </>
  )
}

export default DetailEvent;