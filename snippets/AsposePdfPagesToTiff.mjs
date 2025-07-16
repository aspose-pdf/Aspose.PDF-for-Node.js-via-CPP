import AsposePdf from 'asposepdfnodejs';
const AsposePdfModule = await AsposePdf();
const pdf_file = 'Aspose.pdf';
/*Convert a PDF-file to TIFF with template "ResultPdfToTiff{0:D2}.tiff" ({0}, {0:D2}, {0:D3}, ... format page number), resolution 150 DPI and save*/
const json = AsposePdfModule.AsposePdfPagesToTiff(pdf_file, "ResultPdfToTiff{0:D2}.tiff", 150);
console.log("AsposePdfPagesToTiff => %O", json.errorCode == 0 ? json.filesNameResult : json.errorText);
