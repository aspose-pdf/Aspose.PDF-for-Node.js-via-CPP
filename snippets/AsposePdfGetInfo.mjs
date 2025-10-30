import AsposePdf from 'asposepdfnodejs';
const AsposePdfModule = await AsposePdf();
const pdf_file = 'Aspose.pdf';
/*Get info (metadata) from a PDF-file*/
const json = AsposePdfModule.AsposePdfGetInfo(pdf_file);
/* JSON
   Title             : json.title
   Creator           : json.creator
   Author            : json.author
   Subject           : json.subject
   Keywords          : json.keywords
   Creation Date     : json.creation
   Modify Date       : json.mod
   PDF format        : json.format
   PDF version       : json.version
   PDF is PDF/A      : json.ispdfa
   PDF is PDF/UA     : json.ispdfua
   PDF is linearized : json.islinearized
   PDF is encrypted  : json.isencrypted
   PDF permission    : json.permission
   PDF page size     : json.size
   Page count        : json.pagecount
   Annotation count  : json.annotationcount
   Bookmark count    : json.bookmarkcount
   Attachment count  : json.attachmentcount
   Metadata count    : json.metadatacount
   JavaScript count  : json.javascriptcount
   Image count       : json.imagecount
   Table count       : json.tablecount
*/
console.log("AsposePdfGetInfo => %O", json.errorCode == 0 ? 'Title: ' + json.title : json.errorText);
