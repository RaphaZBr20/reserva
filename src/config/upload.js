import multer from 'multer'
import path from 'path'

export default {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: (req, res, cb) => {
             const ext = path.extname(fille.originalname);
             const name = path.basename(file.originalmente, ext);
             cb(null, `${name}-${Date.now()}${ext}`)
        },
    })
}