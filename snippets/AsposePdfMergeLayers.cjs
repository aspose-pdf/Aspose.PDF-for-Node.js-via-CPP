const AsposePdf = require('asposepdfnodejs');
const pdf_file = 'Aspose.pdf';
AsposePdf().then(AsposePdfModule => {
    const mergedLayerName = 'MergedLayer';
    /*Merge layers a PDF-file and save the "ResultPdfMergeLayers.pdf"*/
    const json = AsposePdfModule.AsposePdfMergeLayers(pdf_file, mergedLayerName, "ResultPdfMergeLayers.pdf");
    console.log("AsposePdfMergeLayers => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);
});
