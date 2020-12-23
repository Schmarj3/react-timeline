import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  console.log(props.events)
  const timelineEvents = props.events.map((oneEvent, i) => {
    return(
      <div key={i} className="timeline">
        <TimelineEvent
          person={oneEvent.person}
          status={oneEvent.status}
          timeStamp={oneEvent.timeStamp}
        />
      </div>
    );
  }); 

  return(
    <section>
      {timelineEvents}
    </section>
  );
}

export default Timeline;