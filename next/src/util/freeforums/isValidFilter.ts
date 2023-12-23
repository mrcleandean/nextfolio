import { FilterStringType } from 'demdevvyshared/freeforums';

const isValidFilter = (filter: string): filter is FilterStringType => {
    return filter === 'newest' || filter === 'positive' || filter === 'negative' || filter === 'admin';
}

export default isValidFilter;