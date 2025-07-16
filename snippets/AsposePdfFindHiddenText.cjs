const AsposePdf = require('asposepdfnodejs');
const pdf_file = 'Aspose.pdf';
AsposePdf().then(AsposePdfModule => {
    /*Find hidden text in a PDF-file*/
    const json = AsposePdfModule.AsposePdfFindHiddenText(pdf_file);
    /*json.textFragments - array of text fragments: { text: <string>, xIndent: <number>, yIndent: <number>, fontName: <string>, fontSize: <number> }*/
    console.log("AsposePdfFindHiddenText => textFragments: %O", json.errorCode == 0 ? json.textFragments : json.errorText);
});
