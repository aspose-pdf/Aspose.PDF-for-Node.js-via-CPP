import AsposePdf from 'asposepdfnodejs';
const AsposePdfModule = await AsposePdf();
const pdf_file = 'Aspose.pdf';
/*Delete bookmarks from a PDF-file and save the "ResultPdfDeleteBookmarks.pdf"*/
const json = AsposePdfModule.AsposePdfDeleteBookmarks(pdf_file, "ResultPdfDeleteBookmarks.pdf");
console.log("AsposePdfDeleteBookmarks => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);
