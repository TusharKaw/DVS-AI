# Delhi Legislative Assembly AI Platform

A ChatGPT-style AI platform for the Delhi Legislative Assembly that helps users learn about MLAs, their work, achievements, and assembly speeches.

## Features

- 🤖 ChatGPT-style conversational interface
- 👥 Information about MLAs (Members of Legislative Assembly)
- 📝 Access to assembly speeches and sessions
- 🎯 Search and query capabilities
- 📱 Responsive design for mobile and desktop

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env.local` file in the root directory:
```env
DEEPSEEK_API_KEY=your_deepseek_api_key_here
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deepseek API Integration

The platform is designed to integrate with the Deepseek API. To enable full functionality:

1. Get your API key from [Deepseek](https://www.deepseek.com/)
2. Add it to your `.env.local` file as `DEEPSEEK_API_KEY`
3. Update the `callDeepseekAPI` function in `app/api/chat/route.ts` with the actual API endpoint and implementation

Currently, the platform uses mock data and a placeholder API response. Once you integrate the Deepseek API, the system will use real AI responses while maintaining access to the MLA and speech database.

## Project Structure

```
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts      # Chat API endpoint
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Main chat page
├── components/
│   ├── ChatInput.tsx         # Chat input component
│   ├── ChatMessage.tsx       # Message display component
│   └── Sidebar.tsx           # Sidebar navigation
├── data/
│   └── mockData.ts           # Sample MLA and speech data
├── types/
│   └── index.ts              # TypeScript type definitions
└── package.json
```

## Data Structure

The platform uses the following data structures:

- **MLA**: Contains information about Members of Legislative Assembly
- **Speech**: Contains assembly speeches with metadata
- **AssemblySession**: Contains session information and agendas

You can extend the mock data in `data/mockData.ts` or connect to a database to store real MLA and speech data.

## Customization

### Adding More MLAs

Edit `data/mockData.ts` and add more entries to the `mockMLAs` array.

### Adding Speeches

Add speech entries to the `mockSpeeches` array in `data/mockData.ts`.

### Styling

The platform uses Tailwind CSS. Modify `tailwind.config.js` to customize colors and styles.

## Build for Production

```bash
npm run build
npm start
```

## License

This project is created for the Delhi Legislative Assembly.

