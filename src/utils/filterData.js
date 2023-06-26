export function filterData(searchText, restaurantList) {
    if (searchText == "") {
      return restaurantList;
    }
    const filterData = restaurantList.filter(
      (e) => e.data.name.toUpperCase().includes(searchText.toUpperCase())
      // ||e.data.name.includes("")
    );
    // console.log(filterdata);
    return filterData;
  }
  