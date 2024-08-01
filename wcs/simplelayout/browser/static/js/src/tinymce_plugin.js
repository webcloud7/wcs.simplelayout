tinymce.PluginManager.add('tableOnly', (editor) => {
  editor.on("Change", (event) => {
    let nodes = editor.getBody().childNodes;
    let tableCount = 0;
    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i].nodeName !== "TABLE") {
        nodes[i].remove();
      } else if (nodes[i].nodeName === "TABLE") {
        tableCount++;
        if (tableCount > 1) {
          nodes[i].remove();
        }
      }
    }
  });

  return {
    getMetadata: () => ({
      name: 'Only allow 1 table in body, and table only',
    }),
  };
});
