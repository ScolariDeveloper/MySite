import ReactGA from 'react-ga';

const TRACKING_ID = 'UA-XXXXXXXXX-X'; // Sostituisci con il tuo Tracking ID
ReactGA.initialize(TRACKING_ID);

export const pageView = (path) => {
  ReactGA.pageview(path);
};

export const event = (category, action) => {
  ReactGA.event({
    category: category,
    action: action,
  });
};
