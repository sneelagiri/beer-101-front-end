export default interface brewery {
  id: string;
  name: string;
  nameShortDisplay: string;
  description: string;
  website: string;
  established: string;
  isOrganic: string;
  images: {
    icon: string;
    medium: string;
    large: string;
    squareMedium: string;
    squareLarge: string;
  };
  status: string;
  statusDisplay: string;
  createDate: string;
  updateDate: string;
  isMassOwned: string;
  isInBusiness: string;
  isVerified: string;
  locations: [
    {
      id: string;
      name: string;
      streetAddress: string;
      locality: string;
      region: string;
      postalCode: string;
      phone: string;
      website: string;
      latitude: number;
      longitude: number;
      isPrimary: string;
      isClosed: string;
      openToPublic: string;
      locationType: string;
      locationTypeDisplay: string;
      countryIsoCode: string;
      yearOpened: string;
      status: string;
      statusDisplay: string;
      createDate: string;
      updateDate: string;
      timezoneId: string;
      country: {
        isoCode: string;
        name: string;
        displayName: string;
        isoThree: string;
        numberCode: number;
        createDate: string;
      };
    }
  ];
}
