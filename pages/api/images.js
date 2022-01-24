// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {formidable} from "formidable";
import * as fs from 'fs';
import {imgRelDirPath} from "../../utils/constants";

export default function handler(req, res) {

  if (req.method === 'POST') {
    console.log(req.method);
    handlePostUpload(req, res);
  }

  else if (req.method === 'GET') {
    console.log(req.method);
    handleGetImages(req, res);
  }

  else {
    res.status(405).json({message: `Unsupported method: ${req.method}`});
  }
}

const writeFileToPublicImgDir = (file) => {
  fs.renameSync(file.filepath, imgRelDirPath() + file.originalFilename);
};

const getAllImageFilenames = () => {
  return fs.readdirSync(imgRelDirPath());
};

const searchFilesByString = (searchStr) => {
  const searchStrLowercase = searchStr.toLowerCase();
  const allFileNames = getAllImageFilenames();
  allFileNames.splice(allFileNames.indexOf('.gitignore'), 1);
  return allFileNames.filter(fileName => {
    if (fileName.toLowerCase().includes(searchStrLowercase)) {
      return fileName;
    }
  })
};

const handleGetImages = (req, res) => {
  // console.log(req);
  console.log('query params: ', req.query);
  const {search} = req.query; // Comes already decoded
  const matchedFileNames = searchFilesByString(search);
  // const imageFileNames = getAllImageFilenames();
  console.log('matchedFileNames: ', matchedFileNames);
  res.status(200).json({images: matchedFileNames});
};

const handlePostUpload = (req, res) => {
  console.log(req);
  const form = formidable({ multiples: true });

  form.parse(req, (err, fields, files) => {
    if (err) {
      res.status(500).json({message: 'Internal error with form parsing'});
    }
    const file = files.file[0];
    console.log(files.file[0]);
    console.log('filepath: ', files.file[0].filepath);
    console.log('originalFileName', files.file[0].originalFilename);
    try {
      if (fs.existsSync(imgRelDirPath() + file.originalFilename)) {
        res.status(400).json({message: 'File name already exists.'});
      }
    }
    catch (err) {
      res.status(500).json({message: 'Error with file exists function'});
    }
    writeFileToPublicImgDir(file);
    console.log('finished');
    res.status(201).end();
  });
};

export const config = {
  api: {
    bodyParser: false
  }
};
