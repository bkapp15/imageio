// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {formidable} from "formidable";
import * as fs from 'fs';

export default function handler(req, res) {
  const form = formidable({ multiples: true });
  //
  // let uploadFiles = [];
  form.parse(req, (err, fields, files) => {
    if (err) {
      // next(err);
      // return;
    }
    const file = files.file[0];
    console.log(files.file[0]);
    console.log('filepath: ', files.file[0].filepath);
    console.log('originalFileName', files.file[0].originalFilename);
    try {
      if (fs.existsSync(`${process.cwd()}/public/img/${file.originalFilename}`)) {
        res.status(400);
        res.end();
      }
    }
    catch (err) {
      res.status(500);
      res.end();
    }
    fs.renameSync(files.file[0].filepath, `${process.cwd()}/public/img/${files.file[0].originalFilename}`);
    res.status(201);
    res.end();
  });
}

// const writeFileToPublicImgDir = () => {
//
// };

const getAllImageFilenames = () => {
  return fs.readdirSync(`${process.cwd()}/public/`);
};

export const config = {
  api: {
    bodyParser: false
  }
};
