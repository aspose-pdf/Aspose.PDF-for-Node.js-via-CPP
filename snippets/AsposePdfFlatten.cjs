const AsposePdf = require('asposepdfnodejs');
const pdf_file = 'Aspose.pdf';
AsposePdf().then(AsposePdfModule => {
    /*Flatten a PDF-file and save the "ResultFlatten.pdf"*/
    const json = AsposePdfModule.AsposePdfFlatten(pdf_file, "ResultFlatten.pdf");
    console.log("AsposePdfFlatten => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);
});