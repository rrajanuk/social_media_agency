import dotenv from 'dotenv';
import app from './app';
import migrate from './db/migrate';
import { IdempotencyModel } from './models/idempotency.model';

// Load environment variables
dotenv.config();

// Validate required environment variables
const requiredEnvVars = ['ADMIN_API_KEY'];
for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    console.error(`Error: ${envVar} environment variable is required`);
    process.exit(1);
  }
}

// Run database migrations
try {
  migrate();
} catch (error) {
  console.error('Migration failed:', error);
  process.exit(1);
}

// Cleanup old idempotency keys on startup (older than 7 days)
const SEVEN_DAYS = 7 * 24 * 60 * 60 * 1000;
const cleaned = IdempotencyModel.cleanup(SEVEN_DAYS);
console.log(`Cleaned up ${cleaned} old idempotency keys`);

// Schedule periodic cleanup (every 24 hours)
setInterval(() => {
  const cleaned = IdempotencyModel.cleanup(SEVEN_DAYS);
  if (cleaned > 0) {
    console.log(`Cleaned up ${cleaned} old idempotency keys`);
  }
}, 24 * 60 * 60 * 1000);

// Start server
const PORT = parseInt(process.env.PORT || '3001');
const server = app.listen(PORT, () => {
  console.log(`
🚀 Form Submission API Server Started
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Environment: ${process.env.NODE_ENV || 'development'}
Port: ${PORT}
Health Check: http://localhost:${PORT}/health
API Endpoint: http://localhost:${PORT}/api/submissions
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  `);
});

// Graceful shutdown
const shutdown = () => {
  console.log('\nShutting down gracefully...');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });

  // Force shutdown after 10 seconds
  setTimeout(() => {
    console.error('Forced shutdown');
    process.exit(1);
  }, 10000);
};

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);
