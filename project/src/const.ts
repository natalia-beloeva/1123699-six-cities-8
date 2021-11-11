const HTTP_STATUS_OK = 200;
const MAX_COMMENT_LENGTH = 300;
const MAX_OFFER_IMAGES_COUNT = 6;

enum AppRoute {
  Favorites = '/favorites',
  SignIn = '/login',
  Room = '/offer',
  Root = '/',
}

enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

enum MapType {
  City = 'CITY',
  Property = 'PROPERTY',
}

enum CardType {
  City = 'CITY',
  Nearby ='NEARBY',
}

enum City {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf'
}

enum SortType {
  Popular = 'Popular',
  PriceLowToHigh = 'Price: low to high',
  PriceHighToLow = 'Price: high to low',
  TopRated = 'Top rated first',
}

enum ApiRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments'
}

enum ServiceMessage {
  AuthFail = 'Do not forget to log in',
  LoginFail = 'Please make sure all fields are filled correctly',
  PostReviewFail = 'Something went wrong while posting, please try again',
}

enum ReviewStatus {
  Uploading = 'UPLOADING',
  Uploaded = 'UPLOADED',
  NotUploaded = 'NOT_UPLOADED',
  Unknown = 'UNKNOWN',
}

export {HTTP_STATUS_OK, MAX_COMMENT_LENGTH, MAX_OFFER_IMAGES_COUNT, AppRoute, AuthStatus, MapType, CardType, City, SortType, ApiRoute, ServiceMessage, ReviewStatus};
