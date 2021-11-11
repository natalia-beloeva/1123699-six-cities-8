import {createSelector} from 'reselect';
import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';
import {Offer, Offers} from '../../types/offer';
import {getCurrentCity, getCurrentSortOption} from '../app-process/selectors';
import {SortType} from '../../const';

const getOffers = (state: State): Offers => state[NameSpace.data].offers;
const getOffer = (state: State): Offer | null => state[NameSpace.data].offer;
const getOffersNearby = (state: State): Offers => state[NameSpace.data].offersNearby;
const getIsDataLoaded = (state: State): boolean => state[NameSpace.data].isDataLoaded;
const getIsOfferLoading = (state: State): boolean => state[NameSpace.data].isOfferLoading;
const getIsOfferError = (state: State): boolean => state[NameSpace.data].isOfferError;
const getIsOffersNearbyLoaded = (state: State): boolean => state[NameSpace.data].isOffersNearbyLoaded;

const getCityOffers = createSelector(
  [getOffers, getCurrentCity],
  (offers, city) => offers.filter((offer) => city === offer.city.name),
);

const getSortedOffers = createSelector(
  [getCityOffers, getCurrentSortOption],
  (offers, currentSortOption) => {
    const offersInitial = [...offers];

    switch (currentSortOption) {
      case SortType.PriceHighToLow:
        return offersInitial.sort((a, b) => b.price - a.price);
      case SortType.PriceLowToHigh:
        return offersInitial.sort((a, b) => a.price - b.price);
      case SortType.TopRated:
        return offersInitial.sort((a, b) => b.rating - a.rating);
      default:
        return offersInitial;
    }
  },
);

export {getOffers, getOffer, getOffersNearby, getIsDataLoaded, getIsOfferLoading, getIsOfferError, getIsOffersNearbyLoaded, getCityOffers, getSortedOffers};
