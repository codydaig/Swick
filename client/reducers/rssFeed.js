const rssFeed = (state = ['test feed right here', '22', '33'], action) => {
  switch (action.type) {
    case 'READ_ALL_RSS':
      return state;
    case 'ADD_RSS':
      return [
        ...state,
        action,
      ];
    default:
      return state;
  }
};

export default rssFeed;