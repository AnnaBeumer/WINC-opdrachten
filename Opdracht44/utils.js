const sortByPropName = (args) => {
    return (a, b) => {
      return a[args].localeCompare(b[args]);
  };
};


// const sortByPropName = (args) => {
//     let descending = (order) => {
//         return order ? order.includes('des') ? true : false : false;
//     };
//     const sorter = (a, b) => {

//         let aa = a[args.propName], bb = b[args.propName];
//         return (aa + 0 == aa && bb + 0 == bb) ? aa - bb/* numbers */ : aa.localeCompare(bb)/* strings */;
//       };
//       return (a, b) => {
//           let result = sorter(a, b);
//           return (descending(args.order)) ? result *= -1 /* descending */ : result/* ascending*/;
//       };
//   };
//sortByPropName({ propName: properyName, order: sortOrder })
  