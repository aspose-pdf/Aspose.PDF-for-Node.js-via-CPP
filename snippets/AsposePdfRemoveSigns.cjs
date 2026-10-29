const AsposePdf = require('asposepdfnodejs');
const pdf_file = 'Aspose.pdf';
AsposePdf().then(AsposePdfModule => {
    /*Remove all digital signatures from a PDF-file and save the "ResultRemoveSigns.pdf"*/
    const json = AsposePdfModule.AsposePdfRemoveSigns(pdf_file, "ResultRemoveSigns.pdf");
    console.log("AsposePdfRemoveSigns => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);
});