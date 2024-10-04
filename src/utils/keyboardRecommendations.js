export function getKeyboardRecommendations(accuracy, wpm) {
  if (accuracy > 80 || wpm > 80) {
    return [
      {
        name: 'Ducky One 3 SF',
        link: 'https://www.amazon.com/dp/B09J1PJM3D?tag=youraffiliateid-20',
      },
      {
        name: 'Keychron Q1',
        link: 'https://www.amazon.com/dp/B09FHMBVJ6?tag=youraffiliateid-20',
      },
      {
        name: 'GMMK Pro',
        link: 'https://www.amazon.com/dp/B09C1DG1QJ?tag=youraffiliateid-20',
      },
    ];
  } else if (accuracy > 60 || wpm > 60) {
    return [
      {
        name: 'Leopold FC660M',
        link: 'https://www.amazon.com/dp/B08CZVCF4B?tag=youraffiliateid-20',
      },
      {
        name: 'Varmilo VA87M',
        link: 'https://www.amazon.com/dp/B08XJSBRM3?tag=youraffiliateid-20',
      },
      {
        name: 'Durgod K320',
        link: 'https://www.amazon.com/dp/B07QK16RDQ?tag=youraffiliateid-20',
      },
    ];
  } else {
    return [
      {
        name: 'Redragon K552',
        link: 'https://www.amazon.com/dp/B016MAK38U?tag=youraffiliateid-20',
      },
      {
        name: 'Keychron C1',
        link: 'https://www.amazon.com/dp/B08CNHX5HN?tag=youraffiliateid-20',
      },
      {
        name: 'Royal Kludge RK61',
        link: 'https://www.amazon.com/dp/B0832CZNS5?tag=youraffiliateid-20',
      },
    ];
  }
}
