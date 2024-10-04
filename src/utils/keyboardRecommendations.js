export function getKeyboardRecommendations(accuracy, wpm) {
  if (accuracy > 80 || wpm > 80) {
    return [
      {
        name: 'Das Keyboard Model S Professional',
        link: 'https://amzn.to/3zOudNw',
      },
      {
        name: 'Happy Hacking Keyboard Professional 2',
        link: 'https://amzn.to/47Ql1F3',
      },
      {
        name: 'Logitech MX Keys',
        link: 'https://amzn.to/3BvWF7f',
      },
    ];
  } else if (accuracy > 60 || wpm > 60) {
    return [
      {
        name: 'Keychron K1',
        link: 'https://amzn.to/3ZTbOd0',
      },
      {
        name: 'Razer Pro Type',
        link: 'https://amzn.to/4eOOb9N',
      },
      {
        name: 'Keychron K2',
        link: 'https://amzn.to/3zMUR9u',
      },
    ];
  } else {
    return [
      {
        name: 'Redragon K552',
        link: 'https://amzn.to/3zLDQwm',
      },
      {
        name: 'Keychron C1',
        link: 'https://amzn.to/4gPrpQX',
      },
      {
        name: 'Royal Kludge RK61',
        link: 'https://amzn.to/4gPmqzH',
      },
    ];
  }
}
