const AsposePdf = require('asposepdfnodejs');
const fs = require("fs");
const os = require("os");

const pdf_file = './ReadMe.pdf';
const aspose_file = './Aspose.jpg';
const resultdir = !!process.platform.match(/^win/) ? '' : fs.realpathSync(os.tmpdir()) + '/';

console.log('Aspose.PDF for Node.js via C++ example');

AsposePdf().then(AsposePdfModule => {

    console.log('Result dir: %O', resultdir);

    var json;

    /*About*/
    console.log("Miscellaneous:");

    //AsposePdfAbout - Get info about Product
    json = AsposePdfModule.AsposePdfAbout();
    console.log("01. AsposePdfAbout => %O",  json.errorCode == 0 ? JSON.parse(JSON.stringify(json).replace('"errorCode":0,"errorText":"",','')) : json.errorText);

    /*Convert from PDF*/
    console.log("Convert from PDF:");

    //AsposePdfPagesToJpg - Convert a PDF-file to JPG
    json = AsposePdfModule.AsposePdfPagesToJpg(pdf_file, resultdir + "ResultPdfToJpg{0:D2}.jpg", 150);
    console.log("01. AsposePdfPagesToJpg => %O",  json.errorCode == 0 ? json.filesNameResult : json.errorText);

    //AsposePdfPagesToPng - Convert a PDF-file to PNG
    json = AsposePdfModule.AsposePdfPagesToPng(pdf_file, resultdir + "ResultPdfToPng{0:D2}.png", 150);
    console.log("02. AsposePdfPagesToPng => %O",  json.errorCode == 0 ? json.filesNameResult : json.errorText);

    //AsposePdfPagesToTiff - Convert a PDF-file to TIFF
    json = AsposePdfModule.AsposePdfPagesToTiff(pdf_file, resultdir + "ResultPdfToTiff{0:D2}.tiff", 300);
    console.log("03. AsposePdfPagesToTiff => %O", json.errorCode == 0 ? json.filesNameResult : json.errorText);

    //AsposePdfPagesToBmp - Convert a PDF-file to BMP
    json = AsposePdfModule.AsposePdfPagesToBmp(pdf_file, resultdir + "ResultPdfToBmp{0:D2}.bmp", 150);
    console.log("04. AsposePdfPagesToBmp => %O", json.errorCode == 0 ? json.filesNameResult : json.errorText);

    //AsposePdfPagesToDICOM - Convert a PDF-file to DICOM
    json = AsposePdfModule.AsposePdfPagesToDICOM(pdf_file, resultdir + "ResultPdfToDICOM{0:D2}.dcm", 150);
    console.log("05. AsposePdfPagesToDICOM => %O", json.errorCode == 0 ? json.filesNameResult : json.errorText);

    //AsposePdfPagesToSvg - Convert a PDF-file to SVG
    json = AsposePdfModule.AsposePdfPagesToSvg(pdf_file, resultdir + "ResultPdfToSvg.svg");
    console.log("06. AsposePdfPagesToSvg => %O", json.errorCode == 0 ? json.filesNameResult : json.errorText);

    //AsposePdfPagesToSvgZip - Convert a PDF-file to SVG(zip)
    json = AsposePdfModule.AsposePdfPagesToSvgZip(pdf_file, resultdir + "ResultPdfToSvgZip.zip");
    console.log("07. AsposePdfPagesToSvgZip => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);

    //AsposePdfToTeX - Convert a PDF-file to TeX
    json = AsposePdfModule.AsposePdfToTeX(pdf_file, resultdir + "ResultPdfToTeX.tex");
    console.log("08. AsposePdfToTeX => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);

    //AsposePdfToXps - Convert a PDF-file to Xps
    json = AsposePdfModule.AsposePdfToXps(pdf_file, resultdir + "ResultPdfToXps.xps");
    console.log("09. AsposePdfToXps => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);

    //AsposePdfTablesToCSV - Convert a PDF-file to CSV (extract tables)
    json = AsposePdfModule.AsposePdfTablesToCSV(pdf_file, resultdir + "ResultPdfTablesToCSV{0:D2}.csv", "\t");
    console.log("10. AsposePdfTablesToCSV => %O", json.errorCode == 0 ? json.filesNameResult : json.errorText);

    //AsposePdfToTxt - Convert a PDF-file to Txt
    json = AsposePdfModule.AsposePdfToTxt(pdf_file, resultdir + "ResultPdfToTxt.txt");
    console.log("11. AsposePdfToTxt => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);

    //AsposePdfConvertToGrayscale - Convert a PDF-file to grayscale
    json = AsposePdfModule.AsposePdfConvertToGrayscale(pdf_file, resultdir + "ResultPdfConvertToGrayscale.pdf");
    console.log("12. AsposePdfConvertToGrayscale => %O",  json.errorCode == 0 ? json.fileNameResult : json.errorText);

    //AsposePdfConvertToPDFA - Convert a PDF-file to PDF/A
    json = AsposePdfModule.AsposePdfConvertToPDFA(pdf_file, AsposePdfModule.PdfFormat.PDF_A_1A, resultdir + "ResultPdfConvertToPDFA.pdf", resultdir + "ResultPdfConvertToPDFALog.xml");
    console.log("13. AsposePdfConvertToPDFA => %O",  json.errorCode == 0 ? [json.fileNameResult, json.fileNameLogResult] : json.errorText);

    //AsposePdfAConvertToPDF - Convert a PDF/A-file to PDF
    json = AsposePdfModule.AsposePdfAConvertToPDF(resultdir + "ResultPdfConvertToPDFA.pdf", resultdir + "ResultPdfConvertToPDF.pdf");
    console.log("14. AsposePdfAConvertToPDF => %O",  json.errorCode == 0 ? json.fileNameResult : json.errorText);

    //AsposePdfToDocX - Convert a PDF-file to DocX
    json = AsposePdfModule.AsposePdfToDocX(pdf_file, resultdir + "ResultPdfToDocX.docx");
    console.log("15. AsposePdfToDocX => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);

    //AsposePdfToXlsX - Convert a PDF-file to XlsX
    json = AsposePdfModule.AsposePdfToXlsX(pdf_file, resultdir + "ResultPdfToXlsX.xlsx");
    console.log("16. AsposePdfToXlsX => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);

    //AsposePdfToEPUB - Convert a PDF-file to ePub
    json = AsposePdfModule.AsposePdfToEPUB(pdf_file, resultdir + "ResultPdfToEPUB.epub");
    console.log("17. AsposePdfToEPUB => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);

    //AsposePdfToDoc - Convert a PDF-file to Doc
    json = AsposePdfModule.AsposePdfToDoc(pdf_file, resultdir + "ResultPdfToDoc.doc");
    console.log("18. AsposePdfToDoc => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);

    //AsposePdfToPptX - Convert a PDF-file to PptX
    json = AsposePdfModule.AsposePdfToPptX(pdf_file, resultdir + "ResultPdfToPptX.pptx");
    console.log("19. AsposePdfToPptX => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);

    //AsposePdfExtractText - Extract text from a PDF-file
    json = AsposePdfModule.AsposePdfExtractText(pdf_file);
    console.log("20. AsposePdfExtractText => %O", json.errorCode == 0 ? json.extractText.split('\n')[1] : json.errorText);

    //AsposePdfExtractImage - Extract image from a PDF-file
    json = AsposePdfModule.AsposePdfExtractImage(pdf_file, resultdir + "ResultPdfExtractImage{0:D2}.jpg", 150);
    console.log("21. AsposePdfExtractImage => %O",  json.errorCode == 0 ? json.filesNameResult : json.errorText);

    //AsposePdfExportFdf - Export from a PDF-file with AcroForm to FDF
    json = AsposePdfModule.AsposePdfExportFdf(pdf_file, resultdir + "ResultPdfExportFdf.fdf");
    console.log("22. AsposePdfExportFdf => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);

    //AsposePdfExportXfdf - Export from a PDF-file with AcroForm to XFDF
    json = AsposePdfModule.AsposePdfExportXfdf(pdf_file, resultdir + "ResultPdfExportXfdf.xfdf");
    console.log("23. AsposePdfExportXfdf => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);

    //AsposePdfExportXml - Export from a PDF-file with AcroForm to XML
    json = AsposePdfModule.AsposePdfExportXml(pdf_file, resultdir + "ResultPdfExportXml.xml");
    console.log("24. AsposePdfExportXml => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);

    //AsposePdfPagesToPDF - Convert a PDF-file to PDF (separate pages)
    json = AsposePdfModule.AsposePdfPagesToPDF(pdf_file, resultdir + "ResultPdfToPDF{0:D2}.pdf");
    console.log("25. AsposePdfPagesToPDF => %O", json.errorCode == 0 ? json.filesNameResult : json.errorText);

    //AsposePdfToMarkdown - Convert a PDF-file to Markdown
    json = AsposePdfModule.AsposePdfToMarkdown(pdf_file, resultdir + "ResultPdfToMarkdown.md");
    console.log("26. AsposePdfToMarkdown => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);

    //AsposePdfToDocXEnhanced - Convert a PDF-file to DocX with Enhanced Recognition Mode (fully editable tables and paragraphs)
    json = AsposePdfModule.AsposePdfToDocXEnhanced(pdf_file, resultdir + "ResultPdfToDocXEnhanced.docx");
    console.log("27. AsposePdfToDocXEnhanced => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);

    /*Convert to PDF*/
    console.log("Convert to PDF:");

    //AsposePdfFromTxt - Convert a TXT-file to PDF
    json = AsposePdfModule.AsposePdfFromTxt('./ReadMe.txt', resultdir + "ResultPdfFromTxt.pdf");
    console.log("01. AsposePdfFromTxt => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);

    //AsposePdfFromImage - Convert a Image-file to PDF
    json = AsposePdfModule.AsposePdfFromImage(aspose_file, AsposePdfModule.PdfPageSize.A4, 10, false, resultdir + "ResultPdfFromImage.pdf");
    console.log("02. AsposePdfFromImage => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);

    /*Organize PDF*/
    console.log("Organize PDF:");

    //AsposePdfOptimize - Optimize a PDF-file
    json = AsposePdfModule.AsposePdfOptimize(pdf_file, resultdir + "ResultPdfOptimize.pdf");
    console.log("01. AsposePdfOptimize => %O",  json.errorCode == 0 ? json.fileNameResult : json.errorText);

    //AsposePdfMerge2Files - Merge two PDF-files
    json = AsposePdfModule.AsposePdfMerge2Files(pdf_file, pdf_file, resultdir + "ResultPdfMerge.pdf");
    console.log("02. AsposePdfMerge2Files => %O",  json.errorCode == 0 ? json.fileNameResult : json.errorText);

    //AsposePdfSplit2Files - Split to two PDF-files
    json = AsposePdfModule.AsposePdfSplit2Files(resultdir + "ResultPdfMerge.pdf", 1, resultdir + "ResultPdfSplit1.pdf", resultdir + "ResultPdfSplit2.pdf");
    console.log("03. AsposePdfSplit2Files => %O",  json.errorCode == 0 ? [json.fileNameResult1, json.fileNameResult2] : json.errorText);

    //AsposePdfRotateAllPages - Rotate PDF-pages
    json = AsposePdfModule.AsposePdfRotateAllPages(pdf_file, AsposePdfModule.Rotation.on270, resultdir + "ResultPdfRotation.pdf");
    console.log("04. AsposePdfRotateAllPages => %O",  json.errorCode == 0 ? json.fileNameResult : json.errorText);

    //AsposePdfDeletePages - Delete pages from a PDF-file
    json = AsposePdfModule.AsposePdfDeletePages(resultdir + "ResultPdfMerge.pdf", resultdir + "ResultPdfDeletePages.pdf", 1);
    console.log("05. AsposePdfDeletePages => %O",  json.errorCode == 0 ? json.fileNameResult : json.errorText);

    //AsposePdfAddStamp - Add stamp to a PDF-file
    json = AsposePdfModule.AsposePdfAddStamp(pdf_file, aspose_file, 0, 5, 5, 40, 40, AsposePdfModule.Rotation.on270, 0.5, resultdir + "ResultPdfAddStamp.pdf");
    console.log("06. AsposePdfAddStamp => %O",  json.errorCode == 0 ? json.fileNameResult : json.errorText);

    //AsposePdfAddStampPages - Add stamp to specific pages in a PDF-file
    json = AsposePdfModule.AsposePdfAddStampPages(pdf_file, aspose_file, 0, 15, 15, 50, 50, AsposePdfModule.Rotation.on90, 0.9, 1, resultdir + "ResultPdfAddStampPages.pdf");
    console.log("07. AsposePdfAddStampPages => %O",  json.errorCode == 0 ? json.fileNameResult : json.errorText);

    //AsposePdfAddImage - Add an image to end a PDF-file
    json = AsposePdfModule.AsposePdfAddImage(pdf_file, aspose_file, resultdir + "ResultPdfAddImage.pdf");
    console.log("08. AsposePdfAddImage => %O",  json.errorCode == 0 ? json.fileNameResult : json.errorText);

    //AsposePdfAddPageNum - Add page number to a PDF-file
    json = AsposePdfModule.AsposePdfAddPageNum(pdf_file, resultdir + "ResultPdfAddPageNum.pdf");
    console.log("09. AsposePdfAddPageNum => %O",  json.errorCode == 0 ? json.fileNameResult : json.errorText);

    //AsposePdfAddBackgroundImage - Add background image to a PDF-file
    json = AsposePdfModule.AsposePdfAddBackgroundImage(pdf_file, aspose_file, resultdir + "ResultPdfAddBackgroundImage.pdf");
    console.log("10. AsposePdfAddBackgroundImage => %O",  json.errorCode == 0 ? json.fileNameResult : json.errorText);

    //AsposePdfAddTextHeaderFooter - Add text in Header/Footer of a PDF-file
    json = AsposePdfModule.AsposePdfAddTextHeaderFooter(pdf_file, "Aspose.PDF for Node.js via C++", "ASPOSE", resultdir + "ResultPdfAddHeaderFooter.pdf");
    console.log("11. AsposePdfAddTextHeaderFooter => %O",  json.errorCode == 0 ? json.fileNameResult : json.errorText);

    //AsposePdfRepair - Repair a PDF-file
    json = AsposePdfModule.AsposePdfRepair(pdf_file, resultdir + "ResultPdfRepair.pdf");
    console.log("12. AsposePdfRepair => %O",  json.errorCode == 0 ? JSON.parse(JSON.stringify(json).replace('"errorCode":0,"errorText":"",','')) : json.errorText);

    //AsposePdfOptimizeResource - Optimize resources of PDF-file
    json = AsposePdfModule.AsposePdfOptimizeResource(pdf_file, resultdir + "ResultPdfOptimizeResource.pdf");
    console.log("13. AsposePdfOptimizeResource => %O",  json.errorCode == 0 ? json.fileNameResult : json.errorText);

    //AsposePdfSetBackgroundColor - Set the background color for the PDF-file
    json = AsposePdfModule.AsposePdfSetBackgroundColor(pdf_file, "#426bf4", resultdir + "ResultPdfSetBackgroundColor.pdf");
    console.log("14. AsposePdfSetBackgroundColor => %O",  json.errorCode == 0 ? json.fileNameResult : json.errorText);

    //AsposePdfDeleteAnnotations - Delete annotations from a PDF-file
    json = AsposePdfModule.AsposePdfDeleteAnnotations(pdf_file, resultdir + "ResultPdfDeleteAnnotations.pdf");
    console.log("15. AsposePdfDeleteAnnotations => %O",  json.errorCode == 0 ? json.fileNameResult : json.errorText);

    //AsposePdfDeleteBookmarks - Delete bookmarks from a PDF-file
    json = AsposePdfModule.AsposePdfDeleteBookmarks(pdf_file, resultdir + "ResultPdfDeleteBookmarks.pdf");
    console.log("16. AsposePdfDeleteBookmarks => %O",  json.errorCode == 0 ? json.fileNameResult : json.errorText);

    //AsposePdfDeleteAttachments - Delete attachments from a PDF-file
    json = AsposePdfModule.AsposePdfDeleteAttachments(pdf_file, resultdir + "ResultPdfDeleteAttachments.pdf");
    console.log("17. AsposePdfDeleteAttachments => %O",  json.errorCode == 0 ? json.fileNameResult : json.errorText);

    //AsposePdfDeleteImages - Delete images from a PDF-file
    json = AsposePdfModule.AsposePdfDeleteImages(pdf_file, resultdir + "ResultPdfDeleteImages.pdf");
    console.log("18. AsposePdfDeleteImages => %O",  json.errorCode == 0 ? json.fileNameResult : json.errorText);

    //AsposePdfDeleteJavaScripts - Delete JavaScripts from a PDF-file
    json = AsposePdfModule.AsposePdfDeleteJavaScripts(pdf_file, resultdir + "ResultPdfDeleteJavaScripts.pdf");
    console.log("19. AsposePdfDeleteJavaScripts => %O",  json.errorCode == 0 ? json.fileNameResult : json.errorText);

    //AsposePdfAddAttachment - Add attachment to a PDF-file
    json = AsposePdfModule.AsposePdfAddAttachment(pdf_file, './ReadMe.txt', "Description", resultdir + "ResultPdfAddAttachment.pdf");
    console.log("20. AsposePdfAddAttachment => %O",  json.errorCode == 0 ? json.fileNameResult : json.errorText);

    //AsposePdfGetAttachment - Get attachment from a PDF-file
    json = AsposePdfModule.AsposePdfGetAttachment(resultdir + "ResultPdfAddAttachment.pdf", resultdir + "ResultPdfGetAttachment_{0}");
    console.log("21. AsposePdfGetAttachment => %O",  json.errorCode == 0 ? json.filesNameResult : json.errorText);

    //AsposePdfReplaceText - Replace text in a PDF-file
    json = AsposePdfModule.AsposePdfReplaceText(pdf_file, "Aspose", "ASPOSE", resultdir + "ResultPdfReplaceText.pdf");
    console.log("22. AsposePdfReplaceText => %O",  json.errorCode == 0 ? json.fileNameResult : json.errorText);

    //AsposePdfReplaceTextPages - Replace text on pages in a PDF-file
    json = AsposePdfModule.AsposePdfReplaceTextPages(pdf_file, "Aspose", "ASPOSE", "1-2", resultdir + "ResultPdfReplaceTextPages.pdf");
    console.log("23. AsposePdfReplaceTextPages => %O",  json.errorCode == 0 ? json.fileNameResult : json.errorText);

    //AsposePdfFindText - Find text in a PDF-file
    json = AsposePdfModule.AsposePdfFindText(pdf_file, "Aspose");
    console.log("24. AsposePdfFindText => %O",  json.errorCode == 0 ? JSON.parse(JSON.stringify(json).replace('"errorCode":0,"errorText":"",','')) : json.errorText);

    //AsposePdfReplaceFont - Replace font Helvetica to Times in a PDF-file
    json = AsposePdfModule.AsposePdfReplaceFont(pdf_file, "Helvetica", "Times", resultdir + "ResultPdfReplaceFont.pdf");
    console.log("25. AsposePdfReplaceFont => %O",  json.errorCode == 0 ? json.fileNameResult : json.errorText);

    //AsposePdfValidatePDFA - Validate PDF/A compatibility a PDF-file
    json = AsposePdfModule.AsposePdfValidatePDFA(resultdir + "ResultPdfConvertToPDFA.pdf", AsposePdfModule.PdfFormat.PDF_A_1A, resultdir + "ResultPdfPdfValidatePDFA.xml");
    console.log("26. AsposePdfValidatePDFA => %O",  json.errorCode == 0 ? json.fileNameResult : json.errorText);

    //AsposePdfFindHiddenText - Find hidden text in a PDF-file
    json = AsposePdfModule.AsposePdfFindHiddenText(pdf_file);
    console.log("27. AsposePdfFindHiddenText => textFragments: %O", json.errorCode == 0 ? json.textFragments : json.errorText);

    //AsposePdfDeleteHiddenText - Delete hidden text from a PDF-file
    json = AsposePdfModule.AsposePdfDeleteHiddenText(pdf_file, resultdir + "ResultPdfDeleteHiddenText.pdf");
    console.log("28. AsposePdfDeleteHiddenText => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);

    //AsposePdfAddWatermark - Add watermark to a PDF-file
    json = AsposePdfModule.AsposePdfAddWatermark(pdf_file, "Aspose PDF", "Arial", 32, "#010101", 100, 100, 45, 1, 0.5, resultdir + "ResultPdfAddWatermark.pdf");
    console.log("29. AsposePdfAddWatermark => %O",  json.errorCode == 0 ? json.fileNameResult : json.errorText);

    //AsposePdfDeleteWatermarks - Delete watermarks from a PDF-file
    json = AsposePdfModule.AsposePdfDeleteWatermarks(resultdir + "ResultPdfAddWatermark.pdf", resultdir + "ResultPdfDeleteWatermarks.pdf");
    console.log("30. AsposePdfDeleteWatermarks => %O",  json.errorCode == 0 ? json.fileNameResult : json.errorText);

    //AsposePdfMergeLayers - Merge layers a PDF-file
    json = AsposePdfModule.AsposePdfMergeLayers(pdf_file, "MergedLayer", resultdir + "ResultPdfMergeLayers.pdf");
    console.log("31. AsposePdfMergeLayers => %O",  json.errorCode == 0 ? json.fileNameResult : json.errorText);

    //AsposePdfFlatten - Flatten a PDF-file
    json = AsposePdfModule.AsposePdfFlatten(pdf_file, resultdir + "ResultPdfFlatten.pdf");
    console.log("32. AsposePdfFlatten => %O",  json.errorCode == 0 ? json.fileNameResult : json.errorText);

    //AsposePdfMakeBooklet - Make booklet from a PDF-file
    json = AsposePdfModule.AsposePdfMakeBooklet(pdf_file, resultdir + "ResultPdfMakeBooklet.pdf");
    console.log("33. AsposePdfMakeBooklet => %O",  json.errorCode == 0 ? json.fileNameResult : json.errorText);

    //AsposePdfMakeNUp - Make N-Up document from a PDF-file
    json = AsposePdfModule.AsposePdfMakeNUp(pdf_file, 2, 2, resultdir + "ResultPdfMakeNUp.pdf");
    console.log("34. AsposePdfMakeNUp => %O",  json.errorCode == 0 ? json.fileNameResult : json.errorText);

    //AsposePdfDeleteBlankPages - Delete blank pages from a PDF-file
    json = AsposePdfModule.AsposePdfDeleteBlankPages(pdf_file, resultdir + "ResultPdfDeleteBlankPages.pdf");
    console.log("35. AsposePdfDeleteBlankPages => %O",  json.errorCode == 0 ? json.fileNameResult : json.errorText);

    //AsposePdfEmbedFonts - Embed fonts a PDF-file
    json = AsposePdfModule.AsposePdfEmbedFonts(pdf_file, resultdir + "ResultPdfEmbedFonts.pdf");
    console.log("36. AsposePdfEmbedFonts => %O",  json.errorCode == 0 ? json.fileNameResult : json.errorText);

    //AsposePdfUnembedFonts - Unembed fonts a PDF-file
    json = AsposePdfModule.AsposePdfUnembedFonts(pdf_file, resultdir + "ResultPdfUnembedFonts.pdf");
    console.log("37. AsposePdfUnembedFonts => %O",  json.errorCode == 0 ? json.fileNameResult : json.errorText);

    //AsposePdfOptimizeFileSize - Optimize size of PDF-file with image compression quality
    json = AsposePdfModule.AsposePdfOptimizeFileSize(pdf_file, 50, resultdir + "ResultPdfOptimizeFileSize.pdf");
    console.log("38. AsposePdfOptimizeFileSize => %O",  json.errorCode == 0 ? json.fileNameResult : json.errorText);

    //AsposePdfDeleteTables - Delete tables from a PDF-file
    json = AsposePdfModule.AsposePdfDeleteTables(pdf_file, resultdir + "ResultPdfDeleteTables.pdf");
    console.log("39. AsposePdfDeleteTables => %O",  json.errorCode == 0 ? json.fileNameResult : json.errorText);

    /*Metadata PDF*/
    console.log("Metadata PDF:");

    //AsposePdfSetInfo - Set info (metadata) in a PDF-file
    json = AsposePdfModule.AsposePdfSetInfo(pdf_file, "Setting PDF Document Information", "", "Aspose", undefined, "Aspose.Pdf, DOM, API", undefined, "05/05/2023 11:55 PM", resultdir + "ResultPdfSetInfo.pdf");
    console.log("01. AsposePdfSetInfo => %O",  json.errorCode == 0 ? json.fileNameResult : json.errorText);

    //AsposePdfGetInfo - Get info (metadata) from a PDF-file
    json = AsposePdfModule.AsposePdfGetInfo(resultdir + "ResultPdfSetInfo.pdf");
    console.log("02. AsposePdfGetInfo => %O",  json.errorCode == 0 ? JSON.parse(JSON.stringify(json).replace('"errorCode":0,"errorText":"",','')) : json.errorText);

    //AsposePdfGetAllFonts - Get list fonts from a PDF-file
    json = AsposePdfModule.AsposePdfGetAllFonts(pdf_file);
    console.log("03. AsposePdfGetAllFonts => fonts: %O",  json.errorCode == 0 ?  json.fonts : json.errorText);

    //AsposePdfRemoveMetadata - Remove metadata from a PDF-file
    json = AsposePdfModule.AsposePdfRemoveMetadata(pdf_file, resultdir + "ResultPdfRemoveMetadata.pdf");
    console.log("04. AsposePdfRemoveMetadata => %O",  json.errorCode == 0 ? json.fileNameResult : json.errorText);

    //AsposePdfGetWordsCharactersCount - Get words and characters count in a PDF-file
    json = AsposePdfModule.AsposePdfGetWordsCharactersCount(pdf_file);
    console.log("05. AsposePdfWordsCharactersCount => count: %O",  json.errorCode == 0 ? JSON.parse(JSON.stringify(json).replace('"errorCode":0,"errorText":"",','')) : json.errorText);

    //AsposePdfGetPagesLayers - Get list layers from a PDF-file
    json = AsposePdfModule.AsposePdfGetPagesLayers(pdf_file);
    console.log("06. AsposePdfGetPagesLayers => layers: %O",  json.errorCode == 0 ? JSON.parse(JSON.stringify(json).replace('"errorCode":0,"errorText":"",','')) : json.errorText);

    /*Security PDF*/
    console.log("Security PDF:");

    //AsposePdfEncrypt - Encrypt a PDF-file
    json = AsposePdfModule.AsposePdfEncrypt(pdf_file, "user", "owner", AsposePdfModule.Permissions.PrintDocument, AsposePdfModule.CryptoAlgorithm.RC4x40, resultdir + "ResultPdfEncrypt.pdf");
    console.log("01. AsposePdfEncrypt => %O",  json.errorCode == 0 ? json.fileNameResult : json.errorText);

    //AsposePdfDecrypt - Decrypt a PDF-file
    json = AsposePdfModule.AsposePdfDecrypt(resultdir + "ResultPdfEncrypt.pdf", "owner", resultdir + "ResultPdfDecrypt.pdf");
    console.log("02. AsposePdfDecrypt => %O",  json.errorCode == 0 ? json.fileNameResult : json.errorText);

    //AsposePdfSignPKCS7 - Sign a PDF-file with digital signatures
    //Key PKCS7 for test, converted to Base64, with "Pa$$w0rd2023" password
    const test_pfx_file = resultdir +'sign.pfx';
    const test_pfx_data = "MIIEcQIBAzCCBDcGCSqGSIb3DQEHAaCCBCgEggQkMIIEIDCCAj8GCSqGSIb3DQEHBqCCAjAwggIsAgEAMIICJQYJKoZIhvcNAQcBMBwGCiqGSIb3DQEMAQYwDgQI4tjRHb+OMLsCAggAgIIB+OAPdXDmh+6qTyjHkumo2euCw4EvRZ8qSha/AAWYespZs8mA9dInLWM33HeDqktHEcZoPf/CCWqQopRA6RPFAYIn9ioR8s3Phd3LmoMPb52SKJMvWjRGRppLyo4gCNZfv37duV8+mKTSyDW1wrtHsZnvLlUHmy8+OcG8zsAAX6YwHTMkafllpRKkB0kmO1boSvHEp5IPsU8u50VpF21OXYNV7D5c4W2O1GrV0a5HD6OyObHJjj+ufPF7nh+qEuPN/b8hm14y+sZPoVSRvwtH+O8VVDxnJWX+y+jGhChLxiYUYRnhBMW6X+cZW9bcpXZIkFdQdPWA1/opOdTguHlXQF1R+JNnUUOtopwX103undyPGl5JGXvLrr6iH2aO1GY1p2Asd1exaQdfwFQynCxlZrKaCc2JBs5Jem5/wWN6rfq+n15tsYvk2gTP+U/icla8wp1NsqqTGOe0dAJNH3kDOwxKVb5gU+fOYbFWI/6iZ3Tdl41W66rE4Gxj937oYJE1KUK3SlxJtL0uK5c3ZN9yMJYdpc9k2HQ1VOssuUKrmpuOcyJhpF4XosHxMyQxPFFVA/TNggb3Dv3cr2Qei+JqF4n4KAqYCY5u0O+y6+R9Ig0L5zCL/n9cWyPyYqqvEH4ICxqUoH05qCJIMdiNlc5w1PYUXKaSRSzK0TCCAdkGCSqGSIb3DQEHAaCCAcoEggHGMIIBwjCCAb4GCyqGSIb3DQEMCgECoIIBhjCCAYIwHAYKKoZIhvcNAQwBAzAOBAgWFTAixF9bPAICCAAEggFgwC4A+R9X2xdbdfz0IKw2f7pe3iJdgLKJPYiUDV2cGfQnM4UuQKu9qIZ3lAzBtQcF09Wy6pwwU63nVHiGZ6y9PunZZ3tIM24I0Ii1Q5PrphvT4z7yXPqI+sv53AhzwpTJ2XHJQRf53PX7V8ujv3k8lfBQ6gYxfFMkrTdZlfiWeoWZSlFMKUzmaRfBFVit5BRUNEgZrySfZxyxULpo+KzQ/b5K0Z69x6Gvj/j21gEkGTEDWhmjECjsPCP+sWDMyB1xOxHimJgmLtSHc7hpdE/xuRBVELxhlFI1lYj3fbWbnMNzeLG+OBaoktbpr9kbsWRM568vLxdV7XZYkaoGEd+SEUTR+Yxyak/DHspkO/o4apjOh24U6GCqfqPl4ucxTMvOiYpobrxPub/sqQPXB0NEsqNPjcYdsT1y1YkYMxO0b1heh8TWat6SYk1dLi1wdV0iGf8LTImqzzUobZNBfrybjzElMCMGCSqGSIb3DQEJFTEWBBRBGCVJ5N72ukaNrJUetg4Rp0/41DAxMCEwCQYFKw4DAhoFAAQU8VT/8VxDX7Sx3p05TO3BNne5YXYECJhmeDAQpwBNAgIIAA==";
    fs.writeFileSync(test_pfx_file, test_pfx_data, {encoding: 'base64'});
    //Sign: signatureAppearance
    const sign_png_file = resultdir +'sign.png';
    const sign_png_data = "iVBORw0KGgoAAAANSUhEUgAAAGQAAAAyCAIAAAAlV+npAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAT6SURBVGhD7ZptTFtVGIBbyqUrbddALRA/gtuYEzs2J5sRBQPZcEUgAwvBDQxOUZP5ScwSl/jDfzPxx4wfi3M4rYNVAkwWZygy4w/RkoyxzVkZg4nMNBaQkVKgdP3At56TI8y2XPWe23MTnx/AfeHXk/c8vTcX+eLioux/+JGAv0uTQDDQ7xzAF/SRtqz9Pa8XWcp6x+z4mjISPoadg6crW2vhB02Suqu2Iz8zD83pIdXN+mV6bO+pfSpd6KFSbVDlKWkxi7BfkpQFqapuq/cpp4vrklO2ObfvSUa+bMM9+C/oIElZkCrH3Ln7diSFDBPh6/QJ5KvcWtPu6PzzT6ggPVmQqiOD76/dGkzJuY5HQPqEqUHJaf27O56i50tigYdUbTlSsNo4ual8AY+WwHn0tiaf38NZzceqjBV4KhxS2iySqnsfWI1Hy/Frpx597NZAKAj7NTJ1FU+FQ0qyXuzavyxVkXBNzMHXuk01Wfp1aCIgkpH12aV2y3DTzalajuJ62kCve2Na9rslb+GRoEhDFpypZ754yZAVWFPgxaNInP9uRuHVQrA0Sg0eCYoEZC34FyBVcGcQLVWIa3b15Egi7NTG9HvwSGgkIKux+8CQ92LsVM0M6of75DVr6p7cEn4AogTrsnim6qzNt05ppJQqAtOy/lGq2qo/pZQqAruyZn2zla21PFN1tPyduw134RE12JUFd1VXfQ4+qapf3/B4ThUe0YRRWZ+cb2kdbeaTqg2qzYd2HsQjyrAo68fxn2CteKfKsopbhUeUYU4WpAqe7PinisZjTTSoy4I1gbtKfMEDPqmavpQqZqoIdGW1Ozq3HS0sPr4L9gWPYsInVQmTaQNnboiZKgJFWWAKDtRCwNd7ra+kxbyiL56putAndqoItGQhU5zWb96bsbmQO+f+PrYvnndVo9+qxE8VgYosYsrUoPRlXrmjcMr4cEJsX3Cn7gyOrJiqn/sV4qeKILyspab82ik0zMidARHIl8szjoaED85+dOrXNmZTRRBYVkRTCBCx9ZGwryJL6VJfF377obH7AMupIggpq/liazRTCJ0x7GvMP0R8wamsbquXq718UnW88sO4pIogmCxYkCc+fzYQChYUGyKaQtzki3+qnst+viK7DI/ihJCvwt62H4YDpdKFdr6wGODCLw6i4Xak9n91Q+2/ZY77HVIV4wBCqnqa543qXPvTZxIViXgaJ4Q8hq/k7YP6et0J3e/JuQUdnkYC7ReY4pMqpS8FUhV3U4DwL1nJfkUrF8E7bNDo5cHUqAcQUgUH8ITJGvcDiKDyRjrGZyJ/IFVwrwCpOmR6E4/iDa3X9//RF1OpIgh/U4qoMlZYzcf8Hs7W5OM8ejzlDVOpItCSBfxrX+iu6uNdh+9MycQjNqAoC1jqC04WnsaEnbuqvyPGvxydHrJBv4Iqz/Y9ybL0qJ99AJupItDdLETZBlNXbQc82X19Yl42Hmu/2EwVQQxZQH5m3oq+yAMga6kiiCQLiO0LperlnFdhDfGIPcRo1lJ6x+wlLeZwv3YnyzJwv1CqcnUPflP/JZsHECHeZiH+2i/rvG/UgIaQKniohs9Nlk0BYm8W4vLklSJLqVvhur8wxemadl6WnSw7aVpfjH/NKvGRBSBfrtnwSXwtv/HgjjfQnGXiJgtAvrJS1zKeKkI8ZQHgS5Okvl13G75mmzjLkhIy2R/qB+VUhKQ5zAAAAABJRU5ErkJggg==";
    fs.writeFileSync(sign_png_file, sign_png_data, {encoding: 'base64'});
    //AsposePdfSignPKCS7
    json = AsposePdfModule.AsposePdfSignPKCS7(pdf_file, 1, test_pfx_file, "Pa$$w0rd2023", 100, 100, 200, 100, "Reason", "Contact", "Location", 1, sign_png_file, resultdir + "ResultPdfSignPKCS7.pdf");
    console.log("03. AsposePdfSignPKCS7 => %O",  json.errorCode == 0 ? json.fileNameResult : json.errorText);
    //delete tmp files
    fs.unlinkSync(test_pfx_file);
    fs.unlinkSync(sign_png_file);

    //AsposePdfChangePassword - Change passwords of the PDF-file
    json = AsposePdfModule.AsposePdfChangePassword(resultdir + "ResultPdfEncrypt.pdf", "owner", "newuser", "newowner", resultdir + "ResultPdfChangePassword.pdf");
    console.log("04. AsposePdfChangePassword => %O",  json.errorCode == 0 ? json.fileNameResult : json.errorText);

    },
    reason => {console.log(`The unknown error has occurred: ${reason}`);}
);
