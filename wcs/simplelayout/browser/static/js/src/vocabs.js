import { useSimplelayoutStore } from "@/store.js";

function ColWidths(asMapping) {
  const sl = useSimplelayoutStore();
  let widths = [];

  if (Object.keys(sl.defaultConfig).includes("col-widths")) {
    widths = sl.defaultConfig["col-widths"];
  } else {
    widths = [
      { cols: 12, label: "100%" },
      { cols: 9, label: "75%" },
      { cols: 8, label: "66%" },
      { cols: 6, label: "50%" },
      { cols: 4, label: "33%" },
      { cols: 3, label: "25%" },
    ];
  }

  if (asMapping !== undefined) {
    return widths.reduce((a, b) => ({ ...a, [b.cols]: b.label }), {});
  }

  return widths;
}

export { ColWidths };
