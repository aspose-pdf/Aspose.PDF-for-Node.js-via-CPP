import AsposePdf from 'asposepdfnodejs';
const AsposePdfModule = await AsposePdf();
const pdf_file = 'Aspose.pdf';
/*Set the background color for the PDF-file and save the "ResultPdfSetBackgroundColor.pdf"*/
const json = AsposePdfModule.AsposePdfSetBackgroundColor(pdf_file, "#426bf4", "ResultPdfSetBackgroundColor.pdf");
console.log("AsposePdfSetBackgroundColor => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);
