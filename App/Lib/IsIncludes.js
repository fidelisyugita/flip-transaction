function IsIncludes(text = '', searchText = '') {
  return text
    .toString()
    .toLowerCase()
    .includes(searchText.toString().toLowerCase());
}

export default IsIncludes;
