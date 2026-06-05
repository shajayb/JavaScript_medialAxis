import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  server: {
    port: 3002,
    strictPort: true
  },
  plugins: [
    {
      name: 'api-key-provider',
      configureServer(server) {
        server.middlewares.use('/api/get-key', (req, res, next) => {
          try {
            const keyPath = path.resolve(process.cwd(), 'API_KEYS.txt');
            if (fs.existsSync(keyPath)) {
              const key = fs.readFileSync(keyPath, 'utf-8').trim();
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ key }));
            } else {
              res.statusCode = 404;
              res.end(JSON.stringify({ error: 'API_KEYS.txt not found' }));
            }
          } catch (err) {
            res.statusCode = 500;
            res.end(JSON.stringify({ error: err.message }));
          }
        });
      }
    }
  ]
});
