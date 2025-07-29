import fs from 'fs';
import path from 'path';

const uploadsDir = path.join(process.cwd(), 'uploads');

fs.readdir(uploadsDir, (err, files) => {
  if (err) {
    console.error('Error reading uploads directory:', err);
    return;
  }

  files.forEach(file => {
    const filePath = path.join(uploadsDir, file);
    fs.unlink(filePath, err => {
      if (err) {
        console.error(`Failed to delete: ${filePath}`, err);
      } else {
        console.log(`Deleted: ${file}`);
      }
    });
  });
});
