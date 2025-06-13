

import express, { Request, Response } from 'express';
import multer from 'multer';
import pdf from 'pdf-parse';
import fs from 'fs';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/extractPDFText', upload.single('pdf'), async (req: Request, res: Response): Promise<void> => {
  if (!req.file) {
    res.status(400).json({ error: 'No file uploaded' });
    return;
  }

  try {
    const dataBuffer = fs.readFileSync(req.file.path);
    const data = await pdf(dataBuffer);
    res.json({ text: data.text });
  } catch (err) {
    res.status(500).json({ error: 'Failed to extract text', details: err });
  }
});

export default router;
