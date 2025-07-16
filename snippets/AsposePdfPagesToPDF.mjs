import AsposePdf from 'asposepdfnodejs';
const AsposePdfModule = await AsposePdf();
const pdf_file = 'Aspose.pdf';
/*Convert a PDF-file to separate PDF pages with template "ResultPdfToPDF{0:D2}.pdf" ({0}, {0:D2}, {0:D3}, ... format page number) and save*/
const json = AsposePdfModule.AsposePdfPagesToPDF(pdf_file, "ResultPdfToPDF{0:D2}.pdf");
console.log("AsposePdfPagesToPDF => %O", json.errorCode == 0 ? json.filesNameResult : json.errorText);