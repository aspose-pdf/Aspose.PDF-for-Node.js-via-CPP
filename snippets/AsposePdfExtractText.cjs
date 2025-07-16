const AsposePdf = require('asposepdfnodejs');
const pdf_file = 'Aspose.pdf';
AsposePdf().then(AsposePdfModule => {
    /*Extract text from a PDF-file*/
    const json = AsposePdfModule.AsposePdfExtractText(pdf_file);
    console.log("AsposePdfExtractText => %O", json.errorCode == 0 ? json.extractText : json.errorText);
});