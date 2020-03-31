import { ajax } from 'rxjs/ajax';
import { ofType } from 'redux-observable';
import { map, mergeMap } from 'rxjs/operators';
import { FETCH_CHARACTERS, fetchCharactersFulFilled } from './src/actions';

const ENDPOINT = 'http://star-wars-character.glitch.me/api/search';

const fetchCharactersEpic = action$ => {
  return action$.pipe(
    ofType(FETCH_CHARACTERS),
    mergeMap(action => ajax.getJSON(ENDPOINT + action.payload.searchTerm)),
  );
};
