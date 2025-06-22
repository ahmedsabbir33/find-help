# Community Help Platform

A Next.js application for community help and event management.

## Getting Started

### Prerequisites

- Node.js 18+ 
- MongoDB Atlas account or local MongoDB instance
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory with the following variables:
   ```
   MONGODB_URI=your_mongodb_atlas_connection_string
   JWT_SECRET=your_jwt_secret_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

Make sure your `.env.local` file contains:

- `MONGODB_URI`: Your MongoDB Atlas connection string
- `JWT_SECRET`: A secure secret key for JWT token generation

### Features

- User authentication and registration
- Help request and offer system
- Community event management
- Real-time messaging
- Notifications system
- User profiles and activity tracking

### Database Setup

The application will automatically connect to your MongoDB database. Make sure your MongoDB Atlas cluster is running and accessible.

### Troubleshooting

If you encounter connection issues:

1. Verify your MongoDB connection string is correct
2. Ensure your IP address is whitelisted in MongoDB Atlas
3. Check that your database user has proper permissions
4. Verify the JWT_SECRET is set in your environment variables