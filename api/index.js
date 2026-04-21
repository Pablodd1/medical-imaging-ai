const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Medical Imaging AI Platform',
    version: '2.0.0',
    features: ['DICOM Analysis', 'AI Radiology', 'Imaging RAG'],
    supabase: 'vodhhauwowkalvaxzqyv'
  });
});

app.get('/api/dicom/analyze', (req, res) => {
  res.json({
    status: 'ready',
    analysis_type: 'dicom',
    ai_model: 'imaging-v2.0'
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Medical Imaging AI running on port ${PORT}`);
});
