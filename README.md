# CollabWrite (Work in Progress 🛠️)

Welcome to the **CollabWrite**, a collaborative, real-time document editing web application inspired by Google Docs. This project leverages cutting-edge technologies to provide a seamless and efficient user experience for document creation and collaboration.

---

## Features

- **Real-Time Collaboration**: Work on documents with multiple users simultaneously.
- **Rich Text Editing**: Built with Tiptap editor for advanced formatting and styling options.
- **Responsive Design**: Fully optimized for desktop and mobile devices.
- **Fast and Scalable Backend**: Powered by Convex for real-time data synchronization.
- **Modern UI Components**: Designed using ShadCN and styled with Tailwind CSS.
- **Type Safety**: Ensured through TypeScript.

---

## Demo Video

Watch the project in action:

https://github.com/user-attachments/assets/f3ed998e-cead-4389-844b-8eff060262ba


  
---

## Tech Stack

### Frontend
- **[Next.js](https://nextjs.org/)**: React-based framework for server-rendered and statically generated web applications.
- **[React 19](https://react.dev/)**: Core library for building interactive UIs.
- **[TypeScript](https://www.typescriptlang.org/)**: Superset of JavaScript that adds static typing.
- **[ShadCN](https://shadcn.dev/)**: Collection of reusable and accessible UI components.
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework for styling.

### Backend
- **[Convex](https://convex.dev/)**: Backend-as-a-service for real-time data storage and synchronization.

### Rich Text Editor
- **[Tiptap](https://tiptap.dev/)**: Extensible and customizable rich text editor.

---

## Installation

### Prerequisites
Make sure you have the following installed on your system:
- **Node.js** (>= 18.x)
- **npm** or **yarn**
- **Git**

### Clone the Repository
```bash
git clone https://github.com/yourusername/docs-project.git
cd docs-project
```

### Install Dependencies
```bash
npm install
# or
yarn install
```

### Configure Environment Variables
Create a `.env.local` file in the root directory and add your environment variables:
```env
NEXT_PUBLIC_CONVEX_URL=<your-convex-url>
NEXT_PUBLIC_API_KEY=<your-api-key>
```

### Run the Development Server
```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

---

## Project Structure
```plaintext
/docs-project
├── components      # Reusable UI components
├── pages           # Next.js pages
├── styles          # Global and Tailwind CSS styles
├── lib             # Utility functions and helpers
├── convex          # Convex backend configuration
├── public          # Static assets
├── types           # TypeScript types
├── .env.local      # Environment variables
├── next.config.js  # Next.js configuration
└── tailwind.config.js # Tailwind CSS configuration
```

---

## Contributing

Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Submit a pull request.


---

## Acknowledgements

- [Next.js Documentation](https://nextjs.org/docs)
- [Convex Documentation](https://docs.convex.dev/)
- [Tiptap Documentation](https://tiptap.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [ShadCN Documentation](https://shadcn.dev/)

---

Happy coding! 🚀
