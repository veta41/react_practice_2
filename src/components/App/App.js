import { Component } from 'react';
import { getEventFetch, getEventDetails } from '../services/api';
import { Gallery } from 'components/Gallery/Gallery';
import { EventDetails } from 'components/EventDetails/EventDetails';
import { NextButton } from 'components/NextButton/NextButton';

export class App extends Component {
  state = {
    events: [],
    eventDetails: null,
    page: 1,
    // current: null,
    // isOpen: false,
  };

  componentDidMount = async () => {
    const fetchData = await getEventFetch(this.state.page);
    this.setState({ events: fetchData });
  };

  componentDidUpdate = async (prevProps, prevState) => {
    if (prevState.page !== this.state.page) {
      const fetchNextPage = await getEventFetch(this.state.page);
      this.setState({ events: fetchNextPage });
    }
  };

  onShowDetails = async id => {
    const fetchEventDetails = await getEventDetails(id);
    console.log(fetchEventDetails);
    this.setState({ eventDetails: fetchEventDetails, current: id });
    // this.setState(prevState => ({
    //   isOpen: !prevState.isOpen,
    // }));
    // if (this.state.isOpen === false) {
    //   this.setState({ current: null });
    // }
  };

  onHandleClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { events, eventDetails, current } = this.state;
    return (
      <>
        <NextButton onHandleClick={this.onHandleClick} text="Next" />
        <Gallery
          eventsData={events}
          onShowDetails={this.onShowDetails}
          current={current}
        />
        {eventDetails && <EventDetails event={eventDetails} />}
      </>
    );
  }
}
