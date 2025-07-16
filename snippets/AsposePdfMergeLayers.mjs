import AsposePdf from 'asposepdfnodejs';
const AsposePdfModule = await AsposePdf();
const pdf_file = 'Aspose.pdf';
const mergedLayerName = 'MergedLayer';
/*Merge layers a PDF-file and save the "ResultPdfMergeLayers.pdf"*/
const json = AsposePdfModule.AsposePdfMergeLayers(pdf_file, mergedLayerName, "ResultPdfMergeLayers.pdf");
console.log("AsposePdfMergeLayers => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);
