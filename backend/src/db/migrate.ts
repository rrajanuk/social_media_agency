import fs from 'fs';
import path from 'path';
import db from './database';

const migrate = () => {
  console.log('Running database migrations...');
  
  const schemaPath = path.join(__dirname, 'schema.sql');
  const schema = fs.readFileSync(schemaPath, 'utf-8');
  
  // Execute schema
  db.exec(schema);
  
  console.log('Migrations completed successfully!');
};

// Run migrations if called directly
if (require.main === module) {
  migrate();
  process.exit(0);
}

export default migrate;
