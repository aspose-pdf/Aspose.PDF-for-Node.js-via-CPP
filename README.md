# Node.js API to Process & Manipulate PDF Files

Add PDF processing, manipulation, and conversion features to your Node.js applications.

[Aspose.PDF for Node.js via C++](https://products.aspose.com/pdf/nodejs-cpp/) allows you to work with PDF documents, pages, text, images, attachments, fonts, security, and signatures.

<p align="center">
  <a title="Download complete Aspose.PDF for Node.js via C++ code" href="https://releases.aspose.com/pdf/nodejscpp/new-releases/">
	<img src="https://raw.github.com/AsposeExamples/java-examples-dashboard/master/images/downloadZip-Button-Large.png" />
  </a>
</p>

## PDF Processing

- **Extract text** from PDF pages, including search via regular expressions and hidden text detection.
- **Add or extract images** to and from PDF documents; remove or replace images when needed.
- **Concatenate**, **split**, or **reorganize** PDF files; delete specific or blank pages.
- **Linearize** PDF documents for web optimization and **optimize** internal structure and resources.
- **Convert** PDF documents to:
  - **Office formats:** DOC, DOCX, XLS, XLSX, PPTX, DOCX with Enhanced Recognition Mode
  - **Web formats:** SVG, SVG (ZIP), XPS, EPUB
  - **Image formats:** JPEG, PNG, BMP, TIFF, DICOM
  - **Other formats:** Grayscale PDF, PDF/A, TeX, TXT, Markdown
- **Manipulate** PDF structure and content:
  - Bookmarks, hyperlinks, annotations, attachments, JavaScript
  - Fonts, metadata, layers, background color, tables
- **Secure PDF documents**:
  - Encrypt, decrypt, set or change passwords
  - Configure access permissions
- **Digitally sign** PDFs using PKCS#7, validate and remove signatures.
- **Add or remove** watermarks, stamps, page numbers, headers/footers, background images.
- **Flatten** PDF documents (forms, annotations, layers).
- **Create booklets** or generate **N-Up layouts**.
- **Export form data** (AcroForm) to FDF, XFDF, XML.
- **Validate** and **convert** to/from **PDF/A** format.

## Read & Write PDF & Other Formats

**Fixed Layout Support:**
- PDF, PDF/A

**Save/Export As:**
- **Office:** DOC, DOCX, DOCX(Enhanced Recognition Mode), XLS, XLSX, PPTX
- **Images:** JPEG, PNG, BMP, TIFF, DICOM
- **Other:** EPUB, SVG, SVG (ZIP), TeX, TXT, Grayscale PDF, PDF/A, XPS

**Input Formats:**
- TXT, Images (JPEG/PNG/BMP/TIFF)

## Advanced Features

- **Fonts:** List, embed/unembed, and replace fonts in PDF files.
- **Metadata:** Set, extract, or remove metadata.
- **Layers:** Get list of layers, merge or flatten them.
- **Forms & Annotations:**
  - Delete annotations, bookmarks, JavaScript, tables
  - Flatten forms
- **Attachments:** Add, extract, or delete file attachments.
- **Text Tools:**
  - Find, replace, or delete text (including hidden text)
  - Get word and character counts

## Additional Utilities

- **Repair** corrupted or damaged PDF files.
- **Generate PDF** from TXT or image files.
- **Optimize** document resources and structure.
- **Product info**: retrieve library info, version, and capabilities.

## Platform Independence

Aspose.PDF for Node.js via C++ is a WebAssembly-based library that can be used to create applications in Node.js environment.
The library was written in C++ and does not require additional runtime environments.

## Getting Started with Aspose.PDF for Node.js via C++

Are you ready to give Aspose.PDF for Node.js via C++ a try?

- Execute `npm install asposepdfnodejs` in Terminal in Visual Studio Code or in another console.

Prefer to work with the source code directly?

- Execute `git clone https://github.com/aspose-pdf/Aspose.PDF-for-Node.js-via-CPP.git`, then `cd Aspose.PDF-for-Node.js-via-CPP` and `npm install` to set up the project locally.

## Setting up

- You need arial.ttf and times.ttf fonts to perform basic operations

## Extract Text From Whole PDF

**CommonJS**:
```js
const AsposePdf = require('asposepdfnodejs');
const pdf_file = 'Aspose.pdf';
AsposePdf().then(AsposePdfModule => {
    /*Extract text from a PDF-file*/
    const json = AsposePdfModule.AsposePdfExtractText(pdf_file);
    console.log("AsposePdfExtractText => %O", json.errorCode == 0 ? json.extractText : json.errorText);
});
```
**ECMAScript/ES6**:
```js
import AsposePdf from 'asposepdfnodejs';
const AsposePdfModule = await AsposePdf();
const pdf_file = 'Aspose.pdf';
/*Extract text from a PDF-file*/
const json = AsposePdfModule.AsposePdfExtractText(pdf_file);
console.log("AsposePdfExtractText => %O", json.errorCode == 0 ? json.extractText : json.errorText);
```

## Save PDF as Office Formats

One of the most popular features of Aspose.PDF for Node.js via C++ is to convert PDF documents to other formats without needing to understand the underlying structure of the resultant format.

Give the following snippet a try with your samples:

**CommonJS**:

```js
const AsposePdf = require('asposepdfnodejs');
const pdf_file = 'Aspose.pdf';
AsposePdf().then(AsposePdfModule => {
    /*Convert a PDF-file to DocX and save the "ResultPDFtoDocX.docx"*/
    const json = AsposePdfModule.AsposePdfToDocX(pdf_file, "ResultPDFtoDocX.docx");
    console.log("AsposePdfToDocX => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);
});
```

**ECMAScript/ES6**:

```js
import AsposePdf from 'asposepdfnodejs';
const AsposePdfModule = await AsposePdf();
const pdf_file = 'Aspose.pdf';
/*Convert a PDF-file to DocX and save the "ResultPDFtoDocX.docx"*/
const json = AsposePdfModule.AsposePdfToDocX(pdf_file, "ResultPDFtoDocX.docx");
console.log("AsposePdfToDocX => %O", json.errorCode == 0 ? json.fileNameResult : json.errorText);
```

[Home](https://www.aspose.com/) | [Product Page](https://products.aspose.com/pdf/nodejs-cpp/) | [Docs](https://docs.aspose.com/pdf/nodejs-cpp/) | [Demos](https://products.aspose.app/pdf/family) | [API Reference](https://reference.aspose.com/pdf/nodejs-cpp/) | [Examples](https://github.com/aspose-pdf/Aspose.PDF-for-Node.js-via-CPP/) | [Blog](https://blog.aspose.com/category/pdf/) | [Search](https://search.aspose.com/) | [Free Support](https://forum.aspose.com/c/pdf) |  [Temporary License](https://purchase.aspose.com/temporary-license)
