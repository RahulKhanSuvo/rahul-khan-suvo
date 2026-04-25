import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

async function testConnection() {
  const url = process.env.DATABASE_URL;
  if (!url) {
    console.error('DATABASE_URL not found in .env');
    return;
  }
  console.log('Connecting to:', url.replace(/:([^@]+)@/, ':****@'));
  const client = new MongoClient(url);
  try {
    await client.connect();
    console.log('Connected successfully to server');
    await client.db('admin').command({ ping: 1 });
    console.log('Ping successful');
  } catch (err) {
    console.error('Connection failed:', err);
  } finally {
    await client.close();
  }
}

testConnection();
