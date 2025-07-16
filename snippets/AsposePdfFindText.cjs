const AsposePdf = require('asposepdfnodejs');
const pdf_file = 'Aspose.pdf';
AsposePdf().then(AsposePdfModule => {
    const findText = 'Aspose';
    /*Find text in a PDF-file*/
    const json = AsposePdfModule.AsposePdfFindText(pdf_file, findText);
    /*json.textFragments - array of text fragments: { text: <string>, xIndent: <number>, yIndent: <number>, fontName: <string>, fontSize: <number> }*/
    console.log("AsposePdfFindText => textFragments: %O", json.errorCode == 0 ? json.textFragments : json.errorText);
});
