function column(col) {
  return {
    "@type": "col",
    width: `${12 / parseInt(col)}`,
    items: [],
  };
}

function row(cols) {
  const colsArray = Array.from(new Array(cols), (x, i) => i);
  return {
    "@type": "row",
    items: colsArray.map(() => column(cols)),
  };
}

export { row, column };
