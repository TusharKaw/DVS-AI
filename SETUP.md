# Setup Instructions

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Set Up Environment Variables**
   Create a `.env.local` file in the root directory:
   ```env
   DEEPSEEK_API_KEY=your_deepseek_api_key_here
   ```
   
   Note: The platform will work with mock responses even without the API key. You can add the Deepseek API key later when you're ready to integrate it.

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Deepseek API Integration

When you're ready to integrate the Deepseek API:

1. Get your API key from [Deepseek](https://www.deepseek.com/)
2. Add it to `.env.local` as shown above
3. Update the `callDeepseekAPI` function in `app/api/chat/route.ts`:
   - Uncomment the fetch code
   - Replace the mock response with the actual API call
   - Ensure the API endpoint and request format match Deepseek's documentation

## Adding Real Data

To replace mock data with real MLA and speech data:

1. **Option 1: Update Mock Data**
   - Edit `data/mockData.ts` to add more MLAs and speeches

2. **Option 2: Connect to Database**
   - Set up a database (PostgreSQL, MongoDB, etc.)
   - Create database models matching the types in `types/index.ts`
   - Replace the mock data imports in `app/api/chat/route.ts` with database queries

## Customization

- **Styling**: Modify `tailwind.config.js` and `app/globals.css`
- **Components**: Edit files in the `components/` directory
- **API Logic**: Modify `app/api/chat/route.ts` for custom response handling

