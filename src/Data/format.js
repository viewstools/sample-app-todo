// export functions to use in data format
// in
export function isFilterCompleted(rawValue) {
  return rawValue === 'completed';
}
//out
export function setFilterCompleted() {
  return 'completed';
}

export function isFilterActive(rawValue) {
  return rawValue === 'active';
}

export function setFilterActive() {
  return 'active';
}

export function isFilterAll(rawValue) {
  return rawValue === 'all';
}

export function setFilterAll() {
  return 'all';
}

export function activeCount(rawValue) {
  return rawValue.items.filter((id) => !rawValue.byId[id].isCompleted).length;
}

export function activeCountWithText(rawValue) {
  const count = rawValue.items.filter((id) => !rawValue.byId[id].isCompleted)
    .length;
  return `${count} item${count === 1 ? '' : 's'} left`;
}
