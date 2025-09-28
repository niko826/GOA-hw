//ESM (ECMAScript Modules): სინტაქტი import / export. ბრაუზერში ნატივად მუშაობს და თანამედროვე build tools (Vite, webpack, Rollup) თავს კარგად არგებენ. მხარს უჭერს static analysis (tree-shaking). Node-ში გამოიყენება .mjs ან package.json-ში "type": "module".

//CommonJS: Node-ის წარსული სტანდარტი — require() და module.exports/exports. სინგულარულ, runtime-ზე resolve-დება. ბევრ ძველ Node პროექტშია. Interop quirks ESM-თან (default export vs module.exports).

//ძირითადი სხვაობები: სინტაქსი, როცა მიმდინარეობს გატვირთვა (სტატიკური vs runtime), tree-shaking-ის მხარდაჭერა, Node კონფიგურაცია ("type": "module"), და interop-ი (როგორ იღებ module.exports as default וכו').