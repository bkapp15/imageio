// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {formidable} from "formidable";

export default function handler(req, res) {
  console.log(req);
  // res.status(200).json({ name: 'John Doe' })

  const form = formidable({ multiples: true });

  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    res.json({ fields, files });
  });

}

export const config = {
  api: {
    bodyParser: false
  }
};
